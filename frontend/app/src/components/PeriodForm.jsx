// src/components/PeriodForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import ConfettiWrapper from './ConfettiWrapper';

const PeriodForm = ({ fetchPeriodRecords, togglePeriodForm }) => {
  const [periodStartDate, setPeriodStartDate] = useState('');
  const [periodEndDate, setPeriodEndDate] = useState('');
  const [confettiTrigger, setConfettiTrigger] = useState(false);

  const handlePeriodSubmit = async (e) => {
    e.preventDefault();
    try {
      const newPeriodRecord = {
        start_date: periodStartDate,
        end_date: periodEndDate,
      };

      await axios.post('http://localhost:8000/api/period_records/', newPeriodRecord, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Trigger confetti
      setConfettiTrigger(true);
      setTimeout(() => setConfettiTrigger(false), 500); // Reset confetti trigger

      // Reset form fields
      setPeriodStartDate('');
      setPeriodEndDate('');

      // Fetch period records if the function is provided
      if (fetchPeriodRecords) {
        fetchPeriodRecords();
      }

      // Hide the form if the toggle function is provided
      if (togglePeriodForm) {
        togglePeriodForm();
      }
    } catch (error) {
      console.error('Error adding period record:', error.response?.data || error.message);
    }
  };

  return (
    <ConfettiWrapper triggerConfetti={confettiTrigger}>
      <form className="form-container active" onSubmit={handlePeriodSubmit}>
        <input
          type="date"
          placeholder="Start date"
          value={periodStartDate}
          onChange={(e) => setPeriodStartDate(e.target.value)}
          required
        />
        <input
          type="date"
          placeholder="End date"
          value={periodEndDate}
          onChange={(e) => setPeriodEndDate(e.target.value)}
          required
        />
        <button type="submit">Submit Period Record</button>
      </form>
    </ConfettiWrapper>
  );
};

export default PeriodForm;
