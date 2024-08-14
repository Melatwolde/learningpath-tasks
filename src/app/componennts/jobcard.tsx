'use client';

import React from "react";

interface JobProps {
  image: string;
  title: string;
  company: string;
  location: string;
  description: string;
}

interface JobCardListProps {
  jobs: JobProps[];
  onClick: (job: JobProps) => void;
}

const JobCard: React.FC<JobCardListProps> = ({ jobs, onClick }) => {
  return (
    <div>
      {jobs.map((job, index) => (
        <div
          key={index}
          className="container mx-auto my-8 p-6 border bg-slate-50 border-gray-300 rounded-3xl flex space-x-4"
          style={{ width: '600px' }}
          onClick={() => onClick(job)}
        >
          <div className='grid grid-cols-12 p-6 border-2 rounded-3xl border-gray-300 font-Epilogue hover:bg-cardHover'>
            <div className='col-span-1'>
              <img
                src={job.image}
                alt={`${job.title} image`}
                className="w-[60px] h-[60px] mb-4 rounded-full"
              />
            </div>
            <div className="col-span-11 mx-4">
              <div>
                <h3 className='font-bold text-xl mb-2'>{job.title}</h3>
                <span className='text-base text-mygray'>{job.location}</span>
                <p className='text-gray-700 mt-3 text-base'>{job.description}</p>
              </div>
              <div className='flex mt-5'>
                <div className='border-r-2 pr-4'>
                  {/* <button className='px-3 py-1 rounded-full bg-bgGreen text-mygreen bg-opacity-10'>In Person</button> */}
                </div>
                <button className='btn rounded-full text-xs text-green-300 border border-green-300 px-3 py-2 mx-2 hover:bg-green-300 hover:text-white shadow-md transition duration-300 ease-in-out'>In Person</button>
                <button className='btn rounded-full text-xs text-orange-300 border border-orange-300 px-3 py-2 mx-2 hover:bg-orange-300 hover:text-white shadow-md transition duration-300 ease-in-out'>Education</button>
                <button className='btn rounded-full text-xs text-violet-300 border border-violet-300 px-6 py-2 mx-2 hover:bg-violet-300 hover:text-white shadow-md transition duration-300 ease-in-out'>IT</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobCard;
