import React from 'react'
import classes from './list.module.css'
import ToDoCard from '../ToDoCard/ToDoCard'
function List({list,done, del,edit,currentEdit,changeCurrentEdit,cancelEdit}) {
  return (
    <div className={classes.list}>
      {list.map((todo) => 
        <ToDoCard 
          key={todo.id}
          todo={todo}
          done={done}
          del={del}
          edit={edit}
          currentEdit = {todo.id === currentEdit}
          changeCurrentEdit = {changeCurrentEdit}
          cancelEdit = {cancelEdit}
        />
      )}
    </div>
  ) 
}

export default List