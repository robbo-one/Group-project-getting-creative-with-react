import React, { useEffect } from 'react'

const Moon = (props) => {

    const frank = new Audio("https://bigsoundbank.com/UPLOAD/mp3/0112.mp3")

    function playTune() {
        frank.load()
        frank.play()
    }

    useEffect(() => {
      playTune()
      }, []);

  

  return (
  <div className="Moon">
      <div className="moonContainer">
      <h1>See you on the moon!</h1>
      <img id="rocket" src="https://cdn.dribbble.com/users/279765/screenshots/1340162/rocketship.gif"></img>
      </div>
  </div>
  )
}

export default Moon
