import './App.css';
import CurrentUserContext from '../../context/CurrentUserContext.js';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';

import { mainApi } from '../../utils/MainApi'

import Preloader from '../Preloader/Preloader';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import Login from '../Login/Login'
import Register from '../Register/Register'

import InfoTooltip from '../InfoTooltip/InfoTooltip'

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});
  const [isNavigationOpened, setIsNavigationOpened] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);

  const [loader, setLoader] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [isRespondMessagePopupOpen, setIsRespondMessagePopupOpen] = useState({
    isOpen: false,
    isRespond: false,
    isRespondMessage: '',
  })

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
    }, [dependency]);
  }

  useClickEscape(onClickHamburger, isNavigationOpened)

  // закрытие попапа с ошибкой

  function onClosePopup() {
    setIsRespondMessagePopupOpen({
      isOpen: false,
      isRespond: false,
      isRespondMessage: ' '
    })
  };

  // проверка токена

  function checkToken() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      setIsLoading(true);
      mainApi
        .getProfileInfo()
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            setUserData(res);
            history.push('/');
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
          setLoader(true);
        })
    } else {
      setLoader(true);
    }
  };

  useEffect(() => {
    checkToken();
  },
    []);

  useEffect(() => {
    if (!loggedIn) {
      history.push('/');
    }
  },
    [loggedIn, history]);

  // получение данных профиля

  useEffect(() => {
    if (loggedIn) {
      setIsLoading(true);
      mainApi.getProfileInfo()
        .then((res) => {
          setUserData(res);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => setIsLoading(false));
    }
  },
    [loggedIn]);

  // получение фильмов

  useEffect(() => {
    if (loggedIn && userData) {
      mainApi.getMovies()
        .then(data => {
          const userMovieList = data.filter(i => i.owner === userData._id);
          setSavedMovies(userMovieList);
        })
        .catch((err) => {
          console.log(err);
          setIsRespondMessagePopupOpen({
            isOpen: true,
            isRespond: false,
            isRespondMessage: 'Что-то пошло не так! Попробуйте ещё раз.',
          });
        })
    }
  }, [userData, loggedIn]);


  // регистрация

  const handleRegistration = ({ name, email, password }) => {
    setIsLoading(true);
    return mainApi.registration(name, email, password)
      .then((data) => {
        if (data._id) {
          handleAuthorization({ email, password })
        }
        history.push('/sign-in');
      })
      .catch((err) => {
        console.log(err);
        setIsRespondMessagePopupOpen({
          isOpen: true,
          isRespond: false,
          isRespondMessage: 'Что-то пошло не так! Попробуйте ещё раз.',
        });
      })
      .finally(() => setIsLoading(false));
  };

  // логин

  const handleAuthorization = ({ email, password }) => {
    setIsLoading(true);
    return mainApi.authorization(email, password)
      .then((data) => {
        if (data.jwt) {
          localStorage.setItem('jwt', data.jwt);
          setLoggedIn(true);
          checkToken();
          history.push('/movies');
        }
      })
      .catch((err) => {
        console.log(err);
        setIsRespondMessagePopupOpen({
          isOpen: true,
          isRespond: false,
          isRespondMessage: 'Что-то пошло не так! Попробуйте ещё раз.',
        });
      })
      .finally(() => setIsLoading(false));
  };

  // редактирование профиля

  const handleProfileUpdate = ({ name, email }) => {
    setIsLoading(true);
    return mainApi.editProfile(name, email)
      .then((data) => {
        setUserData(data);
        setIsRespondMessagePopupOpen({
          isOpen: true,
          isRespond: false,
          isRespondMessage: 'Данные обновлены!',
        });
      })
      .catch((err) => {
        console.log(err);
        setIsRespondMessagePopupOpen({
          isOpen: true,
          isRespond: false,
          isRespondMessage: 'Что-то пошло не так! Попробуйте ещё раз.',
        });
      })
      .finally(() => setIsLoading(false));
  };

  // логаут

  function handleLogout() {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    setUserData(null);
    history.push('/');
  };

  // отрисовка фильмов

  const handleSaveMovie = (movie) => {
    setIsLoading(true);
    return mainApi.saveMovie(movie)
      .then(movieItem => setSavedMovies([movieItem, ...savedMovies]))
      .catch((err) => {
        console.log(err);
        setIsRespondMessagePopupOpen({
          isOpen: true,
          isRespond: false,
          isRespondMessage: 'Что-то пошло не так! Попробуйте ещё раз.',
        });
      })
      .finally(() => setIsLoading(false));
  }

  // удаление фильма

  const handleDeleteMovie = (movie) => {
    setIsLoading(true);
    const savedMovie = savedMovies.find(
      (i) => i.movieId === movie.id || i.movieId === movie.movieId
    );
    mainApi.deleteMovie(savedMovie._id)
      .then(() => {
        const updatedMoviesList = savedMovies.filter(i => {
          if (movie.id === i.movieId || movie.movieId === i.movieId) {
            return false
          } else {
            return true
          }
        });
        setSavedMovies(updatedMoviesList);
      })
      .catch((err) => {
        console.log(err);
        setIsRespondMessagePopupOpen({
          isOpen: true,
          isRespond: false,
          isRespondMessage: 'Что-то пошло не так! Попробуйте ещё раз.',
        });
      })
      .finally(() => setIsLoading(false));
  }

  return (
    <div className='app'>
      {!loader ? (
        <Preloader isOpen={isLoading} />
      ) : (
        <CurrentUserContext.Provider value={userData}>

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
                <Login handleAuthorization={handleAuthorization} />
              ) : (
                <Redirect to='/' />
              )}
            </Route>

            <Route exact path='/signup'>
              {!loggedIn ? (
                <Register handleRegistration={handleRegistration} />
              ) : (
                <Redirect to='/' />
              )}
            </Route>


            <ProtectedRoute exact path='/movies'>
              <Header
                loggedIn={loggedIn}
                onClickHamburger={onClickHamburger}
                isNavigationOpened={isNavigationOpened} />
              <Movies
                savedMovies={savedMovies}
                setIsLoading={setIsLoading}
                onSaveClick={handleSaveMovie}
                onDeleteClick={handleDeleteMovie}
              />
              <Footer />
            </ProtectedRoute>

            <ProtectedRoute exact path='/saved-movies'>
              <Header
                loggedIn={loggedIn}
                onClickHamburger={onClickHamburger}
                isNavigationOpened={isNavigationOpened} />
              <SavedMovies
                savedMovies={savedMovies}
                setIsLoading={setIsLoading}
                onDeleteClick={handleDeleteMovie} />
              <Footer />
            </ProtectedRoute>

            <ProtectedRoute exact path='/profile'>
              <Header
                loggedIn={loggedIn}
                onClickHamburger={onClickHamburger}
                isNavigationOpened={isNavigationOpened} />
              <Profile
                handleProfileUpdate={handleProfileUpdate}
                handleLogout={handleLogout}
              />
            </ProtectedRoute>

            <Route path='*'>
              <NotFound />
            </Route>

            <InfoTooltip
              onClosePopup={onClosePopup}
              isOpen={isRespondMessagePopupOpen.isOpen}
              isRespond={isRespondMessagePopupOpen.isRespond}
              isRespondMessage={isRespondMessagePopupOpen.isRespondMessage}
            />
          </Switch>
        </CurrentUserContext.Provider>
      )}
    </div>
  );

}

export default App;
