import React, { useEffect, useState } from 'react'
import TaskItem from './TaskItem';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    

    return (
        <div>
            {tasks.map((task) => (
                <TaskItem task={task}/>
            ))}
        </div>
    )
}

export default TaskList