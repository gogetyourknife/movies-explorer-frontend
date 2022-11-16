import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

function MoviesCard() {
    const location = useLocation();

    return (
        <li className='movies__card'>
            <div className='movies__card-item'>
                {/*                 <div className='movies__card-descr'>
                    <div className='movies__descr-wrapper'>
                        <h2 className='movies__card-title'>{movie.nameRU}</h2>
                        <span className='movies__card-time'>{movie.duration}</span>
                    </div>
                    {location.pathname === '/movies' && (
                        <button
                            type='button'
                            className={`movies__card-button movies__card-button_${!isSaved ? 'save' : 'saved'}`}
                            onClick={handleSaveMovie}
                        ></button>
                    )}
                    {location.pathname === '/saved-movies' && (
                        <button
                            type='button'
                            className={`movies__card-button movies__card-button_delete`}
                            onClick={handleDeleteMovie}
                        ></button>
                    )}
                </div>
                <img className='movies__card-image' src={movie.image} alt={movie.nameRU} /> */}
            </div>
        </li>
    )
}

export default MoviesCard;
