function _handleResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
};

const moviesApi = {
    getMovies() {
        return fetch('https://api.nomoreparties.co/beatfilm-movies', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(_handleResponse);
    }
}

export default moviesApi;