import React from 'react'
import Board from './Board'

function App() {

  return (
    <main className='page'>
      <header className='header'>
        <h1>Scoreboard</h1>
      </header>
      <div className='boards-container'>
        <Board scoreBoard={1} />
      </div>
      <footer className='footer'>
        Designed By <a href='https://github.com/francofgp'><b>Phyros</b></a>
      </footer>
    </main>
  )
}

export default App;
