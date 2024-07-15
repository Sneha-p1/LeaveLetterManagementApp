import React from 'react'

const ManagerHome = () => {
  return (
    <>
    <div className="bg-white rounded shadow-xl p-4 mx-auto mt-10 w-[1050px] ">
            <h2 className="text-xl font-bold mt-4">Leave Requests</h2>

            <h3 className="text-lg font-semibold mb-4 mt-9">Pending Leave Requests</h3>
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Employee</th>
                  <th className="py-2 px-4 border-b">Type</th>
                  <th className="py-2 px-4 border-b">Start Date</th>
                  <th className="py-2 px-4 border-b">End Date</th>
                  <th className="py-2 px-4 border-b">Status</th>
                  <th className="py-2 px-4 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>

                <tr>
                  <td className="py-2 px-4 border-b">John Joe</td>
                  <td className="py-2 px-4 border-b">Vacation</td>
                  <td className="py-2 px-4 border-b">2024-06-20</td>
                  <td className="py-2 px-4 border-b">2024-06-25</td>
                  <td className="py-2 px-4 border-b text-yellow-500">Pending</td>
                  <td className="py-2 px-4 border-b">
                    <button className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 ">Approve</button>
                    <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 ml-4">Reject</button>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

    </>
  )
}

export default ManagerHome