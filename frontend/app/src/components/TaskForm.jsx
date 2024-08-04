import React, { useState } from 'react'
import axios from 'axios'

const TaskForm = ({ fetchTasks }) => {
  const [taskDescription, setTaskDescription] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [reminderTime, setReminderTime] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:8000/api/tasks/', { task_description: taskDescription, due_date: dueDate, reminder_time: reminderTime })
      setTaskDescription('')
      setDueDate('')
      setReminderTime('')
      fetchTasks()
    } catch (error) {
      console.error('Error creating task:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        placeholder="Enter task description"
        required
      />
      <input
        type="datetime-local"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <input
        type="datetime-local"
        value={reminderTime}
        onChange={(e) => setReminderTime(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  )
}

export default TaskForm
