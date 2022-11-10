import './MoviesCard.css';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCard({ card }) {
    const location = useLocation();
    const [isCardSaved, setIsCardSaved] = useState(card.saved);
    const handleOnClick = () => {
        setIsCardSaved(!isCardSaved);
    };

    return (
        <li className='movies__card'>
            <div className='movies__card-item'>
                <div className='movies__card-descr'>
                    <div className='movies__descr-wrapper'>
                        <h2 className='movies__card-title'>{card.nameRU}</h2>
                        <span className='movies__card-time'>{card.duration}</span>
                    </div>
                    {location.pathname === '/movies' && (
                        <button
                            type='button'
                            className={`movies__card-button movies__card-button_${!isCardSaved ? 'save' : 'saved'}`}
                            onClick={handleOnClick}
                        ></button>
                    )}
                    {location.pathname === '/saved-movies' && (
                        <button
                            type='button'
                            className={`movies__card-button movies__card-button_delete`}
                        ></button>
                    )}
                </div>
                <img className='movies__card-image' src={card.image} alt={card.nameRU} />
            </div>
        </li>
    )
}

export default MoviesCard;
