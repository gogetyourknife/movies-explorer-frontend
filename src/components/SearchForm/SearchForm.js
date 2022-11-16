import './SearchForm.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import icon from '../../images/search/icon.svg';
import { useEffect, useState } from 'react'
import useFormValidation from '../../hooks/useFormValidation'

function SearchForm() {

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
                        value={''}
                        // onChange={handleSearchChange}
                        required
                        className='search__input'
                        type='text'
                        placeholder='Фильм'
                    />
                    <button type='submit' className='search__button'></button>
                    <div className='search__line'></div>
                </form>
                <FilterCheckbox
                //   onChangeCheckbox={handleCheckboxChange}
                />
            </div>
        </section>
    )
}

export default SearchForm;