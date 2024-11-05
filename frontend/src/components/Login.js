import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
// import './index.css';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://silver-broccoli-757gpxw7gpqfpvqq-5000.app.github.dev/api/auth/login', formData);
            toast.success('Login successful!');
            // Store token and redirect if needed
            localStorage.setItem('token', response.data.token);
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
