// src/components/SymptomForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const SymptomForm = ({ fetchSymptoms }) => {
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/symptoms/', { description });
      fetchSymptoms();
    } catch (error) {
      console.error('Error adding symptom:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          placeholder="Enter symptom description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Symptom</button>
    </form>
  );
};

export default SymptomForm;
