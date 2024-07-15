// const express = require('express');
// const router = express.Router();
// const mongoose = require('mongoose');
// const sample = require('../Models/SignIn');

// // Route to fetch user profile
// router.get('/myProfile', async (req, res) => {
//     const id = req.params.id;

//     // Check if id is a valid ObjectId
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//         return res.status(400).json({ error: 'Invalid user ID' });
//     }

//     try {
//         const user = await sample.findById(id);
//         if (!user) {
//             return res.status(404).json({ error: 'User not found' });
//         }
//         res.json(user);
//     } catch (error) {
//         console.error('Error fetching user details:', error);
//         res.status(500).send('Internal Server Error');
//     }
// });

// module.exports = router;
