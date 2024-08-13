import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import JobListing from './componennts/joblisting';
import jobData from './componennts/jobdata';
import JobCard from './componennts/jobcard';

interface Job {
  categories: string[];
  title: string;
  description: string;
  responsibilities: string[];
  ideal_candidate: {
    age: string;
    gender: string;
    traits: string[];
  };
  when_where: string;
  about: {
    description: string;
    posted_on: string;
    deadline: string;
    location: string;
    start_date: string;
    end_date: string;
    categories: string[];
    required_skills: string[];
  };
  company: string;
  image: string;
}

const JobList: React.FC = () => {
  const jobDataArray: Job[] = jobData() as Job[];
  const navigate = useNavigate();

  const handleCardClick = (index: number) => {
    navigate(`/job/${index}`);
  };

  return (
    <div>
      {jobDataArray.map((job, index) => (
        <div key={index} onClick={() => handleCardClick(index)}>
          <JobCard location={job.about.location} {...job} />
        </div>
      ))}
    </div>
  );
};

const JobListingPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const jobDataArray: Job[] = jobData();
  const job = jobDataArray[parseInt(id || '0')];

  return <JobListing location={job.about.location} categories={job.about.categories} {...job} />;
};

const Page: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="/job/:id" element={<JobListingPage />} />
      </Routes>
    </Router>
  );
};

export default Page;