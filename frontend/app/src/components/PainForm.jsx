// frontend/src/components/PainForm.jsx

import React, { useState } from 'react';
import axios from 'axios';
import ConfettiWrapper from './ConfettiWrapper';

const PainForm = ({ togglePainForm }) => {
  const [painLevel, setPainLevel] = useState('');
  const [painLocation, setPainLocation] = useState('');
  const [confettiTrigger, setConfettiTrigger] = useState(false);

  const handlePainSubmit = async (e) => {
    e.preventDefault();
    try {
      const newPainRecord = {
        pain_level: painLevel,
        pain_location: painLocation,
      };

      await axios.post(
        'http://localhost:8000/api/pain_records/',
        newPainRecord,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,  // Ensures that cookies (if used) are sent with the request
        }
      );

      // Trigger confetti
      setConfettiTrigger(true);
      setTimeout(() => setConfettiTrigger(false), 500); // Reset confetti trigger

      // Reset form fields
      setPainLevel('');
      setPainLocation('');

      // Hide the form if the toggle function is provided
      if (togglePainForm) {
        togglePainForm();
      }
    } catch (error) {
      console.error('Error adding pain record:', error.response?.data || error.message);
    }
  };

  return (
    <ConfettiWrapper triggerConfetti={confettiTrigger}>
      <form className="form-container active" onSubmit={handlePainSubmit}>
        <input
          type="number"
          placeholder="Pain level (1-10)"
          value={painLevel}
          onChange={(e) => setPainLevel(e.target.value)}
          required
          min="1"
          max="10"
        />
        <input
          type="text"
          placeholder="Pain location"
          value={painLocation}
          onChange={(e) => setPainLocation(e.target.value)}
          required
        />
        <button type="submit">Submit Pain Record</button>
      </form>
    </ConfettiWrapper>
  );
};

export default PainForm;
