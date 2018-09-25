import React from 'react'
import './navbar.css'
import Counter from '../counter'

const Navbar = props => (
  <nav className="header">
    Clicky Game
    <Counter count={props.count}/>
  </nav>
)

export default Navbar;