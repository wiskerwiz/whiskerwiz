import React from 'react'

const SymptomList = ({ symptoms }) => {
  return (
    <ul>
      {symptoms.map(symptom => (
        <li key={symptom.id}>{symptom.symptom_description}</li>
      ))}
    </ul>
  )
}

export default SymptomList
