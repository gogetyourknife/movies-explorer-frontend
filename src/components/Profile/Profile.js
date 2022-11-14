import './Profile.css';
import { useEffect, useContext } from 'react';
import useFormValidation from '../../utils/validation'
import CurrentUserContext from '../../context/CurrentUserContext';

function Profile({ handleProfileUpdate, handleLogout }) {
    const currentUser = useContext(CurrentUserContext);
    const { values, handleChange, errors, isValid, resetForm, setValues } = useFormValidation();

    const dataValidation = (!isValid || (currentUser.name === values.name && currentUser.email === values.email));

    function handleSubmit(evt) {
        evt.preventDefault();
        handleProfileUpdate(values);
        resetForm();
    };

    useEffect(() => {
        setValues(currentUser);
    }, [currentUser, setValues]);

    function handleSignout() {
        handleLogout();
        resetForm();
    };

    return (
        <main className='profile'>
            <div className='profile__wrapper'>
                <form className='profile__form' noValidate onSubmit={handleSubmit}>
                    <h2 className='profile__title'>{`Привет, ${currentUser.name || ''}!`}</h2>
                    <div className='profile__laber-wrapper'>
                        <label className='profile__label'>
                            <span className='profile__label-title'>Имя</span>
                            <input
                                onChange={handleChange}
                                value={values.name || ''}
                                required
                                name='name'
                                type='text'
                                className='profile__input'
                                minLength='1'
                                maxLength='30'
                                pattern='^[A-Za-zА-Яа-яЁё \s -]+$'
                            />
                            <span className='profile__error-name'>{errors.name || ''}</span>
                        </label>
                        <label className='profile__label profile__label-email'>
                            <span className='profile__label-title'>E-mail</span>
                            <input
                                onChange={handleChange}
                                value={values.email || ''}
                                required
                                name='email'
                                type='email'
                                className='profile__input profile__input-email'
                            />
                            <span className='profile__error-name'>{errors.email || ''}</span>
                        </label>
                    </div>
                    <div className='profile__button-wrapper'>
                        <button
                            disabled={!isValid}
                            type='submit'
                            className={`
                            profile__button 
                            profile__button_change 
                            ${dataValidation ? 'profile__button_disabled' : ''}`}>
                            Редактировать
                        </button>
                        <button
                            onClick={handleSignout}
                            type='submit'
                            className='profile__button profile__button_logout'>
                            Выйти из аккаунта
                        </button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Profile;