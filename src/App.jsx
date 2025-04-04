import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import  {Background}  from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Careers from './pages/Careers/Careers';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import ContactUs from './pages/ContactUs/ContactUs';

function App ()  {
  
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path = '/careers' element={<Careers />}/>
        <Route path = '/about-us' element={<AboutUs />}/>
        <Route path='/contact-us' element={<ContactUs />}/>
      </Routes>
      
      
    </Router>
  )
}
export default App;
