const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const auth = require("./routes/auth");
const leaveRequestRoutes = require("./routes/LeaveRequest");
// const ManagerleaveRequest = require("./routes/ManagerLeaveRequest");
const verifyToken = require("./middleware/authMiddleware");
const userDetails = require("./routes/UsersAddDetails");
const LeaveCount = require("./routes/Leavecount");


const app = express();


app.use(cookieParser());
app.use(express.json())

app.use(
  cors({ 
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

app.use("/", auth)
app.use("/", leaveRequestRoutes); 
app.use("/", userDetails); 
app.use("/api", LeaveCount); 
// app.use("/manager", ManagerleaveRequest); 



app.get("/username", verifyToken, async (req, res) => {
  console.log(req.username)
  res.json(req.username);
});


app.post('/lettersend', async (req, res) => {
  const { userName, leaveType, detail, fromDate, toDate } = req.body;
  console.log("Received a new leave request");

  try {
      const newLeaveRequest = new LeaveRequest({
          userName,
          leaveType,
          detail,
          fromDate: new Date(fromDate), 
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







app.post('manager/lettersend', async (req, res) => {
  const { userName, leaveType, detail, fromDate, toDate } = req.body;
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
      res.status(201).json({ message: 'Leave request submitted successfully' });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
  }
});















const PORT = 5005;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
mongoose.connect("mongodb://localhost:27017/LeaveManagement");

const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});