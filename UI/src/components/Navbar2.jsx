import React from 'react'
import Logout from './Logout'
import { MdManageAccounts } from "react-icons/md";
import { AiFillMail } from "react-icons/ai";
import { RiFolderHistoryFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Navbar2 = () => {
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

                <div className="flex ml-[840px]">
                  <Link to="/manager/Leave">  
                      <AiFillMail className='text-white w-6 h-6'/>
                  </Link>
              </div>
              
              <div className="flex ml-7">
                  <Link to="/manager/Leave-History">  
                      <RiFolderHistoryFill className='text-white w-6 h-6'/>
                  </Link>
                </div>

                <div className="flex ml-7 -mt-1">
                  <Link to="/manager/employees">  
                      <MdManageAccounts className='text-white w-7 h-8'/>
                  </Link>
                </div>

          <div className="flex ml-4">
            <div className="ml-3 border-0 hover:underline text-white mt-1" >
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

export default Navbar2