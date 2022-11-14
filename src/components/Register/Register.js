import './Register.css';
import { Link } from 'react-router-dom';
import logo from '../../images/header/logo.svg';

import useFormValidation from '../../utils/validation'

function Register({ handleRegistration }) {

    const { values, handleChange, errors, isValid, resetForm } = useFormValidation();

    function handleSubmit(evt) {
        evt.preventDefault();
        handleRegistration(values);
        resetForm();
    };

    return (
        <main className='register'>
            <form className='register__form' noValidate onSubmit={handleSubmit}>
                <Link to='/'>
                    <img className='register__logo' src={logo} alt='Логотип' />
                </Link>
                <h2 className='register__title'>Добро пожаловать!</h2>
                <div className='register__laber-wrapper'>
                    <label className='register__label register__label-name'>
                        <span className='register__label-title'>Имя</span>
                        <input
                            onChange={handleChange}
                            value={values.name || ''}
                            pattern='^[A-Za-zА-Яа-яЁё \s -]+$'
                            required
                            name='name'
                            type='name'
                            className='register__input register__input-name'
                        />
                        <span className='register__error-name'>{errors.name || ''}</span>
                    </label>
                    <label className='register__label register__label-email'>
                        <span className='register__label-title'>E-mail</span>
                        <input
                            onChange={handleChange}
                            value={values.email || ''}
                            required
                            name='email'
                            type='email'
                            className='register__input register__input-email'
                        />
                        <span className='register__error-name'>{errors.email || ''}</span>
                    </label>
                    <label className='register__label'>
                        <span className='register__label-title'>Пароль</span>
                        <input
                            onChange={handleChange}
                            value={values.password || ''}
                            required
                            name='password'
                            type='password'
                            className='register__input'
                            minLength='1'
                            maxLength='30'
                        />
                        <span className='register__error-name'>{errors.password || ''}</span>
                    </label>
                </div>
                <div className='register__button-wrapper'>
                    <button
                        disabled={!isValid}
                        type='submit'
                        className={`register__button_singin ${!isValid && 'register__button_disabled'}`}>
                        Зарегистрироваться
                    </button>
                    <div className='register__reg-wrapper'>
                        <p className='register__text'>
                            Уже зарегистрированы?
                        </p>
                        <button
                            type='button'
                            className='register__button register__button_login'>
                            <Link to='signin' className='register__link'>
                                Войти
                            </Link>
                        </button>
                    </div>
                </div>
            </form>
        </main>

    )
}

export default Register;