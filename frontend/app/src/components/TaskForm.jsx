import React, { useState } from 'react';

const TaskForm = ({ onSubmit }) => {
    const [isFormVisible, setFormVisible] = useState(false);
    const [formData, setFormData] = useState({
        taskName: '',
        date: '',
        time: '',
        reminder: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit(formData);
        }
        setFormVisible(false);
        setFormData({ taskName: '', date: '', time: '', reminder: '' });
    };

    const handleFormClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div
            className={`button-item ${isFormVisible ? 'form-visible' : ''}`}
            onClick={() => !isFormVisible && setFormVisible(true)}
        >
            {!isFormVisible ? (
                <div className="task-label" style={{ textAlign: 'center' }}>
                    <span>✔</span>
                    <p>Add Task</p>
                </div>
            ) : (
                <div className="task-form-wrapper" onClick={handleFormClick}>
                    <form onSubmit={handleSubmit} className={`task-form ${isFormVisible ? 'visible' : ''}`}>
                        <input
                            type="text"
                            name="taskName"
                            value={formData.taskName}
                            onChange={handleInputChange}
                            placeholder="Task Name"
                            required
                        />
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            type="time"
                            name="time"
                            value={formData.time}
                            onChange={handleInputChange}
                            required
                        />
                        <select
                            name="reminder"
                            value={formData.reminder}
                            onChange={handleInputChange}
                        >
                            <option value="">No reminder</option>
                            <option value="5">5 minutes before</option>
                            <option value="10">10 minutes before</option>
                            <option value="15">15 minutes before</option>
                            <option value="30">30 minutes before</option>
                        </select>
                        <button type="submit" style={{ marginTop: '10px' }}>Submit Task</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default TaskForm;
