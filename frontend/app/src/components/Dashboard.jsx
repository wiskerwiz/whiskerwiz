import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TaskForm from './TaskForm'
import TaskList from './TaskList'
import SymptomForm from './SymptomForm'
import SymptomList from './SymptomList'

const Dashboard = () => {
  const [tasks, setTasks] = useState([])
  const [symptoms, setSymptoms] = useState([])

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/tasks/')
      setTasks(response.data)
    } catch (error) {
      console.error('Error fetching tasks:', error)
    }
  }

  const fetchSymptoms = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/symptoms/')
      setSymptoms(response.data)
    } catch (error) {
      console.error('Error fetching symptoms:', error)
    }
  }

  useEffect(() => {
    fetchTasks()
    fetchSymptoms()
  }, [])

  return (
    <div>
      <h1>Dashboard</h1>
      <TaskForm fetchTasks={fetchTasks} />
      <TaskList tasks={tasks} />
      <SymptomForm fetchSymptoms={fetchSymptoms} />
      <SymptomList symptoms={symptoms} />
    </div>
  )
}

export default Dashboard
