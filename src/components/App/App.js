import './App.css';

import { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

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
  const history = useHistory();

  const loggedIn = true;
  const [isNavigationOpened, setIsNavigationOpened] = useState(false);
  const [movies] = useState([]);
  // const [savedMovies, setSavedMovies] = useState([]);

  function handleGoBack() {
    history.goBack();
  };

  function onClickHamburger() {
    setIsNavigationOpened(!isNavigationOpened);
  }

  return (
    <div className='app'>
      <Switch>

        <Route exact path='/'>
          <Header
            loggedIn={loggedIn}
            onClickHamburger={onClickHamburger}
            isNavigationOpened={isNavigationOpened}
          />
          <Main />
          <Footer />
        </Route>

        <Route exact path='/movies'>
          <Header
            loggedIn={loggedIn}
            onClickHamburger={onClickHamburger}
            isNavigationOpened={isNavigationOpened} />
          <Movies
            movies={movies} />
          <Footer />
        </Route>

        <Route exact path='/saved-movies'>
          <Header
            loggedIn={loggedIn}
            onClickHamburger={onClickHamburger}
            isNavigationOpened={isNavigationOpened} />
          <SavedMovies
            movies={movies} />
          <Footer />
        </Route>

        <Route exact path='/profile'>
          <Header
            loggedIn={loggedIn}
            onClickHamburger={onClickHamburger}
            isNavigationOpened={isNavigationOpened} />
          <Profile />
        </Route>

        <Route exact path='/signin'>
          <Login />
        </Route>

        <Route exact path='/signup'>
          <Register />
        </Route>

        <Route path='*'>
          <NotFound handleGoBack={handleGoBack} />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
