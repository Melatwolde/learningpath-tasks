'use client';

import JobCard from "./componennts/jobcard";
import JobList from "./componennts/joblisting";
import Data from "./componennts/jobdata";
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const [selectedJob, setSelectedJob] = useState<{ title: string } | null>(null); // State to track the selected job
  const router = useRouter();

  const handleCardClick = (job: { title: string }) => {
    setSelectedJob(job);
  };

  const updatedData = Data.map(job => ({ ...job, location: '', categories: [] }));

  return (
    
    <main>
      
      {selectedJob ? (
        
        <JobList jobs={updatedData} onClick={handleCardClick}/>
      ) : (
        <JobCard jobs={updatedData} onClick={handleCardClick}/>
      )}
    </main>
  );
}
