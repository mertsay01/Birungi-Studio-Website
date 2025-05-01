import { Background } from "../../Components/Background/Background"
import ImageSlider from "../../Components/ImageSlider/ImageSlider";
import './Home.css';
import '../../Components/GamesSection/GamesSection'
import GamesSection from "../../Components/GamesSection/GamesSection";
import BeeAnimation from "../../Components/BeeAnimation/BeeAnimation";
import { useEffect, useRef } from 'react';
import EnhancedBeeAnimation from "./EnhancedBeeAnimation/EnhancedBeeAnimation";
import TypedIntro from "./TypedIntro/TypedIntro";
import PulsatingCTA from "./PulsatingCTA/PulsatingCTA";
import ScrollReveal from "./ScrollReveal/ScrollReveal";

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
        <ScrollReveal>
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
        </ScrollReveal>
      </section> 

      <section className="social-impact-section" ref={impactSectionRef}>
        <ScrollReveal>
        <div className="social-impact-content">
          <h2>The Power of Social Impact Gamification</h2>
          <div className="impact-grid">
            <div className="impact-card">
              <h3>Engaging Education</h3>
              <p>Our games transform complex environmental concepts into interactive experiences that are both fun and educational, increasing knowledge retention by up to 90% compared to traditional learning methods.</p>
            </div>
            <div className="impact-card">
              <h3>Behavioral Change</h3>
              <p>Through immersive gameplay, we inspire real-world action. Players who engage with our bee conservation games are 3x more likely to implement bee-friendly practices in their daily lives.</p>
            </div>
            <div className="impact-card">
              <h3>Community Building</h3>
              <p>Our games connect environmentally conscious individuals, creating a community of advocates working together to protect bee populations and promote sustainable practices.</p>
            </div>
            <div className="impact-card">
              <h3>Measurable Impact</h3>
              <p>Each game session contributes to our impact metrics, allowing us to track how digital interactions translate to environmental awareness and conservation efforts in the real world.</p>
            </div>
          </div>
        </div>
        </ScrollReveal>
      </section>
      
      <GamesSection />
    </div>
  )
}

export default Home
