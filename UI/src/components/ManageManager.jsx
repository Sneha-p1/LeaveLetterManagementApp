import React from 'react'

const ManageManager = () => {
  return (
    <>
   
            <div className="bg-white rounded shadow-lg p-4 mx-auto mt-10 w-[1050px]">
            <div className="text-2xl font-bold text-center mb-6 text-black">Manage Managers</div>
            <h3 className="text-lg font-semibold mb-4 mt-9">Managers Details</h3>
                <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
                  <thead>
                    <tr className="bg-gray-100 text-left">
                      <th className="px-6 py-3 text-sm font-medium text-black uppercase tracking-wider">Name</th>
                      <th className="px-6 py-3 text-sm font-medium text-black uppercase tracking-wider">Email</th>
                      <th className="px-6 py-3 text-sm font-medium text-black uppercase tracking-wider">Department</th>
                      <th className="px-6 py-3 text-sm font-medium text-black uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-6 py-3 text-sm font-medium text-black  tracking-wider">Jane Smith</td>
                      <td className="px-6 py-3 text-sm font-medium text-black  tracking-wider">jane.smith@example.com</td>
                      <td className="px-6 py-3 text-sm font-medium text-black  tracking-wider">HR</td>
                      <td className="px-6 py-3 text-sm font-medium text-black  tracking-wider">
                        <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Remove</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
       

    </>
  )
}

export default ManageManager