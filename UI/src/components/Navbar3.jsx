import React from 'react'

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

                <div className="flex ml-[860px]">
                  <a href="/admin/manage-users">  
                    <img src="/src/Images/developers.png" className="w-12 h-12 pb-5 pl-5 mt-1" />
                  </a>
                </div> 

                <div className="flex ml-3">
                  <a href="/admin/manage-managers">  
                    <img src="/src/Images/development.png" className="w-12 h-12 pb-5 pl-5 mt-1" />
                  </a>
                </div> 

                <div className="flex ml-3">
                  <a href="/admin/settings"> 
                    <img src="/src/Images/settings.png" className="w-12 h-12 pb-5 pl-5 mt-1" />
                  </a>
                </div>

                </div>
            </div>
        </nav>
    </div>
    </>
  )
}

export default Navbar3