import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState, useEffect } from 'react'
import AddTask from "./components/AddTask";

function App() {

  const [showAddTask, setShowAddTask] = useState(false)
  
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async() => {
      const tasksFromServer = await fetchTask()
      setTasks(tasksFromServer)
    }
    getTasks();
  },[])

  
    // fetch tasks
    const fetchTask = async() => {
      const res = await fetch('http://localhost:5000/tasks');
      const data = res.json();
      return data
    }

    // add task
    const addTask = async (task) => {
      // const id = Math.floor(Math.random() * 1000) + 1; 
      // console.log(id)
      // const newTask = {id, ...task}
      // setTasks([...tasks, newTask])

      const res = await fetch(`http://localhost:5000/tasks`, {method: 'POST', headers:{
        'Content-type': 'application/json'
      },
      body:JSON.stringify(task)
    })
    const data = await res.json();
    setTasks([...tasks, data])
    }

    // delete task
    const deleteTask = async (id) => {
      await fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE'})
      console.log('delete', id)
      setTasks(tasks.filter((task) => task.id !== id ))
    }

    // toggle reminder
    const toggleReminder = (id) => {
      console.log('reminder' , id)
      setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
    }



  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
     { showAddTask && <AddTask onAdd ={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'There is no tasks!'}
    </div>
  );
}

export default App;
