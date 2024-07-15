import React from 'react'

const LogOut = () => {
  return (
    <div className=" bg-slate-500">
        <div className="w-[500px] h-52 bg-white shadow-xl rounded-lg ">
            <h2 className="text-xl text-center">Logging out</h2>
            <h2 className="text-sm mt-6 text-center">You are logging out from following app</h2>
            <a href="/user-Dashboard"><input type="button" value="Cancel" className="bg-sky-500 w-20 h-8 mt-8 ml-32 text-white hover:bg-sky-600 rounded-lg" /> </a> &nbsp;&nbsp;&nbsp;
            <button type='submit' className="bg-sky-500 w-20 h-8 text-white hover:bg-sky-600 rounded-lg">Logout</button>
        </div>
    </div>
  )
}

export default LogOut