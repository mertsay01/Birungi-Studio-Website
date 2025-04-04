import './Background.css'
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';


export const Background = () => {
  return (
    
    <div className="bg-page">
          {/* Background Image */}
          <div className='home-pg'>
            <img src={image1} alt='home-pg' className='front-pg'></img>
            <div className='overlay-text2'>
                <h1>Social Impact Gamification</h1>
                <p>Interactive mobile gaming for </p>
            </div>

          </div>
    </div>
    
    
    
  )

}
