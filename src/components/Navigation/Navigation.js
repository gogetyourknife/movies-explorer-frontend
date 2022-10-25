import { Link, NavLink } from 'react-router-dom';
import Hamburger from '../Hamburger/Hamburger';

function Navigation({ loggedIn, isNavOpened, onClickHamburger }) {

    const activeLinkStyle = `navigation__link_active-${isNavOpened ? 'mobile' : 'desktop'}`;
    function handleCloseOnOverlay(e) {
        e.stopPropagation();
    }

    return (
        <>
            {!loggedIn ? (
                <nav className='navigation'>
                    <ul>
                        <li className='navigation__item'>
                            <Link to='/signup' className='navigation__link navigation__link_signup'>Регистрация</Link>
                        </li>
                        <li className='navigation__item'>
                            <Link to='/signin' className='navigation__link navigation__link_signin'>Войти</Link>
                        </li>
                    </ul>
                </nav>
            ) : (
                <nav className={`navigation navigation__${isNavOpened ? 'opened' : 'closed'}`} onClick={isNavOpened ? onClickHamburger : null}>
                    <Hamburger isNavOpened={isNavOpened} onClickHamburger={onClickHamburger} />
                    <ul className={`navigation__list navigation__list_logged-in navigaion__list_${isNavOpened ? 'opened' : 'closed'}`} onClick={handleCloseOnOverlay}>
                        {isNavOpened && (
                            <li className='navigation__item'>
                                <NavLink exact to='/' className='navigation__link' activeClassName={activeLinkStyle}>Главная</NavLink>
                            </li>
                        )}
                        <li className='navigation__item'>
                            <NavLink exact to='/movies' className='navigation__link' activeClassName={activeLinkStyle}>Фильмы</NavLink>
                        </li>
                        <li className='navigation__item'>
                            <NavLink exact to='/saved-movies' className='navigation__link' activeClassName={activeLinkStyle}>Сохранённые фильмы</NavLink>
                        </li>
                        <li className='navigation__item navigation__item_account'>
                            <NavLink exact to='/profile' className='navigation__link' activeClassName={activeLinkStyle}>Аккаунт</NavLink>
                        </li>
                    </ul>
                </nav>
            )}
        </>
    );
}

// export default Navigation;