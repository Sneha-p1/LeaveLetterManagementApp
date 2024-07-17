import React from 'react'
import Logout from './Logout'

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

                <div className="flex ml-[800px]">
                  <a href="/manager/employees">  
                    <img src="/src/Images/developers.png" className="w-12 h-12 pb-5 pl-5 mt-1" />
                  </a>
                </div> 

                <div className="flex ml-4">
                  <a href="/manager/settings"> 
                    <img src="/src/Images/settings.png" className="w-12 h-12 pb-5 pl-5 mt-1" />
                  </a>
                </div>

          <div className="flex">
                <div><img src="/src/Images/log-out.png" className="w-12 h-12 pb-5 pl-5 mt-1 ml-2"/></div>
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

export default Navbar2