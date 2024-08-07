import React, { useState, useEffect } from "react";
import axios from "axios";
import wizImage from "../assets/wiz.png";
import "../App.css";
import TaskForm from "./TaskForm";
import SymptomForm from "./SymptomForm";
import PainForm from "./PainForm";
import PeriodForm from "./PeriodForm";
import MedicationForm from "./MedicationForm";
import SleepForm from "./SleepForm";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [symptoms, setSymptoms] = useState([]);
  const [visibleForm, setVisibleForm] = useState(null);

  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/tasks/");
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const fetchSymptoms = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/symptoms/");
      setSymptoms(response.data);
    } catch (error) {
      console.error("Error fetching symptoms:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
    fetchSymptoms();
  }, []);

  const toggleForm = (form) => {
    setVisibleForm(visibleForm === form ? null : form);
  };

  return (
    <div className="dashboard-container">
      <img src={wizImage} alt="Wizard" className="wiz-image" />
      <h1>Dashboard</h1>
      <div className="button-group">
        <button className="button" onClick={() => toggleForm("task")}>
          Add Task
        </button>
        <button className="button" onClick={() => toggleForm("symptom")}>
          Add Symptom
        </button>
        <button className="button" onClick={() => toggleForm("pain")}>
          Add Pain Record
        </button>
        <button className="button" onClick={() => toggleForm("period")}>
          Add Period Record
        </button>
        <button className="button" onClick={() => toggleForm("medication")}>
          Add Medication
        </button>
        <button className="button" onClick={() => toggleForm("sleep")}>
          Add Sleep Record
        </button>
      </div>
      {visibleForm === "task" && <TaskForm />}
      {visibleForm === "symptom" && <SymptomForm />}
      {visibleForm === "pain" && <PainForm />}
      {visibleForm === "period" && <PeriodForm />}
      {visibleForm === "medication" && <MedicationForm />}
      {visibleForm === "sleep" && <SleepForm />}
    </div>
  );
};

export default Dashboard;
