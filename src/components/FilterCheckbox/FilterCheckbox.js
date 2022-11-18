import './FilterCheckbox.css';
import Switch from "react-switch";

function FilterCheckbox({ checkboxStatus, onChangeCheckbox }) {

    return (
        <label className='filter'>
            <Switch
                handleDiameter={16}
                onChange={onChangeCheckbox}
                checked={checkboxStatus}
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