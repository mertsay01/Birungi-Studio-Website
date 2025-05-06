import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Client } from '../../../lib/sanityClient';
import './JobDetail.css';

function JobDetail() {
  const { slug } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

// Form state
const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    education: '',
    experience: '',
  });
  const [resume, setResume] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  useEffect(() => {
    const fetchJobDetail = async () => {
      try {
        const query = `*[_type == "job" && slug.current == $slug][0] {
          _id,
          title,
          company,
          location,
          description,
          requirements,
          publishedAt
        }`;
        
        const result = await Client.fetch(query, { slug });
        
        if (!result) {
          setError("Job posting not found");
        } else {
          setJob(result);
        }
        
        setLoading(false);
      } catch (err) {
        console.error("Error fetching job details:", err);
        setError("Failed to load job details. Please try again later.");
        setLoading(false);
      }
    };

    fetchJobDetail();
  }, [slug]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  // Handle resume file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file type
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!validTypes.includes(file.type)) {
        alert('Please upload a PDF or Word document');
        return;
      }
      
      // Check file size (limit to 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size should be less than 5MB');
        return;
      }
      
      setResume(file);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.firstName || !formData.lastName || !formData.email || !resume) {
      setSubmitError('Please fill in all required fields and attach your resume');
      return;
    }
    
    setSubmitting(true);
    setSubmitError(null);
    
    try {
      // Create a FormData object to handle file upload
      const submitData = new FormData();
      
      // Add form fields
      Object.keys(formData).forEach(key => {
        submitData.append(key, formData[key]);
      });
      
      // Add job information
      submitData.append('jobId', job._id);
      submitData.append('jobTitle', job.title);
      
      // Add resume file
      submitData.append('resume', resume);
      
      // Here you would normally send this data to your backend API
      // For demonstration, we'll simulate a successful submission
      
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // If successful:
      setSubmitSuccess(true);
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        education: '',
        experience: '',
      });
      setResume(null);
      
    } catch (err) {
      console.error('Error submitting application:', err);
      setSubmitError('Failed to submit your application. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <div className="loading">Loading job details...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!job) return <div className="not-found">Job posting not found</div>;

  return (
    <div className="job-detail-container">
      <Link to="/careers" className="back-link">← Back to all jobs</Link>
      
      <h1>{job.title}</h1>
      <div className="job-meta">
        <p>{job.company} – {job.location}</p>
        <p>Posted: {new Date(job.publishedAt).toLocaleDateString()}</p>
      </div>
      
      <div className="job-description">
        <h2>Job Description</h2>
        <p>{job.description}</p>
      </div>
      
      {job.requirements && job.requirements.length > 0 && (
        <div className="job-requirements">
          <h2>Requirements</h2>
          <ul>
            {job.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>
      )}
      
      <div className="application-section">
        <h2>Apply for this position</h2>
        {/* Add your application form here */}
        {submitSuccess ? (
          <div className="success-message">
            <h3>Application Submitted Successfully!</h3>
            <p>Thank you for your interest in this position. We will review your application and contact you if there's a match.</p>
            <button onClick={() => setSubmitSuccess(false)} className="apply-again-button">Apply for Another Position</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="application-form">
            {submitError && <div className="form-error">{submitError}</div>}
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="education">Education *</label>
              <textarea
                id="education"
                name="education"
                value={formData.education}
                onChange={handleInputChange}
                placeholder="List your educational background, degrees, institutions, and graduation years"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="experience">Professional Experience *</label>
              <textarea
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                placeholder="Describe your relevant work experience, including positions, companies, and dates"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="resume">Resume (PDF or Word) *</label>
              <input
                type="file"
                id="resume"
                name="resume"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                required
              />
              {resume && <p className="file-selected">File selected: {resume.name}</p>}
              <small>Max file size: 5MB</small>
            </div>
            
            <button 
              type="submit" 
              className="submit-button" 
              disabled={submitting}
            >
              {submitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>)}
        {/*<button className="apply-button">Submit Application</button>*/}
      </div>
    </div>
  );
}

export default JobDetail;
