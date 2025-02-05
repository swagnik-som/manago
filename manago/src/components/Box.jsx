import React, { useContext, useRef } from 'react'
import { assets } from '../assets/assets'
import { Appscontext } from '../contexts/Appscontext'

const Box = () => {
    const{setsearchfilter,setissearched
    }=useContext(Appscontext)
    const titleref=useRef(null)
    const locatinref=useRef(null)
    const  onSearch =()=>{
setsearchfilter({
    title:titleref.current.value,
    location:locatinref.current.value
})
setissearched(true)

    }
  return (
    <>
    <div className='container 2xl:px-20 mx-auto my-10 '>
        <div className='bg-gradient-to-r from-blue-800 to-blue-950 text-white text-center py-16 mx-2 border-xl '>
            

<h1 className='text-2xl md:text-3xl lg:text-3xl font-medium mb-4 '>Over 12,000 Jobs are here</h1>
<p className='mb-8 max-w-xl mx-auto text-sm font-light px-5 '>Welcome to [Portal Name], where your next career opportunity is just a click away!</p>
<p>Explore job listings, connect with top employers, and take the next step in your professional journey.</p>
<div className='flex items-center justify-between bg-white rounded text-gray-600 max-w-xl pl-4 mx-4  sm:mx-auto'>
    <div className='flex  item-center'>
        <img src={assets.search_icon} alt="search"  />
        <input type=' text' placeholder='description ' className='max-sm:text-xs p-2 rounded outline-none w-full ' ref={titleref}/>
    </div>
    <div  className='flex  item-center'>
        <img src={assets.location_icon} alt="location "  />
        <input type=' text' placeholder='location ' className='max-sm:text-xs p-2 rounded outline-none w-full ' ref={locatinref}/>
    </div>
    <button onClick={ onSearch} className='bg-blue-600 text-white m-1 px-5 py-2 rounded-xl '>Search</button>
</div>
        </div>
        <div className='border border-gray-300 shadow-md  mx-2 mt-5 p-6 rounded-md flex '>
            <div className='flex justify-center gap-1 lg:gap-16 flex-wrap '>
                <p className='font-medium '>Trusted By </p>
                <img className='h-6' src={assets.accenture_logo} alt=""  />
                <img className='h-6' src={assets.walmart_logo} alt=""  />
                <img className='h-6' src={assets.adobe_logo} alt=""  />
                <img className='h-6' src={assets.amazon_logo} alt=""  />
                <img className='h-6' src={assets.microsoft_logo} alt=""  />
            </div>
        </div>
    </div>
    </>
  )
}

export default Box