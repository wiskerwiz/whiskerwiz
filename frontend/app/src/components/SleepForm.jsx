// src/components/SleepForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import ConfettiWrapper from './ConfettiWrapper';

const SleepForm = ({ toggleSleepForm }) => {
    const [sleepDuration, setSleepDuration] = useState('');
    const [sleepQuality, setSleepQuality] = useState('');
    const [confettiTrigger, setConfettiTrigger] = useState(false);

    const handleSleepSubmit = async (e) => {
        e.preventDefault();

        try {
            const sleepRecordData = {
                sleep_duration: `${sleepDuration}:00`, // Assuming input is in hours, add ":00" for minutes
                sleep_quality: parseInt(sleepQuality, 10), // Convert quality to integer
                date_logged: new Date().toISOString().split('T')[0], // Logs current date
            };

            await axios.post('http://localhost:8000/api/sleep_records/', sleepRecordData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // Trigger confetti
            setConfettiTrigger(true);
            setTimeout(() => setConfettiTrigger(false), 500); // Reset confetti trigger

            // Clear the form and close it
            setSleepDuration('');
            setSleepQuality('');
            toggleSleepForm();
        } catch (error) {
            console.error('Error adding sleep record:', error.response?.data || error.message);
        }
    };

    return (
        <ConfettiWrapper triggerConfetti={confettiTrigger}>
            <form onSubmit={handleSleepSubmit}>
                <input
                    type="text"
                    placeholder="Sleep duration (hours)"
                    value={sleepDuration}
                    onChange={(e) => setSleepDuration(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Sleep quality"
                    value={sleepQuality}
                    onChange={(e) => setSleepQuality(e.target.value)}
                    required
                    min="1"
                    max="10"
                />
                <button type="submit">Submit Sleep Record</button>
            </form>
        </ConfettiWrapper>
    );
};

export default SleepForm;
