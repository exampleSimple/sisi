import React from 'react'
import classes from './list.module.css'
function List({list}) {
  return (
    <div className={classes.list}>{list.map((el)=> <li key={el.id}>{el.task}</li>)}</div>
  )
}

export default List