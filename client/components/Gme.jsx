import React from 'react'
import {Link} from 'react-router-dom'
const Gme = (props) => {
  return (
    <div className="Gme">
      <h1 className="pageHeader">EZMunny.Com</h1>
      <h2 className="Gme-header">Gamestonks Corporation</h2>
      <p>$420.69 USD at close 28 Jan at 16:20 </p>
      <p>Amount to invest</p>
      <form>
      <span className="currencyinput">$<input placeHolder="420.69" className="currencyInput" min="420" type="number" onChange={event => props.setValue(event.target.value)}/>USD</span>
      <p>Estimated Wallet: Your First Born's University Savings</p>
      <button className="yolo-button"><Link to={'/moon'}>Yolo</Link></button>
      </form>
    </div>
  )
}

export default Gme
