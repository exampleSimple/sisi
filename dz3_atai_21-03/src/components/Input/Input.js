import React from 'react'
import classes from './input.module.css'
function Input({onChange,placeholder}) {
  return (
    <input type="text" className={classes.add} onChange={onChange} placeholder={placeholder}/>
  )
}

export default Input