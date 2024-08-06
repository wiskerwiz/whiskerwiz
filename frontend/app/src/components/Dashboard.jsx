// src/components/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import wizImage from '../assets/wiz.png';
import '../App.css';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [symptoms, setSymptoms] = useState([]);
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [showSymptomForm, setShowSymptomForm] = useState(false);
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [taskTime, setTaskTime] = useState('');
  const [symptomDescription, setSymptomDescription] = useState('');

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/tasks/');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const fetchSymptoms = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/symptoms/');
      setSymptoms(response.data);
    } catch (error) {
      console.error('Error fetching symptoms:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
    fetchSymptoms();
  }, []);

  const toggleTaskForm = () => setShowTaskForm(!showTaskForm);
  const toggleSymptomForm = () => setShowSymptomForm(!showSymptomForm);

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

  const handleSymptomSubmit = async (e) => {
    e.preventDefault();
    try {
      const newSymptom = {
        symptom_description: symptomDescription,
        date_logged: new Date().toISOString().split('T')[0],
      };
      await axios.post('http://localhost:8000/api/symptoms/', newSymptom, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      fetchSymptoms();
      setSymptomDescription('');
      toggleSymptomForm();
    } catch (error) {
      console.error('Error adding symptom:', error.response?.data || error.message);
    }
  };

  return (
    <div className="dashboard-container">
      <img src={wizImage} alt="Whisker Wiz" className="wiz-image" />
      <h1>Dashboard</h1>
      <div className="button-group">
        {!showTaskForm && <button className="button" onClick={toggleTaskForm}>Add Task</button>}
        {!showSymptomForm && <button className="button" onClick={toggleSymptomForm}>Add Symptom</button>}
      </div>
      {showTaskForm && (
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
      )}
      {showSymptomForm && (
        <form className="form-container active" onSubmit={handleSymptomSubmit}>
          <input
            type="text"
            placeholder="Enter symptom description"
            value={symptomDescription}
            onChange={(e) => setSymptomDescription(e.target.value)}
            required
          />
          <button type="submit">Submit Symptom</button>
        </form>
      )}
    </div>
  );
};

export default Dashboard;
