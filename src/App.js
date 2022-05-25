//useEffect use to make something happen when the page loads

import React from 'react'

import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import Header from './components/Header'
import Footer from './components/Footer'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import About from './components/About'
import SimpleSlider from './components/SimpleSlider'
//import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function App() {

  const [showAddTask, setShowAddTask] = useState(false) //Use in AddTask button, for boolean to check if Add form is visible or not
  const [tasks, setTasks] = useState([])

  //used to fetch data from json database
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
    //dependency array [] <-- research
  }, [])

  //fetch data // FETCH ALL TASK
  //research what async can do
  const fetchTasks = async () => {
    //learn why await
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }

  //fetch data //FETCH ONE DATA
  const fetchTask = async (id) => {
    //learn why await
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  }


  //Add Task //check what async is for
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      //learn more about this
      headers: {
        'Content-type': 'application/json'
      },
      //turn from javascript object to JSON string // learn more
      body: JSON.stringify(task)
    })

    const data = await res.json()
    setTasks([...tasks, data])

    /*const id = Math.floor(Math.random() * 10000) + 1
    //console.log(task)
    //get the ...task get the content of task from AddTask.js Submit
    const newTask = { id, ...task }
    //...tasks means to leave the content as is
    setTasks([...tasks, newTask])*/
  }

  //Delete Task
  const deleteTask = async (id) => {
    //delete from server
    //no need to set variable(const) because we are not getting any data back
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })

    //setTasks is the state array || learn more about "filter"
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = {
      ...taskToToggle,
      reminder: !taskToToggle.reminder
    }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask)
    })


    //updated task
    const data = await res.json()

    //setTasks (from state), tasks.map() => for looping
    //(task) is a variable
    //if task.id is equal to id(passed from double click)
    // id reminder: !task.reminder change to opposite 
    // : task is do nothing
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: data.reminder } : task))
  }

  return (
    <Router>
      <div>
        <div className='container'>
          {/* {onAdd pass to Header.js} */}

          <SimpleSlider />

          <Header onAdd={
            /* function setShowAddTask state change the value of showAddTask to ! <- false */
            () => setShowAddTask(!showAddTask)
          }
            /* pass */
            showAdd={showAddTask}
          />

          {/* if showAddTask is true show addtask button  <AddTask onAdd={addTask} /> */}


          {/* Different from tutorial
            More info: https://stackoverflow.com/questions/69832748/error-error-a-route-is-only-ever-to-be-used-as-the-child-of-routes-element
             */}
          <Routes>
            <Route path='/' element={
              <>
                {showAddTask && <AddTask onAdd={addTask} />}
                {tasks.length > 0 ?
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                  />
                  : 'No Task to Show'}
              </>

            } />

            <Route path='/about' element={<About />} />
          </Routes>

          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
