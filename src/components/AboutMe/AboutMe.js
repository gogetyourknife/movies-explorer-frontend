import './AboutMe.css';
import photo from '../../images/main/photo.png';

function AboutMe() {
    return (
        <section id='aboutme' className='aboutme'>
            <div className='aboutme__wrapper'>
                <h2 className='aboutme__title'>Студент</h2>
                <div className='aboutme__line'></div>
                <div className='aboutme__info-wrapper'>
                    <div className='aboutme__info'>
                        <h3 className='aboutme__name'>Луна</h3>
                        <p className='aboutme__job'>Фронтенд-разработчица</p>
                        <p className='aboutme__descr'>Как только будет, что рассказать, оно появится здесь.</p>
                        <ul className='aboutme__links'>
                            <li className='aboutme__link-item'>
                                <a className='aboutme__link-git' href='https://github.com/gogetyourknife' target='_blank' rel='noreferrer'>Github</a>
                            </li>
                        </ul>
                    </div>
                    <img className='aboutme__photo' src={photo} alt='Фотография' />
                </div>
            </div>
        </section>
    )
}

export default AboutMe;