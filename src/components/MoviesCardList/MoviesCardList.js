import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {

    /*  const moreLoadingButtonClass = туткнопка ? `movies__card-list_more` : `movies__card-list_more_hidden`; */

    return (
        <section className='movies__card-list'>
            <ul className='movies__list'>
            </ul>
            {/*             {!загрузка ? проверка завершения поиска
            ? <>
                <button
                    onClick={загрузка}
                    className={туткнопка}
                    aria-label='Загрузить ещё'
                    type='button'>Ещё</button>
            </>
            : ('') // или ничего не отрисовываем
            : ('')
            } */}
        </section>
    )
}

export default MoviesCardList;