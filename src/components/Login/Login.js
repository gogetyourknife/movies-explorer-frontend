import './Login.css';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/header/logo.svg';

function Login() {
    return (
        <main className='login'>
            <form className='login__form'>
                <Link to='/'>
                    <img className='login__logo' src={logo} alt='Логотип' />
                </Link>
                <h2 className='login__header'>Рады видеть!</h2>
                <div className='login__laber-wrapper'>
                    <label className='login__label login__label-email'>
                        <span className='login__label-title'>E-mail</span>
                        <input
                            required
                            name='email'
                            type='email'
                            className='login__input login__input-email'
                            value=''
                        />
                        <span className='login__error-name'></span>
                    </label>
                    <label className='login__label'>
                        <span className='login__label-title'>Пароль</span>
                        <input
                            required
                            name='password'
                            type='password'
                            className='login__input'
                            value=''
                            minLength='1'
                            maxLength='30'
                        />
                        <span className='login__error-name'></span>
                    </label>
                </div>
                <div className='login__button-wrapper'>
                    <button
                        type='submit'
                        className='login__button_singin'>Войти</button>
                    <div className='login__reg-wrapper'>
                        <p className='login__text'>
                            Ещё не зарегистрированы?
                        </p>
                        <button
                            type='submit'
                            className='login__button login__button_reg'>
                            Регистрация
                        </button>
                    </div>
                </div>
            </form>
        </main>

    )
}

export default Login;