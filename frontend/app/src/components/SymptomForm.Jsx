// src/components/SymptomForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import ConfettiWrapper from './ConfettiWrapper';


const SymptomForm = ({ fetchSymptoms, toggleSymptomForm }) => {
  const [symptomDescription, setSymptomDescription] = useState('');

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
  );
};

export default SymptomForm;
