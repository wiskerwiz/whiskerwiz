import React from 'react'
import ConfettiWrapper from './ConfettiWrapper';


const TaskList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>{task.task_description}</li>
      ))}
    </ul>
  )
}

export default TaskList
