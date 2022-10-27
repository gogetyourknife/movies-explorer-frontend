import './App.css';

import { useState } from 'react';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {

  const loggedIn = true;
  const [isHamburgerOpened, setIsHamburgerOpened] = useState(false);

  function onClickHamBurger() {
    setIsHamburgerOpened(!isHamburgerOpened);
  }
  return (
    <div className="app">
      <Header
        loggedIn={loggedIn}
        onClickHamBurger={onClickHamBurger}
        isHamburgerOpened={isHamburgerOpened}
      />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
