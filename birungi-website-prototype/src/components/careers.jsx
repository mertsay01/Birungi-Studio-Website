import "../assets/css/Careers.css";

export default function CareerPage() {
    return (
      <div className="career-page">
        <section className="hero-section">
          <div className="hero-section-text-container">
            <h1 className="hero-section-h1">"CAREERS"</h1>
            <p className="hero-section-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quasi?</p>
          </div>
          <div className="hero-section-img-container"></div>
        </section>
        
        <section className="why-work-here">
          <div className="why-work-here-text-container">
            <div className="why-work-here-wrapper">
              <h1 className="why-work-here-h1">Why Should You Work Here</h1>
              <p className="why-work-here-p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti natus repellat asperiores animi adipisci deleniti error perferendis voluptas! Aut assumenda accusantium excepturi hic atque, provident sit eligendi itaque voluptates laboriosam.
              Dolore quo maiores obcaecati aspernatur similique voluptate dolorum, illo eum, quam laborum eius doloremque. Facere error provident deserunt quisquam minima eligendi alias, quibusdam modi ut tempora iusto rerum quidem voluptates?
              Iure facere debitis illo, quibusdam accusantium laudantium excepturi possimus labore modi quidem cum harum quod velit provident nobis hic perspiciatis et recusandae consequatur non consequuntur placeat atque. Eligendi, amet odio.</p>
              <p className="why-work-here-p">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis accusamus optio alias quo? Corrupti vitae, autem dolorem aliquid velit quis explicabo modi, tempore inventore necessitatibus voluptatum eaque! Pariatur, libero veniam.
                Ducimus fugit qui consectetur excepturi neque, totam hic saepe repellat temporibus explicabo aut aperiam optio ratione nam eius tempora assumenda accusamus quibusdam sint commodi unde accusantium. Architecto veritatis fugiat animi.
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
  }