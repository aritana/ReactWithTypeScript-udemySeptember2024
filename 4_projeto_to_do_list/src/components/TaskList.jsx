import React from 'react'
import Task from './Task'


const TaskList = ({ tasks, onRemovetask, onToggleTaskDone }) => {
    return (
        <ul>
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    task={task}
                    onRemove={()=> onRemovetask(task.id)}
                    onToggleTaskDone = {()=> onToggleTaskDone(task.id)}
                    />
            ))}
        </ul>
    )
}

export default TaskList
