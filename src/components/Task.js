import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {
  return (

    //${} condition
    // if task.reminder is true
    //add reminder class otherwise '' do nothing
    //it's fine to use task.reminder ? 'reminder' : ''
    //but added === true to make it clear
    <div className={`task ${task.reminder === true ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
      <h3>
          {task.text}
          <FaTimes style={{color: 'red', cursor: 'pointer'}} 
          onClick={() => onDelete(task.id)}
          />
      </h3> 
      <p>{task.day}</p>

    </div>
  )
}

export default Task
