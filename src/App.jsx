import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./Components/Navbar/Navbar";
import CareerPage from './pages/Careers/Careers';
import Home from './pages/Home/Home';

import AboutUs from './pages/AboutUs/about-us';
import ContactUs from './pages/ContactUs/ContactUs';
<<<<<<< HEAD
import ContactUs from './pages/ContactUs/ContactUs';
import AboutUs from './pages/AboutUs/AboutUs';
=======
>>>>>>> 06fe65a8dd36baa9d478f71977c9d80e970fe51c
import Footer from './Components/Footer/Footer';

function App ()  {
  
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path = '/careers' element={<CareerPage />}/>   
        <Route path='/contact-us' element={<ContactUs />}/>
      </Routes>
<<<<<<< HEAD
=======
      
>>>>>>> 06fe65a8dd36baa9d478f71977c9d80e970fe51c
      <Footer />
    </Router>
  )
}
export default App;
