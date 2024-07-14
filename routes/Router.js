// const express = require('express');
// const router = express.Router();
// const Leave = require('../Models/leave');

// // Route to apply for leave
// router.post('/apply', async (req, res) => {
//     const { leaveType, detail, fromDate, toDate } = req.body;
//     try {
//         const newLeave = new Leave({
//             leaveType,
//             detail,
//             fromDate,
//             toDate
//         });
//         await newLeave.save();
//         res.status(201).json(newLeave);
//     } catch (err) {
//         res.status(400).json({ error: err.message });
//     }
// });

// // Route to get all leaves
// router.get('/', async (req, res) => {
//     try {
//         const leaves = await Leave.find();
//         res.status(200).json(leaves);
//     } catch (err) {
//         res.status(400).json({ error: err.message });
//     }
// });

// module.exports = router;
