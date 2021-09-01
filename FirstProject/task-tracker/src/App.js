// import React from "react";
import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const[showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
    id: 1,
    text: 'Task 1',
    day: '1.1.2000',
    reminder: true
    },
    {
    id: 2,
    text: 'Task 2',
    day: '1.3.2000',
    reminder: false
    },
    {
    id: 3,
    text: 'Task 3',
    day: '1.2.2000',
    reminder: true
    }
  ])

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  //Delete Task
  const deleteTask = (id) => {
    //console.log('delete', id)
    setTasks(tasks.filter((task) => 
      task.id !== id
    ))
  }

  //Toggle reminder - show green border
  const toggleReminder = (id) => {
    //console.log('reminder', id)
    setTasks(tasks.map(
      (task) => task.id === id ? {...task, reminder: !task.reminder} : task
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
