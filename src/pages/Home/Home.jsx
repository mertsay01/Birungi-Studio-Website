import { Background } from "../../Components/Background/Background"
import ImageSlider from "../../Components/ImageSlider/ImageSlider";
import './Home.css';
import '../../Components/GamesSection/GamesSection'
import GamesSection from "../../Components/GamesSection/GamesSection";
//import BeeAnimation from "../../Components/BeeAnimation/BeeAnimation";
import Partner from "../../Components/Partner/partner";
import ImpactCard from './ImpactCard/ImpactCard';
import Intro from './Intro/Intro';




const Home = () => {
  return (
   
    <div className="hero-container">

      <ImageSlider /> 
      <Intro />
        <ImpactCard />
        <GamesSection />
        <Partner />
      
    </div>
    
  )
}

export default Home