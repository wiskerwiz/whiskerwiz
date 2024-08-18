// src/components/Help.jsx
import React from 'react';
import Sidebar from './Sidebar';
import ConfettiWrapper from './ConfettiWrapper';

const Help = ({ user }) => {
    return (
        <ConfettiWrapper>
            <div className="dashboard-container slide-enter">
                <Sidebar user={user} />
                <div className="main-content">
                    <h1>Help & Support</h1>
                    <p>If you encounter any issues, feel free to contact me at:</p>
                    <p>Email: your-email@example.com</p>
                </div>
            </div>
        </ConfettiWrapper>
    );
};

export default Help;
