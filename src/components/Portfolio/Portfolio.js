import './Portfolio.css'
import arrow from '../../images/main/arrow.svg'

function Portfolio() {
    return (
        <section className='portfolio'>
            <h2 className='portfolio__title'>Портфолио</h2>
            <ul className='portfolio__list'>
                <li className='portfolio__list-item'>
                    <a className='portfolio__link' target='_blank' rel='noreferrer' href='https://github.com/gogetyourknife/how-to-learn'>Статичный сайт</a>
                    <img className='portfolio__arrow' src={arrow} alt='Стрела' />
                </li>
                <li className='portfolio__list-item'>
                    <a className='portfolio__link' target='_blank' rel='noreferrer' href='https://github.com/gogetyourknife/russian-travel'>Адаптивный сайт</a>
                    <img className='portfolio__arrow' src={arrow} alt='Стрела' />
                </li>
                <li className='portfolio__list-item'>
                    <a className='portfolio__link' target='_blank' rel='noreferrer' href='https://github.com/gogetyourknife/react-mesto-api-full'>Одностраничное приложение</a>
                    <img className='portfolio__arrow' src={arrow} alt='Стрела' />
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;