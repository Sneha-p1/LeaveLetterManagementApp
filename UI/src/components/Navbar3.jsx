import React from 'react'
import Logout from './Logout'
import { MdManageAccounts } from "react-icons/md";
import { IoPersonAdd } from "react-icons/io5";

const Navbar3 = () => {
  return (
    <>
    <div className="flex bg-gradient-to-r from-blue-900 to-red-950 shadow-lg">
        <nav>
            <div className="flex mt-4">
                <div className="flex">
                    <input type="button"/>
                    <img src="/src/Images/Menu.png" className="w-10 h-10 pb-5 pl-5 mt-1" />
                </div>
                <div className="flex">
                    <p className="ml-9 text-white text-xl">Takeoff Tracker</p>

                <div className="flex ml-[850px] -mt-1">
                  <a href="/admin/manage-users">  
                    <MdManageAccounts className='text-white w-8 h-8'/>
                  </a>
                </div> 
                
                <div className="flex ml-3 -mt-1">
                  <a href="/admin/manage-managers">
                    <MdManageAccounts className='text-white w-8 h-8'/>
                  </a>
                </div> 


                <div className="flex ml-3 -mt-1">
                  <a href="/admin/addallusers"> 
                    <IoPersonAdd className='text-white w-6 h-6 mt-1'/>
                  </a>
                </div> 


          <div className="flex -mt-1">
                
            <div className="ml-4 border-0 hover:underline text-white mt-2" >
                <Logout/>
            </div>
          </div>

                </div>
            </div>
        </nav>
    </div>
    </>
  )
}

export default Navbar3