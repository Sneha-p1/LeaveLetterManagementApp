import React from 'react'

const Settings = () => {
  return (
    <>
    <div className="bg-white w-[600px] m-auto rounded mt-20 shadow-lg p-4 flex">
            <div className="flex p-6">
               
                    <form action="#">
                        <div className="block mb-2 font-semibold ml-16">
                            <h3 className="text-lg font-semibold mb-4">Profile Settings</h3>
                            <div className="flex">
                                <input type="text" id="text" className="w-[300px] p-2 border rounded" placeholder="Name"/>
                            </div>
                            <div className="mt-4">
                                <input type="password" id="text" className="w-[300px] p-2 border rounded" placeholder="Email"/>
                            </div>
                            <div className="mt-4">
                                <input type="password" id="confirm_password" className="w-[300px] p-2 border rounded"
                                    placeholder="Password" />
                            </div>
                            <button className="mt-5 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Save Changes</button>
                        </div>
                
                    </form>
                </div>
    </div>
         
           
    </>
  )
}

export default Settings