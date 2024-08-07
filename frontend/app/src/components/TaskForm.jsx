// src/components/TaskForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ fetchTasks, toggleTaskForm }) => {
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [taskTime, setTaskTime] = useState('');

  const handleTaskSubmit = async (e) => {
    e.preventDefault();
    try {
      const newTask = {
        task_description: taskDescription,
        due_date: taskDate,
        reminder_time: taskTime,
        status: 'pending',
      };
      await axios.post('http://localhost:8000/api/tasks/', newTask, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      fetchTasks();
      setTaskDescription('');
      setTaskDate('');
      setTaskTime('');
      toggleTaskForm();
    } catch (error) {
      console.error('Error adding task:', error.response?.data || error.message);
    }
  };

  return (
    <form className="form-container active" onSubmit={handleTaskSubmit}>
      <input
        type="text"
        placeholder="Enter task description"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        required
      />
      <input
        type="date"
        value={taskDate}
        onChange={(e) => setTaskDate(e.target.value)}
        required
      />
      <input
        type="time"
        value={taskTime}
        onChange={(e) => setTaskTime(e.target.value)}
        required
      />
      <button type="submit">Submit Task</button>
    </form>
  );
};

export default TaskForm;
