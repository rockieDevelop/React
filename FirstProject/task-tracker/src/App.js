// import React from "react";
import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
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

  //Delete Task
  const deleteTask = (id) => {
    //console.log('delete', id)
    setTasks(tasks.filter((task) => 
      task.id !== id
    ))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : "No tasks available"}
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
