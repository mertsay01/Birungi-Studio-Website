import {motion} from "framer-motion";
import './Intro.css';


function Intro ()  {
  
  return (
    <section className="gamepass-section">
      <div className="container">
        <motion.div 
          className="left-column"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="tagline">🎮 INTERACTIVE MOBILE GAMES</p>
          <h2 className="left-content">Tapping into the unused potential of casual 
          gaming to have a positive impact on the environment</h2>
          
        </motion.div>

        <motion.div 
          className="right-column"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p>Through gamification we are combining gaming </p>
          <p>with Social Impact missions to bring together enthusiastic gamers and nature enthusiasts to involve everyone in the well-being of our planet.</p>
        </motion.div>
      </div>
    </section>
  );
}


export default Intro