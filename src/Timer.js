import React, { useState, useEffect } from 'react';
import { BsPlay, BsPause, BsStop } from 'react-icons/bs';
import { useTimer } from 'react-timer-hook';

const Timer = ({ maxMinutes }) => {
  function initialTime() {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 60 * maxMinutes);
    return time;
  }

  const {
    seconds,
    minutes,
    isRunning,
    start,
    pause,
    restart,
    resume, // Agregamos la función resume
  } = useTimer({ autoStart: false, expiryTimestamp: initialTime(), onExpire: () => console.warn('onExpire called') });

  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  // Agregar un manejador de eventos de teclado
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === ' ') {
        // Barra espaciadora: Iniciar, pausar o reanudar el reloj
        if (isRunning) {
          pause();
        } else {
          if (seconds > 0 || minutes > 0) {
            resume();
          } else {
            start();
          }
        }
      } else if (event.key === 'r' || event.key === 'R') {
        // Tecla "R": Reiniciar el reloj
        restart(initialTime(), false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isRunning]);

  return (
    <div /* className="timer" */>
      <div className='time-container text-scale-half'>
        <span>{formatTime(minutes)}</span>:<span>{formatTime(seconds)}</span>
      </div>
      <p>{isRunning ? '🏃' : '🛑'}</p>
      <button onClick={start} className="btn" title='Comenzar'><BsPlay /></button>
      <button onClick={pause} className="btn" title='Pausar'><BsPause /></button>
      <button onClick={() => restart(initialTime(), false)} className="btn" title='Reiniciar'><BsStop /></button>
    </div>
  );
}

export default Timer;