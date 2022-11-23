import './SearchForm.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import icon from '../../images/search/icon.svg';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function SearchForm({ onSearch, onShorts }) {

    const location = useLocation();

    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        if (location.pathname === '/movies' && localStorage.getItem('searchQuery')) {
            setSearchQuery(localStorage.getItem('searchQuery'));
        } else {
            setSearchQuery('');
        }
    }, [location]);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        onSearch(searchQuery);
    };

    return (
        <section className='search'>
            <div className='search__wrapper'>
                <form
                    noValidate
                    onSubmit={handleSubmit}
                    className='search__form'>
                    <img className='search__icon'
                        src={icon}
                        alt='Лупа поиска'
                    />
                    <input
                        value={searchQuery}
                        onChange={({ target }) => setSearchQuery(target.value)}
                        required
                        className='search__input'
                        type='text'
                        placeholder='Фильм'
                    />
                    <button type='submit' className='search__button'></button>
                    <div className='search__line'></div>
                </form>
                <FilterCheckbox
                    onShorts={onShorts}
                />
            </div>
        </section>
    )
}

export default SearchForm;