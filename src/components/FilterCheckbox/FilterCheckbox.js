import './FilterCheckbox.css';
import Switch from "react-switch";
import { useState } from 'react';

function FilterCheckbox() {

    const [checked, setChecked] = useState(false);
    const handleChange = nextChecked => {
        setChecked(nextChecked);
    };

    return (
        <label className='filter'>
            <Switch
                handleDiameter={16}
                onChange={handleChange}
                checked={checked}
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