import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Client} from '../../../lib/sanityClient'
import './JobOpenings.css';

function JobOpenings()  {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        // Query to get all active job postings, ordered by publish date
        const query = `*[_type == "job" && isActive == true] | order(publishedAt desc) {
          _id,
          title,
          company,
          location,
          description,
          "slug": slug.current
        }`;
        
        const result = await Client.fetch(query);
        console.log("Fetched jobs:", result); // Debug: Check what's being returned
        setJobs(result);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching job postings:", err);
        setError("Failed to load job postings. Please try again later.");
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) return <div className="loading">Loading job postings...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div>
      <section className="featured-positions">
        <h2 className="positions-title">Featured Positions</h2>
        {jobs.length === 0 ? (
          <p className="no-jobs">No job openings available at the moment. Please check back later.</p>
        ) : (
          <div className="positions">
            {jobs.map((job) => (
              <div className="job-card" key={job._id}>
                <h3 className='positions-title'>{job.title}</h3>
                <p>{job.company} – {job.location}</p>
                <p className='position-description'>{job.description.substring(0, 100)}...</p>
                <Link to={`/jobs/${job.slug}`}>
                  <button className="position">Apply Now</button>
                </Link>
              </div>
            ))}
          </div>
        )}
      </section>
      {/*<section className="featured-positions">
          <h2 className="positions-title">Featured Positions</h2>
          <div className="positions">
            <div className="positions-wrapper">
              <div className="positions-wrapper-wrapper">
                <div className="positions-div"></div>
                <div className="position"><button>Apply Now</button></div>
              </div>
              <div className="positions-wrapper-wrapper">
                <div className="positions-div"></div>
                <div className="position"><button>Apply Now</button></div>
              </div>
              <div className="positions-wrapper-wrapper">
                <div className="positions-div"></div>
                <div className="position"><button>Apply Now</button></div>
              </div>
              <div className="positions-wrapper-wrapper">
                <div className="positions-div"></div>
                <div className="position"><button>Apply Now</button></div>
              </div>
              <div className="positions-wrapper-wrapper">
                <div className="positions-div"></div>
                <div className="position"><button>Apply Now</button></div>
              </div>
              <div className="positions-wrapper-wrapper">
                <div className="positions-div"></div>
                <div className="position"><button>Apply Now</button></div>
              </div>  
            </div>
          </div>
        </section>*/}
    </div>
  )
}
export default JobOpenings;