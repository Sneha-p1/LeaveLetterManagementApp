import React from 'react'

const History = () => {

  return (
    <>
    <div className="mt-5 mx-auto w-[80%] bg-white p-6 rounded-lg">
    <table className="w-full table-auto border-collapse text-center">
        <thead>
            <tr>
                <th className="border px-4 py-2">Leave Type</th>
                <th className="border px-4 py-2">FromDate</th>
                <th className="border px-4 py-2">ToDate</th>
                <th className="border px-4 py-2">Description</th>
                <th className="border px-4 py-2">Posting Date</th>
                <th className="border px-4 py-2">Status</th>  
            </tr>
        </thead>
        <tbody id="userLeaveHistory">
            
        </tbody>
    </table>
</div>

    </>
  )
}

{/* <script>
    async function history() {
        try {
            const response = await fetch('/leaveHistory/data');
            const leavedet = await response.json();
            const leavetab = document.getElementById('userLeaveHistory');
            leavetab.innerHTML = '';
            leavedet.forEach(leave => {
                leavetab.innerHTML += `
                    <tr>
                        
                        <td className="border px-4 py-2">${leave.leaveType}</td>
                        <td className="border px-4 py-2">${leave.fromDate.split('T')[0]}</td>
                        <td className="border px-4 py-2">${leave.toDate.split('T')[0]}</td>
                        <td className="border px-4 py-2">${leave.detail}</td>
                        <td className="border px-4 py-2">${leave.postDate}</td>
                        <td className="border px-4 py-2">${leave.status}</td>
                        
                    </tr>
                `;
            });
        } catch (error) {
            console.error('Error loading ');
        }
    }

    document.addEventListener('DOMContentLoaded', history);
</script> */}


export default History