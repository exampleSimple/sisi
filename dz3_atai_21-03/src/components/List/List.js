import React from 'react'
import classes from './list.module.css'
import ToDoCard from '../ToDoCard/ToDoCard'
function List({list,done, del}) {
  return (
    <div className={classes.list}>
      {list.map((todo) => 
        <ToDoCard 
          key={todo.id}
          todo={todo}
          done={done}
          del={del}
        />
      )}
    </div>
  ) 
}

export default List