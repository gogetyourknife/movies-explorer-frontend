import './Profile.css';

function Profile() {
    return (
        <main className='profile'>
            <div className='profile__wrapper'>
                <form className='profile__form'>
                    <h2 className='profile__title'>Привет, Луна!</h2>
                    <div className='profile__laber-wrapper'>
                        <label className='profile__label'>
                            <span className='profile__label-title'>Имя</span>
                            <input
                                required
                                name='name'
                                type='text'
                                className='profile__input'
                                value='Луна'
                                minLength='1'
                                maxLength='30'
                            />
                            <span className='profile__error-name'></span>
                        </label>
                        <label className='profile__label profile__label-email'>
                            <span className='profile__label-title'>E-mail</span>
                            <input
                                required
                                name='email'
                                type='email'
                                className='profile__input profile__input-email'
                                value='test@ya.ru'
                            />
                            <span className='profile__error-name'></span>
                        </label>
                    </div>
                    <div className='profile__button-wrapper'>
                        <button
                            type='submit' className='profile__button profile__button_change'>
                            Редактировать
                        </button>
                        <button
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