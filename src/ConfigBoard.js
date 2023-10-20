import React from 'react'
import { BiReset } from 'react-icons/bi';
import { ImEnter } from 'react-icons/im'

const ConfigBoard = ({ setMaxPoints, setLocalName, setGuestName, setMaxTime, currentTime }) => {

    const validateInput = (e) => {
        e.preventDefault();
        const localName = e.target.local.value
        const guestName = e.target.guest.value
        const maxPoints = e.target.maxPoints.value
        const maxTime = e.target.maxTime.value
        if (localName && guestName && maxPoints && maxTime) {
            setMaxPoints(maxPoints)
            setLocalName(localName)
            setGuestName(guestName)
            setMaxTime(maxTime)
        }
    }
    const resetValues = () => {
        setMaxPoints(12)
        setLocalName('local')
        setGuestName('visitante')
        setMaxTime(25)
    }

    return <div className='config-container'>
        <form onSubmit={validateInput}>
            <div>local</div>
            <input type='text' name='local' defaultValue='local' minLength='3' maxLength="17" title='Nombre de equipo LOCAL' />
            <div>visitante</div>
            <input type='text' name='guest' defaultValue='visitante' minLength='3' maxLength='17' title='Nombre de equipo VISITANTE' />
            <div>Puntaje Máximo</div>
            <input type='number' defaultValue='12' min='1' max='99' step='1' name='maxPoints' className='max-points' title='Puntos para ganar partido' />
            <div>Tiempo Máximo</div>
            <input type='number' defaultValue={currentTime} min='1' max='59' step='1' name='maxTime' className='max-points' title='Duracion del Partido' />

            <div className='btn-config-container'>
                <button type='submit' className='btn btn-enter-config' title='Guardar datos'><ImEnter /></button>
                <button onClick={() => resetValues()} className='btn btn-reset-config' title='Restaurar datos'><BiReset /></button>
            </div>
        </form>
    </div>
}

export default ConfigBoard