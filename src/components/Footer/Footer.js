import './Footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__wrapper'>
                <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
                <div className='footer__info-wrapper'>
                    <p className='footer__date'>&copy; {new Date().getFullYear()}</p>
                    <div className='footer__links'>
                        <a className='footer__link' target='_blank' rel='noreferrer' href='https://github.com/gogetyourknife/react-mesto-api-full'>Яндекс.Практикум</a>
                        <a className='footer__link' target='_blank' rel='noreferrer' href='https://github.com/gogetyourknife'>Github</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;