export const BASE_URL = 'https://api.best-movies.nomoredomains.icu';
export const MOVIES_URL = 'https://api.nomoreparties.co/beatfilm-movies';
export const SHORTMOVIE_DURATION = 40;

export const SCREEN_DESTOP = 1024;
export const MOVIES_DESTOP = 12;
export const LOAD_DESKTOP = 3;

export const SCREEN_TABLET = 768;
export const MOVIES_TABLET = 8;

export const SCREEN_MOBILE = 480;
export const MOVIES_MOBILE = 5;
export const LOAD_TABLET_AND_MOBILE = 2;

export const initialCards = (width) => {
    if (width >= 1280) {
        return 12;
    }
    if (width >= 768) {
        return 8;
    } else {
        return 5;
    }
};

export const loadingCards = (width) => {
    if (width >= 1280) {
        return 3;
    }
    if (width >= 768) {
        return 2;
    } else {
        return 2;
    }
};

