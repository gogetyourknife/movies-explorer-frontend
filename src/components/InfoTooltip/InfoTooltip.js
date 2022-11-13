import ok from '../../images/auth/ok-icon.svg'
import fail from '../../images/auth/fail-icon.svg'

function InfoTooltip(props) {

    function handleCloseOnOverlay(evt) {
        evt.stopPropagation();
    }

    return (
        <div
            className={`popup ${props.isOpen ? 'popup_opened' : ''}`}
            onClick={props.onClosePopup}>

            <div onClick={handleCloseOnOverlay} className='popup__wrapper'>
                <button onClick={props.onClose} aria-label="Закрыть" type="button" className="popup__close-button"></button>
                <img
                    className='popup__res-image'
                    alt='Ответ от сервера'
                    src={props.isRespond ? ok : fail}
                />
                <h2 className="popup__title-res">{props.isRespondMessage}</h2>
            </div>

        </div >
    )
}

export default InfoTooltip;
