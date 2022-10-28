import './Hamburger.css';
import { useMediaQuery } from 'react-responsive';
import React from 'react';

function Hamburger({ isNavigationOpened, onClickHamburger }) {

    const isMobile = useMediaQuery({ query: `(max-width: 769px)` });

    const handleOnClickBurger = () => {
        onClickHamburger(isNavigationOpened);
    }

    React.useEffect(() => {
        if (!isMobile && isNavigationOpened) {
            onClickHamburger(true);
        }
    }, [isMobile, isNavigationOpened, onClickHamburger]);

    return (
        <button
            type='button'
            className={`hamburger hamburger_${isNavigationOpened ? 'on' : 'off'}`}
            onClick={handleOnClickBurger}>
        </button>
    )
}

export default Hamburger;