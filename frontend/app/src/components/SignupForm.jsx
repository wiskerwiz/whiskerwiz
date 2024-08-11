// frontend/src/components/SignupForm.jsx
import React, { useState } from 'react';
import AuthService from '../services/AuthService';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        first_name: '',  // Changed to match backend expectations
        last_name: '',   // Changed to match backend expectations
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await AuthService.register(formData);
            navigate('/dashboard');
        } catch (error) {
            setError(error.response.data);
        }
    };

    return (
        <div className="auth-container">
            <h1>Sign Up</h1>
            <form onSubmit={handleSignup}>
                <div>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="first_name"
                        placeholder="First Name"
                        value={formData.first_name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="last_name"
                        placeholder="Last Name"
                        value={formData.last_name}
                        onChange={handleChange}
                        required
                    />
                </div>
                {error && <p>Error: {JSON.stringify(error)}</p>}
                <button type="submit">Sign Up</button>
            </form>
            <a href="/login">Already have an account? Log in</a>
        </div>
    );
};

export default SignupForm;
