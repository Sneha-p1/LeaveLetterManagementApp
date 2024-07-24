// 


const express = require('express');
const LeaveRequest = require('../models/leave'); // Adjust the path as necessary

const router = express.Router();

// Get leave counts for a specific user
router.get('/leave-count/:userName', async (req, res) => {
    const userName = req.params.userName;

    try {
        const sickLeaveCount = await LeaveRequest.countDocuments({ userName, leaveType: 'Sick Leave' });
        const casualLeaveCount = await LeaveRequest.countDocuments({ userName, leaveType: 'Casual Leave' });
        const annualLeaveCount = await LeaveRequest.countDocuments({ userName, leaveType: 'Annual Leave' });

        res.json({
            sickLeave: sickLeaveCount,
            casualLeave: casualLeaveCount,
            annualLeave: annualLeaveCount
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
