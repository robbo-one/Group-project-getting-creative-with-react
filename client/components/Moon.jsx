import React, { useEffect } from 'react'
import ReactPlayer from "react-player"

const Moon = (props) => {

	let frankfuck = new Audio("")

    function playTune() {
        frankfuck.load()
        frankfuck.play()
    }

    useEffect(() => {
      playTune()
      }, []);

  return (
  <div className="Moon">
      <div className="moonContainer">
      <h1>See you on the moon!</h1>
      <img id="rocket" src="https://cdn.dribbble.com/users/279765/screenshots/1340162/rocketship.gif"></img>
      <div id = "frank">
      <ReactPlayer height="100px;" width="100px" playing="true"
        url="https://soundcloud.com/rodesnanda/frank-sinatra-fly-me-to-the"
        
      />
      </div>
      </div>
  </div>
  )
}

export default Moon
