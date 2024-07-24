// const express = require('express');
// const router = express.Router();
// const LeaveRequest = require('../models/leave');
// const auth = require('../middleware/authMiddleware')
// // const User = require('../models/User'); 

// router.post('/lettersend', async (req, res) => {
//     const {userName, leaveType, detail, fromDate, toDate } = req.body;
//     // const userId = req.user._id;
//     console.log("Received a new leave request");

//     try {
//         const newLeaveRequest = new LeaveRequest({
//             userName,
//             leaveType,
//             detail,
//             fromDate: new Date(fromDate), // Ensure dates are correctly formatted
//             toDate: new Date(toDate) 
//             // user: userId     
//         });

//         await newLeaveRequest.save();

//         console.log('Leave request saved successfully');
//         res.status(201).send('<script>alert("Leave request submitted successfully"); window.location.href="/Leave-History";</script>');
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('<script>alert("Internal Server Error"); window.location.href="/user-Dashboard";</script>');
//     }
// });


// router.get('/leaveRequests', async (req, res) => {
//     try {
//         const leaveRequests = await LeaveRequest.find();
//         res.status(200).json(leaveRequests);
//     } catch (error) {
//         res.status(500).json({ message: 'Error fetching leave requests', error });
//     }
// });



// // Fetch leave history for a specific user
// router.get('/leaveHistory/:userName', async (req, res) => {
//     try {
//         const leaveHistory = await LeaveRequest.find({ userName: req.params.userName });
//         res.status(200).json(leaveHistory);
//     } catch (error) {
//         res.status(500).json({ message: 'Error fetching leave history', error });
//     }
// });



// router.get('/history', auth, async (req, res) => {
//     try {
//         const leaves = await LeaveRequest.find({ userId: req.user._id });
//         res.json(leaves);
//     } catch (error) {
//         res.status(500).json({ error: 'Server error' });
//     }
// });









// // Approve leave request
// router.patch('/leaveRequests/:id/approve', async (req, res) => {
//     try {
//         const leaveRequest = await LeaveRequest.findById(req.params.id);
//         if (!leaveRequest) {
//             return res.status(404).json({ message: 'Leave request not found' });
//         }
//         leaveRequest.status = 'Approved';
//         await leaveRequest.save();
//         res.json({ message: 'Leave request approved' });
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

// // Reject leave request
// router.patch('/leaveRequests/:id/reject', async (req, res) => {
//     try {
//         const leaveRequest = await LeaveRequest.findById(req.params.id);
//         if (!leaveRequest) {
//             return res.status(404).json({ message: 'Leave request not found' });
//         }
//         leaveRequest.status = 'Rejected';
//         await leaveRequest.save();
//         res.json({ message: 'Leave request rejected' });
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });



// module.exports = router;




const express = require('express');
const router = express.Router();
const LeaveRequest = require('../models/leave');
const auth = require('../middleware/authMiddleware');

router.post('/lettersend', async (req, res) => {
    const { userName, leaveType, detail, fromDate, toDate } = req.body;
    console.log("Received a new leave request");

    try {
        const newLeaveRequest = new LeaveRequest({
            userName,
            leaveType,
            detail,
            fromDate: new Date(fromDate), // Ensure dates are correctly formatted
            toDate: new Date(toDate)
        });

        await newLeaveRequest.save();

        console.log('Leave request saved successfully');
        res.status(201).json({ message: 'Leave request submitted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


// Fetch leave history for a specific user
router.get('/leaveHistory/:userName', async (req, res) => {
    try {
        console.log("sgdfh")
        console.log(req.params.userName ,"hj")
        const leaveHistory = await LeaveRequest.find({ userName: req.params.userName });
        console.log(leaveHistory)
        res.status(200).json(leaveHistory);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching leave history', error });
    }
});



// other routes...

module.exports = router;
