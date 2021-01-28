import React from 'react'


const Rob = () => {
 
  function onClick() {
  window.location.href="http://google.com"
  }

  function eject() {
    window.location.href="http://google.com"
  }

  return (
  <div className="rob">

    <h2> <a class="robTitle"
    href="http://google.com">A L T 3000 ^</a>
    </h2>

    <button class="start"  onClick={onClick}>Engine Start</button>
    <div><button class="eject"  onClick={eject}>EJECT</button></div>
    
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
