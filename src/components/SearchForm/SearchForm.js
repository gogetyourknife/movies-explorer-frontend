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
                        className='search__input'
                        type='text'
                        placeholder='Фильм'
                    />
                    <button className='search__button' type='submit'></button>
                    <div className='search__line'></div>
                </form>
                <FilterCheckbox />
            </div>
        </section>
    )
}

export default SearchForm;

// https://nuancesprog.ru/p/11641/