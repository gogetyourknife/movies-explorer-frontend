import './Profile.css';
import { useEffect, useContext, useState } from 'react';
import { ERROR_NEED_A_NEW_NAME, ERROR_NEED_A_NEW_EMAIL } from '../../utils/errors';
import { useLocation } from 'react-router-dom';
import useFormValidation from '../../hooks/useFormValidation';
import CurrentUserContext from '../../context/CurrentUserContext';

function Profile({ onUpdateUser, onSignOut, profileError }) {
    const { values, setValues, errors, setErrors, handleChange, isValid, setIsValid } = useFormValidation();
    const [profileErrorText, setProfileErrorText] = useState('');
    const location = useLocation();
    const currentUser = useContext(CurrentUserContext);

    const handleChangeName = (e) => {
        if (e.target.value === currentUser.name || e.target.value === currentUser.email) {
            setIsValid(false);
            setErrors({
                errors: errors.name,
                [e.target.name]: ERROR_NEED_A_NEW_NAME
            })
        } else {
            handleChange(e);
        }
    };

    const handleChangeEmail = (e) => {
        if (e.target.value === currentUser.name || e.target.value === currentUser.email) {
            setIsValid(false);
            setErrors({
                errors: errors.name,
                [e.target.name]: ERROR_NEED_A_NEW_EMAIL
            });
        } else {
            handleChange(e);
        }
    };

    useEffect(() => {
        setProfileErrorText(profileError);
    }, [profileError]);

    useEffect(() => {
        setProfileErrorText('');
    }, [location]);


    useEffect(() => {
        setValues({
            name: currentUser.name,
            email: currentUser.email
        });
    }, [currentUser, setValues]);

    function handleSubmit(evt) {
        evt.preventDefault();
        onUpdateUser({
            name: values.name,
            email: values.email,
        });
    }

    useEffect(() => {
        setIsValid(false);
        setValues({
            name: currentUser.name,
            email: currentUser.email,
        });
    }, [onUpdateUser])

    return (
        <main className='profile'>
            <div className='profile__wrapper'>
                <form className='profile__form' noValidate onSubmit={handleSubmit}>
                    <h2 className='profile__title'>{`Привет, ${currentUser.name || ''}!`}</h2>
                    <div className='profile__laber-wrapper'>
                        <label className='profile__label'>
                            <span className='profile__label-title'>Имя</span>
                            <input
                                onChange={handleChangeName}
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
                                onChange={handleChangeEmail}
                                value={values.email || ''}
                                required
                                name='email'
                                type='email'
                                className='profile__input profile__input-email'
                                pattern='^\S+@\S+\.\S+$'
                            />
                            <span className='profile__error-name'>{errors.email || ''}</span>
                            <span className='profile__error-text'>{profileErrorText}</span>
                        </label>
                    </div>
                    <div className='profile__button-wrapper'>
                        <button
                            disabled={!isValid}
                            type='submit'
                            className={`
                            profile__button 
                            profile__button_change 
                            ${!isValid ? 'profile__button_disabled' : ''}`}>
                            Редактировать
                        </button>
                        <button
                            onClick={onSignOut}
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