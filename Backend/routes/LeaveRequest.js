const express = require('express');
const router = express.Router();
const LeaveRequest = require('../models/leave');
// const User = require('../models/User'); 

router.post('/lettersend', async (req, res) => {
    const { leaveType, detail, fromDate, toDate } = req.body;
    // const userId = req.user._id;
    console.log("Received a new leave request");

    try {
        const newLeaveRequest = new LeaveRequest({
            leaveType,
            detail,
            fromDate: new Date(fromDate), // Ensure dates are correctly formatted
            toDate: new Date(toDate) 
            // user: userId     
        });

        await newLeaveRequest.save();

        console.log('Leave request saved successfully');
        res.status(201).send('<script>alert("Leave request submitted successfully"); window.location.href="/Leave-History";</script>');
    } catch (error) {
        console.error(error);
        res.status(500).send('<script>alert("Internal Server Error"); window.location.href="/user-Dashboard";</script>');
    }
});

module.exports = router;

