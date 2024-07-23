// components/LeaveHistory.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserLeaveHistory = () => {
    const [leaves, setLeaves] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLeaveHistory = async () => {
            try {
                const response = await axios.get('/api/leaves/history');
                setLeaves(response.data);
            } catch (error) {
                console.error('Error fetching leave history', error);
            } finally {
                setLoading(false);
            }
        };

        fetchLeaveHistory();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="leave-history">
            <h2>Leave History</h2>
            {leaves.length === 0 ? (
                <p>No leave history found.</p>
            ) : (
                <table className="table-auto w-full">
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
                    <tbody>
                        {leaves.map((leave) => (
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
            )}
        </div>
    );
};

export default UserLeaveHistory;
