import React from 'react'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa' 
const Task = ({task, onDelete, onToggle}) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : '' }`} onDoubleClick={() => onToggle(task.id)}>
        <h3>{task.text} <FaTimes style={{color: 'red'}} onClick={() => onDelete(task.id)} /> </h3>
        <p>{task.day}</p>
        <p><Link className='task-link' to={`/task/${task.id}`}>View details</Link></p>
    </div>
  )
}

export default Task