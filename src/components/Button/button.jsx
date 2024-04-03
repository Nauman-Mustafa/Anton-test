import React from 'react'
import "./button.css"

function Button({ onClick }) {
  return (
    <div>
      <button className='done-button' onClick={onClick}>Done</button>
    </div>
  )
}

export default Button