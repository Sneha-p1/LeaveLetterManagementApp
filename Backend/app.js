const express = require("express");
const { mongoose } = require("mongoose");
const app = express();
const cors = require("cors");
const auth = require ("./routes/auth");
const cookieParser = require("cookie-parser");
const leaveRequestRoutes = require("./routes/LeaveRequest");
const leaveBalanceRoutes = require('./routes/leaveBalanceRoutes');
app.use(cookieParser());

app.use(
  cors({ 
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

app.use("/", auth)
app.use("/", leaveRequestRoutes); 
app.use('/api', leaveBalanceRoutes);  


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