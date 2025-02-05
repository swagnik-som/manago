
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Appscontext } from '../contexts/Appscontext'
import { assets, jobsData } from '../assets/assets'
import Loader from '../components/Loader'
import Navbar from '../components/Navbar'
import kconvert from 'k-convert'
import moment from 'moment'
import Jobbox from '../components/Jobbox'

const Applyjobs = () => {
  const { id } = useParams()
  const [Jobdata, setJobData] = useState()
  const { jobs } = useContext(Appscontext)

  const fetchJobs = async () => {
    const data = jobs.filter(job => job._id === id)
    if (data.length !== 0) {
      setJobData(data[0])
      console.log(data[0])
    }
  }

  useEffect(() => {
    if (jobs.length > 0) {
      fetchJobs()
    }
  }, [id, jobs])

  // // Filter jobs by the same company
  // const relatedJobs = jobs.filter(
  //   (job) => job.companyId._id === Jobdata?.companyId._id && job._id !== id
  // ).slice(0, 4) // Get only the first 4 jobs

  return Jobdata ? (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col py-10 container px-4 2xl:px-20 mx-auto">
        {/* Job Detail Container */}
        <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col md:flex-row gap-8 border border-gray-300">
          {/* Left Section - Job Info */}
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-4">
              <img
                src={Jobdata.companyId.image}
                alt={Jobdata.companyId.name}
                className="w-16 h-16 object-contain rounded-full shadow-md"
              />
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">{Jobdata.title}</h2>
                <div className="flex flex-wrap gap-6 text-gray-600">
                  <span className="flex items-center gap-2">
                    <img src={assets.suitcase_icon} alt="Company" className="w-5 h-5" />
                    {Jobdata.companyId.name}
                  </span>
                  <span className="flex items-center gap-2">
                    <img src={assets.location_icon} alt="Location" className="w-5 h-5" />
                    {Jobdata.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <img src={assets.person_icon} alt="Level" className="w-5 h-5" />
                    {Jobdata.level}
                  </span>
                  <span className="flex items-center gap-2">
                    <img src={assets.money_icon} alt="Salary" className="w-5 h-5" />
                    CTC: {kconvert.convertTo(Jobdata.salary)}
                  </span>
                </div>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500">
                <strong>POSTED:</strong> {moment(Jobdata.date).fromNow()}
              </p>
            </div>
          </div>

          {/* Right Section - Apply Now & Date */}
          <div className="flex flex-col items-end space-y-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
              Apply Now
            </button>
            <div className="text-gray-500 text-sm">
              <strong>POSTED:</strong> {moment(Jobdata.date).fromNow()}
            </div>
          </div>
        </div>

        {/* Job Description and Related Jobs Section */}
        <div className="mt-12 bg-white p-8 rounded-xl shadow-lg border border-gray-300 flex flex-col md:flex-row gap-8">
          {/* Left Section - Job Description */}
          <div className="flex-1 space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Job Description</h3>
            {/* Render HTML content */}
            <div className="text-gray-700 text-base" dangerouslySetInnerHTML={{ __html: Jobdata.description }} />
          </div>

          {/* Right Section - Related Jobs */}
          <div className="flex-1 space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Related Jobs</h3>
            <div className="space-y-6">
             
            
            {
      Jobdata && // Ensure Jobdata is not undefined or null
      jobs
        .filter(job => job._id !== Jobdata._id && job.companyId._id === Jobdata.companyId._id)
        .slice(0, 4)
        .map((job, index) => <Jobbox key={index} Job={job} />)
    }   </div>
          </div>
        </div>

        {/* Apply Now Button */}
        <div className="mt-8 flex justify-center">
          <button className="bg-blue-600 text-white px-12 py-4 rounded-lg hover:bg-blue-700 transition duration-300">
            Apply Now
          </button>
        </div>
      </div>
    </>
  ) : (
    <Loader />
  )
}

export default Applyjobs
