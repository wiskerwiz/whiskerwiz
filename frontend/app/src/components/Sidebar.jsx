import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css'; // Ensure this path is correct

const Sidebar = ({ user }) => {
    return (
        <div className="sidebar">
            <div className="user-info">
                <img src={user.profilePicture} alt="Profile" />
                <p>Welcome, {user.username}!</p>
            </div>
            <ul>
                <li><Link to="/dashboard">Home</Link></li> 
                <li><Link to="/stats">Stats</Link></li>
                <li><Link to="/settings">Settings</Link></li>
                <li><Link to="/logout">Logout</Link></li>
                <li><Link to="/help">Help</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;