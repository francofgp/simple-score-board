
import { BsPlay, BsPause, BsStop } from 'react-icons/bs'
import { useTimer } from 'react-timer-hook'

const Timer = ({ maxMinutes }) => {

  function initialTime() {
    const time = new Date()
    time.setSeconds(time.getSeconds() + 60 * maxMinutes)
    return time
  }

  const {
    seconds,
    minutes,
    isRunning,
    start,
    pause,
    restart,
  } = useTimer({ autoStart: false, expiryTimestamp: initialTime(), onExpire: () => console.warn('onExpire called') })

  const formatTime = (time) => (time < 10 ? `0${time}` : time);


  return (
    <div /* className="timer" */>
      <div className='time-container'>
        <span>{formatTime(minutes)}</span>:<span>{formatTime(seconds)}</span>
      </div>
      <p>{isRunning ? '🏃' : '🛑'}</p>
      <button onClick={start} className="btn" title='Comenzar'><BsPlay /></button>
      <button onClick={pause} className="btn" title='Pausar'><BsPause /></button>
      <button onClick={() => restart(initialTime(), false)} className="btn" title='Reiniciar'><BsStop /></button>
    </div>
  );
}

export default Timer