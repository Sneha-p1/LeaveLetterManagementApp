const express = require('express');
const path = require('path');
const app = express();

const mongoose=require('mongoose')
const sample =require ('./Models/SignIn.js')

const dotenv=require('dotenv')
dotenv.config();

const port=3005;

const uri=process.env.mongodb_uri;
mongoose.connect(
    uri
);const database=mongoose.connection;

database.on("error",(error)=>
{
    console.log(error);
});
database.once("connected",()=>
{
    console.log("Database connected")
})

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/static', 'Takeoff.html'));
});

app.get('/user', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/static', 'Userlogin.html'));
});

app.get('/UserInterface', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/static', 'UserDashboard.html'));
});

app.get('/Signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/static', 'Usersignup.html'));
});

app.get('/Login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/static', 'Userlogin.html'));
});

// userPages
app.get('/applyleave', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/static', 'UserDashboard.html'));
});

app.get('/myProfile', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/static', 'Userprofile.html'));
});




app.post('/signup',(async(req,res) => {
    const {username, useremail,password} = req.body;
    const newUser = {username, useremail,password}
    console.log(newUser)
    try{
        const exist = await sample.findOne({username:username});
        if(exist){
            res.send("User already exists, click login")
        }
        else{
            const data=await sample.create(newUser)
            res.redirect('/UserInterface')
            
        }
    }
    catch(error){
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}))
// let logeduser ='user';

app.post('/login',(async(req,res) => {
    const  {username, password}= req.body;
    const newUser = {username, password}
    console.log("newUser")
    try{
        const user = await sample.findOne({username:username});
        if (!user){
            res.send("Invalid username or password, Please signup first")
        }
        if (user.password===password){
            
            console.log('loged user inside login')
            
            return res.redirect('/UserInterface')

        }
        else{
            return res.send('Invalid username or password, Please signup first')
        }
    }
    catch(error){
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}))

app.listen(port,() =>{
    console.log('server is running on port :'+port);
})

