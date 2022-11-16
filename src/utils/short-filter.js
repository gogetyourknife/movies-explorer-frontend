import { SHORTMOVIE_DURATION } from './constants';

function shortsFilter(movies, request, checkboxStatus) {
    let shortsFilter = movies;
    let result;

    if (checkboxStatus) {
        shortsFilter = shortsFilter.filter((movie) => movie.duration <= SHORTMOVIE_DURATION);
    }

    result = shortsFilter.filter((movie) => {
        return movie.nameRU.toLowerCase().trim().includes(request.toLowerCase().trim());
    })
    return result;
}

export default shortsFilter;