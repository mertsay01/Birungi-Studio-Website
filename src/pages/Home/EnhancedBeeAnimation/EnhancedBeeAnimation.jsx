import { useEffect, useRef } from 'react';
import './EnhancedBeeAnimation.css';

const EnhancedBeeAnimation = () => {
  const canvasRef = useRef(null);
  const bees = useRef([]);
  const mousePosition = useRef({ x: 0, y: 0 });
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Create bees
    for (let i = 0; i < 20; i++) {
      bees.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 5 + 3,
        speedX: Math.random() * 3 - 1.5,
        speedY: Math.random() * 3 - 1.5,
        color: '#e6a817'
      });
    }
    
    const handleMouseMove = (e) => {
      mousePosition.current.x = e.clientX;
      mousePosition.current.y = e.clientY;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      bees.current.forEach(bee => {
        // Calculate distance to mouse
        const dx = mousePosition.current.x - bee.x;
        const dy = mousePosition.current.y - bee.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Move away from mouse if close
        if (distance < 100) {
          bee.x -= (dx / distance) * 2;
          bee.y -= (dy / distance) * 2;
        } else {
          // Normal movement
          bee.x += bee.speedX;
          bee.y += bee.speedY;
          
          // Boundary check
          if (bee.x < 0 || bee.x > canvas.width) bee.speedX *= -1;
          if (bee.y < 0 || bee.y > canvas.height) bee.speedY *= -1;
        }
        
        // Draw bee
        ctx.beginPath();
        ctx.arc(bee.x, bee.y, bee.size, 0, Math.PI * 2);
        ctx.fillStyle = bee.color;
        ctx.fill();
        
        // Draw wings
        ctx.beginPath();
        ctx.ellipse(bee.x - bee.size/2, bee.y, bee.size/2, bee.size, 0, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.fill();
        
        ctx.beginPath();
        ctx.ellipse(bee.x + bee.size/2, bee.y, bee.size/2, bee.size, 0, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return <canvas ref={canvasRef} className="bee-canvas"></canvas>;
};

export default EnhancedBeeAnimation;
