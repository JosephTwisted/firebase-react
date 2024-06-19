import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { database } from '../firebase';
import { ref, get } from 'firebase/database';

function JobDetail() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const jobRef = ref(database, `jobs/${id}`);
    get(jobRef).then((snapshot) => {
      if (snapshot.exists()) {
        setJob(snapshot.val());
      }
    });
  }, [id]);

  return (
    <div>
      {job ? (
        <div>
          <h1>{job.title}</h1>
          <p>{job.description}</p>
          <p>Salary: {job.salary}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default JobDetail;