import React from 'react'
import HomePage from './pages/HomePage'
import { createBrowserRouter, createRoutesFromElements,RouterProvider, Route, Routes, Router } from 'react-router-dom'
import SignUP from './pages/SignUP'

import MainLayout from './layout/MainLayout'
import UserDashboard from './pages/UserDashboard'
import AuthLayout from './layout/AuthLayout'
import LeaveHistory from './pages/LeaveHistory'
import LeaveBalance from './pages/LeaveBalance'
import ManagerDashboard from './pages/ManagerDashboard'
import EmployeeDetails from './pages/EmployeeDetails'
import ManageManagers from './pages/ManageManagers'
import AddAllUsers from './pages/AddAllUsers'
import AdminDashboard from './pages/AdminDashboard'
import ManageAllUsers from './pages/ManageAllUsers'
import LogIn from './pages/LogIn'
import ManagerLeaveletter from './pages/ManagerLeaveletter'
import ManagerHistory from './pages/ManagerHistory'
import LeaveCountPage from './pages/LeaveCountPage'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
  <>
    
     

    <Route path="/" element={<AuthLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/log-in" element={<LogIn/>} />
        <Route path="/sign-up" element={<SignUP />} />
        <Route path="/user-Dashboard" element={<UserDashboard />} />
        <Route path="/Leave-History" element={<LeaveHistory />} />
        <Route path="/Leave-Balance" element={<LeaveCountPage />} />
      
    </Route>

    <Route path="/manager" element={<AuthLayout />}>
          <Route path="/manager" element={<ManagerDashboard />} />
          <Route path="/manager/Leave" element={<ManagerLeaveletter />} />
          <Route path="/manager/LeaveHistory" element={<ManagerHistory/>} />
          <Route path="/manager/employees" element={<EmployeeDetails />} />
    </Route>

    <Route path="/admin" element={<AuthLayout />}>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/addallusers" element={<AddAllUsers />} />
        <Route path="/admin/manage-users" element={<ManageAllUsers />} />
        <Route path="/admin/manage-managers" element={<ManageManagers />} />
        
    </Route>
        
            
         
        

    
  </>

  )
)

 
  return (
    <>

    
    {/* <HomePage/> */}
    <RouterProvider router={router} />
    </>
  )
}

export default App