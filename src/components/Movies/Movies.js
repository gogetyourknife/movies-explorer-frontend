import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function Movies({ initialCards,
    onCardSave,
    isSaved,
    onSearch, }) {


    return (
        <main className='movies'>
            <SearchForm
                onSearch={onSearch} />
            {initialCards.length > 0 &&
                <MoviesCardList
                    cards={initialCards}
                    onCardSave={onCardSave}
                    isSaved={isSaved}
                />}
        </main>

    );
}

export default Movies;

