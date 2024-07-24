// import React, { useEffect, useState } from 'react';

// const LeaveCount = ({ userName }) => {
//     const [leaveCounts, setLeaveCounts] = useState({
//         sickLeave: 0,
//         casualLeave: 0,
//         annualLeave: 0
//     });

//     useEffect(() => {
//         const fetchLeaveCounts = async () => {
//             try {
//                 const response = await fetch(`/api/leave-count/${userName}`);
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 const data = await response.json();
//                 setLeaveCounts(data);
//             } catch (error) {
//                 console.error('Error fetching leave counts:', error);
//             }
//         };

//         fetchLeaveCounts();
//     }, [userName]);

//     return (
//         <div className="flex flex-col items-center space-y-8 p-4">
//             <div className="w-80 h-64 bg-gradient-to-r from-blue-500 to-purple-500 m-auto rounded-2xl shadow-2xl flex flex-col justify-center items-center">
//                 <h2 className="text-white text-3xl font-semibold mb-4">Sick Leave</h2>
//                 <h2 className="text-white text-7xl font-semibold">{leaveCounts.sickLeave}</h2>
//             </div>

//             <div className="w-80 h-64 bg-gradient-to-r from-green-500 to-teal-500 m-auto rounded-2xl shadow-2xl flex flex-col justify-center items-center">
//                 <h2 className="text-white text-3xl font-semibold mb-4">Casual Leave</h2>
//                 <h2 className="text-white text-7xl font-semibold">{leaveCounts.casualLeave}</h2>
//             </div>

//             <div className="w-80 h-64 bg-gradient-to-r from-yellow-500 to-orange-500 m-auto rounded-2xl shadow-2xl flex flex-col justify-center items-center">
//                 <h2 className="text-white text-3xl font-semibold mb-4">Annual Leave</h2>
//                 <h2 className="text-white text-7xl font-semibold">{leaveCounts.annualLeave}</h2>
//             </div>
//         </div>
//     );
// };

// export default LeaveCount;



import React, { useEffect, useState } from 'react';

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
        <div className="flex flex-col items-center space-y-6 mt-6">
            {Object.entries(leaveCounts).map(([leaveType, count]) => (
                <div
                    key={leaveType}
                    className="w-64 h-60 bg-gradient-to-r from-gray-400 to-gray-300 m-auto rounded-2xl shadow-2xl flex flex-col items-center justify-center"
                >
                    <h2 className="text-white text-2xl font-semibold mb-4">{leaveType.charAt(0).toUpperCase() + leaveType.slice(1).replace('Leave', ' Leave')}</h2>
                    <h2 className="text-white text-7xl font-semibold">{count}</h2>
                </div>
            ))}
        </div>
    );
};

export default LeaveCount;
