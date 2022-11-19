import './SearchForm.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import icon from '../../images/search/icon.svg'

function SearchForm() {
    return (
        <section className='search'>
            <div className='search__wrapper'>
                <form className='search__form'>
                    <img className='search__icon'
                        src={icon}
                        alt='Лупа поиска'
                    />
                    <input
                        required
                        className='search__input'
                        type='text'
                        placeholder='Фильм'
                    />
                    <button type='submit' className='search__button'></button>
                    <div className='search__line'></div>
                </form>
                <FilterCheckbox />
            </div>
        </section>
    )
}

export default SearchForm;

// https://nuancesprog.ru/p/11641/