// backend/routes/dashboardRoutes.js
const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

// Sample data for the dashboard
router.get('/', protect, (req, res) => {
    res.json({
        orders: 35,
        shipments: 120,
        pendingDeliveries: 5,
        monthlyRevenue: 15000
    });
});

module.exports = router;
