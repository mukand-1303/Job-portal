import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";

const SaveJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Retrieve data from local storage
    const storedJob = localStorage.getItem("Job");
    if (storedJob) {
      try {
        const parsedJob = JSON.parse(storedJob);
        // Ensure parsed data is an array
        if (Array.isArray(parsedJob)) {
          setJobs(parsedJob);
        } else {
          console.error("Data retrieved from local storage is not an array.");
        }
      } catch (error) {
        console.error("Error parsing data from local storage:", error);
      }
    } else {
      console.warn("No data found in local storage under the key 'Job'.");
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div className="jobs-for-you">
        <div className="job-background">
          <div className="title">
            <h2>Saved Jobs</h2>
          </div>
        </div>
        <div className="job-section">
          <div className="job-page">
            {jobs.map(({ logo, company, position, location, role }, index) => (
              <div className="job-list" key={index}>
                <div className="job-card">
                  <div className="job-name">
                    <img
                      src={require(`../../Assets/images/${logo}`)}
                      alt="logo"
                      className="job-profile"
                    />
                    <div className="job-detail">
                      <h4>{company}</h4>
                      <h3>{position}</h3>
                      <div className="category">
                        <p>{location}</p>
                        <p>{role}</p>
                      </div>
                    </div>
                  </div>
                  <div className="job-posting"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveJobs;
