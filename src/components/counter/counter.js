import React from 'react'
import './counter.css'

const Counter = props => (
  <span className="counter">
    Score: {props.count} | Top Score: {props.highscore}
  </span>
)

export default Counter