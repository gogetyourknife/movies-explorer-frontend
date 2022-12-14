import { Link, NavLink } from 'react-router-dom';
import Hamburger from '../Hamburger/Hamburger';
import { useMediaQuery } from 'react-responsive';
import './Navigation.css'

function Navigation({ loggedIn, isNavigationOpened, onClickHamburger }) {

    const isMobile = useMediaQuery({ query: `(max-width: 769px)` });

    return (
        <>
            {!loggedIn ? (
                <nav className='navigation'>
                    <ul className='navigation__list'>
                        <li className='navigation__item'>
                            <Link to='/signup' className='navigation__link_main navigation__link_signup'>Регистрация</Link>
                        </li>
                        <li className='navigation__item navigation__item_signin'>
                            <Link to='/signin' className='navigation__link_main navigation__link_signin'>Войти</Link>
                        </li>
                    </ul>
                </nav>
            ) : !isMobile ? (
                <ul className='navigation__list navigation__list-films'>
                    <div className='navigation__wrapper-films'>
                        <li className='navigation__item'>
                            <NavLink exact to='/movies' className='navigation__link' activeClassName={'navigation__link_active'}>Фильмы</NavLink>
                        </li>
                        <li className='navigation__item'>
                            <NavLink exact to='/saved-movies' className='navigation__link' activeClassName={'navigation__link_active'}>Сохранённые фильмы</NavLink>
                        </li>
                    </div>
                    <li className='navigation__item navigation__item_account'>
                        <NavLink exact to='/profile' className='navigation__link navigation__link_account' activeClassName={'navigation__link_active'}>Аккаунт</NavLink>
                    </li>
                </ul>
            ) : (
                <div className='navigation'>
                    <Hamburger isNavigationOpened={isNavigationOpened} onClickHamburger={onClickHamburger} />
                    <nav className={`navigation_${isNavigationOpened ? 'opened' : 'closed'}`}>
                        <ul className={`navigation__list navigation__list_logged-in navigaion__list_${isNavigationOpened ? 'opened' : 'closed'}`}>
                            {isNavigationOpened && (
                                <li className='navigation__item'>
                                    <NavLink exact to='/' className='navigation__link' activeClassName={'navigation__link_active'}>Главная</NavLink>
                                </li>
                            )}
                            <li className='navigation__item'>
                                <NavLink exact to='/movies' className='navigation__link' activeClassName={'navigation__link_active'}>Фильмы</NavLink>
                            </li>
                            <li className='navigation__item'>
                                <NavLink exact to='/saved-movies' className='navigation__link' activeClassName={'navigation__link_active'}>Сохранённые фильмы</NavLink>
                            </li>
                            <li className='navigation__item navigation__item_account'>
                                <NavLink exact to='/profile' className='navigation__link' activeClassName={'navigation__link_active'}>Аккаунт</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </>
    );
}

export default Navigation;

