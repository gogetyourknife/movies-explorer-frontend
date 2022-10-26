import React from 'react';
import './Hamburger.css'
import { useMediaQuery } from 'react-responsive';

function Hamburger(isNavOpened, onClickHamburger) {
    const isMobile = useMediaQuery({ query: `max-width: 769px` });

    function handleClickOnHamburger(onClickHamburger) {
        onClickHamburger();
    };

    React.useEffect(() => {
        if (!isMobile && isNavOpened) {
            onClickHamburger();
        }
    }, [isNavOpened, isMobile, onClickHamburger]);

    return (
        <button
            type='button'
            className={`hamburger hamburger_${isNavOpened ? 'on' : 'off'}`}
            onClick={handleClickOnHamburger}>

        </button>
    );
}

export default Hamburger;