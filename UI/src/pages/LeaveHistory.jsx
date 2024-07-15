import React from 'react'
import Navbar from '../components/Navbar'
import History from '../components/History'
import UserSidebar from '../components/UserSidebar'

const LeaveHistory = () => {
  return (
    <>
    <Navbar/>
<div class="flex">
  
<UserSidebar/> 
<History/>
  
</div>
    
    </>
  )
}

export default LeaveHistory