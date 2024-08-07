// src/components/SleepForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const SleepForm = ({ fetchSleepRecords, toggleSleepForm }) => {
  const [sleepDuration, setSleepDuration] = useState('');
  const [sleepQuality, setSleepQuality] = useState('');

  const handleSleepSubmit = async (e) => {
    e.preventDefault();
    try {
      const newSleepRecord = {
        duration: sleepDuration,
        quality: sleepQuality,
      };
      await axios.post('http://localhost:8000/api/sleep_records/', newSleepRecord, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      fetchSleepRecords();
      setSleepDuration('');
      setSleepQuality('');
      toggleSleepForm();
    } catch (error) {
      console.error('Error adding sleep record:', error.response?.data || error.message);
    }
  };

  return (
    <form className="form-container active" onSubmit={handleSleepSubmit}>
      <input
        type="number"
        placeholder="Sleep duration (hours)"
        value={sleepDuration}
        onChange={(e) => setSleepDuration(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Sleep quality"
        value={sleepQuality}
        onChange={(e) => setSleepQuality(e.target.value)}
        required
      />
      <button type="submit">Submit Sleep Record</button>
    </form>
  );
};

export default SleepForm;
