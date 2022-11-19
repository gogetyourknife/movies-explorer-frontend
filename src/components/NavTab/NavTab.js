import './NavTab.css';

function NavTab() {
    return (
        <ul className='navtab'>
            <li className='navtab__item'>
                <a className='navtab__link' href='#aboutproject' rel='noreferrer'>О проекте</a>
            </li>
            <li className='navtab__item'>
                <a className='navtab__link' href='#techs' rel='noreferrer'>Технологии</a>
            </li>
            <li className='navtab__item'>
                <a className='navtab__link' href='#aboutme' rel='noreferrer'>Студент</a>
            </li>
        </ul>
    )
}

export default NavTab;