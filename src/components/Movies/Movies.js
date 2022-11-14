import './Movies.css'
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import { useState, useContext, useEffect } from 'react';

import CurrentUserContext from '../../context/CurrentUserContext';

function Movies({ setIsRespondMessagePopupOpen, setIsLoading, setSavedMovies, onSaveClick, onDeleteClick }) {

    const [movies, setMovies] = useState([]);
    const [shortMovies, setShortMovies] = useState(false);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [allMovies, setAllMovies] = useState([]);
    const [notFound, setNotFound] = useState(false);

    const currentUser = useContext(CurrentUserContext);

    return (
        <main className="movies">
            <SearchForm />
            <MoviesCardList movies={movies} />
        </main>
    )
}

export default Movies;