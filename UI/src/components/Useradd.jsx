// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Useradd = () => {
//     const [Users, setUsers] = useState([]);

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = async () => {
//         try {
//             const response = await axios.get('/api/useradd');
//             setUsers(response.data);
//         } catch (error) {
//             console.error('Error fetching users:', error);
//             // alert('Failed to fetch assets.');
//         }
//     };

//     const handleEditUsers = (assetId) => {
//         // Redirect to edit form page with asset details
//         window.location.href = `/admin?id=${userId};`
//     };

//     const handleDeleteUsers = async (userId) => {
//         if (window.confirm('Are you sure you want to delete this user?')) {
//             try {
//                 await axios.delete(`/api/useradd/${userId}`);
//                 setAssets(Users.filter(Users => Users.userId !== userId));
//                 alert('User deleted successfully!');
//             } catch (error) {
//                 console.error('Error deleting User:', error);
//                 // alert('Failed to delete asset.');
//             }
//         }
//     };

//     return (
//         <div className="bg-white rounded w-[900px] mx-auto mt-10 shadow p-4 mb-6">
//         <div className="text-2xl font-bold text-center mb-6 text-black">Manage All Users</div>
//         <h3 className="text-lg font-semibold mb-4 mt-9">Users Details</h3>
            
//             <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
//               <thead>
//                 <tr className="bg-gray-100 text-left">
//                   <th className="px-6 py-3 text-sm font-medium text-black uppercase tracking-wider">Name</th>
//                   <th className="px-6 py-3 text-sm font-medium text-black uppercase tracking-wider">Email</th>
//                   <th className="px-6 py-3 text-sm font-medium text-black uppercase tracking-wider">Role</th>
//                   <th className="px-6 py-3 text-sm font-medium text-black uppercase tracking-wider">User Type</th>
//                   <th className="px-6 py-3 text-sm font-medium text-black uppercase tracking-wider">Actions</th>
//                 </tr>
//               </thead>
//                         <tbody>
//                             {Users.map(Users => (
//                                 <tr key={Users.userId} className="border-b border-gray-200">
//                                     <td className="px-6 py-4">{Users.userName}</td>
//                                     <td className="px-6 py-4">{Users.email}</td>
//                                     <td className="px-6 py-4">{Users.password}</td>
//                                     <td className="px-6 py-4">{Users.userType}</td>
//                                     <td className="px-6 py-4">{Users.userRoll}</td>
                                    
//                                     <td className="px-6 py-4">
//                                         <div className='flex'>
//                                             <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
//                                                 onClick={() => handleEditUsers(asset.assetId)}>Edit</button>
//                                             <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600 ml-2"
//                                                 onClick={() => handleDeleteUsers(asset.assetId)}>Delete</button>
//                                         </div>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//     );
// };

// export default Useradd;









import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Useradd = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/useradd');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
      // alert('Failed to fetch users.');
    }
  };

  const handleEditUsers = (userId) => {
    window.location.href = `/admin?id=${userId}`;
  };

  const handleDeleteUsers = async (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await axios.delete(`/api/useradd/${userId}`);
        setUsers(users.filter(user => user._id !== userId));
        alert('User deleted successfully!');
      } catch (error) {
        console.error('Error deleting user:', error);
        // alert('Failed to delete user.');
      }
    }
  };

  return (
    <div className="bg-white rounded w-[900px] mx-auto mt-10 shadow p-4 mb-6">
      <div className="text-2xl font-bold text-center mb-6 text-black">Manage All Users</div>
      <h3 className="text-lg font-semibold mb-4 mt-9">Users Details</h3>
      
      <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="px-6 py-3 text-sm font-medium text-black uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-sm font-medium text-black uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-sm font-medium text-black uppercase tracking-wider">Password</th>
            <th className="px-6 py-3 text-sm font-medium text-black uppercase tracking-wider">User Type</th>
            <th className="px-6 py-3 text-sm font-medium text-black uppercase tracking-wider">User Roll</th>
            <th className="px-6 py-3 text-sm font-medium text-black uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id} className="border-b border-gray-200">
              <td className="px-6 py-4">{user.userName}</td>
              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4">{user.password}</td>
              <td className="px-6 py-4">{user.userType}</td>
              <td className="px-6 py-4">{user.userRoll}</td>
              <td className="px-6 py-4">
                <div className='flex'>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    onClick={() => handleEditUsers(user._id)}>Edit</button>
                  <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600 ml-2"
                    onClick={() => handleDeleteUsers(user._id)}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Useradd;
