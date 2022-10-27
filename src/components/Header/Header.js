import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/header/logo.svg';
import Navigation from '../Navigation/Navigation';

function Header({ loggedIn, onClickHamburger, isNavOpened }) {

    return (
        <header className='header'>
            <div className='header__wrapper'>
                <Link to='/'>
                    <img className='header__logo' src={logo} alt='Логотип' />
                </Link>
                <Navigation
                    loggedIn={loggedIn}
                    onClickHamburger={onClickHamburger}
                    isNavOpened={isNavOpened}
                />
            </div>
        </header>
    )
}

export default Header;