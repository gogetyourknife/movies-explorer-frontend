import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

function MoviesCard({ card, isSaved, onCardSave, onCardDelete }) {
    const location = useLocation();

    function handleSaveClick() {
        onCardSave(card);
    }

    function handleDeleteClick() {
        onCardDelete(card._id);
    };

    return (
        <li className='movies__card'>
            <div className='movies__card-item'>
                <div className='movies__card-descr'>
                    <div className='movies__descr-wrapper'>
                        <h2 className='movies__card-title'>{card.nameRU}</h2>
                        <span className='movies__card-time'>{`${Math.trunc(card.duration / 60)}ч ${card.duration % 60}м`}</span>
                    </div>
                    {location.pathname === '/movies' && (
                        <button
                            type='button'
                            className={`movies__card-button movies__card-button_${!isSaved(card) ? 'save' : 'saved'}`}
                            onClick={handleSaveClick}
                        ></button>
                    )}
                    {location.pathname === '/saved-movies' && (
                        <button
                            type='button'
                            className={`movies__card-button movies__card-button_delete`}
                            onClick={handleDeleteClick}
                        ></button>
                    )}
                </div>
                <a className='movies__card-link' href={card.trailerLink} target='_blank' rel='noreferrer'>
                    <img className='movies__card-image' src={card.image} alt={card.nameRU} />
                </a>
            </div>
        </li>
    )
}

export default MoviesCard;
