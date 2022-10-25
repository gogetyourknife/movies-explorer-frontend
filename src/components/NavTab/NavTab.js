import './NavTab.css';

function NavTab() {
    return (
        <div className='navtab__wrapper'>
            <a className='navtab__link' href='#aboutproject' rel='noreferrer'>О проекте</a>
            <a className='navtab__link' href='#techs' rel='noreferrer'>Технологии</a>
            <a className='navtab__link' href='#aboutme' rel='noreferrer'>Студент</a>
        </div>
    )
}

export default NavTab;