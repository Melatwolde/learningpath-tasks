'use client';
import React from 'react';
import { useRouter } from 'next/router';
import JobCard from './componennts/jobcard';
import Data from './componennts/jobdata';

const HomePage = () => {
  const router = useRouter();
  const jobs = Data();

  const handleCardClick = (jobId: number) => {
    router.push(`/job/${jobId}`);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Job Listings</h1>
      <div className="grid grid-cols-1 gap-8">
        {jobs.map((job) => (
          <div key={job.id} onClick={() => handleCardClick(job.id)} className="cursor-pointer">
            <JobCard
              image={job.image}
              title={job.title}
              company={job.company}
              location={job.about.location}
              description={job.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
