import './NotFound.css';
import { useHistory } from 'react-router-dom';

function NotFound() {

    const history = useHistory();

    function handleGoBack() {
        history.goBack();
    };

    return (
        <main className='notfound'>
            <h2 className='notfound__error'>404</h2>
            <p className='notfound__descr'>Страница не найдена</p>
            <button
                type='button'
                className='notfound__button'
                onClick={handleGoBack}>
                Назад
            </button>
        </main>
    )
}

export default NotFound;