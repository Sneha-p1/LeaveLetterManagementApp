import React, { useEffect, useState } from 'react'

const LeaveCount = ({ userName }) => {
  const [leaveCounts, setLeaveCounts] = useState({
      sickLeave: 0,
      casualLeave: 0,
      annualLeave: 0
  });

  useEffect(() => {
      const fetchLeaveCounts = async () => {
          try {
              const response = await fetch(`/api/leave-count/${userName}`);
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              const data = await response.json();
              setLeaveCounts(data);
          } catch (error) {
              console.error('Error fetching leave counts:', error);
          }
      };

      fetchLeaveCounts();
  }, [userName]);
  return (
    <>
     <div className="w-60 h-56 bg-gradient-to-r from-blue-500 to-purple-500 to-gray-300 m-auto rounded-2xl shadow-2xl">
        <h2 className="text-white text-2xl font-semibold mb-4 mt-2 text-center">Sick Leave</h2>
        <h2 className="text-white text-7xl font-semibold mb-4 mt-9 text-center">{leaveCounts.sickLeave}</h2>
      </div>

      <div className="w-60 h-56 bg-gradient-to-r from-green-500 to-teal-500 m-auto rounded-2xl shadow-2xl">
        <h2 className="text-white text-2xl font-semibold mb-4 mt-2 text-center">Casual Leave</h2>
        <h2 className="text-white text-7xl font-semibold mb-4 mt-9 text-center">{leaveCounts.casualLeave}</h2>
      </div>

      <div className="w-60 h-56 bg-gradient-to-r from-yellow-500 to-orange-500 m-auto rounded-2xl shadow-2xl">
        <h2 className="text-white text-2xl font-semibold mb-4 mt-2 text-center">Annual Leave</h2>
        <h2 className="text-white text-7xl font-semibold mb-4 mt-9 text-center">{leaveCounts.annualLeave}</h2>
      </div>
    </>
  )
}

export default LeaveCount