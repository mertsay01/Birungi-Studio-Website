import './About.css'

function About() {  
    return (
 
        <section className="our-story-container">
        <h2 className="our-story-title">OUR STORY</h2>
  
        <div className="story-row">
          <div className="story-image"></div>
          <div className="story-content">
            <h3 className="story-heading">LOREM IPSUM DOLOR SIT</h3>
            <p className="story-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis eget urna mattis placerat. Cras
              sed magna aliquet, felis ut, mollis quam, quis cursus ipsum. Sed nec nisl non quam sodales varius. Sed
              venenatis hendrerit libero, vel ultrices dolor condimentum a. Etiam sed nunc libero. Fusce dignissim
              porttitor.
            </p>
          </div>
        </div>
  
        <div className="story-row reverse">
          <div className="story-image"></div>
          <div className="story-content">
            <h3 className="story-heading">LOREM IPSUM DOLOR SIT</h3>
            <p className="story-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis eget urna mattis placerat. Cras
              sed magna aliquet, felis ut, mollis quam, quis cursus ipsum. Sed nec nisl non quam sodales varius. Sed
              venenatis hendrerit libero, vel ultrices dolor condimentum a. Etiam sed nunc libero.
            </p>
          </div>
        </div>
      </section>
    );
}

export default About;
