import React from 'react'
import classes from './select.module.css'

function Select({children,valueOfSelect,setValueOfSelect}) {
  return (
    <select className={classes.select} value={valueOfSelect} onChange={event => setValueOfSelect(event.target.value)}>
        {children}
    </select>
  )
}

export default Select