import React from 'react'
import Navbar from '../components/Navbar'
import UserSidebar from '../components/UserSidebar'
import Balance from '../components/Balance'

const LeaveBalance = () => {
  return (
    <>
    <Navbar/>
<div class="flex">
  
  <UserSidebar/> 
  <Balance/>
  
</div>
    </>
  )
}

export default LeaveBalance