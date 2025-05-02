import { Background } from "../../Components/Background/Background"
import ImageSlider from "../../Components/ImageSlider/ImageSlider";
import './Home.css';
import '../../Components/GamesSection/GamesSection'
import GamesSection from "../../Components/GamesSection/GamesSection";
//import BeeAnimation from "../../Components/BeeAnimation/BeeAnimation";
import Partner from "../../Components/Partner/partner";



const Home = () => {
  return (
   
    <div className="hero-container">

      <ImageSlider /> 
       <section className="home">
        <div className="home-content">
        <h1>BIRUNGI</h1>
        <p>Through gamification we teach people the impact of urbanization, pesticides on bees and how these hazards
        play a key in their extinction.
        </p>
        </div>
        
        </section> 
        <GamesSection />
        <Partner />
      
    </div>
    
  )
}

export default Home