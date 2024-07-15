import React from 'react'

const LeaveLetter = () => {
  return (
    <>
    
    <div className="w-1/2 h-96 mt-28 ml-72 p-8 bg-gradient-to-r from-gray-300 to-gray-200 rounded-lg shadow-md w-full max-w-md shadow-xl">
            <h2 className="text-2xl font-semibold text-center">Apply for Leave</h2><br/>

            <form action="/lettersend" method="POST">
                <div className="mb-2">
                    <label className="block text-gray-700 mb-2" id="leaveType" name="leaveType">Leave Type</label>
                   
                    <div className="flex items-center mb-4 gap-9">
                        <label for="sick-leave" className="radio">
                            <input type="radio" id="leaveType" name="leaveType" value="Sick Leave" />
                            Sick Leave
                        </label>
                        <label for="casual-leave" className="radio">
                            <input type="radio" id="leaveType" name="leaveType" value="Casual Leave" />
                            Casual Leave
                        </label>
                        <label for="annual-leave" className="radio">
                            <input type="radio" id="leaveType" name="leaveType" value="Annual Leave" />
                            Annual Leave
                        </label>
                    </div>
                </div>

                <div className="mb-2">
                    <label className="block text-gray-700 mb-2">Detail</label>
                    <input className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 h-8" type="text" id="detail" name="detail" placeholder="Detail" />
                </div>
                <div className="mb-4 grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-700 mb-2">From</label>
                        <input className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 h-8" type="date" id="fromDate" name="fromDate" />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-2">To</label>
                        <input className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 h-8" type="date" id="toDate" name="toDate" />
                    </div>
                </div>
               <a href=""><button className="w-full bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none h-8">Send</button></a> 
            </form>
        </div>
    </>
  )
}

export default LeaveLetter