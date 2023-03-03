import React from 'react'
import classes from './input.module.css'
function Input({onChange,placeholder,value}) {
  return (
    <input type="text" className={classes.add} onChange={onChange} placeholder={placeholder} value={value}/>
  )
}

export default Input