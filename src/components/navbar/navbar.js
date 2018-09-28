import React from 'react'
import './navbar.css'
import Counter from '../counter'

const Navbar = props => (
  <nav className="header">
    <div className="row">
      <div className="col">
        <span id="title"><h1>Clicky Game</h1></span>
        <Counter count={props.count} highscore={props.highscore}/>
      </div>
    </div>
  </nav>
)

export default Navbar;