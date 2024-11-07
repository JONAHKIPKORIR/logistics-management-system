// frontend/src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {DASHBOARD_API} from '../apiConfig'

const Dashboard = () => {
    const [data, setData] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(DASHBOARD_API, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setData(response.data);
            } catch (error) {
                setError('Error loading dashboard data');
            }
        };
        fetchData();
    }, []);

    return (
        <div className="dashboard">
            <h2>Dashboard Overview</h2>
            {error && <p className="error">{error}</p>}
            <div className="dashboard-metrics">
                <div className="metric">
                    <h3>Orders</h3>
                    <p>{data.orders}</p>
                </div>
                <div className="metric">
                    <h3>Shipments</h3>
                    <p>{data.shipments}</p>
                </div>
                <div className="metric">
                    <h3>Pending Deliveries</h3>
                    <p>{data.pendingDeliveries}</p>
                </div>
                <div className="metric">
                    <h3>Monthly Revenue</h3>
                    <p>${data.monthlyRevenue}</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
