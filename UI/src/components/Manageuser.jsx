import React from 'react'

const Manageuser = () => {
  return (
    <>
    
        <div className="bg-white rounded w-[900px] mx-auto mt-10 shadow p-4 mb-6">
        <div className="text-2xl font-bold text-center mb-6 text-black">Manage Users</div>
        <h3 className="text-lg font-semibold mb-4 mt-9">Users Details</h3>
            
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="px-6 py-3 text-sm font-medium text-black uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-sm font-medium text-black uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-sm font-medium text-black uppercase tracking-wider">Role</th>
                  <th className="px-6 py-3 text-sm font-medium text-black uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody>
              
                <tr>
                  <td className="px-6 py-3 text-sm font-medium text-black  tracking-wider">John Joe</td>
                  <td className="px-6 py-3 text-sm font-medium text-black  tracking-wider">john.joe@example.com</td>
                  <td className="px-6 py-3 text-sm font-medium text-black  tracking-wider">User</td>
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

export default Manageuser