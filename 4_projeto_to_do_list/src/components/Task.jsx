import React from 'react'

const Task = ({task,onRemove}) => {
  return (
    <li>
        <span>{task.text}</span>
        <button onClick={onRemove}>Remover</button>
    </li>
  )
}

export default Task