import './Portfolio.css'

function Portfolio() {
    return (
        <section className='portfolio'>
            <div className='portfolio__wrapper'>
                <h2 className='portfolio__title'>Портфолио</h2>
                <ul className='portfolio__list'>
                    <li className='portfolio__list-item'>
                        <a className='portfolio__link' target='_blank' rel='noreferrer' href='https://github.com/gogetyourknife/how-to-learn'>Статичный сайт</a>
                    </li>
                    <li className='portfolio__list-item'>
                        <a className='portfolio__link' target='_blank' rel='noreferrer' href='https://github.com/gogetyourknife/russian-travel'>Адаптивный сайт</a>
                    </li>
                    <li className='portfolio__list-item'>
                        <a className='portfolio__link' target='_blank' rel='noreferrer' href='https://github.com/gogetyourknife/react-mesto-api-full'>Одностраничное приложение</a>
                    </li>
                </ul>
            </div>
        </section >
    )
}

export default Portfolio;