import React from 'react'
import Navbar from '../components/Navbar'
import UserSidebar from '../components/UserSidebar'
import UserLeaveHistory from '../components/UserLeaveHistory'

const LeaveHistory = () => {
  return (
    <>
    <Navbar/>
<div class="flex">
  
<UserSidebar/> 
<UserLeaveHistory/>
  
</div>
    
    </>
  )
}

export default LeaveHistory