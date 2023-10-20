import React, { useState } from 'react'
import { BiUpArrow, BiDownArrow , BiReset} from 'react-icons/bi'

const Team = ({team,incrementPoints,decrementPoints,resetPoints}) => {
    const [areButtonsVisible,setButtonsVisible] = useState(false)
    return (
        <div className="team-container"
            onMouseEnter={()=>setButtonsVisible(true)}
            onMouseLeave={()=>setButtonsVisible(false)}
        >
        { areButtonsVisible ? 
            <div>
                <h2 className='team-points'>{team.points}</h2>
                <div className="team-btn-container">
                    <button onClick={incrementPoints} className='btn' title='Incrementar un punto'><BiUpArrow/></button>
                    <button onClick={decrementPoints} className='btn' title='Decrementar un punto'><BiDownArrow/></button>
                    <button onClick={resetPoints} className='btn' title='Levar puntos a cero (0)'><BiReset/></button>
                </div> 
            </div>
            : <h2 className='team-points'>{team.points}</h2>
            }
            <h3 className="team-name">{team.name}</h3>
        </div>
    )
}

export default Team