import TaskInput from "./components/TaskInput"
import TaskList from "./components/TaskList"
import { useState, useEffect } from "react"

function App() {

  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, done: false }]);

    //localStorage
  }

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <>
      <h1>Lista de Tarefas</h1>
      <TaskInput onAddTask={addTask}/>
      <TaskList tasks={tasks} onRemovetask={removeTask}/>
    </>
  )
}

export default App
