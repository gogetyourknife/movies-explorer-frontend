import './FilterCheckbox.css';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Switch from "react-switch";

function FilterCheckbox({ onShorts }) {
    const location = useLocation();

    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        if (location.pathname === '/movies' && JSON.parse(localStorage.getItem('checked')) !== null) {
            setIsChecked(JSON.parse(localStorage.getItem('checked')));
        }
    }, [location])

    useEffect(() => {
        onShorts(isChecked);
    }, [isChecked])

    const handleCheck = nextChecked => {
        setIsChecked(nextChecked);
    };

    return (
        <label className='filter'>
            <Switch
                id='shortMovies'
                handleDiameter={16}
                onChange={handleCheck}
                checked={isChecked}
                className='react-switch'
                uncheckedIcon={false}
                checkedIcon={false}
                onColor='#2BE080'
                height={20}
                width={36}
            />
            <span className='filter__tumbler'></span>
            <p className="filter__title">Короткометражки</p>
        </label>
    )
}

export default FilterCheckbox;