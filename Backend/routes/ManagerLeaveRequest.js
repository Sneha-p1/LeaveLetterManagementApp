const express = require('express');
const router = express.Router();
const LeaveRequest = require('../models/Managerleave');
// const User = require('../models/User'); 

router.post('/manager/lettersend', async (req, res) => {
    const {userName, leaveType, detail, fromDate, toDate } = req.body;
    // const userId = req.user._id;
    console.log("Received a new leave request");

    try {
        const newLeaveRequest = new ManagerLeaveRequest({
            userName,
            leaveType,
            detail,
            fromDate: new Date(fromDate), 
            toDate: new Date(toDate)     
        });

        await newLeaveRequest.save();

        console.log('Leave request saved successfully');
        res.status(201).send('<script>alert("Leave request submitted successfully"); window.location.href="/manager/Leave";</script>');
    } catch (error) {
        console.error(error);
        res.status(500).send('<script>alert("Internal Server Error"); window.location.href="/manager/Leave";</script>');
    }
});


router.get('/manager/leaveRequests', async (req, res) => {
    try {
        const leaveRequests = await LeaveRequest.find();
        res.status(200).json(leaveRequests);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching leave requests', error });
    }
});



// Fetch leave history for a specific user
router.get('/manager/leaveHistory/:userName', async (req, res) => {
    try {
        const leaveHistory = await LeaveRequest.find({ userName: req.params.userName });
        res.status(200).json(leaveHistory);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching leave history', error });
    }
});










// Approve leave request
router.patch('/leaveRequests/:id/approve', async (req, res) => {
    try {
        const leaveRequest = await LeaveRequest.findById(req.params.id);
        if (!leaveRequest) {
            return res.status(404).json({ message: 'Leave request not found' });
        }
        leaveRequest.status = 'Approved';
        await leaveRequest.save();
        res.json({ message: 'Leave request approved' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Reject leave request
router.patch('/leaveRequests/:id/reject', async (req, res) => {
    try {
        const leaveRequest = await LeaveRequest.findById(req.params.id);
        if (!leaveRequest) {
            return res.status(404).json({ message: 'Leave request not found' });
        }
        leaveRequest.status = 'Rejected';
        await leaveRequest.save();
        res.json({ message: 'Leave request rejected' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});







module.exports = router;

