import { MOVIES_URL } from '../utils/constants'

class MoviesApi {
    constructor({ baseUrl }) {
        this._baseUrl = baseUrl;
    }

    _handleResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    };

    getMovies() {
        return fetch(`${this._baseUrl}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then(this._handleResponse)
    }
}

export const moviesApi = new MoviesApi(
    {
        baseURL: MOVIES_URL,
    });

