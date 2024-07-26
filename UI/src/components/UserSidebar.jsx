import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import Logout from './Logout';

const UserSidebar = () => {

    const [username, setUsername] = useState([]);
   
    useEffect(() =>{
        const fetchUsername = async ()=>{
            try {
                const res = await fetch('/api/username');
                const data = await res.json()
                setUsername(data)
                console.log(data,"ghgh")
            }
            catch (error) {
                console.log("error", error)
            }
        };
        fetchUsername()
    },[])


  return (
    <>
   
        <div className="bg-white w-52 h-[593px] justify-center shadow-lg "><br/>
            <img src="/src/Images/user.png" className="w-11 h-11 mt-5 ml-20 border-2 rounded-3xl border-blue-400" />
              <p className="mt-4 text-center">{username}</p>
              <br/><br/>

            {/* <div className="flex">
                <div><img src="./Image/filleduser.png" className="w-6 h-6 ml-2" /></div>
                <div><a href="/myProfile/:id"><input type="button" value="My Profile" className="ml-4 border-0 hover:underline" /></a><br/><br/></div>
            </div> */}

            <div className="flex">
                <div><img src="/src/Images/leave.png" className="w-6 h-6 ml-2" /></div>
                <div><Link to="/user-Dashboard"><input type="button" value="Apply Leave" className="ml-4 border-0 hover:underline" /></Link><br/><br/></div>
            </div>

            <div className="flex">
                <div><img src="/src/Images/history.png" className="w-6 h-6 ml-2" /></div>
                <div><Link to="/Leave-History"><input type="button" value="Leave History" className="ml-4 border-0 hover:underline" /></Link><br/><br/></div>
            </div>

            <div className="flex">
                <div><img src="/src/Images/Balance.png" className="w-6 h-6 ml-2" /></div>
                <div><Link to="/Leave-Balance"><input type="button" value="Leave Count" className="ml-4 border-0 hover:underline" /></Link><br/><br/></div>
            </div>

            <div className="flex">
                <div><img src="/src/Images/logout.png" className="w-6 h-6 ml-2"/></div>
            <div className="ml-4 border-0 hover:underline" >
                <Logout/>
            </div>
            
            </div>
        </div>
       
    </>
  )
}

export default UserSidebar