import './AboutProject.css'

function AboutProject() {
    return (
        <section id='aboutproject' className='aboutproject'>
            <div className='aboutproject__wrapper'>
                <h2 className='aboutproject__title'>О проекте</h2>
                <ul className='aboutproject__list'>
                    <li className='aboutproject__list-item'>
                        <h3 className='aboutproject__list-item_subtitle'>Дипломный проект включал 5 этапов</h3>
                        <p className='aboutproject__list-item_descr'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                    </li>
                    <li className='aboutproject__list-item'>
                        <h3 className='aboutproject__list-item_subtitle'>На выполнение диплома ушло 5 недель</h3>
                        <p className='aboutproject__list-item_descr'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                    </li>
                </ul>
                <div className='aboutproject__progress-bar'>
                    <div className='aboutproject__backend'>
                        <span className='aboutproject__backend-time'>1 неделя</span>
                        <span className='aboutproject__backend-title'>Back-end</span>
                    </div>
                    <div className='aboutproject__frontend'>
                        <span className='aboutproject__frontend-time'>4 недели</span>
                        <span className='aboutproject__frontend-title'>Front-end</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutProject;