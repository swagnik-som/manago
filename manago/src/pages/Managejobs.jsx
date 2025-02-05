import React from 'react'
import { manageJobsData } from '../assets/assets'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

const Managejobs = () => {
  const navigate=useNavigate()
  return (
    <div className='container p-4 max-w-5xl'>

      <div className='overflow-x-auto'>
        <table className='min-w-full bg-white border border-gray-300 max-sm:text-sm'>
          <thead>
            <tr >
              <th className='py-2 px-4 border-b text-left max-sm:hidden '>#</th>
              <th className='py-2 px-4 border-b text-left max-sm:hidden '>Job title</th>
              <th className='py-2 px-4 border-b text-left '>Date</th>
              <th className='py-2 px-4 border-b text-left  '>Location </th>
              <th className='py-2 px-4 border-b text-left  '>Application</th>
              <th className='py-2 px-4 border-b text-left  '>visible</th>
            </tr>
          </thead>
          <tbody>
            {manageJobsData.map((job,index)=>(
              <tr key={index} className='text-gray-700'>
                <td className='py-2 px-4 border-b max-sm:hidden'>{index+1}</td>
                <td className='py-2 px-4 border-b max-sm:hidden'>{job.title}</td>
                <td className='py-2 px-4 border-b max-sm:hidden'>{moment(job.date).format('ll')}</td>
                <td className='py-2 px-4 border-b max-sm:hidden'>{job.location}</td>
                <td className='py-2 px-4 border-b max-sm:hidden text-center'>{job.applicants}</td>
                <td className='py-2 px-4 border-b max-sm:hidden'>
                  <input className='scale-125 ml-4 ' type="checkbox"   />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='mt-4 flex justify-end'>
        <button onClick={()=>navigate('/dashboard/addjobs')} className='bg-black text-white px-4 py-2 rounded'>Add new Job</button>
      </div>
    </div>
  )
}

export default Managejobs