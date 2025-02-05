import { createContext, useEffect, useState } from "react";
import { jobsData } from "../assets/assets";

export const Appscontext=createContext()
export const AppscontextProvide=(props)=>{
    const[searchfilter,setsearchfilter]=useState({
        title:"",locatin:""
})
const [issearched,setissearched]=useState(false)
const[jobs,setjobs]=useState([])
const[showrecrutporlogin,setshowrecrutporlogin]=useState(false)
const jobser=async()=>{
setjobs(jobsData)
}
useEffect(()=>{
jobser()
},[])
    const value={
searchfilter,setsearchfilter,
issearched,setissearched,
jobs,setjobs,showrecrutporlogin,setshowrecrutporlogin
    }

    return (
        <Appscontext.Provider value={value}>
{props.children}
        </Appscontext.Provider>
    )
}