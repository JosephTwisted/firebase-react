import React, { useEffect, useState } from 'react';
import { database } from '../firebase';
import { ref, onValue } from 'firebase/database';
import { Link } from 'react-router-dom';

function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const jobsRef = ref(database, 'jobs');
    onValue(jobsRef, (snapshot) => {
      const data = snapshot.val();
      const jobList = [];
      for (let id in data) {
        jobList.push({ id, ...data[id] });
      }
      setJobs(jobList);
    });
  }, []);

  return (
    <div>
      <h1>Job Listings</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <Link to={`/jobs/${job.id}`}>{job.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobList;
