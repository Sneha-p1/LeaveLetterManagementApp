import React from 'react'

const LogOut = () => {
  return (
    <div className="bg-slate-200 min-h-screen flex items-center justify-center">
      <div className="w-[500px] h-52 bg-white m-auto shadow-xl rounded-lg">
        <h2 className="text-xl mt-6 text-center">Logging out</h2>
        <h2 className="text-sm mt-6 text-center">You are logging out from following app</h2>
        <div className="flex justify-center mt-8 space-x-4">
          <a href="/user-Dashboard">
            <button type="button" className="bg-sky-500 w-20 h-8 text-white hover:bg-sky-600 rounded-lg">Cancel</button>
          </a>
          <button type='button' className="bg-sky-500 w-20 h-8 text-white hover:bg-sky-600 rounded-lg">Logout</button>
        </div>
      </div>
    </div>
  )
}

export default LogOut
