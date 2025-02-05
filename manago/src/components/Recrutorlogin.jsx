import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { Appscontext } from '../contexts/Appscontext'

const Recrutorlogin = () => {
    const[state,setstate]=useState('Login')
    const[name,setname]=useState('')
    const[password,setpassword]=useState('')
    const[email,setemail]=useState('')
    const[image,setimage]=useState(false)
    const[isTextDataSubmited,setisTextDataSubmited]=useState(false)
    const{setshowrecrutporlogin}=useContext(Appscontext)
    const onSubmithandle=async(e)=>{
        if(state=="Sign up" && !isTextDataSubmited){
e.preventDefault()
            setisTextDataSubmited(true)
        }
    }
    useEffect(()=>{
        document.body.style.overflow='hidden'
        return ()=>{
            document.body.style.overflow='unset'
        }
    })
  return (
    <div className='absolute top-0 left-0 right-0 left-0 bottom-0 z-10 backderop-blur-sm bg-black/30 flex justify-center items-center'>
        <form onSubmit={onSubmithandle} className='relative bg-white p-10 rounded-xl text-slate-500 '>
            <h1 className='text-center text-2xl text-neutral-300 font-medium '>Recrutor {state}</h1>
            <p className='text-sm'>Welcome back ! Please sign in to continue</p>
            <>

            {state==="Sign up" && isTextDataSubmited ?<> 
            <div className='flex items-center gap-4 my-10'>
                <label htmlFor="image">
<img className='w-16 rounded-full '  src={  image?URL.createObjectURL(image): assets.upload_area} alt="" />
<input onChange={e=>setimage(e.target.files[0])} type="file" id='image' hidden />
                </label>
                <p>Upload Company <br/> logo</p>
            </div>
            </>:
            <> 
 {state !=="Login" && (<div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5 '>
    <img src={assets.person_icon} alt="" />
    <input  className='outline-none text-sm ' onChange={e=>setname(e.target.value)} type="text" placeholder='Company name ' required  value={name}/>
</div>)}

<div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5 '>
    <img src={assets.email_icon} alt="" />
    <input className='outline-none text-sm '  onChange={e=>setemail(e.target.value)} type="text" placeholder='Email ' required  value={email}/>
</div>
<div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5 '>
    <img src={assets.location_icon} alt="" />
    <input className='outline-none text-sm '  onChange={e=>setpassword(e.target.value)} type="text" placeholder='Company name ' required  value={password}/>
   
</div>
</>
            }
          
    {state==="Login" && <p className='text-sm text-blue-600 cursor-pointer'>forgot password ?</p>}        
            </>
            {/* <p className='text-sm text-blue-300'>forgot password ?</p> */}
            <button type='submit' className='bg-blue-600 w-full text-white py-2 rounded-full mt-4 '>{state ==="Login"?"Login":isTextDataSubmited ? "create account":'next'}</button>
            {
                state ==="Login"?<p>Don't have a an account ? <span className='text-blue-600 cursor-pointer' onClick={()=>setstate('Sign up')}>Sing up</span></p>:<p>Already have a account ? <span className='text-blue-600 cursor-pointer' onClick={()=>setstate('Login')}>Login</span></p>

            }
            <img src={assets.cross_icon} className='absolute top-5 right-5 cursor-pointer ' onClick={()=>setshowrecrutporlogin(false)} alt="" />
        </form>
    </div>
  )
}

export default Recrutorlogin