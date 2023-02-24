import React, { useState } from 'react'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import Modal from '../../components/Modal/Modal'
import List from '../../components/List/List'
import ToDoCard from '../../components/ToDoCard/ToDoCard'
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
        completed: false,
        task: 'coding'
    },
    {
        id:2,
        completed: false,
        task: 'eat'
    },
    {
        id:3,
        completed: false,
        task: 'sleep'
    }
  ])
  const addTask = (listOfTasks, add) => {
    let copy = Object.assign([],listOfTasks);
    copy.push({id: listOfTasks.length+1,completed: false, task: add});
    setListOfTask(copy)
    showOrHide();
  }
  const removeTask = (id) => {
    const delFilter = listOfTasks.filter(del => del.id !== id)
    setListOfTask(delFilter)
  } 
  const filteredTasks =  listOfTasks.filter(list =>{
    return list.task.toLowerCase().includes(search.toLowerCase())
  })
  const done = (id) => {
    const currentIndex = listOfTasks.findIndex((todo) => todo.id === id);
    listOfTasks[currentIndex].completed = !listOfTasks[currentIndex].completed
    setListOfTask([...listOfTasks]) 
    console.log(listOfTasks);
  }
  const searchInp = (event) => setSearch(event.target.value.toLowerCase())
  const addInp =(event) => setAdd(event.target.value.toLowerCase())
  return (
    <div className={classes.wrapper}>
        {/* <List list = {filteredTasks}/> */}
        <Button event = {showOrHide} classBtn ='addButton'>
            Add
        </Button>
        <Input 
          onChange={searchInp}
          placeholder={'Search task...'}
        />
        {isShow && <Modal event = {showOrHide}>
          <p>{add}</p>
          <Input 
            onChange={addInp}
            placeholder={'Add task...'}
          />
          <Button event={() => addTask(listOfTasks, add) } classBtn ='addButton'>Add Task</Button>
          <Button event = {showOrHide} classBtn ='addButton'>
            Close
          </Button>
        </Modal>}
        <List list={filteredTasks} done={done} del= {removeTask}/>  
    </div>
  )
}

export default ToDoList