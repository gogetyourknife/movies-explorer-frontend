import { BASE_URL } from './constants'

class Api {
    constructor({ baseURL }) {
        this._baseURL = baseURL;
    }

    _handleResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    };

    registration = (name, email, password) => {
        return fetch(`${this._baseURL}/signup`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                password,
                email,
            })
        })
            .then(this._handleResponse)
    };

    authorization = (email, password) => {
        return fetch(`${this._baseURL}/signin`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                password,
                email,
            })
        })
            .then(this._handleResponse)
    }

    // Загрузка информации о пользователе с сервера

    getProfileInfo() {
        return fetch(`${this._baseURL}/users/me`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('jwt')}`,
                "Content-Type": "application/json",
            },
        })
            .then(this._handleResponse)
    }

    // Редактирование профиля

    editProfile(name, email) {
        return fetch(`${this._baseURL}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: `Bearer ${localStorage.getItem('jwt')}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                email
            })
        })
            .then(this._handleResponse)
    }

    // Загрузка фильмов

    getMovies() {
        return fetch(`${this._baseURL}/movies`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('jwt')}`,
                "Content-Type": "application/json",
            },
        })
            .then(this._handleResponse)
    }

    // Сохранение фильма

    saveMovie(data) {
        return fetch(`${this._baseURL}/movies`, {
            method: 'POST',
            headers: {
                authorization: `Bearer ${localStorage.getItem('jwt')}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                country: data.country,
                director: data.director,
                duration: data.duration,
                year: data.year,
                description: data.description,
                image: data.image,
                trailerLink: data.trailerLink,
                thumbnail: data.thumbnail,
                movieId: data.id,
                nameRU: data.nameRU,
                nameEN: data.nameEN,
            }),
        })
            .then(this._handleResponse);
    }

    // Удаление фильма

    deleteMovie(data) {
        return fetch(`${this._baseURL}/movies/${data}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('jwt')}`,
                "Content-Type": "application/json",
            },
        })
            .then(this._handleResponse)
    }
}

export const mainApi = new Api(
    {
        baseURL: BASE_URL,
    });

