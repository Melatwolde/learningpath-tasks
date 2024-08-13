'use client';
import React from 'react';
import { useRouter } from 'next/router';
import jobData from './componennts/jobdata'; 
import JobListing from './componennts/joblisting';

const JobPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const job = jobData.find((job) => job.id === parseInt(id as string, 10));

  if (!job) {
    return <p>Job not found</p>;
  }

  return (
    <div className="container mx-auto py-8">
      <JobListing {...job} />
    </div>
  );
};

export default JobPage;
