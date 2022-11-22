import './App.css';
import CurrentUserContext from '../../context/CurrentUserContext.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useHistory, useLocation } from 'react-router-dom';

import { ERROR_401, ERROR_409, ERROR_500, ERROR_EMAIL_EXISTS, ERROR_SERVER_FAILED, ERROR_REG, ERROR_LOGIN, ERROR_WRONG_EMAIL_OR_PASSWORD, PROFILE_UPDATE_INFO, ERROR_PROFILE_UPDATE_FAILED } from '../../utils/errors';
import { SHORTMOVIE_DURATION } from '../../utils/constants';

import { mainApi } from '../../api/MainApi';
import moviesApi from '../../api/MoviesApi';

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

  const [isNavigationOpened, setIsNavigationOpened] = useState(false); // навигационное меню

  const history = useHistory();
  const location = useLocation();

  /* ТЕХНИЧЕСКИЙ БЛОК */

  // работа гамбургера

  function onClickHamburger() {
    setIsNavigationOpened(!isNavigationOpened);
  };

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
  };

  useClickEscape(onClickHamburger, isNavigationOpened);

  /* БЛОК АВТОРИЗАЦИИ */

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
            history.push(location)
          }
        })
        .catch((err) => {
          console.log(err);
          localStorage.clear();
          localStorage.removeItem('initialMovies');
          localStorage.removeItem('searchQuery');
          localStorage.removeItem('searchResults');
          localStorage.removeItem('checked');
          localStorage.removeItem('isSearchResults');
          history.push('/');
          setLoggedIn(false);
        })
    }
  }

  useEffect(() => {
    handleCheckToken();
  }, [loggedIn]);

  // регистрация

  function handleRegistration({ name, email, password }) {
    return mainApi
      .registration({ name, email, password })
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
  };

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
  };

  //  редактировать данные профияля

  function handleUpdateUser(user) {
    const token = localStorage.getItem('jwt');
    return mainApi
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
  };

  // логаут
  const handleLogout = () => {
    localStorage.clear();
    localStorage.removeItem('initialMovies');
    localStorage.removeItem('searchQuery');
    localStorage.removeItem('searchResults');
    localStorage.removeItem('checked');
    localStorage.removeItem('isSearchResults');
    history.push('/');
    setLoggedIn(false);
  };

  /* БЛОК ФИЛЬМОВ */

  const [initialCards, setInitialCards] = useState([]);
  const [savedCards, setSavedCards] = useState([]);

  // создаем карточки нужного формата 

  function createMovieCards(initialMovies) {
    const cards = initialMovies.map((movie) => ({
      movieId: movie.id,
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      trailerLink: movie.trailerLink,
      image: `https://api.nomoreparties.co/${movie.image.url}`,
      thumbnail: `https://api.nomoreparties.co/${movie.image.url}`,
      nameEN: movie.nameEN,
      nameRU: movie.nameRU,
    }));
    setInitialCards(cards);
  };

  // загрузка сохраненных карточек

  function getSavedCards() {
    mainApi.getSavedMovies()
      .then((data) => {
        setSavedCards(data.reverse());
      })
      .catch(err => console.log(err));
  };

  // выгружаем карточки из апи

  useEffect(() => {
    if (loggedIn) {
      moviesApi.getMovies()
        .then((data) => {
          localStorage.setItem('initialMovies', JSON.stringify(data));
          if (!JSON.parse(localStorage.getItem('searchResults'))) {
            createMovieCards(JSON.parse(localStorage.getItem('initialMovies')));
          }
        })
        .catch(err => console.log(err));
      getSavedCards();
    }
  }, [loggedIn]);

  // сохранение фильма

  function isSaved(card) {
    const result = savedCards.some((savedCard) => savedCard.movieId === card.movieId);
    return result;
  };

  function handleMovieSave(card) {
    const isCardSaved = isSaved(card);
    if (!isCardSaved) {
      mainApi.saveMovie(card)
        .then((data) => {
          setSavedCards([data, ...savedCards]);
        })
        .catch(err => console.log(err));
    } else {
      const savedCard = savedCards.filter(savedCard => savedCard.movieId === card.movieId);
      handleMovieDelete(savedCard[0]._id);
    }
  };

  // удаление фильма

  function handleMovieDelete(id) {
    mainApi.deleteMovie(id)
      .then((data) => {
        const result = savedCards.filter(savedCard => savedCard._id !== id);
        setSavedCards(result);
      })
      .catch(err => console.log(err));
  };

  /*   БЛОК ПОИСКА */

  const [filteredInitialCards, setFilteredInitialCards] = React.useState([]);
  const [filteredSavedCards, setFilteredSavedCards] = React.useState([]);
  const [shortsOnly, setShortsOnly] = React.useState(false);
  const [searchResults, setSearchResults] = React.useState(false);
  const [savedCardsSearchResults, setSavedCardsSearchResults] = React.useState(false);

  // поиск фильма 

  function handleSearch(query) {
    let result = [];

    if (location.pathname === '/movies') {
      localStorage.setItem('searchQuery', query);
      localStorage.setItem('checked', shortsOnly);

      if ((query === '' || !query) && !shortsOnly) {
        setSearchResults(false);
        setFilteredInitialCards([]);
        localStorage.removeItem('searchResults');
        createMovieCards(JSON.parse(localStorage.getItem('initialMovies')));
      }

      else if (query && !shortsOnly) {
        result = initialCards.filter(card => card.nameRU.toLowerCase().trim().includes(query.toLowerCase().trim()));

        if (result.length === 0) {
          setSearchResults(true);
          setFilteredInitialCards([]);
          localStorage.setItem('searchResults', JSON.stringify(result));
          localStorage.setItem('isSearchResults', true);
        } else {
          setSearchResults(true);
          localStorage.setItem('searchResults', JSON.stringify(result));
          localStorage.setItem('isSearchResults', true);
          setFilteredInitialCards(result);
        }
      }

      else if (shortsOnly && (query === '' || !query)) {
        result = initialCards.filter(card => card.duration <= SHORTMOVIE_DURATION);

        if (result.length === 0) {
          setSearchResults(true);
          setFilteredInitialCards([]);
          localStorage.setItem('searchResults', JSON.stringify(result));
          localStorage.setItem('isSearchResults', true);
        } else {
          setSearchResults(true);
          localStorage.setItem('searchResults', JSON.stringify(result));
          localStorage.setItem('isSearchResults', true);
          setFilteredInitialCards(result);
        }
      }

      else if (shortsOnly && query) {
        result = initialCards.filter(card => (card.duration <= SHORTMOVIE_DURATION) && (card.nameRU.toLowerCase().trim().includes(query.toLowerCase().trim())));

        if (result.length === 0) {
          setSearchResults(true);
          setFilteredInitialCards([]);
          localStorage.setItem('searchResults', JSON.stringify(result));
          localStorage.setItem('isSearchResults', true);
        } else {
          setSearchResults(true);
          localStorage.setItem('searchResults', JSON.stringify(result));
          localStorage.setItem('isSearchResults', true);
          setFilteredInitialCards(result);
        }
      }
    };
  };

  // поиск среди сохраненных фильмов

  function handleSavedFilmsSearch(query) {
    let result = [];

    if (location.pathname === '/saved-movies') {

      if ((query === '' || !query) && !shortsOnly) {
        setSavedCardsSearchResults(false);
        setFilteredSavedCards([]);
        getSavedCards();
      }

      else if (query && !shortsOnly) {
        result = savedCards.filter(card => card.nameRU.toLowerCase().trim().includes(query.toLowerCase().trim()));
        if (result.length === 0) {
          setSavedCardsSearchResults(true);
          setFilteredSavedCards([]);
        } else {
          setSavedCardsSearchResults(true);
          setFilteredSavedCards(result);
        }
      }

      else if (shortsOnly && (query === '' || !query)) {
        result = savedCards.filter(card => card.duration <= SHORTMOVIE_DURATION);
        if (result.length === 0) {
          setSavedCardsSearchResults(true);
          setFilteredSavedCards([]);
        } else {
          setSavedCardsSearchResults(true);
          setFilteredSavedCards(result);
        }
      }

      else if (shortsOnly && query) {
        result = savedCards.filter(card => (card.duration <= SHORTMOVIE_DURATION) && (card.nameRU.toLowerCase().trim().includes(query.toLowerCase().trim())));
        if (result.length === 0) {
          setSavedCardsSearchResults(true);
          setFilteredSavedCards([]);
        } else {
          setSavedCardsSearchResults(true);
          setFilteredSavedCards(result);
        }
      }
    }
  };

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
              onCardSave={handleMovieSave}
              isSaved={isSaved}
              initialCards={initialCards}
              onSearch={handleSearch}
              onShorts={setShortsOnly}
              filteredInitialCards={filteredInitialCards}
              isSearchResults={searchResults}
            />}
            <Footer />
          </ProtectedRoute>

          <ProtectedRoute exact path='/saved-movies' loggedIn={loggedIn}>
            <Header
              loggedIn={loggedIn}
              onClickHamburger={onClickHamburger}
              isNavigationOpened={isNavigationOpened} />
            {<SavedMovies
              loggedIn={loggedIn}
              savedCards={savedCards}
              onCardDelete={handleMovieDelete}
              onSearch={handleSavedFilmsSearch}
              onShorts={setShortsOnly}
              filteredInitialCards={filteredInitialCards}
              isSavedCardsSearchResults={savedCardsSearchResults}
              filteredSavedCards={filteredSavedCards}
            />}
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
