import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { Background } from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Footer from './Components/Footer/Footer';

// Lazy loaded pages
const Home = lazy(() => import('./pages/Home/Home'));
const Careers = lazy(() => import('./pages/Careers/Careers'));
const AboutUs = lazy(() => import('./pages/AboutUs/About-us'));
const ContactUs = lazy(() => import('./pages/ContactUs/ContactUs'));

function App() {
  return (
    <Router>
      <Navbar />

      <Suspense fallback={<div style={{ textAlign: 'center', padding: '2rem' }}>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/careers' element={<Careers />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/contact-us' element={<ContactUs />} />
        </Routes>
      </Suspense>

      <Footer />
    </Router>
  );
}

export default App;
