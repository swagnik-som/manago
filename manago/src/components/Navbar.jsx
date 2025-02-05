import React, { useState } from 'react'
import {assets} from '../assets/assets'
import Logos from   '../assets/Logos.jpg'
import { UserButton,useClerk,useUser } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Appscontext } from '../contexts/Appscontext'
const Navbar = () => {
    const {openSignIn}=useClerk()
    const {user}=useUser()
 const{setshowrecrutporlogin}=useContext(Appscontext)
  return (
    <div className='shadow py-4'>
<div className='container px-4 2xl:px-20 mx-auto flex justify-between  item-center '><img src={Logos} className="w-16 h-16"   alt=""  />
{
    user ?<div className='flex item-center gap-3 '>
        <Link to={'/applicationjobs'}>Applied jobs</Link>
        <p>|</p>
        <p className='max-sm:hidden'>Hi!{user.firstName +""+user.lastName}</p>
        <UserButton/>
    </div>:
    <div className='flex gap-4 max-sm:text-xs'>
    <button onClick={e => setshowrecrutporlogin(true)} className='text-white bg-blue-600 rounded-full text-bold font-bold px-3 h-12'>Recrutor login</button>
    <button onClick={ e =>openSignIn()} className='text-white bg-blue-600 px-6 sm-px-9 rounded-full h-12'>Login</button>
</div>
}

</div>
    </div>
  )
}

export default Navbar