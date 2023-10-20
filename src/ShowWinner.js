import React from "react";
import { BiReset } from 'react-icons/bi'

const Winner = ({winner,closeModal}) => {
    return <div className='winner'>
        <h1>ganador: {winner}</h1>
        <button onClick={closeModal} className='btn btn-reset' title="Volver al juego"><BiReset/></button>
    </div>
} 

export default Winner 