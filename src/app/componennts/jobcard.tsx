'use client';

import React from 'react';
import { useGetAllOpportunitiesQuery } from '../store/jobSlice';
import image1 from './cardavaters/image1.png';
import image2 from './cardavaters/image2.png';
import image3 from './cardavaters/image3.png';
import image4 from './cardavaters/image4.png';
import { useRouter } from 'next/navigation';

export interface JobProps {
  id: string;
  title: string;
  company: string;
  location: string[];
  description: string;
  logoUrl: string;
}

interface JobCardProps {
  jobs: JobProps[];
  onClick: (jobid: string) => void; 
}

const JobCard: React.FC<JobCardProps> = ({ onClick }) => {
  const { data, error, isLoading } = useGetAllOpportunitiesQuery({});
  const [sortCriteria, setSortCriteria] = React.useState<string>('relevant');

  const images = [image1.src, image2.src, image3.src, image4.src];

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  const handleCardClick = (jobId: string) => {
    router.push(`/jobs/${jobId}`);
  };

  const sortJobs = (jobs: JobProps[]) => {
    switch (sortCriteria) {
      case 'title':
        return [...jobs].sort((a, b) => a.title.localeCompare(b.title));
      case 'location':
        return [...jobs].sort((a, b) => a.location[0]?.localeCompare(b.location[0]));
      default:
        return jobs;
    }
  };

  if (isLoading) {
    return <p className='grid place-items-center min-h-screen'>Loading jobs...</p>;
  }

  if (error) {
    return <p>Error loading jobs: {error.toString()}</p>;
  }

  const sortedJobs = sortJobs(data?.data || []);

  return (
    <div>
      <div className="flex justify-between items-center mb-4 mt-4 p-3 gap-[10px]">
        <h1 className="text-3xl font-bold ml-[350px]">Opportunities</h1>
        <div className="flex items-center mr-[350px]">
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

      <p className="mt-[-20px] ml-[365px]">Showing {sortedJobs.length} results</p>
      {sortedJobs.map((job) => (
        <div
          key={job.id}
          className="container mx-auto my-6 p-2 border bg-slate-50 rounded-3xl flex space-x-4 "
          style={{ width: '900px' }}
          onClick={() => onClick(job.id)}
        >
          <div className='grid grid-cols-12 p-2 border-1 rounded-3xl font-Epilogue hover:bg-cardHover '>
            <div className='col-span-1'>
              <img
                src={job.logoUrl || getRandomImage()}
                alt={`${job.title} image`}
                className="w-[60px] h-[60px] mb-4 rounded-full"
              />
            </div>
            <div className="col-span-11 mx-4">
              <div>
                <h3 className='font-bold text-xl mb-2'>{job.title}</h3>
                <span className='text-base text-mygray'>{job.location.join(', ')}</span>
                <p className='text-gray-700 mt-3 text-base'>{job.description}</p>
              </div>
              <div className='flex mt-5'>
                <button className='btn rounded-full text-xs text-green-300 border border-green-300 px-3 py-2 mx-2 hover:bg-green-300 hover:text-white shadow-md transition duration-300 ease-in-out'>In Person</button>
                {/* Add other buttons or job details here */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobCard;
