import './Techs.css';

function Techs() {
    return (
        <section id='techs' className='techs'>
            <h2 className='techs__title'>Технологии</h2>
            <div className='techs__line'></div>
            <div className='techs__wrapper'>
                <h3 className='techs__subtitle'>7 технологий</h3>
                <p className='techs__descr'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <div className='techs__stack'>
                    <p className='techs__stack-item'></p>
                    <p className='techs__stack-item'></p>
                    <p className='techs__stack-item'></p>
                    <p className='techs__stack-item'></p>
                    <p className='techs__stack-item'></p>
                    <p className='techs__stack-item'></p>
                    <p className='techs__stack-item'></p>
                </div>
            </div>
        </section>
    )
}

export default Techs;