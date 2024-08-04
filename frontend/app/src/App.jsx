import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/tasks" element={<TaskList />} />
        <Route path="/tasks/new" element={<TaskForm />} />
      </Routes>
    </div>
  )
}

export default App
