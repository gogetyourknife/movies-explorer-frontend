import './Register.css';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/header/logo.svg';

function Register() {
    return (
        <main className='register'>
            <form className='register__form'>
                <Link to='/'>
                    <img className='register__logo' src={logo} alt='Логотип' />
                </Link>
                <h2 className='register__header'>Добро пожаловать!</h2>
                <div className='register__laber-wrapper'>
                    <label className='register__label register__label-name'>
                        <span className='register__label-title'>Имя</span>
                        <input
                            required
                            name='name'
                            type='name'
                            className='register__input register__input-name'
                            value=''
                        />
                        <span className='register__error-name'></span>
                    </label>
                    <label className='register__label register__label-email'>
                        <span className='register__label-title'>E-mail</span>
                        <input
                            required
                            name='email'
                            type='email'
                            className='register__input register__input-email'
                            value=''
                        />
                        <span className='register__error-name'></span>
                    </label>
                    <label className='register__label'>
                        <span className='register__label-title'>Пароль</span>
                        <input
                            required
                            name='password'
                            type='password'
                            className='register__input'
                            value=''
                            minLength='1'
                            maxLength='30'
                        />
                        <span className='register__error-name'>Что-то пошло не так</span>
                    </label>
                </div>
                <div className='register__button-wrapper'>
                    <button
                        type='submit'
                        className='register__button_singin'>Зарегистрироваться</button>
                    <div className='register__reg-wrapper'>
                        <p className='register__text'>
                            Уже зарегистрированы?
                        </p>
                        <button
                            type='submit'
                            className='register__button register__button_login'>
                            Войти
                        </button>
                    </div>
                </div>
            </form>
        </main>

    )
}

export default Register;