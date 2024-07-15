import React from 'react'

const Employees = () => {
  return (
    <>
    <div className="bg-white rounded shadow-xl p-4 mx-auto mt-8 w-[1050px]">
            <h2 className="text-xl font-bold mt-4">Employees</h2>
            <a href="/manager/addemployees"><button className="bg-blue-500 text-white mt-7 rounded hover:bg-blue-600 h-11 w-32">Add Employee</button></a> 

            <h3 className="text-lg font-semibold mb-4 mt-9">Employee List</h3>
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Name</th>
                  <th className="py-2 px-4 border-b">Department</th>
                  <th className="py-2 px-4 border-b">Email</th>
                  <th className="py-2 px-4 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>

                <tr>
                  <td className="py-2 px-4 border-b">John Doe</td>
                  <td className="py-2 px-4 border-b">Developer</td>
                  <td className="py-2 px-4 border-b">johndoe@gmail.com</td>
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

export default Employees