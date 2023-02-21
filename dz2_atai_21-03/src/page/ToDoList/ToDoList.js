import React, { useState } from 'react'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import Modal from '../../components/Modal/Modal'
import List from '../../components/List/List'
import classes from './todolist.module.css'
const ToDoList = () => {
  const [isShow, setIsShow] = useState(false);
  // const [newTask, setNewTask] = useState('');
  const [search, setSearch] = useState('');
  const [add, setAdd] = useState('');
  const showOrHide = () =>{
    setIsShow(!isShow);
    console.log(isShow)
  }
  // id = listOfTasks[listOfTasks.length-1].id + 1
  const [listOfTasks,setListOfTask] = useState([
    {
        id:1 , 
        task: 'coding'
    },
    {
        id:2,
        task: 'eat'
    },
    {
        id:3,
        task: 'sleep'
    }
  ])
  const addTask = (listOfTasks, add) => {
    let copy = Object.assign([],listOfTasks);
    copy.push({id: listOfTasks[listOfTasks.length-1].id+1, task: add});
    setListOfTask(copy)
    console.log(listOfTasks)
  }
  const filteredTasks =  listOfTasks.filter(list =>{
    return list.task.toLowerCase().includes(search.toLowerCase())
  })
  return (
    <div className={classes.wrapper}>
        <List list = {filteredTasks}/>
        <Button event = {showOrHide}>
            Add
        </Button>
        <input type="text" onChange={(event) => setSearch(event.target.value.toLowerCase())}/>
        {isShow && <Modal event = {showOrHide}>
          <p>{add}</p>
          <input type="text" onChange={(event) => setAdd(event.target.value.toLowerCase())} />
          <Button event={() => addTask(listOfTasks, add)}>Add Task</Button>
          <Button event = {showOrHide}>
            close
          </Button>
        </Modal>}
    </div>
  )
}

export default ToDoList