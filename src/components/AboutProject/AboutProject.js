import './AboutProject.css'

function AboutProject() {
    return (
        <section id='aboutproject' className='aboutproject'>
            <h2 className='aboutproject__title'>О проекте</h2>
            <div className='aboutproject__line'></div>
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
                    <span className='aboutproject__backend_time'>1 неделя</span>
                    <span className='aboutproject__backend_title'>Back-end</span>
                </div>
                <div className='aboutproject__frontend'>
                    <span className='aboutproject__frontend_time'>4 недели</span>
                    <span className='aboutproject__frontend_title'>Front-end</span>
                </div>
            </div>
        </section>
    )
}

export default AboutProject;