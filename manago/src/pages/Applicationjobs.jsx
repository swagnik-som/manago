import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { assets, jobsApplied } from '../assets/assets'
import moment from 'moment'

const Applicationjobs = () => {
  const[isedit,setisedit]=useState(false)
  const[resume,setresume]=useState(null)
  return (
    <>
    <Navbar/>
    <div className='container px-4 min-h-[65h] 2xl:px-20 mx-auto my-10 '>
      <h2 className='tex-xl font-semibold'>Your resume</h2>
      <div className='flex gap-2 mb-6 mt-3'>
{isedit ? <>

<label className='flex items-center ' htmlFor="resume-upload">
  <p className='bg-blue-100 text-blue-600 px-4 py-2 rounded-lg mr-2 '>Select Resume</p>
  <input id='resume-upload' onClick={e=>setresume(e.target.files[0])} type="file" hidden accept='application/pdf' />
  <img src={assets.profile_upload_icon} alt="" />
</label>
<button onClick={()=>setisedit(false)} className='bg-green-100 border-green-400 rounded-lg px-4 py-2 '>Save</button>
</> :<div className='gap-2 flex'>
  <a className='bg-blue-100 text-blue-500 px-4 py-2  rounded-lg ' href="">Resume</a>
  <button onClick={()=>setisedit(true)} className='text-gray-500 border border-gray-400 rounded-lg px-4 py-2 '>Edit</button>
  </div>}

      </div>
      <h2 className='text-xl font-semibold mb-4 '>Job applied</h2>
      <table className='min-w-full bg-white border rounded-lg'>
        <thead>
          <tr>
            <th className='py-3 px-4 border-b text-left '>Company</th>
            <th className='py-3 px-4 border-b text-left '>Job Title</th>
            <th className='py-3 px-4 border-b text-left mx-sm:hidden '>Location </th>
            <th className='py-3 px-4 border-b text-left mx-sm:hidden'>Date</th>
            <th className='py-3 px-4 border-b text-left '> Status</th>
          </tr>
        </thead>
        <tbody>
          {jobsApplied.map((job,index)=>true ?(
            <tr>
              <td className='py-3 px-4 flex items-center gap-2  border-b '>
                <img className='w-8 h-8 ' src={job.logo} alt="" />
                {job.company}
              </td>
              <td className='py-2 px-4 border-b '>{job.title}</td>
              <td className='py-2 px-4 border-b mx-sm:hidden '>{job.location}</td>
              <td className='py-2 px-4 border-b  mx-sm:hidden '>{moment(job.date).format('ll')}</td>
              <td className='py-2 px-4 border-b '>
                <span className={`${job.status==='Accepted'?'bg-green-300': job.status==='Rejected'? "bg-red-300":'bg-blue-100'} px-4 py-1.5 rounded`}>
                {job.status}
                </span>
                </td>
            </tr>
          ):(null))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Applicationjobs