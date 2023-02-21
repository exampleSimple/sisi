import React from 'react'
import classes from './button.module.css'
const Button = ({children, event}) => {
  return (
    <button onClick ={event} className={classes.addButton}>{children}</button>
  )
}

export default Button