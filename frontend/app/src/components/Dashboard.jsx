import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import TaskForm from './TaskForm';
import SymptomForm from './SymptomForm';
import PainForm from './PainForm';
import PeriodForm from './PeriodForm';
import MedicationForm from './MedicationForm';
import SleepForm from './SleepForm';
import WeightTrackerForm from './WeightTrackerForm';
import CalendarView from './CalendarView'; 
import Settings from './Settings';
import Stats from './Stats';
import Help from './Help';
import wizImage from '../assets/wiz.png';
import addTaskIcon from '../assets/add_task_icon.svg';
import addSymptomIcon from '../assets/add_symptom_icon.svg';
import addPainRecordIcon from '../assets/add_pain_record_icon.svg';
import addPeriodRecordIcon from '../assets/add_period_record_icon.svg';
import addMedicationIcon from '../assets/add_medication_icon.svg';
import addSleepRecordIcon from '../assets/add_sleep_record_icon.svg';
import weightTrackerIcon from '../assets/weight_tracker_icon.svg';
import calendarIcon from '../assets/calendar_icon.svg';

import '../App.css';

const Dashboard = () => {
  const [activeForm, setActiveForm] = useState(null);
  const user = {
    username: 'AL',
    profilePicture: wizImage // Use the wizard image as a placeholder
  };

  const handleFormToggle = (formName) => {
    setActiveForm(activeForm === formName ? null : formName);
  };

  return (
    <div className="dashboard-container">
      <Sidebar user={user} />
      <div className="main-content">
        <div className="header">
          {/* <img src={wizImage} alt="Wizard Icon" className="wiz-image" /> */}
          <h1>AL's Dashboard</h1>
        </div>
        <div className="button-group">
          <div className="button-item" onClick={() => handleFormToggle('task')}>
            <img src={addTaskIcon} alt="Add Task" />
            <p>Add Task</p>
          </div>
          <div className="button-item" onClick={() => handleFormToggle('symptom')}>
            <img src={addSymptomIcon} alt="Add Symptom" />
            <p>Add Symptom</p>
          </div>
          <div className="button-item" onClick={() => handleFormToggle('pain')}>
            <img src={addPainRecordIcon} alt="Add Pain Record" />
            <p>Add Pain Record</p>
          </div>
          <div className="button-item" onClick={() => handleFormToggle('period')}>
            <img src={addPeriodRecordIcon} alt="Add Period Record" />
            <p>Add Period Record</p>
          </div>
          <div className="button-item" onClick={() => handleFormToggle('medication')}>
            <img src={addMedicationIcon} alt="Add Medication" />
            <p>Add Medication</p>
          </div>
          <div className="button-item" onClick={() => handleFormToggle('sleep')}>
            <img src={addSleepRecordIcon} alt="Add Sleep Record" />
            <p>Add Sleep Record</p>
          </div>
          <div className="button-item" onClick={() => handleFormToggle('weight')}>
            <img src={weightTrackerIcon} alt="Weight Tracker" />
            <p>Weight Tracker</p>
          </div>
          <div className="button-item" onClick={() => handleFormToggle('calendar')}>
            <img src={calendarIcon} alt="Calendar" />
            <p>Calendar</p>
          </div>
        </div>
        {activeForm === 'task' && <TaskForm />}
        {activeForm === 'symptom' && <SymptomForm />}
        {activeForm === 'pain' && <PainForm />}
        {activeForm === 'period' && <PeriodForm />}
        {activeForm === 'medication' && <MedicationForm />}
        {activeForm === 'sleep' && <SleepForm />}
        {activeForm === 'weight' && <WeightTrackerForm />}
        {activeForm === 'calendar' && <CalendarView toggleCalendar={() => handleFormToggle(null)} />}
      </div>
    </div>
  );
};

export default Dashboard;