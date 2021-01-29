import React from 'react'
import Nav from './Nav'
import ReactPlayer from "react-player"

const Rob = () => {
 
  const chopper = new Audio("https://bigsoundbank.com/UPLOAD/mp3/0263.mp3")
  const fart = new Audio("https://bigsoundbank.com/UPLOAD/mp3/0241.mp3")
  

  function onClick() {
    chopper.load()
    chopper.play()
  }

  function eject() {
    fart.load()
    fart.play()
  }

  return (
    <div className="rob">
      <div id="jimi">
       <ReactPlayer height="100px;" width="100px" playing="true"
        url="https://soundcloud.com/alexander-austere/jimi-hendrix-purple-haze"
      />
      </div>
    {/* <Nav /> */}

    <h2> <a class="robTitle"
    href="/">A L T 3000 ^</a>
    </h2>
    <img className="chopper" src="https://wallpapertag.com/wallpaper/full/f/2/3/729594-cockpit-wallpapers-2560x1600-for-ipad.jpg"/>

    <button class="start"  onClick={onClick}>Engine Start</button>
    <button class="eject"  onClick={eject}>EJECT</button>
    
    {/* <button> <a href='http://google.com'   type="button">Engine start</a>
    </button> */}
    {/* <button type="button">Click Me!</button>
    <button type="button">Click Me!</button>
    <button type="button">Click Me!</button>
    <button type="button">Click Me!</button>
    <button type="button">Click Me!</button> */}

    </div>
  )
}

export default Rob
