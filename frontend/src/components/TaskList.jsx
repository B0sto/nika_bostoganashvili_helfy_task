import React, { useEffect, useState } from 'react'
import TaskItem from './TaskItem';

const TaskList = ({ tasks }) => {

    return (
        <div className='taskList'>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task}/>
            ))}
        </div>
    )
}

export default TaskList