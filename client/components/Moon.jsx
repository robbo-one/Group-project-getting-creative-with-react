import React, { useEffect } from 'react'
import ReactPlayer from "react-player"

const Moon = (props) => {
  console.log(props.value)
  return (
  <div className="Moon">
      <div className="moonContainer">
      <h1>See you on the moon! </h1>
      <h2>You yeeted {props.value} dollars into GME!</h2>
      <h3>Expected return: {props.value * 10000} </h3>
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
