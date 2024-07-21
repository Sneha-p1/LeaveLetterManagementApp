// import React from 'react'

// const History = () => {

//   return (
//     <>
//     <div className="bg-white rounded shadow-xl p-4 mx-auto mt-10 w-[1077px]">
//     <div className="text-2xl font-bold text-center mb-6 text-black">Leave History</div>
    
//     <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
//         <thead>
//             <tr  className="bg-gray-100 text-left">
//                 <th className="px-6 py-3 text-xs font-medium text-black uppercase tracking-wider">Leave Type</th>
//                 <th className="px-6 py-3 text-xs font-medium text-black uppercase tracking-wider">FromDate</th>
//                 <th className="px-6 py-3 text-xs font-medium text-black uppercase tracking-wider">ToDate</th>
//                 <th className="px-6 py-3 text-xs font-medium text-black uppercase tracking-wider">Description</th>
//                 <th className="px-6 py-3 text-xs font-medium text-black uppercase tracking-wider">Posting Date</th>
//                 <th className="px-6 py-3 text-xs font-medium text-black uppercase tracking-wider">Status</th>  
//             </tr>
//         </thead>
//         <tbody id="userLeaveHistory">
            
//         </tbody>
//     </table>
// </div>

//     </>
//   )
// }




// export default History


import React, { useEffect, useState } from 'react';
import axios from 'axios';

const History = () => {
  const [leaveHistory, setLeaveHistory] = useState([]);
  const userName = localStorage.getItem('username'); // Replace with actual username fetching logic

  useEffect(() => {
    const fetchLeaveHistory = async () => {
      try {
        const response = await axios.get(`/api/leaveHistory/${userName}`);
        setLeaveHistory(response.data);
      } catch (error) {
        console.error('Error fetching leave history:', error);
      }
    };

    fetchLeaveHistory();
  }, [userName]);

  return (
    <>
      <div className="bg-white rounded shadow-xl p-4 mx-auto mt-10 w-[1077px]">
        <div className="text-2xl font-bold text-center mb-6 text-black">Leave History</div>
        <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-6 py-3 text-xs font-medium text-black uppercase tracking-wider">Leave Type</th>
              <th className="px-6 py-3 text-xs font-medium text-black uppercase tracking-wider">FromDate</th>
              <th className="px-6 py-3 text-xs font-medium text-black uppercase tracking-wider">ToDate</th>
              <th className="px-6 py-3 text-xs font-medium text-black uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-xs font-medium text-black uppercase tracking-wider">Posting Date</th>
              <th className="px-6 py-3 text-xs font-medium text-black uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody id="userLeaveHistory">
            {leaveHistory.map(leave => (
              <tr key={leave._id} className="border-b border-gray-200">
                <td className="px-6 py-4">{leave.leaveType}</td>
                <td className="px-6 py-4">{new Date(leave.fromDate).toLocaleDateString()}</td>
                <td className="px-6 py-4">{new Date(leave.toDate).toLocaleDateString()}</td>
                <td className="px-6 py-4">{leave.detail}</td>
                <td className="px-6 py-4">{new Date(leave.createdAt).toLocaleDateString()}</td>
                <td className="px-6 py-4">{leave.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default History;
