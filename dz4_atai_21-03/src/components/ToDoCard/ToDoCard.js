import React, { useState } from 'react'
import editIcon from '../../assets/images/edit-icon.svg'
import classes from './todoCard.module.css'
import Button from '../Button/Button'
import Input from '../Input/Input'
function ToDoCard({todo,done,del,changeCurrentEdit,currentEdit,edit,cancelEdit}) {
    const [isTap, changeTap] = useState(false)
    const tap = () => changeTap(!isTap)
    const [newTask, setNewTask] = useState(todo.task);
    const editTask = (event) => {
      setNewTask(event.target.value)
    }
  if(currentEdit){
    return (<div className={todo.completed ? [ classes.doneCard ] : classes.todoCard}>
            <Input placeholder={'Task edit...'} value={newTask} onChange={editTask}/>
            <Button classBtn='editButton' event={() => edit({id: todo.id, task: newTask, completed: todo.completed})}>Ok</Button>
            <Button classBtn='editButton' event={() => cancelEdit()}>Cancel</Button>
        </div>)
  }return (
        <div className={classes.wrapperCard}>
          <div className={todo.completed ? [ classes.doneCard ] : classes.todoCard} onClick={tap}>
            <h3>{todo.task}</h3>
            {isTap && <div className={classes.funcBtns}>
                <Button classBtn='doneButton' event={() => done(todo.id)}>Done</Button>
                <Button classBtn='deleteButton' event={() => del(todo.id)}>Delete</Button>
                <Button classBtn='editButton' event={() => changeCurrentEdit(todo.id)}>Edit{<img src={editIcon} width='20px' height='20px'/>}</Button>
            </div>}
        </div>
        </div>
  )
}
export default ToDoCard