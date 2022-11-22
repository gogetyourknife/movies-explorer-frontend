import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import NothingFound from '../NothingFound/NothingFound';

function Movies({
    initialCards,
    onCardSave,
    isSaved,
    onSearch,
    isSearchResults,
    onShorts,
    filteredInitialCards }) {

    return (
        <main className='movies'>
            <SearchForm
                onSearch={onSearch}
                onShorts={onShorts} />
            {initialCards.length > 0 && !JSON.parse(localStorage.getItem('searchResults')) &&
                <MoviesCardList
                    cards={initialCards}
                    onCardSave={onCardSave}
                    isSaved={isSaved}
                />}
            {filteredInitialCards.length > 0 &&
                <MoviesCardList
                    cards={filteredInitialCards}
                    onCardSave={onCardSave}
                    isSaved={isSaved}
                />}
            {filteredInitialCards.length === 0 && isSearchResults && <NothingFound message={'Здесь ничего нет, но это пока что'} />}
            {filteredInitialCards.length === 0 && initialCards.length === 0 && !isSearchResults &&
                <div className='movies__preloader'>
                    <Preloader />
                </div>}
        </main>
    );
}

export default Movies;

