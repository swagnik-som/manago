

import React, { useContext, useEffect, useState } from 'react';
import { Appscontext } from '../contexts/Appscontext';
import { assets, JobCategories, JobLocations } from '../assets/assets';
import Jobbox from './Jobbox';

const Joblisting = () => {
  const { searchfilter, issearched, setsearchfilter, jobs } = useContext(Appscontext);

  const [showfilter, setshowfilter] = useState(false);
  const [currentpage, setcurrentpage] = useState(1);
  const [selectedcategories, setselectedcategories] = useState([]);
  const [selectedlocation, setselectedlocations] = useState([]);
  const [filteredjobs, setfilteredjobs] = useState([]);

  const handleCategory = (category) => {
    setselectedcategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const handleLocation = (location) => {
    setselectedlocations((prev) =>
      prev.includes(location) ? prev.filter((c) => c !== location) : [...prev, location]
    );
  };

  useEffect(() => {
    const matchCategory = (job) => selectedcategories.length === 0 || selectedcategories.includes(job.category);
    const matchLocation = (job) => selectedlocation.length === 0 || selectedlocation.includes(job.location);
    const matchesTitle = (job) => searchfilter.title === "" || job.title.toLowerCase().includes(searchfilter.title.toLowerCase());
    const matchesSearchLocation = (job) =>
      (searchfilter.location ?? "").trim() === "" ||
      job.location.toLowerCase().includes((searchfilter.location ?? "").toLowerCase());

    const newFilteredJobs = jobs
      .slice()
      .reverse()
      .filter((job) => matchCategory(job) && matchLocation(job) && matchesTitle(job) && matchesSearchLocation(job));

    console.log("Filtered Jobs:", newFilteredJobs); // Debugging
    setfilteredjobs(newFilteredJobs);
    setcurrentpage(1);
  }, [jobs, selectedcategories, selectedlocation, searchfilter]);

  return (
    <div className='container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-8'>
      {/* Sidebar */}
      <div className='w-full lg:w-1/4 bg-white px-4'>
        {/* Search Filter Box */}
        {issearched && (searchfilter.title || searchfilter.location) && (
          <>
            <h3 className='font-medium text-lg mb-4'>Current Search</h3>
            <div className='mb-4 text-gray-600'>
              {searchfilter.title && (
                <span className='inline-flex items-center gap-2.5 bg-blue-50 border border-blue-300 px-4 py-1.5 rounded'>
                  {searchfilter.title}
                  <img
                    src={assets.cross_icon}
                    onClick={() => setsearchfilter((prev) => ({ ...prev, title: "" }))}
                    alt="clear"
                    className="cursor-pointer"
                  />
                </span>
              )}
              {searchfilter.location && (
                <span className='ml-2 inline-flex items-center gap-2.5 bg-red-50 border border-red-300 px-4 py-1.5 rounded'>
                  {searchfilter.location}
                  <img
                    src={assets.cross_icon}
                    onClick={() => setsearchfilter((prev) => ({ ...prev, location: "" }))}
                    alt="clear"
                    className="cursor-pointer"
                  />
                </span>
              )}
            </div>
          </>
        )}
        <button onClick={() => setshowfilter((prev) => !prev)} className='px-3 py-1.5 border border-gray-400 text-gray-400'>
          {showfilter ? "Close" : "Filter"}
        </button>

        {/* Category Filter */}
        <div className={showfilter ? "" : "max-lg:hidden"}>
          <h4 className='font-medium text-lg py-4 pr-12'>Search By Category</h4>
          <ul className='space-y-4 text-gray-500'>
            {JobCategories.map((category, index) => (
              <li className='flex gap-3 items-center' key={index}>
                <input
                  onChange={() => handleCategory(category)}
                  className='scale-125'
                  type="checkbox"
                  checked={selectedcategories.includes(category)}
                />
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Location Filter */}
        <div className={showfilter ? "" : "max-lg:hidden"}>
          <h4 className='font-medium text-lg py-4 pr-12'>Search By Location</h4>
          <ul className='space-y-4 text-gray-500'>
            {JobLocations.map((location, index) => (
              <li className='flex gap-3 items-center' key={index}>
                <input
                  onChange={() => handleLocation(location)}
                  className='scale-125'
                  type="checkbox"
                  checked={selectedlocation.includes(location)}
                />
                {location}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Job Listings */}
      <section className='w-full lg:w-3/4 text-gray-600 max-lg:px-4'>
        <h3 className='font-medium text-3xl py-2' id='job-list'>Latest jobs</h3>
        <p className='mb-8 font-bold'>Find the job you want, where you want...</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4'>
          {filteredjobs.slice((currentpage - 1) * 6, currentpage * 6).map((Job, index) => (
            <Jobbox key={index} Job={Job} />
          ))}
        </div>

        {/* Pagination */}
        {filteredjobs.length > 0 && (
          <div className='flex items-center justify-center space-x-2 mt-20'>
            <a href="#job-list">
              <img
                onClick={() => setcurrentpage((prev) => Math.max(prev - 1, 1))}
                src={assets.left_arrow_icon}
                alt="prev"
              />
            </a>
            {Array.from({ length: Math.ceil(filteredjobs.length / 6) }).map((_, index) => (
              <a href='#job-list' key={index}>
                <button
                  onClick={() => setcurrentpage(index + 1)}
                  className={`w-10 h-10 flex items-center justify-center border border-gray-400 rounded ${
                    currentpage === index + 1 ? 'bg-blue-100 text-blue-600' : 'text-gray-500'
                  }`}
                >
                  {index + 1}
                </button>
              </a>
            ))}
            <a href="#job-list">
              <img
                onClick={() => setcurrentpage((prev) => Math.min(prev + 1, Math.ceil(filteredjobs.length / 6)))}
                src={assets.right_arrow_icon}
                alt="next"
              />

            </a>
          </div>
        )}
      </section>
    </div>
  );
};

export default Joblisting;
