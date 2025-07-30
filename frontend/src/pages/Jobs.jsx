import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearAllJobErrors, fetchJobs } from "../store/slices/jobSlice";
import Spinner from "../components/Spinner";
import { FaSearch, FaRedo } from "react-icons/fa";
import { Link } from "react-router-dom";

const Jobs = () => {
  const [city, setCity] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [niche, setNiche] = useState("");
  const [selectedNiche, setSelectedNiche] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [retryCount, setRetryCount] = useState(0);
  const [hasError, setHasError] = useState(false);

  const { jobs, loading, error } = useSelector((state) => state.jobs);

  const handleCityChange = (city) => {
    setCity(city);
    setSelectedCity(city);
  };
  
  const handleNicheChange = (niche) => {
    setNiche(niche);
    setSelectedNiche(niche);
  };

  const dispatch = useDispatch();

  const fetchJobsWithRetry = useCallback(() => {
    setHasError(false);
    dispatch(fetchJobs(city, niche, searchKeyword));
  }, [dispatch, city, niche, searchKeyword]);

  useEffect(() => {
    if (error) {
      setHasError(true);
      toast.error(error);
      dispatch(clearAllJobErrors());
      
      // Auto-retry for timeout errors
      if (error.includes('timeout') && retryCount < 3) {
        setTimeout(() => {
          setRetryCount(prev => prev + 1);
          fetchJobsWithRetry();
        }, 2000);
      }
    } else {
      setRetryCount(0);
      setHasError(false);
    }
  }, [error, dispatch, retryCount, fetchJobsWithRetry]);

  useEffect(() => {
    fetchJobsWithRetry();
  }, [city, niche]);

  const handleSearch = () => {
    setRetryCount(0);
    fetchJobsWithRetry();
  };

  const handleRetry = () => {
    setRetryCount(0);
    fetchJobsWithRetry();
  };

  const cities = [
    "Gwalior",
    "Bengaluru",
    "Hyderabad",
    "Pune",
    "Chennai",
    "Mumbai",
    "Delhi",
    "Gurugram",
    "Noida",
    "Ahmedabad",
    "Kolkata",
    "Jaipur",
    "Chandigarh",
    "Thiruvananthapuram",
    "Coimbatore",
    "Indore",
    "Nagpur",
    "Visakhapatnam",
    "Mysuru",
    "Vadodara",
    "Lucknow",
  ];

  const nichesArray = [
    "Software Development",
    "Web Development",
    "Cybersecurity",
    "Data Science",
    "Artificial Intelligence",
    "Cloud Computing",
    "DevOps",
    "Mobile App Development",
    "Blockchain",
    "Database Administration",
    "Network Administration",
    "UI/UX Design",
    "Game Development",
    "IoT (Internet of Things)",
    "Big Data",
    "Machine Learning",
    "IT Project Management",
    "IT Support and Helpdesk",
    "Systems Administration",
    "IT Consulting",
  ];

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <section className="jobs">
          <div className="search-tab-wrapper">
            <input
              type="text"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
            <button onClick={handleSearch}>Find Job</button>
            <FaSearch />
          </div>
          <div className="wrapper">
            <div className="filter-bar">
              <div className="cities">
                <h2>Filter Job By City</h2>
                {cities.map((city, index) => (
                  <div key={index}>
                    <input
                      type="radio"
                      id={city}
                      name="city"
                      value={city}
                      checked={selectedCity === city}
                      onChange={() => handleCityChange(city)}
                    />
                    <label htmlFor={city}>{city}</label>
                  </div>
                ))}
              </div>
              <div className="cities">
                <h2>Filter Job By Niche</h2>
                {nichesArray.map((niche, index) => (
                  <div key={index}>
                    <input
                      type="radio"
                      id={niche}
                      name="niche"
                      value={niche}
                      checked={selectedNiche === niche}
                      onChange={() => handleNicheChange(niche)}
                    />
                    <label htmlFor={niche}>{niche}</label>
                  </div>
                ))}
              </div>
            </div>
            <div className="container">
              <div className="mobile-filter">
                <select value={city} onChange={(e) => setCity(e.target.value)}>
                  <option value="">Filter By City</option>
                  {cities.map((city, index) => (
                    <option value={city} key={index}>
                      {city}
                    </option>
                  ))}
                </select>
                <select
                  value={niche}
                  onChange={(e) => setNiche(e.target.value)}
                >
                  <option value="">Filter By Niche</option>
                  {nichesArray.map((niche, index) => (
                    <option value={niche} key={index}>
                      {niche}
                    </option>
                  ))}
                </select>
              </div>
              <div className="jobs_container">
                {hasError && !loading ? (
                  <div className="error-container" style={{
                    textAlign: 'center',
                    padding: '2rem',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '8px',
                    margin: '2rem 0'
                  }}>
                    <h3 style={{ color: '#dc3545', marginBottom: '1rem' }}>
                      Unable to load jobs
                    </h3>
                    <p style={{ marginBottom: '1.5rem', color: '#6c757d' }}>
                      There was an issue connecting to the server. Please check your internet connection and try again.
                    </p>
                    <button 
                      onClick={handleRetry}
                      style={{
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}
                    >
                      <FaRedo /> Retry
                    </button>
                    {retryCount > 0 && (
                      <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#6c757d' }}>
                        Retry attempt: {retryCount}/3
                      </p>
                    )}
                  </div>
                ) : jobs && jobs.length > 0 ? (
                  jobs.map((element) => {
                    return (
                      <div className="card" key={element._id}>
                        {element.hiringMultipleCandidates === "Yes" ? (
                          <p className="hiring-multiple">
                            Hiring Multiple Candidates
                          </p>
                        ) : (
                          <p className="hiring">Hiring</p>
                        )}
                        <p className="title">{element.title}</p>
                        <p className="company">{element.companyName}</p>
                        <p className="location">{element.location}</p>
                        <p className="salary">
                          <span>Salary:</span> Rs. {element.salary}
                        </p>
                        <p className="posted">
                          <span>Posted On:</span>{" "}
                          {element.jobPostedOn.substring(0, 10)}
                        </p>
                        <div className="btn-wrapper">
                          <Link
                            className="btn"
                            to={`/post/application/${element._id}`}
                          >
                            Apply Now
                          </Link>
                        </div>
                      </div>
                    );
                  })
                ) : !loading && (
                  <div className="no-jobs" style={{
                    textAlign: 'center',
                    padding: '2rem',
                    color: '#6c757d'
                  }}>
                    <h3>No jobs found</h3>
                    <p>Try adjusting your search criteria or check back later for new opportunities.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Jobs;
