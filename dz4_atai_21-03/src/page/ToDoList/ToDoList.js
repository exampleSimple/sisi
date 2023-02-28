import React, { useState } from 'react'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import Modal from '../../components/Modal/Modal'
import List from '../../components/List/List'
import ToDoCard from '../../components/ToDoCard/ToDoCard'
import classes from './todolist.module.css'
const getTasksFromLocalStorage = () => {
  const tasks = localStorage.getItem('tasks');
  return tasks ? JSON.parse(tasks) : [
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
  ];
}

const saveTasksToLocalStorage = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

const ToDoList = () => {
  const [isShow, setIsShow] = useState(false);
  // const [newTask, setNewTask] = useState('');
  const [search, setSearch] = useState('');
  const [add, setAdd] = useState('');
  const [currentEdit, setCurrentEdit] = useState();
  const showOrHide = () =>{
    setIsShow(!isShow);
    console.log(isShow)
  }
  // id = listOfTasks[listOfTasks.length-1].id + 1
  const [listOfTasks,setListOfTask] = useState(getTasksFromLocalStorage())
  const addTask = (listOfTasks, add) => {
    let copy = Object.assign([],listOfTasks);
    listOfTasks.length >= 1 ? copy.push({id: listOfTasks[listOfTasks.length-1].id+1,completed: false, task: add}) : copy.push({id: listOfTasks.length+1,completed: false, task: add})
    setListOfTask(copy);
    saveTasksToLocalStorage(copy)
    showOrHide();
  }
  const removeTask = (id) => {
    const delFilter = listOfTasks.filter(del => del.id !== id)
    setListOfTask(delFilter)
    saveTasksToLocalStorage(delFilter)
  } 
  const filteredTasks =  listOfTasks.filter(list =>{
    if(list.completed === false){return list.task.toLowerCase().includes(search.toLowerCase())}
  })
  const filteredDoneTasks =  listOfTasks.filter(list =>{
    if(list.completed === true){return list.task.toLowerCase().includes(search.toLowerCase())}
  })  
  const done = (id) => {
    const currentIndex = listOfTasks.findIndex((todo) => todo.id === id);
    listOfTasks[currentIndex].completed = !listOfTasks[currentIndex].completed
    setListOfTask([...listOfTasks]) 
    saveTasksToLocalStorage(listOfTasks)
    console.log(listOfTasks);
  }
  const editTasks = (editToDo) => {
    const editList = listOfTasks.map((todo) =>{
      if(todo.id === editToDo.id){
        return {...todo, task: editToDo.task}
      }
      return todo;
    })
    setListOfTask([...editList]);
    saveTasksToLocalStorage(editList);
    setCurrentEdit();
  }
  const changeCurrentEdit = (id) => {
    setCurrentEdit(id)
  }
  const cancelEdit=() => {
    setCurrentEdit()
  }
  const searchInp = (event) => setSearch(event.target.value.toLowerCase())
  const addInp =(event) => setAdd(event.target.value.toLowerCase())
  return (
    <div className={classes.wrapper}>
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
        <h2>In progress</h2>
        <List list={filteredTasks} done={done} del= {removeTask} currentEdit={currentEdit} edit={editTasks} changeCurrentEdit ={changeCurrentEdit} cancelEdit={cancelEdit}/>
        <h2>Completed tasks</h2>
        <List list={filteredDoneTasks} done={done} del= {removeTask} currentEdit={currentEdit} edit={editTasks} changeCurrentEdit ={changeCurrentEdit} cancelEdit={cancelEdit}/>  
    </div>
  )
}

export default ToDoList