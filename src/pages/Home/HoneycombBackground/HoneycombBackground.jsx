import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './HoneycombBackground.css';

const HoneycombBackground = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    // Set up scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);
    
    // Create honeycomb geometry
    const geometry = new THREE.CylinderGeometry(1, 1, 0.5, 6);
    const material = new THREE.MeshBasicMaterial({ 
      color: 0xe6a817,
      transparent: true,
      opacity: 0.3,
      wireframe: true
    });
    
    // Create honeycomb grid
    const honeycombs = new THREE.Group();
    
    for (let i = -10; i < 10; i++) {
      for (let j = -10; j < 10; j++) {
        const honeycomb = new THREE.Mesh(geometry, material);
        honeycomb.position.x = i * 2 + (j % 2);
        honeycomb.position.z = j * 1.75;
        honeycomb.position.y = Math.sin(i * 0.5) * Math.cos(j * 0.5) * 2;
        honeycomb.rotation.x = Math.PI / 2;
        honeycombs.add(honeycomb);
      }
    }
    
    scene.add(honeycombs);
    camera.position.z = 15;
    
    // Mouse interaction
    const mouse = new THREE.Vector2();
    
    const handleMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      honeycombs.rotation.x = mouse.y * 0.1;
      honeycombs.rotation.y = mouse.x * 0.1;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      containerRef.current.removeChild(renderer.domElement);
    };
  }, []);
  
  return <div ref={containerRef} className="honeycomb-background"></div>;
};

export default HoneycombBackground;
