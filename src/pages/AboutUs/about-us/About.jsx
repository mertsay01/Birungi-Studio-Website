import './About.css'

function About() {  
    return (
 
        <section className="our-story-container">
        <h2 className="our-story-title">About Us</h2>
  
        <div className="story-row">
          <div className="story-image"></div>
          <div className="story-content">
            <h3 className="story-heading">Social Impact Gamification</h3>
            <p className="story-text">
            We are Brungi studio, a social impact gaming studio! 
            At Birungi we strive for experiences that create meaningful impact, 
            social progress and most importantly fun gameplay experiences that give people 
            the knowledge and tools to help improve their communities and their environment.
            </p>
          </div>
        </div>
  
        <div className="story-row reverse">
          <div className="story-image"></div>
          <div className="story-content">
            <h3 className="story-heading">Collaboration & Partnerships</h3>
            <p className="story-text">
            Birungi works with partners around the globe, from Uganda, The Netherlands, 
            Serbia and many more! From farmers to global governments, 
            Birungi is building a global coalition of those who want to make this world a 
            better place, and we aim to do so through our video games.
            Birungi is determined to leave a lasting impact, and create a business 
           that achieves ambitious goals on the global stage.
            </p>
          </div>
        </div>
      </section>
    );
}

export default About;