import React from 'react'

const Manageuser = () => {
  return (
    <>
    
        <div className="bg-white rounded w-[900px] mx-auto mt-10 shadow p-4 mb-6">
            <h3 className="text-lg font-semibold mb-4">Manage Users</h3>
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Name</th>
                  <th className="py-2 px-4 border-b">Email</th>
                  <th className="py-2 px-4 border-b">Role</th>
                  <th className="py-2 px-4 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
              
                <tr>
                  <td className="py-2 px-4 border-b">John Joe</td>
                  <td className="py-2 px-4 border-b">john.joe@example.com</td>
                  <td className="py-2 px-4 border-b">User</td>
                  <td className="py-2 px-4 border-b">
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