import './SearchForm.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import icon from '../../images/search/icon.svg';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useFormValidation from '../../hooks/useFormValidation'

function SearchForm() {

    const { handleChange } = useFormValidation();
    const location = useLocation();
    const [checkboxStatus, setCheckboxStatus] = useState(false);

    const handleCheckboxChange = nextChecked => {
        setCheckboxStatus(nextChecked);
    };

    return (
        <section className='search'>
            <div className='search__wrapper'>
                <form
                    noValidate
                    // onSubmit={handleSubmit}
                    className='search__form'>
                    <img className='search__icon'
                        src={icon}
                        alt='Лупа поиска'
                    />
                    <input
                        // value={search || ''}
                        onChange={handleChange}
                        required
                        className='search__input'
                        type='text'
                        placeholder='Фильм'
                    />
                    <button type='submit' className='search__button'></button>
                    <div className='search__line'></div>
                </form>
                <FilterCheckbox
                    onChangeCheckbox={handleCheckboxChange}
                    checkboxStatus={checkboxStatus}
                />
            </div>
        </section>
    )
}

export default SearchForm;