import './MoviesCardList.css';
import { useState, useEffect } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import { LOAD_DESKTOP, LOAD_TABLET_AND_MOBILE } from '../../utils/constants';

function MoviesCardList({
    cards,
    isSaved,
    onCardSave,
    onCardDelete }) {

    const [moviesShown, setMoviesShown] = useState([]);

    function showMoviesBasedOnWidth() {
        if (window.innerWidth >= 769) {
            setMoviesShown(cards.slice(0, 12))
        } else if (window.innerWidth > 480 && window.innerWidth <= 768) {
            setMoviesShown(cards.slice(0, 8))
        } else if (window.innerWidth < 480) {
            setMoviesShown(cards.slice(0, 5));
        }
    };

    useEffect(() => {
        showMoviesBasedOnWidth();
    }, [cards]);


    window.resize = function () {
        setTimeout(() => {
            showMoviesBasedOnWidth();
        }, 600)
    };

    function handleLoadMoreClick() {
        if (window.innerWidth > 769) {
            setMoviesShown(cards.slice(0, moviesShown.length + LOAD_DESKTOP));
        } else if (window.innerWidth <= 768) {
            setMoviesShown(cards.slice(0, moviesShown.length + LOAD_TABLET_AND_MOBILE));
        }
    };

    return (
        <section className='movies__card-list'>
            <ul className='movies__list'>
                {moviesShown.map((movie) => (
                    <MoviesCard
                        card={movie}
                        key={movie._id || movie.id}
                        isSaved={isSaved}
                        onCardSave={onCardSave}
                        onCardDelete={onCardDelete}
                    >
                    </MoviesCard>
                ))}
            </ul>
            {cards.length > moviesShown.length &&
                <button
                    onClick={handleLoadMoreClick}
                    className='movies__card-list_more'
                    aria-label='Загрузить ещё'
                    type='button'>Ещё</button>
            }
        </section>
    )
}

export default MoviesCardList;

