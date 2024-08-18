// src/components/MedicationForm.jsx

import React, { useState } from 'react';
import axios from 'axios';
import ConfettiWrapper from './ConfettiWrapper';

const MedicationForm = ({ fetchMedications, toggleMedicationForm }) => {
  const [medicationName, setMedicationName] = useState('');
  const [dosage, setDosage] = useState('');
  const [frequency, setFrequency] = useState('');
  const [medicationStartDate, setMedicationStartDate] = useState('');
  const [medicationEndDate, setMedicationEndDate] = useState('');
  const [confettiTrigger, setConfettiTrigger] = useState(false);

  const handleMedicationSubmit = async (e) => {
    e.preventDefault();
    try {
      const newMedication = {
        medication_name: medicationName,
        dosage: dosage,
        frequency: frequency,
        start_date: medicationStartDate,
        end_date: medicationEndDate,
      };
      
      await axios.post('http://localhost:8000/api/medications/', newMedication, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Trigger confetti
      setConfettiTrigger(true);
      setTimeout(() => setConfettiTrigger(false), 500); // Reset confetti trigger

      // Reset form fields
      setMedicationName('');
      setDosage('');
      setFrequency('');
      setMedicationStartDate('');
      setMedicationEndDate('');

      // Fetch medications if the function is provided
      if (fetchMedications) {
        fetchMedications();
      }

      // Hide the form if the toggle function is provided
      if (toggleMedicationForm) {
        toggleMedicationForm();
      }
    } catch (error) {
      console.error('Error adding medication:', error.response?.data || error.message);
    }
  };

  return (
    <ConfettiWrapper triggerConfetti={confettiTrigger}>
      <form className="form-container active" onSubmit={handleMedicationSubmit}>
        <input
          type="text"
          placeholder="Medication name"
          value={medicationName}
          onChange={(e) => setMedicationName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Dosage"
          value={dosage}
          onChange={(e) => setDosage(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Frequency"
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
          required
        />
        <input
          type="date"
          placeholder="Start date"
          value={medicationStartDate}
          onChange={(e) => setMedicationStartDate(e.target.value)}
          required
        />
        <input
          type="date"
          placeholder="End date (optional)"
          value={medicationEndDate}
          onChange={(e) => setMedicationEndDate(e.target.value)}
        />
        <button type="submit">Submit Medication</button>
      </form>
    </ConfettiWrapper>
  );
};

export default MedicationForm;
