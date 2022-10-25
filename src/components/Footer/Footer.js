import './Footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className='footer__line'></div>
            <p className='footer__date'>&copy; {new Date().getFullYear()}</p>
            <div className='footer__links'>
                <a className='footer__link' target='_blank' rel='noreferrer' href='https://github.com/gogetyourknife/react-mesto-api-full'>Яндекс.Практикум</a>
                <a className='footer__link' target='_blank' rel='noreferrer' href='https://github.com/gogetyourknife'>Github</a>
            </div>
        </footer>
    )
}

export default Footer;