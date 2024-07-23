// const express = require("express");
// const router = express.Router();
// const AllUsers = require("../models/AllUsers");
// const verifyToken = require("../middleware/authMiddleware");

// router.get("/useradd", verifyToken, async (req, res) => {
//   try {
//     const details = await AllUsers.find({});
//     res.json(details);
//   } catch (error) {
//     res.status(500).send("Server error");
//   }
// });

// router.get("/useradd/:id", async (req, res) => {
//   const UsersId = req.params.id;
//   try {
//     const details = await AllUsers.findOne({ UsersId: UsersId });
//     if (!details) {
//       return res.status(404).send("User not found");
//     }
//     res.json(details);
//   } catch (error) {
//     res.status(500).send("Server error");
//   }
// });

// router.post("/useradd", async (req, res) => {
//   try {
//     const data = req.body;
//     const result = await AllUsers.create(data);
//     res.status(201).json(result);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json("Server error");
//   }
// });



// router.put("/useradd/:id", async (req, res) => {
//   const data = req.body;
//   const UsersId = req.params.id;
//   try {
//     const result = await AllUsers.findOneAndUpdate(
//       { UsersId: UsersId },
//       data,
//       { new: true, runValidators: true }
//     );
//     if (!result) {
//       return res.status(404).send("User not found");
//     }
//     res.json(result); // Return the updated AllUsers
//   } catch (error) {
//     res.status(500).send("Server error");
//   }
// });


// router.delete("/useradd/:id", verifyToken, async (req, res) => {
//   const UsersId = req.params.id;
//   try {
//     const result = await AllUsers.findOneAndDelete({ UsersId: UsersId });
//     if (!result) {
//       return res.status(404).send("User not found");
//     }
//     res.send("User deleted successfully");
//   } catch (error) {
//     res.status(500).send("Server error");
//   }
// });












// module.exports = router;