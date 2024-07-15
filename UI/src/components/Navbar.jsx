import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className="flex bg-gradient-to-r from-blue-900 to-red-950 shadow-lg">
        <nav>
            <div className="flex mt-4">
                <div className="flex">
                    <input type="button"/>
                    <img src="/src/Images/Menu.png" className="w-10 h-10 pb-5 pl-5 mt-1" />
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