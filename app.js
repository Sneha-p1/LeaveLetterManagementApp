const express = require('express');
const path = require('path');
const app = express();
const mongoose=require('mongoose')
const sample =require ('./Models/SignIn.js')

const LeaveRequest = require('./Backend/models/leave.js');



const dotenv=require('dotenv')
dotenv.config();


const port=3010;

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

// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/static', 'FrondPage.html'));
});

app.get('/take', (req, res) => {
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

app.get('/leavehistory', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/static', 'leavehistory.html'));
});

app.get('/leavebalance', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/static', 'Leavebalance.html'));
});

app.get('/logout', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/static', 'logout.html'));
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
            res.redirect('/login')
            
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
            
            console.log('user is logined')
            
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





// letter

app.post('/lettersend', async (req, res) => {
    const { leaveType, detail, fromDate, toDate } = req.body;
    console.log("Received a new leave request");

    try {
        const newLeaveRequest = new LeaveRequest({
            // user: userId,
            leaveType: leaveType,
            detail: detail,
            fromDate: fromDate.split('T')[0],
            toDate: toDate.split('T')[0]
        });

        await newLeaveRequest.save();

        console.log('Leave request saved successfully');
        res.status(201).send('<script>alert("Leave request submitted successfully"); window.location.href="/UserInterface";</script>');
    } catch (error) {
        console.error(error);
        res.status(500).send('<script>alert("Internal Server Error"); window.location.href="/UserInterface";</script>');
    }
});


app.get('/leaveHistory/data',async (req,res)=>{
    try{
    const data=await LeaveRequest.find();
    res.json(data)
}
catch(error){
    console.log(error)
}
})




// app.get('/leaveHistory/:userId', async (req, res) => {
//     const userId = req.params.username;

//     try {
//         const leaveHistory = await LeaveRequest.find({ user: userId });
//         res.json(leaveHistory);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });



// Assuming you have a login function
// async function loginUser(credentials) {
//     try {
//         const response = await fetch('/api/myProfile', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(credentials)
//         });
//         if (response.ok) {
//             const data = await response.json();
//             const userId = data.username; // Assuming the server returns the userId
//             window.location.href = `/myProfile/${userId}`;
//         } else {
//             console.error('Login failed');
//         }
//     } catch (error) {
//         console.error('Error during login:', error);
//     }
// }



// app.get('/signup', async (req, res) => {
//     try {
//         const employee = await sample.findOne({ username: req.params.id });
//         if (employee) {
//             res.json(employee);
//         } else {
//             res.status(404).send('Employee not found');
//         }
//     } catch (error) {
//         console.error('Error fetching employee:', error);
//         res.status(500).send('Error fetching employee');
//     }
// });






// app.put('/signup/:username', async (req, res) => {
//     try {
//         const { username, password } = req.body;
//         const updatedEmployee = await sample.findOneAndUpdate(
//             { username: req.params.id },
//             { username, password },
//             { new: true }
//         );
//         if (updatedEmployee) {
//             res.send('Employee updated successfully');
//         } else {
//             res.status(404).send('Employee not found');
//         }
//     } catch (error) {
//         console.error('Error updating employee:', error);
//         res.status(500).send('Error updating employee');
//     }
// });

app.listen(port,() =>{
    console.log('server is running on port :'+port);
})

