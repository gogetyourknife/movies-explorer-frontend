import './App.css';
import CurrentUserContext from '../../context/CurrentUserContext.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';

// import { SCREEN_DESTOP, MOVIES_DESTOP, LOAD_DESKTOP, SCREEN_TABLET, MOVIES_TABLET, SCREEN_MOBILE, MOVIES_MOBILE, LOAD_TABLET_AND_MOBILE } from '../../utils/constants'; // для загрузки карточек

import { ERROR_401, ERROR_409, ERROR_500, ERROR_EMAIL_EXISTS, ERROR_SERVER_FAILED, ERROR_REG, ERROR_LOGIN, ERROR_WRONG_EMAIL_OR_PASSWORD, PROFILE_UPDATE_INFO, ERROR_PROFILE_UPDATE_FAILED } from '../../utils/errors';

import { mainApi } from '../../api/MainApi';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import Login from '../Login/Login'
import Register from '../Register/Register'

function App() {

  const [loggedIn, setLoggedIn] = useState(false); // логин
  const [currentUser, setCurrentUser] = useState({});

  // для описания ошибок для пользователя
  const [loginError, setLoginError] = useState('');
  const [registrationError, setRegistrationError] = useState('');
  const [profileError, setProfileError] = useState('');

  // const [loading, setLoading] = useState(false); // загрузка

  const [isNavigationOpened, setIsNavigationOpened] = useState(false); // навигационное меню

  const history = useHistory();

  // работа гамбургера

  function onClickHamburger() {
    setIsNavigationOpened(!isNavigationOpened);
  }

  // работа нажатия escape

  function useClickEscape(callback, dependency) {
    useEffect(() => {
      if (dependency) {
        const handleEsc = (event) => {
          if (event.keyCode === 27) {
            callback()
          }
        };
        document.addEventListener('keydown', handleEsc);
        return () => {
          document.removeEventListener('keydown', handleEsc);
        };
      }
    }, [dependency, callback]);
  }

  useClickEscape(onClickHamburger, isNavigationOpened)

  // проверка токена

  const handleCheckToken = () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      mainApi
        .getUserInfo(jwt)
        .then((res) => {
          if (res) {
            setLoggedIn(true)
            setCurrentUser(res)
            history.push('/');
          }
        })
        .catch((err) => console.log(err))
    }
  }

  useEffect(() => {
    handleCheckToken();
  }, [loggedIn])


  // регистрация

  function handleRegistration({ name, email, password }) {
    mainApi.registration({ name, email, password })
      .then(() => {
        handleLogin({ email, password });
      })
      .catch((err) => {
        if (err === ERROR_409) {
          setRegistrationError(ERROR_EMAIL_EXISTS);
        } else
          if (err === ERROR_500) {
            setRegistrationError(ERROR_SERVER_FAILED);
          }
          else {
            setRegistrationError(ERROR_REG);
          }
      });
  }

  // логин
  function handleLogin({ email, password }) {
    return mainApi
      .authorization({ email, password })
      .then((res) => {
        if (res) {
          localStorage.setItem('jwt', res.token);
          setLoggedIn(true);
          history.push('/movies');
        }
      })
      .catch((err) => {
        if (err === ERROR_401) {
          setLoginError(ERROR_WRONG_EMAIL_OR_PASSWORD);
        } else
          if (err === ERROR_500) {
            setLoginError(ERROR_SERVER_FAILED);
          }
          else {
            setLoginError(ERROR_LOGIN);
          }
      })
  }

  //  редактировать данные профияля
  function handleUpdateUser(user) {
    const token = localStorage.getItem('jwt');
    mainApi
      .editProfile(user, token)
      .then((updateUser) => {
        setLoggedIn(true);
        setCurrentUser(updateUser);
        localStorage.setItem('name', updateUser.name);
        localStorage.setItem('email', updateUser.email);
        setProfileError(PROFILE_UPDATE_INFO);
      })
      .catch((err) => {
        if (err === ERROR_409) {
          setProfileError(ERROR_EMAIL_EXISTS);
        } else {
          setProfileError(ERROR_PROFILE_UPDATE_FAILED);
        }
      })
  }

  // логаут

  const handleLogout = () => {
    localStorage.clear();
    history.push('/');
    setLoggedIn(false);
  };

  // прелоадер
  /*   function startLoading() {
      setLoading(true);
      setTimeout(() => setLoading(false), 500);
    } */

  return (
    <div className='app'>
      <CurrentUserContext.Provider value={currentUser}>

        <Switch>
          <Route exact path='/'>
            <Header
              loggedIn={loggedIn}
              onClickHamburger={onClickHamburger}
              isNavigationOpened={isNavigationOpened} />
            <Main />
            <Footer />
          </Route>

          <Route exact path='/signin'>
            {!loggedIn ? (
              <Login onLogin={handleLogin}
                loginError={loginError} />
            ) : (
              <Redirect to='/' />
            )}
          </Route>

          <Route exact path='/signup'>
            {!loggedIn ? (
              <Register onRegister={handleRegistration}
                registrationError={registrationError} />
            ) : (
              <Redirect to='/' />
            )}
          </Route>

          <ProtectedRoute exact path='/movies' loggedIn={loggedIn}>
            <Header
              loggedIn={loggedIn}
              onClickHamburger={onClickHamburger}
              isNavigationOpened={isNavigationOpened} />
            {<Movies
              loggedIn={loggedIn}
            />}
            <Footer />
          </ProtectedRoute>

          <ProtectedRoute exact path='/saved-movies' loggedIn={loggedIn}>
            <Header
              loggedIn={loggedIn}
              onClickHamburger={onClickHamburger}
              isNavigationOpened={isNavigationOpened} />
            {<SavedMovies
              loggedIn={loggedIn} />}
            <Footer />
          </ProtectedRoute>

          <ProtectedRoute exact path='/profile' loggedIn={loggedIn}>
            <Header
              loggedIn={loggedIn}
              onClickHamburger={onClickHamburger}
              isNavigationOpened={isNavigationOpened} />
            <Profile
              loggedIn={loggedIn}
              onUpdateUser={handleUpdateUser}
              profileError={profileError}
              onSignOut={handleLogout}
            />
          </ProtectedRoute>

          <Route path='*'>
            <NotFound />
          </Route>

        </Switch>
      </CurrentUserContext.Provider>

    </div>
  );

}

export default App;
