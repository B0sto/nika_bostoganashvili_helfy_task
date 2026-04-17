import React from 'react'

const TaskItem = ({ task }) => {

  return (
    <div>
        <p>{task.title}</p>
        <p>{task.description}</p>
        <p>{task.completed}</p>
        <p>{task.createdAt}</p>
        <p>{task.priority}</p>
    </div>
  )
}

export default TaskItem