import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./Components/Navbar/Navbar";
import CareerPage from './pages/Careers/Careers';
import Home from './pages/Home/Home';
<<<<<<< HEAD
import AboutUs from './pages/AboutUs/about-us';
import ContactUs from './pages/ContactUs/ContactUs';
=======
import ContactUs from './pages/ContactUs/ContactUs';
import AboutUs from './pages/AboutUs/AboutUs';
>>>>>>> before-push-fix
import Footer from './Components/Footer/Footer';

function App ()  {
  
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />}/>
<<<<<<< HEAD
        <Route path = '/careers' element={<CareerPage />}/>
        
        <Route path='/contact-us' element={<ContactUs />}/>
      </Routes>
      
      <Footer />
=======
        <Route path = '/careers' element={<Careers />}/>
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/contact-us' element={<ContactUs />}/>
      </Routes>
      <Footer />
      
>>>>>>> before-push-fix
    </Router>
  )
}
export default App;
