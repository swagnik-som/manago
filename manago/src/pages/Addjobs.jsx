import Quill from 'quill'
import React, { useEffect, useRef, useState } from 'react'
// import { useSearchParams } from 'react-router-dom'
import {JobCategories, JobLocations} from '../assets/assets'

const Addjobs = () => {
    const[title,settitle]=useState("")
    const[location,setlocation]=useState('Bangalore')
    const[catagory,setcatagoey]=useState('Programming')
    const[level,setlevel]=useState('Intermediate')
    const[salary,setsalary]=useState(0)
    const editorRef=useRef(null)
    const quilRef=useRef(null)
    useEffect(()=>{
        if(!quilRef.current && editorRef.current){
            quilRef.current =new Quill(editorRef.current,{
                theme:'snow'
            })
        }
    })
  return (
    <>
    <form className='container flex flex-col w-full items-center gap-3 ' action="">

        <div className='w-full'>
            <p className='mb-2'>Job Portal</p>
            <input type="text" name="" id="" placeholder='Type here' onClick={(e)=>settitle(e.target.value)}  value={title} required className='w-full max-w-lg px-3 py-2 border-2 border-l-gray-200 rounded'/>
        </div>
        <div className='w-full max-w-lg '>
            <p className='my-2 '>Job description</p>
            <div ref={editorRef}>

            </div>
        </div>
        <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-2 '>
            <div>
                <p className='mb-2 '>Job Category</p>
                <select className='w-full px-3 py-2 border-2 border-gray-200 rounded' onChange={(e)=>setcatagoey(e.target.value)}>
                {JobCategories.map((catagory,index)=>(
 <option  value={catagory} key={index}>{catagory}</option>
                ))}
                   
                    
                </select>
            </div>

            <div>
                <p className='mb-2 '>Job Location </p>
                <select className='w-full px-3 py-2 border-2 border-gray-200 rounded' onChange={(e)=>setlocation(e.target.value)}>
                {JobLocations.map((locatin,index)=>(
 <option  value={locatin} key={index}>{locatin}</option>
                ))}
                   
                    
                </select>
            </div> 
            <div>
                <p className='mb-2 '>Job Level </p>
                <select className='w-full px-3 py-2 border-2 border-gray-200 rounded' onChange={(e)=>setlevel(e.target.value)}>
                   <option value="Begineer Level">Begineer Level</option>
                   <option value="Intermediate Level">Intermediate Level</option>
                   <option value="Seniour Level">Seniour Level</option>
                </select>
            </div>
        </div>
        <div>
            <p className='mb-2 '>Job Salary</p>
            <input min={1} className='w-full px-3 py-2 border-gray-200 rounded sm:w-[120px]' onChange={(e)=>setsalary(e.target.value)} type="Number"  placeholder='2500'/> 

        </div>
        <button className='w-28 py-3 px-2 mt-4 bg-black text-white rounded'>Add </button>
    </form>
    </>
  )
}

export default Addjobs