'use client';

import React, { useState } from "react";
import image1 from './cardavaters/image1.png';
import image2 from './cardavaters/image2.png';
import image3 from './cardavaters/image3.png';
import image4 from './cardavaters/image4.png';

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
  const [sortCriteria, setSortCriteria] = useState<string>('relevant');

  const images = [image1, image2, image3, image4];

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex].src;
  };

  const sortJobs = (jobs: JobProps[]) => {
    switch (sortCriteria) {
      case 'title':
        return [...jobs].sort((a, b) => a.title.localeCompare(b.title));
      case 'location':
        return [...jobs].sort((a, b) => a.location.localeCompare(b.location));
      default:
        return jobs; 
    }
  };

  const sortedJobs = sortJobs(jobs);

  return (
    <div>
      <div className="flex justify-between items-center mb-4  mt-4 p-3 gap-[10px]">
        <h1 className="text-3xl font-bold ml-[450px]">Opportunities</h1>
        <div className="flex items-center mr-[250px]">
          <label htmlFor="sort" className="">Sort by:</label>
          <select
            id="sort"
            className="border rounded px-2 py-1"
            value={sortCriteria}
            onChange={(e) => setSortCriteria(e.target.value)}
          >
            <option value="relevant">Relevant</option>
            <option value="title">Title</option>
            <option value="location">Location</option>
          </select>
        </div>
      </div>
      
      <p className="mt-[-20px] ml-[470px]">showing 73 result</p>
      {sortedJobs.map((job, index) => (
        <div
          key={index}
          className="container mx-auto my-6 p-2 border bg-slate-50 rounded-3xl flex space-x-4"
          style={{ width: '600px' }}
          onClick={() => onClick(job)}
        >
          <div className='grid grid-cols-12 p-2 border-1 rounded-3xl font-Epilogue hover:bg-cardHover '>
            <div className='col-span-1'>
              <img
                src={getRandomImage()}
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