import './SearchForm.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import icon from '../../images/search/icon.svg';
import { useLocation } from 'react-router-dom';
import useFormValidation from '../../utils/validation';

function SearchForm({ handleCheckboxChange, checked }) {
    const { handleChange } = useFormValidation();
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
                <FilterCheckbox
                    onChange={handleCheckboxChange}
                    checked={checked} />
            </div>
        </section>
    )
}

export default SearchForm;

// https://nuancesprog.ru/p/11641/