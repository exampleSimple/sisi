import React from 'react'
import classes from './button.module.css'
const Button = ({children, event, classBtn}) => {
  const log = () => console.log(classBtn)
  return (
    <button onClick ={event} className={classes[classBtn]}>{children}</button>
  )
}

export default Button