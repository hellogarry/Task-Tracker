import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false) //Use in AddTask button
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'Doctor Appointment',
        day: 'Feb 5th at 2:30 pm',
        reminder: true,
      },
      {
        id: 2,
        text: 'Dog Vet Appointment',
        day: 'Feb 6th at 1:30 pm',
        reminder: true,
      },
      {
        id: 3,
        text: 'Grocery Shopping',
        day: 'Feb 8th at 7:30 am',
        reminder: false,
      },
      {
        id: 4,
        text: 'Bills Payment',
        day: 'Feb 11th at 4:30 pm',
        reminder: true,
      },
    ]
  )

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1

    //console.log(task)
    //get the ...task get the content of task from AddTask.js Submit
    const newTask = { id, ...task }
    //...tasks means to leave the content as is
    setTasks([...tasks, newTask])
  }

  //Delete Task
  const deleteTask = (id) => {
    //setTasks is the state array || learn more about "filter"
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    //setTasks (from state), tasks.map() => for looping
    //(task) is a variable
    //if task.id is equal to id(passed from double click)
    // id reminder: !task.reminder change to opposite 
    // : task is do nothing
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      {/* {onAdd pass to Header.js} */}
      <Header onAdd={
        /* function setShowAddTask state change the value of showAddTask to ! <- false */
        () => setShowAddTask(!showAddTask)
      }
      /* pass */
      showAdd={showAddTask}
       />

      {/* if showAddTask is true show addtask button  <AddTask onAdd={addTask} /> */}
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ?
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder}
        />
        : 'No Task to Show'}
    </div>
  );
}

export default App;
