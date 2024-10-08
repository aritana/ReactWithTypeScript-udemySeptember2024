import React from 'react'
import Task from './Task'


const TaskList = ({ tasks, onRemovetask }) => {
    return (
        <ul>
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    task={task}
                    onRemove={()=> onRemovetask(task.id)} />
            ))}
        </ul>
    )
}

export default TaskList
