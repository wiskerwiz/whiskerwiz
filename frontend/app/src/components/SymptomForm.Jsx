import React, { useState } from 'react'
import axios from 'axios'

const SymptomForm = ({ fetchSymptoms }) => {
  const [symptomDescription, setSymptomDescription] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:8000/api/symptoms/', { symptom_description: symptomDescription })
      setSymptomDescription('')
      fetchSymptoms()
    } catch (error) {
      console.error('Error creating symptom:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={symptomDescription}
        onChange={(e) => setSymptomDescription(e.target.value)}
        placeholder="Enter symptom description"
        required
      />
      <button type="submit">Add Symptom</button>
    </form>
  )
}

export default SymptomForm
