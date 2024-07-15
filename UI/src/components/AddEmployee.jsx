import React from 'react'

const AddEmployee = () => {
  return (
    <>
     <div className="bg-white rounded shadow-xl p-4 mx-auto mt-16 w-[1050px]">
      <h2 className="text-xl font-bold mt-4">Add Employees</h2>

      <div className="flex-1 p-6">
        <div className="bg-white rounded shadow p-6">
          <form action="#">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-semibold" for="name">Name</label>
                <input type="text" id="name" name="name" className="w-full p-2 border rounded" placeholder="John Joe"
                required />
              </div>
              <div>
                <label className="block mb-2 font-semibold" for="email">Email</label>
                <input type="email" id="email" name="email" className="w-full p-2 border rounded"
                  placeholder="john.Joe@example.com" required />
              </div>
              <div>
                <label className="block mb-2 font-semibold" for="department">Department</label>
                <input type="text" id="department" name="department" className="w-full p-2 border rounded"
                  placeholder="Marketing" required />
              </div>
              <div>
                <label className="block mb-2 font-semibold" for="position">Position</label>
                <input type="text" id="position" name="position" className="w-full p-2 border rounded" placeholder="Manager"
                  required />
              </div>
            </div>
            <div className="mt-4">
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add
                Employee</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default AddEmployee