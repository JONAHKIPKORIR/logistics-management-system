import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import { AUTH_API } from '../apiConfig'; // Import the endpoint

const Login = ({ onLogin }) => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${AUTH_API}/login`, formData, { withCredentials: true });
            toast.success('Login successful!');
            localStorage.setItem('token', response.data.token);

            onLogin(); // Call onLogin to update isLoggedIn in App.js
            navigate('/dashboard'); // Redirect to the Dashboard
        } catch (err) {
            if (err.response) {
                toast.error(err.response.data.message || 'Invalid credentials');
            } else if (err.request) {
                toast.error('No response from server');
            } else {
                toast.error('An error occurred: ' + err.message);
            }
        }
    };

    return (
        <div className="form-container">
            <h2 className="form-title">Login</h2>
            <form onSubmit={handleSubmit} className="form">
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    onChange={handleChange} 
                    className="form-input" 
                    required 
                />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    onChange={handleChange} 
                    className="form-input" 
                    required 
                />
                <button type="submit" className="form-button">Login</button>
            </form>
            <p className="form-footer">
                Don’t have an account? <Link to="/register" className="form-link">Register Here</Link>
            </p>
        </div>
    );
};

export default Login;
