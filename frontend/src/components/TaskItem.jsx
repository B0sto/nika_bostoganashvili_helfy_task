import React from 'react'
import "../styles/TaskItem.css"
import { openModal } from './Modal'

const TaskItem = ({ task, onDeleteTask }) => {

  return (
    <div className={`taskItem ${task.completed ? "completed" : ""}`}>
      <div className="taskHeader">
        <h3 className={`taskTitle ${task.completed ? "completed" : ""}`}>
          {task.title}
        </h3>

        <span className={`priorityBadge priority-${task.priority}`}>
          {task.priority}
        </span>
      </div>

      <p className={`taskDescription ${task.completed ? "completed" : ""}`}>
        {task.description}
      </p>

      <div className="taskStatus">
        <input type="checkbox" checked={task.completed} />
        <span>{task.completed ? "Completed" : "Pending"}</span>
      </div>

      <div className="taskActions">
        <button className='btnEdit'>Edit</button>
        <button className='btnDelete' onClick={() => onDeleteTask(task)}>Delete</button>
        
      </div>

    </div>
  )
}

export default TaskItem