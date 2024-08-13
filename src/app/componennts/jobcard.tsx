'use client';
import React from "react";

interface JobProps {
  image: string;
  title: string;
  company: string;
  location: string;
  description: string;
}

const JobCard: React.FC<JobProps> = ({ image, title, company, location, description }) => {
  return (
    <div className="container mx-auto my-8 p-6 border bg-slate-50 border-gray-300 rounded-3xl flex space-x-4" style={{ width: '600px' }}>
      <img src={image} alt={`${title} image`} className="w-[60px] h-[60px] mb-4 rounded-full" />
      <div>
        <h1 className="text-slate-900">{title}</h1>
        <h3 className="text-slate-900">{company}</h3>
        <p className="text-slate-900">{location}</p>
        <p className="text-slate-900">{description}</p>
      </div>
    </div>
  );
};

export default JobCard;