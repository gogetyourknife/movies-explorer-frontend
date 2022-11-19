import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({
    savedCards,
    onCardDelete,
    onSearch,
    onShorts,
    isSavedCardsSearchResults,
    filteredSavedCards
}) {

    return (
        <main className='savedmovies'>
            <SearchForm
                onSearch={onSearch}
                onShorts={onShorts}
            />
            {savedCards.length > 0 && !isSavedCardsSearchResults &&
                <MoviesCardList
                    cards={savedCards}
                    onCardDelete={onCardDelete}
                />}
            {filteredSavedCards.length > 0 &&
                <MoviesCardList
                    cards={filteredSavedCards}
                    onCardDelete={onCardDelete}
                />}
        </main>
    )
}

export default SavedMovies;

