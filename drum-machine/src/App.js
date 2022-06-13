import React from 'react'
import { bankOne } from './constants.js';
import './App.scss'

function App() {
  return (
    <div className='body'>
      <h2>drum machine</h2>

      {/* Map the sounds in the imported dictionary to the buttons that we will render*/}
      {bankOne.map((clip) => (<Pad key={clip.id} clip={clip} />))}
    </div>
  );
}

const Pad = ({ clip }) => {
  const playSound = () => {
    const bankOne = document.getElementById(clip.keyTrigger)

    // Set the audio to start from the beginning
    bankOne.currentTime = 0
    bankOne.play()
  }
  return (
    <div onClick={playSound} className='inner-container'>
      <audio className='clip' id={clip.keyTrigger} src={clip.url} />
      {clip.keyTrigger}
    </div>
  )
}

export default App