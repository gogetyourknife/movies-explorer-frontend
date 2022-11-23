import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import NothingFound from '../NothingFound/NothingFound';

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
            {filteredSavedCards.length === 0 && isSavedCardsSearchResults && <NothingFound message={'Здесь ничего нет, но это пока что'} />}
            {savedCards.length === 0 && <NothingFound message={'Добавьте ваш первый фильм'} />}
        </main>
    )
}

export default SavedMovies;

