const express = require("express");
const router = express.Router();
// const User = require("../models/User");
const Manager = require("../models/ManagerDetails");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Manager registration
router.post("/register", async (req, res) => {
  try {
    // const {} = userDetails
    const userDetails = req.body;
    const username = userDetails.userName;
    const password = userDetails.password;
    const email = userDetails.email;
    const userType = userDetails.userType
    // const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
     const manager = new Manager({ username, password: hashedPassword, email, userType });  //create the database
    await manager.save();
    res.status(201).json({ message: "Manager registered successfully" });
  } catch (error) {
    console.log("err", error);
    res.status(500).json({ error: "Registration failed" });
  }
});

// User login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log(email, password);
    const manager = await Manager.findOne({ email });
    console.log(manager, "user");
    if (!manager) {
      return res
        .status(401)
        .json({ error: "Authentication failed- User doesn't exists" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res
        .status(401)
        .json({ error: "Authentication failed- password doesn't match" });
    }
    const token = jwt.sign(
      { userId: manager._id, userType: manager.userType },
      "your-secret-key",
      {
        expiresIn: "1h",
      }
    );
// above code hours mention how much hr valid that token 
    res.cookie("Managertoken", token);
    res.redirect('/manager');
    res.json({
      status: true,
      message: "login success",
      token,
      userType: manager.userType
    });
    //  console.log('/login in the bakend res', res)
    return res;
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Login failed" });
  }
});

// Get total users (protected route)
// router.get('/manager/employees', verifyAdminToken, async (req, res) => {
//     try {
//         const totalUsers = await User.countDocuments({});
//         res.json({ totalUsers });
//     } catch (err) {
//         console.error(err);
//         res.status(500).send('Error fetching total users');
//     }
// });


// Logout
// router.get("/logout", (req, res) => {
//   res.clearCookie("Authtoken");
//   res.status(200).send("Logout successful");
//   return res;
// });

// module.exports = router;