import './App.css';

import Header from '../Header/Header';
// import Navigation from '../Navigation/Navigation';
import Main from '../Main/Main';

function App() {

  // const [isNavOpened, setIsNavOpened] = React.useState(false);
  // const [loggedIn, setLoggedIn] = React.useState(false);


  /*   function onClickHamburger() {
      setIsNavOpened(!isNavOpened);
    }
   */
  /*   function handleCloseOnOverlay(e) {
      e.stopPropagation();
    } */

  return (
    <div className="app">
      <Header
      /*         loggedIn={loggedIn}
              onClickHamburger={onClickHamburger}
              isNavOpened={isNavOpened} */
      />
      {/*       <Navigation
      /> */}
      <Main
      />
    </div>
  );
}

export default App;
