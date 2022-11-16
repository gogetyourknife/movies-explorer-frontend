import { BASE_URL } from '../utils/constants'

class Api {
    constructor({ baseURL }) {
        this._baseUrl = baseURL;
    }

    _handleResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    };

    registration = ({ name, email, password }) => {
        return fetch(`${this._baseUrl}/signup`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        })
            .then(this._handleResponse)
    }

    authorization = ({ email, password }) => {
        return fetch(`${this._baseUrl}/signin`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('jwt')}`,
            },
            body: JSON.stringify({ email, password })
        })
            .then(this._handleResponse)
    }

    getUserInfo = () => {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('jwt')}`,
            },
        })
            .then(this._handleResponse)
    }

    editProfile({ name, email }) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('jwt')}`,
            },
            body: JSON.stringify({ name, email })
        })
            .then(this._handleResponse)
    }

    saveMovie(data) {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('jwt')}`,
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
            })
        })
            .then(this._handleResponse)
    }

    getSavedMovies() {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('jwt')}`,
            },
        })
            .then(this._handleResponse)
    }

    deleteMovie(id) {
        return fetch(`${this._baseUrl}/movies/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('jwt')}`,
            },
        })
            .then(this._handleResponse)
    }
}

export const mainApi = new Api(
    {
        baseURL: BASE_URL,
    });

