import React from 'react';

const WeightTrackerForm = () => {
  return (
    <form>
      <input type="number" placeholder="Weight (kg)" />
      <input type="date" placeholder="Date" />
      <button type="submit">Submit Weight</button>
    </form>
  );
};

export default WeightTrackerForm;
