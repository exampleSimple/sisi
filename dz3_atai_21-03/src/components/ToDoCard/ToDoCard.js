import React, { useState } from 'react'
import classes from './todoCard.module.css'
import Button from '../Button/Button'
function ToDoCard({todo,done,del}) {
    const [isTap, changeTap] = useState(false)
    const tap = () => changeTap(!isTap)
  return (
    // <div className={classes.wrapperCard}>
        <div className={todo.completed ? [ classes.doneCard ] : classes.todoCard} onClick={tap}>
            <h3>{todo.task}</h3>
            {isTap && <div className={classes.funcBtns}>
                <Button classBtn='doneButton' event={() => done(todo.id)}>Done</Button>
                <Button classBtn='deleteButton' event={() => del(todo.id)}>Delete</Button>
            </div>}
        </div>
    // </div>
  )
}

export default ToDoCard