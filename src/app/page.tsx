'use client';

import JobCard from "./componennts/jobcard";
import { useRouter } from 'next/navigation';
import { useGetAllOpportunitiesQuery } from './store/jobSlice';

export default function Home() {
  const router = useRouter();
  const { data: jobs, error, isLoading } = useGetAllOpportunitiesQuery({});

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading jobs.</div>;
  if (!jobs || jobs.length === 0) return <div>No jobs available.</div>;

  const handleCardClick = (jobId: string) => {
    router.push(`/jobs/${jobId}`);
  };

  return (
    <main>
      <JobCard jobs={jobs} onClick={handleCardClick} />
    </main>
  );
}