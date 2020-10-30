import React from 'react'
import "./Card.scss"
import logo from './logo.png'

function Card(props) {
    return (
       <div className="card">
           <div className="card1 item">
               <h1>Thank You</h1>
           </div>
           <div className="card2 item">
               <img className="logo" src={logo} alt="jpl logo"/>
               <h4>for the</h4>
           </div>
           <div className="card3 item">
               <h1>Opportunity</h1>
               <p className="signature"><i>With great admiration, <a href="https://www.nerdica.io/" target="_blank" rel="noreferrer">Demi Minjarez</a>  </i></p>
           </div>
       </div>
    )
}

export default Card
