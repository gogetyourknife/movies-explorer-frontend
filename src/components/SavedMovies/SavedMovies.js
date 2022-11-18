import './SavedMovies.css';
import { useEffect, useState } from 'react'
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import shortsFilter from '../../utils/short-filter';

function SavedMovies({ savedCards,
    onCardDelete,
    onSearch,
}) {

    return (
        <main className='savedmovies'>
            <SearchForm
                onSearch={onSearch}
            />
            {savedCards.length > 0 &&
                <MoviesCardList
                    cards={savedCards}
                    onCardDelete={onCardDelete}
                />}
        </main>
    )
}

export default SavedMovies;

