import './Hamburger.css';
import { useMediaQuery } from 'react-responsive';
import { useEffect } from 'react';

function Hamburger({ isNavigationOpened, onClickHamburger }) {

    const isMobile = useMediaQuery({ query: `(max-width: 769px)` });

    const handleOnClickHamburger = () => {
        onClickHamburger(isNavigationOpened);
    }

    useEffect(() => {
        if (!isMobile && isNavigationOpened) {
            onClickHamburger(true);
        }
    }, [isMobile, isNavigationOpened, onClickHamburger]);

    return (
        <button
            type='button'
            className={`hamburger hamburger_${isNavigationOpened ? 'on' : 'off'}`}
            onClick={handleOnClickHamburger}>
        </button>
    )
}

export default Hamburger;