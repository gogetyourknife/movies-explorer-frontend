import ok from '../../images/auth/ok-icon.svg'
import fail from '../../images/auth/fail-icon.svg'

function InfoTooltip(props) {

    function handleCloseOnOverlay(evt) {
        evt.stopPropagation();
    }

    return (
        <div
            className={`infotooltip ${props.isOpen ? 'infotooltip_opened' : ''}`}
            onClick={props.onClosePopup}>

            <div onClick={handleCloseOnOverlay} className='infotooltip__wrapper'>
                <button onClick={props.onClose} aria-label="Закрыть" type="button" className="infotooltip__close-button"></button>
                <img
                    className='infotooltip__res-image'
                    alt='Ответ от сервера'
                    src={props.isRespond ? ok : fail}
                />
                <h2 className="infotooltip__title-res">{props.isRespondMessage}</h2>
            </div>

        </div >
    )
}

export default InfoTooltip;
