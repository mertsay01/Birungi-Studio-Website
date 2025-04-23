import React from 'react';
import './AboutUs.css';
import birungiteam from '../../assets/birungiteam.jpg';
import birungiteam2 from '../../assets/birungiteam2.jpg';
import bslogo from '../../assets/bslogo.png'


const AboutUs = () => {
  return (
    <div>
        <section className="our-story">
            <h2 className='story-head'>Our Story</h2>
            <div className="story-columns">
                <div className="story-column">
                    <img src={bslogo} className='bs-about' alt="Our beginnings" />
                    <h1>Who are we?</h1>
                    <p>We are Brungi studio, a social impact gaming studio! At Birungi we strive for experiences that create meaningful impact, social progress and most importantly fun gameplay experiences that give people the knowledge and tools to help improve their communities and their environment. 
                        Birungi works with partners around the globe, from Uganda, The Netherlands, Serbia and many more!!</p>
                </div>
                <div className="story-column">
                    <h1>OUR PARTNERS</h1>
                    <p>From farmers to global governments, Birungi is building a global coalition of those who want to make this world a better place, and we aim to do so through our video games. 
Birungi is determined to leave a lasting impact, and create a business that achieves ambitious goals on the global stage. 
</p>
                    {/*<img src={birungiteam} alt="Our growth" />*/}
                </div>
            </div>
        </section>
    </div>
  )
}

export default AboutUs