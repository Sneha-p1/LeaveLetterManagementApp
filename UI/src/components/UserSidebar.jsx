import React from 'react'

const UserSidebar = () => {
  return (
    <>
   
        <div className="bg-white w-52 h-[593px] justify-center shadow-lg "><br/>
            <img src="/src/Images/user.png" className="w-11 h-11 mt-5 ml-20 border-2 rounded-3xl border-blue-400" />
            <p className="mt-4 ml-16">John Joe</p>
            <p className="ml-12">EMP1067780</p><br/><br/>

            {/* <div className="flex">
                <div><img src="./Image/filleduser.png" className="w-6 h-6 ml-2" /></div>
                <div><a href="/myProfile/:id"><input type="button" value="My Profile" className="ml-4 border-0 hover:underline" /></a><br/><br/></div>
            </div> */}

            <div className="flex">
                <div><img src="/src/Images/leave.png" className="w-6 h-6 ml-2" /></div>
                <div><a href="/user-Dashboard"><input type="button" value="Apply Leave" className="ml-4 border-0 hover:underline" /></a><br/><br/></div>
            </div>

            <div className="flex">
                <div><img src="/src/Images/history.png" className="w-6 h-6 ml-2" /></div>
                <div><a href="/Leave-History"><input type="button" value="Leave History" className="ml-4 border-0 hover:underline" /></a><br/><br/></div>
            </div>

            <div className="flex">
                <div><img src="/src/Images/Balance.png" className="w-6 h-6 ml-2" /></div>
                <div><a href="/Leave-Balance"><input type="button" value="Leave Balance" className="ml-4 border-0 hover:underline" /></a><br/><br/></div>
            </div>

            <div className="flex">
                <div><img src="/src/Images/logout.png" className="w-6 h-6 ml-2"/></div>
                <div><a href="/Logout"><input type="button" value="Logout" className="ml-4 border-0 hover:underline" /></a><br/><br/></div>
            </div>
        </div>
       
    </>
  )
}

export default UserSidebar