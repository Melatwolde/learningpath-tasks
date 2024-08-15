// 'use client';

// import React from 'react';
// import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import LocationOnRounded from '@mui/icons-material/LocationOnRounded';
// import icon1 from '../icons/first.svg';
// import icon2 from '../icons/second.svg';
// import icon3 from '../icons/third.svg';
// import icon4 from '../icons/fourth.svg';
// import icon5 from '../icons/fifth.svg';
// import { useGetAllOpportunitiesQuery } from '../store/jobSlice';

// interface JobProps {
//   image: string;
//   title: string;
//   company: string;
//   location: string;
//   description: string;
//   responsibilities: string[];
//   categories: string[];
//   ideal_candidate: {
//     age: string;
//     gender: string;
//     traits: string[];
//   };
//   when_where: string;
//   about: {
//     posted_on: string;
//     deadline: string;
//     location: string;
//     start_date: string;
//     end_date: string;
//     categories: string[];
//     required_skills: string[];
//   };
// }

// interface JobListingProps {
//   jobs: JobProps[];
//   onClick: (job: JobProps) => void;
// }

// const JobListing: React.FC<JobListingProps> = ({ onClick }) => {
//   const { data: jobs, error, isLoading } = useGetAllOpportunitiesQuery({});

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error loading jobs.</div>;
//   if (!jobs || jobs.length === 0) return <div>No jobs available.</div>;
//   const firstJob = jobs[1]; 

//   if (!firstJob) {
//     return <div>No job details available.</div>;
//   }

//   const description = firstJob.description;
//   const responsibilities = firstJob.responsibilities;
//   const ideal_candidate = firstJob.ideal_candidate;
//   const when_where = firstJob.when_where;
//   const about = firstJob.about;

//   const splitString = (str: string): string[] => {
//     const splitIndex = str.indexOf(' ');
//     if (splitIndex === -1) return [str, ''];
//     return [str.slice(0, splitIndex), str.slice(splitIndex + 1)];
//   };

//   return (
//     <div className="flex space-x-28">
//       {/* container1 */}
//       <div className="w-2/3 flex-1 flex flex-col space-y-8 p-4">
//         <div className="-mb-1">
//           <h1 className="text-2xl font-bold">Description</h1>
//           <p>{description}</p>
//         </div>
//         <div className="-mb-1">
//           <h3 className="text-xl font-semibold -mb-1">Responsibilities</h3>
//           <List>
//             {responsibilities.map((responsibility: string, index: number) => (
//               <ListItem key={index} className="-mb-1">
//                 <ListItemIcon>
//                   <CheckCircleIcon />
//                 </ListItemIcon>
//                 <ListItemText primary={responsibility} />
//               </ListItem>
//             ))}
//           </List>
//         </div>
//         <div className="space-y-3 mt-10">
//           <h1 className="font-bold text-xl size6">Ideal Candidate we want</h1>
//           <ul className="list-disc text-base ml-5">
//             <li className="clr1 font-semibold">
//               <div className="space-x-2 flex">
//                 <span>Age({ideal_candidate.age})</span>
//                 <span>Gender({ideal_candidate.gender})</span>
//               </div>
//             </li>
//             {ideal_candidate.traits.map((item: string, index: number) => (
//               <li key={index} className="clr1">
//                 <span className="font-bold">{splitString(item)[0]}</span>
//                 <span>{splitString(item)[1]}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="space-y-4 mt-10">
//           <h1 className="font-semibold text-xl size6">When & Where</h1>
//           <div className="flex space-x-4 items-center">
//             <LocationOnRounded />
//             <p>{when_where}</p>
//           </div>
//         </div>
//       </div>
//       {/* container2 */}
//       <div className="w-3/12 mt-8 mb-4">
//         {/* box1 */}
//         <div>
//           <h4 className="text-lg font-semibold mb-2">About</h4>
//           <ul>
//             <p className="ml-16">Posted On</p>
//             <li className="flex items-center">
//               <img src={icon1.src} alt="icon" className="mr-2 -mt-2" />
//               <span className="ml-2 font-bold">{about.posted_on}</span>
//             </li>
//             <p className="ml-16">Deadline</p>
//             <li className="flex items-center">
//               <img src={icon2.src} alt="icon" className="mr-2" />
//               <span className="ml-2 font-bold">{about.deadline}</span>
//             </li>
//             <p className="ml-16">Location</p>
//             <li className="flex items-center">
//               <img src={icon3.src} alt="icon" className="mr-2" />
//               <span className="ml-2 font-bold">{about.location}</span>
//             </li>
//             <p className="ml-16">Start Date</p>
//             <li className="flex items-center">
//               <img src={icon4.src} alt="icon" className="mr-2" />
//               <span className="ml-2 font-bold">{about.start_date}</span>
//             </li>
//             <p className="ml-16">End Date</p>
//             <li className="flex items-center">
//               <img src={icon5.src} alt="icon" className="mr-2" />
//               <span className="ml-2 font-semibold">{about.end_date}</span>
//             </li>
//           </ul>
//         </div>
//         <div className="mt-5 mr-6 border-r-0 border-l-0 space-y-5 border-b-0 border-2 py-4">
//           <h1 className="font-semibold">Categories</h1>
//           <ul className="flex space-x-2">
//             {about.categories.map((item: string, index: number) => (
//               <li
//                 className="text-black px-4 py-2 rounded-full cursor-pointer transition duration-300 ease-in-out"
//                 style={{
//                   backgroundColor: index % 2 === 0 ? 'rgba(235, 133, 51, 0.1)' : 'rgba(86, 205, 173, 0.1)',
//                 }}
//                 key={index}
//               >
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="mt-5 mr-6 py-4 border-r-0 border-l-0 space-y-3 border-b-0 border-2">
//           <h1 className="font-semibold">Required Skills</h1>
//           <ul className="flex flex-wrap space-y-1 items-center gap-2">
//             {about.required_skills.map((skill : string, index: number) => (
//               <li className="self-center p-1 text-purple-600 bg-purple-100" key={index}>
//                 {skill}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JobListing;
