import "../assets/css/Careers.css";

export default function CareerPage() {
    return (
      <div className="career-page">
        <section className="hero-section">
          <h1>"CAREERS"</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </section>
        
        <section className="why-work-here">
          <div className="whycontainer">
            <div className="whyworkhere-container">
              <h2 className="whyh2">WHY SHOULD YOU WORK HERE</h2>
              <p className="whyp">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eligendi cupiditate similique suscipit. Recusandae accusamus neque in totam, eligendi vel fugit labore fugiat aspernatur iusto consequatur maxime, beatae, quidem asperiores.
                Sit cumque cupiditate exercitationem aliquam ratione cum illum nulla, nihil corrupti obcaecati sequi, possimus recusandae doloribus ut fuga asperiores quam delectus voluptatem labore deserunt. Earum consequatur quae repudiandae exercitationem deleniti.
                In nulla tenetur, consequuntur hic et ipsam veritatis atque at rerum dolor culpa voluptatum est, adipisci labore blanditiis fugiat minus eaque quaerat repellendus possimus! Repellat, quibusdam. Tenetur eveniet ullam sunt.
              </p>
            </div>
            <div className="images">
              <div className="image-box"></div>
              <div className="image-box"></div>
            </div>
          </div>
        </section>
        
        <section className="featured-positions">
          <h2>Featured Positions</h2>
          <div className="positions">
            <div className="position"><button>Apply Now</button></div>
            <div className="position"><button>Apply Now</button></div>
            <div className="position"><button>Apply Now</button></div>
            <div className="position"><button>Apply Now</button></div>
            <div className="position"><button>Apply Now</button></div>
            <div className="position"><button>Apply Now</button></div>
          </div>
        </section>
      </div>
    );
  }