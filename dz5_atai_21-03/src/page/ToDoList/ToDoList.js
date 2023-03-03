import React, { useEffect, useState } from 'react'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import Modal from '../../components/Modal/Modal'
import List from '../../components/List/List'
import Select from '../../components/Select/Select'
import ToDoCard from '../../components/ToDoCard/ToDoCard'
import classes from './todolist.module.css'
const getTasksFromLocalStorage = () => {
  const tasks = localStorage.getItem('tasks');
  return tasks ? JSON.parse(tasks) : []
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
  const [listOfTasks,setListOfTask] = useState(getTasksFromLocalStorage())
  const [valueOfSelect,setValueOfSelect] = useState('1')
  const optionsNames = [
    {id: 1,name: 'All tasks'},{id: 2,name: 'Undone tasks'},{id: 3,name: 'Done tasks'}
  ]
  const options = optionsNames.map((options) => {
    return <option key={options.id} value={options.id}>{options.name}</option>
  })
  useEffect(()=>{
    saveTasksToLocalStorage(listOfTasks)
  },[listOfTasks])
  const delFromLocalStorage = () => {
    localStorage.clear()
    setListOfTask(getTasksFromLocalStorage())
  }
  const showOrHide = () =>{
    setIsShow(!isShow);
    console.log(isShow)
  }
  const addTask = (listOfTasks, add) => {
    let copy = Object.assign([],listOfTasks);
    listOfTasks.length >= 1 ? copy.push({id: listOfTasks[listOfTasks.length-1].id+1,completed: false, task: add}) : copy.push({id: listOfTasks.length+1,completed: false, task: add})
    setListOfTask(copy);
    // saveTasksToLocalStorage(copy)
    showOrHide();
  }
  useEffect(() => {
    console.log(valueOfSelect)
  },[valueOfSelect])
  const removeTask = (id) => {
    const delFilter = listOfTasks.filter(del => del.id !== id)
    setListOfTask(delFilter)
    // saveTasksToLocalStorage(delFilter)
  } 
  const filteredTasks =listOfTasks.filter(list => {return list.task.toLowerCase().includes(search.toLowerCase())})
  const filteredUndoneTasks =  listOfTasks.filter(list =>{
    if(list.completed === false){return list.task.toLowerCase().includes(search.toLowerCase())}
  })
  const filteredDoneTasks =  listOfTasks.filter(list =>{
    if(list.completed === true){return list.task.toLowerCase().includes(search.toLowerCase())}
  })  
  const done = (id) => {
    const currentIndex = listOfTasks.findIndex((todo) => todo.id === id);
    listOfTasks[currentIndex].completed = !listOfTasks[currentIndex].completed
    setListOfTask([...listOfTasks]) 
    // saveTasksToLocalStorage(listOfTasks)
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
    // saveTasksToLocalStorage(editList);
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
        <Select valueOfSelect={valueOfSelect} setValueOfSelect={setValueOfSelect}>{options}</Select>
        {valueOfSelect === '1' && <div>
          <h2>All Tasks</h2>
          <List list={filteredTasks} done={done} del= {removeTask} currentEdit={currentEdit} edit={editTasks} changeCurrentEdit ={changeCurrentEdit} cancelEdit={cancelEdit}/>
        </div>}
        {valueOfSelect === '2' && <div>
          <h2>In progress</h2>
          <List list={filteredUndoneTasks} done={done} del= {removeTask} currentEdit={currentEdit} edit={editTasks} changeCurrentEdit ={changeCurrentEdit} cancelEdit={cancelEdit}/>
        </div>}
        {valueOfSelect === '3' && <div>
          <h2>Completed tasks</h2>
          <List list={filteredDoneTasks} done={done} del= {removeTask} currentEdit={currentEdit} edit={editTasks} changeCurrentEdit ={changeCurrentEdit} cancelEdit={cancelEdit}/>  
        </div>}
        <Button event={delFromLocalStorage} classBtn='removeAll'>Remove all Tasks</Button>
    </div>
  )
}

export default ToDoList