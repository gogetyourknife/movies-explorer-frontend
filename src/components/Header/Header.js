import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../images/header/logo.svg';
import Navigation from '../Navigation/Navigation';

function Header({ loggedIn, onClickHamburger, isNavigationOpened }) {

    return (
        <header className='header'>
            <div className='header__wrapper'>
                <Link to='/' className='header__link'>
                    <img className='header__logo' src={logo} alt='Логотип' />
                </Link>
                <Navigation
                    loggedIn={loggedIn}
                    onClickHamburger={onClickHamburger}
                    isNavigationOpened={isNavigationOpened}
                />
            </div>
        </header>
    )
}

export default Header;