// src/components/WeightTrackerForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import ConfettiWrapper from './ConfettiWrapper';

const WeightTrackerForm = ({ toggleWeightForm }) => {
  const [weight, setWeight] = useState('');
  const [confettiTrigger, setConfettiTrigger] = useState(false);

  const handleWeightSubmit = async (e) => {
    e.preventDefault();
    try {
      const newWeightRecord = {
        weight,
      };

      await axios.post(
        'http://localhost:8000/api/weight_records/',
        newWeightRecord,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );

      // Trigger confetti
      setConfettiTrigger(true);
      setTimeout(() => setConfettiTrigger(false), 500); // Reset confetti trigger

      setWeight('');

      if (toggleWeightForm) {
        toggleWeightForm();
      }
    } catch (error) {
      console.error('Error adding weight record:', error.response?.data || error.message);
    }
  };

  return (
    <ConfettiWrapper triggerConfetti={confettiTrigger}>
      <form className="form-container active" onSubmit={handleWeightSubmit}>
        <input
          type="number"
          placeholder="Weight (lbs)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
        />
        <button type="submit">Submit Weight Record</button>
      </form>
    </ConfettiWrapper>
  );
};

export default WeightTrackerForm;
