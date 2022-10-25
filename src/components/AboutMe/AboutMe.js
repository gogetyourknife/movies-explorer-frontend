import './AboutMe.css';
import photo from '../../images/main/photo.png';

function AboutMe() {
    return (
        <section id='aboutme' className='aboutme'>
            <h2 className='aboutme__title'>Студент</h2>
            <div className='aboutme__line'></div>
            <div className='aboutme__wrapper'>
                <div className='aboutme__info'>
                    <h3 className='aboutme__name'>Луна</h3>
                    <p className='about__me'>Фронтенд-разработчица</p>
                    <p className='about__descr'>Как только будет, что рассказать, оно появится здесь.</p>
                </div>
                <img className='aboutme__photo' src={photo} alt='Фотография' />
            </div>
            <div className='aboutme__link'>
                <a className='aboutme__link_git' href='https://github.com/gogetyourknife' target='_blank' rel='noreferrer'>Github</a>
            </div>

        </section>
    )
}

export default AboutMe;