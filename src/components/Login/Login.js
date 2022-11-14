import './Login.css';
import { Link } from 'react-router-dom';
import logo from '../../images/header/logo.svg';

import useFormValidation from '../../utils/validation'

function Login({ handleAuthorization }) {

    const { values, handleChange, errors, isValid, resetForm } = useFormValidation();

    function handleSubmit(evt) {
        evt.preventDefault();
        handleAuthorization(values);
        resetForm();
    };

    return (
        <main className='login'>
            <form className='login__form' noValidate onSubmit={handleSubmit}>
                <Link to='/'>
                    <img className='login__logo' src={logo} alt='Логотип' />
                </Link>
                <h2 className='login__title'>Рады видеть!</h2>
                <div className='login__laber-wrapper'>
                    <label className='login__label login__label-email'>
                        <span className='login__label-title'>E-mail</span>
                        <input
                            onChange={handleChange}
                            required
                            name='email'
                            type='email'
                            className='login__input login__input-email'
                            value={values.email || ''}
                        />
                        <span className='login__error-name'>{errors.email || ''}</span>
                    </label>
                    <label className='login__label'>
                        <span className='login__label-title'>Пароль</span>
                        <input
                            onChange={handleChange}
                            required
                            name='password'
                            type='password'
                            className='login__input'
                            value={values.password || ''}
                            minLength='1'
                            maxLength='30'
                        />
                        <span className='login__error-name'>{errors.password || ''}</span>
                    </label>
                </div>
                <div className='login__button-wrapper'>
                    <button
                        disabled={!isValid}
                        type='submit'
                        className={`login__button_singin ${!isValid && 'login__button_disabled'}`}>
                        Войти
                    </button>
                    <div className='login__reg-wrapper'>
                        <p className='login__text'>
                            Ещё не зарегистрированы?
                        </p>
                        <button
                            type='button'
                            className='login__button login__button_reg'>
                            <Link to='signup' className='login__link'>
                                Регистрация
                            </Link>
                        </button>
                    </div>
                </div>
            </form>
        </main>
    )
}

export default Login;