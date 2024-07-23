const express = require("express");
const { mongoose } = require("mongoose");
const app = express();
const cors = require("cors");
const auth = require ("./routes/auth");
const cookieParser = require("cookie-parser");
const leaveRequestRoutes = require("./routes/LeaveRequest");
// const leaveBalanceRoutes = require('./routes/leaveBalanceRoutes');
const leaveRoutes = require('./routes/LeaveRequest');
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
// app.use('/api', leaveBalanceRoutes);  

app.use('/api/leaves', leaveRoutes);










const schemaData = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  userType: { type: String,required: true },
  userRoll: { type: String,required: true },
  mobile: { type: Number,required: true },

});

const userModel = mongoose.model("Userdetails", schemaData);

app.get('/',async(req,res)=>{
  const data = await userModel.find({})
  res.json({success : true,data : data})
})
app.post("/create",async(req,res)=>{
  console.log(req.body)
  const data = new userModel(req.body)
  await data.save()
  res.send({success : true, message : "data save successfully" , data : data})
})

app.put("/update",async(req,res)=>{
  console.log(req.body)
  const { _id,...rest} = req.body 

  console.log(rest)
  const data = await userModel.updateOne({ _id : _id},rest)
  res.send({success : true, message : "data update successfully", data : data})
})

app.delete("/delete/:id",async(req,res)=>{
  const id = req.params.id
  console.log(id)
  const data = await userModel.deleteOne({_id : id})
  res.send({success : true, message : "data delete successfully", data : data})
})























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