const express = require("express");
const router = express.Router();
const userModel = require("../models/UsersAdd");

router.get('/', async (req, res) => {
  const data = await userModel.find({});
  res.json({ success: true, data: data });
});

router.post("/create", async (req, res) => {
  console.log(req.body);
  const data = new userModel(req.body);
  await data.save();
  res.send({ success: true, message: "Data saved successfully", data: data });
});

router.put("/update", async (req, res) => {
  console.log(req.body);
  const { _id, ...rest } = req.body;
  console.log(rest);
  const data = await userModel.updateOne({ _id: _id }, rest);
  res.send({ success: true, message: "Data updated successfully", data: data });
});

router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const data = await userModel.deleteOne({ _id: id });
  res.send({ success: true, message: "Data deleted successfully", data: data });
});




router.get('/userdetails', async (req, res) => {
  try {
      console.log("sgdfh")
      console.log("hj")
      const Userdetails = await userModel.find();
      console.log(Userdetails)
      res.status(200).json(Userdetails);
  } catch (error) {
      res.status(500).json({ message: 'Error fetching leave history', error });
  }
});


router.get('/users/:userType', async (req, res) => {
  try {
      console.log("sgdfh")
      console.log(req.params.userType ,"hj")
      const AllUsers = await userModel.find({ userType: req.params.userType });
      console.log(AllUsers)
      res.status(200).json(AllUsers);
  } catch (error) {
      res.status(500).json({ message: 'Error fetching leave history', error });
  }
});











module.exports = router; 
