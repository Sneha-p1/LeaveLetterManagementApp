import React from 'react'

const Balance = () => {
  return (
    <>
     <div className="w-60 h-56 bg-gradient-to-r from-gray-400 to-gray-300 m-auto rounded-2xl shadow-2xl">
        <h2 className="text-white text-2xl font-semibold mb-4 mt-2 text-center">Monthly Leave</h2>
        <h2 className="text-white text-7xl font-semibold mb-4 mt-9 text-center">12</h2>
      </div>

      <div className="w-60 h-56 bg-gradient-to-r from-gray-400 to-gray-300 m-auto rounded-2xl shadow-2xl">
        <h2 className="text-white text-2xl font-semibold mb-4 mt-2 text-center">Casual Leave</h2>
        <h2 className="text-white text-7xl font-semibold mb-4 mt-9 text-center">2</h2>
      </div>

      <div className="w-60 h-56 bg-gradient-to-r from-gray-400 to-gray-300 m-auto rounded-2xl shadow-2xl">
        <h2 className="text-white text-2xl font-semibold mb-4 mt-2 text-center"> Leave Balance</h2>
        <h2 className="text-white text-7xl font-semibold mb-4 mt-9 text-center">7</h2>
      </div>
    </>
  )
}

export default Balance