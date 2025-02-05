import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Jobbox = ({Job}) => {
    const navigate=useNavigate()
  return (
    <div className='border  p-6 shadow-rounded '>
<div className='flex justifu=y-between items-center'>
<img className='h-8' src={assets.company_icon} alt="logo" />
    </div>
    <h4 className='font-medium text-xl mt-2 '>{Job.title}</h4>
    <div className='flex items-center gap-3 mt-2 text-xs '>
        <span className='bg-blue-50 borer border-blue-200 px-2 py-1.5 rounded '>{Job.location}</span>
        <span className='bg-blue-50 borer border-red-200 px-2 py-1.5 rounded '>{Job.level}</span>
        
</div>

<p className='text-gray-600  text-sm mt-4 ' dangerouslySetInnerHTML={{__html:Job.description.slice(0,150)}}></p>
<div className='mt-4 flex gap-4 text-sm '>
    <button onClick={()=>navigate(`/applyjobs/${Job._id}`)} className='bg-blue-400 text-white px-4 py-2 rounded'>Applynow</button>
    <button onClick={()=>navigate(`/applyjobs/${Job._id}`)} className='text-gray-600 border border-gray-500 rounded px-3 py-2  rounded '>Learnmore</button>
</div>
    </div>
    
  )
}

export default Jobbox