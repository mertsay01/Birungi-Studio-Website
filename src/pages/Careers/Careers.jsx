import "../Careers/Careers.css";

const Careers = () => {
    return (
      <div className="career-page">
        <section className="hero-section">
          <div className="hero-section-text-container">
            <h1 className="hero-section-h1">CAREERS</h1>
            <p className="hero-section-p">Join our team </p>
          </div>
          <div className="hero-section-img-container"></div>
        </section>
        
        <section className="why-work-here">
          <div className="why-work-here-text-container">
            <div className="why-work-here-wrapper">
              <h1 className="why-work-here-h1">Why Should You Work Here</h1>
              <p className="why-work-here-p"> Our team is comprised of experienced industry professionals working together with junior professional
              Substantiated decision making instead of hierarchy based</p>
              <p className="why-work-here-p">
              We collaborate with different levels of educational institutions: college, university, 
              scientists, and researchers. We are open to new ideas and new ways of working. In terms of diversity, our team members work together equally and we believe that
              diversity in background: age, gender, geography, culture, religion, sexual orientation contributes to the success of our company.
              </p>
            </div>
          </div>
          <div className="why-work-here-img-container">
            <div className="why-work-here-img-wrapper">
              <img src="" alt="" className="why-work-here-img" />
              <img src="" alt="" className="why-work-here-img-2" />
            </div>
          </div>
        </section>
        
        <section className="featured-positions">
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
        </section>
      </div>
    );
  };
  
  export default Careers;