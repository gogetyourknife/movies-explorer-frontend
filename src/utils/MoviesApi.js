import MOVIES_URL from './constants.js'

class MoviesApi {
    constructor({ baseURL }) {
        this._baseURL = baseURL;
    }

    _handleResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    };

    getAllMovies() {
        return fetch(`${this._baseURL}`, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(this._handleResponse)
    }
}

export const moviesApi = new MoviesApi(
    {
        baseURL: MOVIES_URL,
    });

