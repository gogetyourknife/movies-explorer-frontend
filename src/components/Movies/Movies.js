import './Movies.css'
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function Movies() {

    return (
        <main className='movies'>
            {/*             <SearchForm />
            {isLoading ?
                <div className='movies__preloader'>
                    <Preloader />
                </div>
                : isSearchDone
                    ? renderedMovies.length > 0
                        ? <MoviesCardList
                        />
                        : (!isLoading ?
                            <div className='movies__wrapper'>
                                <span className='movies__info'>Ничего не найдено</span>
                            </div>
                            :
                            <div className='movies__wrapper'>
                                <span className='movies__info'>{результат}</span>
                            </div>
                        )
                    : ('')
            } */}
        </main>
    );
}

export default Movies;

