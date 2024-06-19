import React, { useState } from 'react';
import { database } from '../firebase';
import { ref, push } from 'firebase/database';

function PostJob() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [salary, setSalary] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const jobsRef = ref(database, 'jobs');
    push(jobsRef, {
      title,
      description,
      salary,
    });
    setTitle('');
    setDescription('');
    setSalary('');
  };

  return (
    <div>
      <h1>Post a Job</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Job Title"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Job Description"
        ></textarea>
        <input
          type="text"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          placeholder="Salary"
        />
        <button type="submit">Post Job</button>
      </form>
    </div>
  );
}

export default PostJob;
