'use client';
import React from 'react';
import Link from 'next/link';
import jobDataFunction from './componennts/jobdata'; 

const jobData = jobDataFunction();
import JobCard from './componennts/jobcard';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      {jobData.map((job) => (
        <Link href={`/job/${job.id}`} key={job.id} passHref>
          <div>
            <JobCard
              image={job.image}
              title={job.title}
              company={job.company}
              location={job.location}
              description={job.description}
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
