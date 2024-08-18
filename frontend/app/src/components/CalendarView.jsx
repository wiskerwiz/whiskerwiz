import React from 'react';
import Calendar from 'react-calendar';

const CalendarView = ({ onClose }) => {
  return (
    <div className="calendar-container slide-in">
      <Calendar
        view="month"
        defaultView="month"
        maxDetail="month"
      />
      <button onClick={onClose} className="calendar-close-button">Close Calendar</button>
    </div>
  );
};

export default CalendarView;
