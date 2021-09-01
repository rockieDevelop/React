// import React from "react";
import { useState, useEffect } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const[showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  //useEffect runs at the pageload
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, []) //that empty array represents dependencies

  //Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:4000/tasks')
    const data = await res.json()
    //console.log(data)
    return data
  }

  //Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:4000/tasks/${id}`)
    const data = await res.json()
    //console.log(data)
    return data
  }

  //Add Task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:4000/tasks', 
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    const data = await res.json() //response is the task that was just created
    setTasks([...tasks, data])

    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = {id, ...task}
    // setTasks([...tasks, newTask])
  }

  //Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:4000/tasks/${id}`, {method: 'DELETE'})
    //console.log('delete', id)
    setTasks(tasks.filter((task) => 
      task.id !== id
    ))
  }

  //Toggle reminder - show green border
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder}

    const res = await fetch(`http://localhost:4000/tasks/${id}`,
      {
        method: 'PUT',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(updatedTask)
      }
    )
    const data = await res.json()

    //console.log('reminder', id)
    setTasks(tasks.map(
      (task) => task.id === id ? {...task, reminder: data.reminder} : task
      )
    )
  }

  return (
    //&& represents ternary operator without else state
    //showAddTask && <AddTask onAdd={addTask}/> = showAddTask ? <AddTask onAdd={addTask}/> : nothing
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : "No tasks available"}
    </div>
  );
}

//Usage of a class instead of a function
// class App extends React.Component{
//   render(){
//     return <h1>class</h1>
//   }
// }

export default App;
