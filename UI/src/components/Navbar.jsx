import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className="flex bg-gradient-to-r from-blue-900 to-red-950 shadow-lg">
        <nav>
            <div className="flex mt-4">
                <div className="flex">
                    <input type="button"/>
                   <Link to="/user-Dashboard"> <img src="/src/Images/Menu.png" className="w-10 h-10 pb-5 pl-5 mt-1" /></Link>
                </div>
                <div>
                    <p className="ml-9 text-white text-xl">Takeoff Tracker</p>
                </div>
            </div>
        </nav>
    </div>
    </>
  )
}

export default Navbar