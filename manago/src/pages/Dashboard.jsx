import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import Logos from   '../assets/Logos.jpg'
const Dashboard = () => {
    const navigate=useNavigate()
  return (
    <div className='min-h-screen '>
    <div className='shadow py-4'>Das
{/* navbar for recrutor... */}
<div className='px-5 flex justify-between items-center'>
    <img  onClick={()=>navigate('/')} src={Logos} className='w-16 h-16  max-sm:w-32 cursor-pointer' alt="" />
    <div className='flex items-center gap-3 '>
        <p className='max-sm:hidden '>Welcome ,Manago </p>
        <div className='relative group '>
            <img className='w-8 border rounded-full' src={assets.company_icon} alt="" />
            <div className='absolute hidden group-hover:block right-0 z-10 text-black rounded pt-12 '>
<ul className='list-none m-0 p-2 bg-white  rounded-md border text-sm '>
    <li className='py-1 px-2 cursor-pointer pr-10 '>Logout</li>
</ul>
            </div>
        </div>
    </div>
</div>
        
    </div>

    <div className='flex items-start'>
{/* left sidebar with lot of option ... */}
<div className='inline-block min-h-screen border-r-2 '>
    <ul className='flex  flex-col items-start  pt-5 text-gray-800 '>
        <NavLink className={({isActive})=>`flex items-center p-3  sm:px-6 gap-2 w-full hover:bg-gray-300  ${isActive && 'border-r-4 bg-blue-100 border-blue-500  '}`} to={'/dashboard/addjobs'}>
<img  className='min-w-4 ' src={assets.add_icon} alt="" />
<p className='max-sm:hidden'>Add job</p>
        </NavLink>
        <NavLink className={({isActive})=>`flex items-center p-3  sm:px-6 gap-2 w-full hover:bg-gray-300  ${isActive && 'border-r-4 bg-blue-100 border-blue-500  '}`} to={'/dashboard/managejobs'}>
<img className='min-w-4 ' src={assets.home_icon} alt="" />
<p className='max-sm:hidden'>Manage Jobs</p>
        </NavLink>
        <NavLink className={({isActive})=>`flex items-center p-3  sm:px-6 gap-2 w-full hover:bg-gray-300  ${isActive && 'border-r-4 bg-blue-100 border-blue-500  '}`} to={'/dashboard/viewapplications'}>
<img  className='min-w-4 ' src={assets.person_tick_icon} alt="" />
<p className='max-sm:hidden'>View Applications</p>
        </NavLink>
    </ul>
</div>
<div>
<Outlet/>
</div>
    </div>
    </div>
  )
}

export default Dashboard