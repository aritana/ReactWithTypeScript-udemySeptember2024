import React from 'react'

const Task = ({ task, onRemove, onToggleTaskDone }) => {
 
  const estilo = {
    textDecoration: task.done? "line-through" :"none"
  }

  return (
    <li>
      <span onClick={onToggleTaskDone} style={estilo}>{task.text}</span>
      <button onClick={onRemove}>Remover</button>
    </li>
  )
}

export default Task