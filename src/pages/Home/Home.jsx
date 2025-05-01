import { Background } from "../../Components/Background/Background"
import ImageSlider from "../../Components/ImageSlider/ImageSlider";
import './Home.css';
import '../../Components/GamesSection/GamesSection'
import GamesSection from "../../Components/GamesSection/GamesSection";
//import BeeAnimation from "../../Components/BeeAnimation/BeeAnimation";
import Partner from "../../Components/Partner/partner";



const Home = () => {
  const impactSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add a class that will trigger the animations when in view
            entry.target.classList.add('in-view');
            // Once it's animated, we don't need to observe it anymore
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    if (impactSectionRef.current) {
      observer.observe(impactSectionRef.current);
    }

    return () => {
      if (impactSectionRef.current) {
        observer.unobserve(impactSectionRef.current);
      }
    };
  }, []);

  return (
    <div className="hero-container">
      {/* Interactive background with bees that respond to mouse */}
      

      <ImageSlider /> 

      <section className="home">
        
        <div className="home-content">
          {/* Animated typing effect for text */}
          <TypedIntro />
          {/* Interactive CTA button */}
          <PulsatingCTA />
          {/*<h1>BIRUNGI</h1>
          <p>Through gamification we teach people the impact of urbanization, pesticides on bees and how these hazards
          play a key in their extinction.
          </p> */}
        </div>
        
        </section> 
        <GamesSection />
        <Partner />
      
      <GamesSection />
    </div>
  )
}

export default Home
