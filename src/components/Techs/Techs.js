import './Techs.css';

function Techs() {
    return (
        <section id='techs' className='techs'>
            <div className='tecs__wrapper'>
                <h2 className='techs__title'>Технологии</h2>
                <div className='techs__info-wrapper'>
                    <h3 className='techs__subtitle'>7 технологий</h3>
                    <p className='techs__descr'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                    <ul className='techs__stack'>
                        <li className='techs__item'>
                            <p className='techs__stack-item'>HTML</p>
                        </li>
                        <li className='techs__item'>
                            <p className='techs__stack-item'>CSS</p>
                        </li>
                        <li className='techs__item'>
                            <p className='techs__stack-item'>JS</p>
                        </li>
                        <li className='techs__item'>
                            <p className='techs__stack-item'>React</p>
                        </li>
                        <li className='techs__item'>
                            <p className='techs__stack-item'>Git</p>
                        </li>
                        <li className='techs__item'>
                            <p className='techs__stack-item'>Express.js</p>
                        </li>
                        <li className='techs__item'>
                            <p className='techs__stack-item'>mongoDB</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Techs;