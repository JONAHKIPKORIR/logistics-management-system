import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://silver-broccoli-757gpxw7gpqfpvqq-5000.app.github.dev/api/auth/register', formData);
            toast.success('Registration successful!'); // Success notification
            console.log(response.data); // Log the response 
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message); // Error notification
            } else {
                toast.error('Server error. Please try again later.');
            }
            console.error(error);
        }
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit} className="register-form">
                <input type="text" name="name" value={name} onChange={handleChange} placeholder="Name" required />
                <input type="email" name="email" value={email} onChange={handleChange} placeholder="Email" required />
                <input type="password" name="password" value={password} onChange={handleChange} placeholder="Password" required />
                <button type="submit">Register</button>
            </form>
            <p className="form-footer">
                Already have an account? <Link to="/login" className="form-link">Login Now</Link>
            </p>
        </div>
    );
};

export default Register;
