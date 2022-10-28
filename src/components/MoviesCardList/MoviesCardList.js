import './MoviesCardList.css'
import React from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies }) {

    const location = useLocation();

    function useWindowSize() {
        const [width, setWidth] = React.useState(window.screen.width);
        React.useEffect(() => {
            const handleResize = () => {
                setWidth(window.screen.width)
            }
            window.addEventListener('resize', handleResize)
        }, []);
        return width
    }

    const width = useWindowSize();

    return (
        <section className='movies__card-list'>
            <ul className='movies__list'>
                {width > 769 &&
                    movies
                        .slice(0, 12)
                        .map((card) =>
                            <MoviesCard key={card._id} card={card} />
                        )}
                {width >= 500 &&
                    width <= 768 &&
                    movies
                        .slice(0, 8)
                        .map((card) =>
                            <MoviesCard key={card._id} card={card} />
                        )}
                {width < 499 &&
                    movies
                        .slice(0, 5)
                        .map((card) =>
                            <MoviesCard key={card._id} card={card} />
                        )}
            </ul>
            {location.pathname === '/movies' && (
                <button className='movies__card-list_more'>Ещё</button>
            )}
        </section>
    )
}

export default MoviesCardList;
