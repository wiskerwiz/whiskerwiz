import React from 'react';

const CalendarForm = () => {
  return (
    <form>
      <input type="text" placeholder="Event" />
      <input type="date" placeholder="Date" />
      <button type="submit">Add Event</button>
    </form>
  );
};

export default CalendarForm;
