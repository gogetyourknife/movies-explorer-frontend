import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({ movies }) {
    return (
        <main className='savedmovies'>
            <SearchForm />
            <MoviesCardList movies={movies} />
        </main>
    )
}

export default SavedMovies;