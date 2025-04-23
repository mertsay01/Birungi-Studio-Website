import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const BeeAnimation = () => {
  const beeControls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await beeControls.start({
        x: 300,
        y: 100,
        rotate: 20,
        transition: { duration: 2, ease: "easeInOut" },
      });

      await beeControls.start({
        rotate: 0,
        y: 0,
        transition: { duration: 1 },
      });

      await new Promise((res) => setTimeout(res, 1000));

      await beeControls.start({
        x: 600,
        y: -200,
        rotate: -45,
        transition: { duration: 2, ease: "easeInOut" },
      });
    };

    sequence();
  }, [beeControls]);

  return (
    <div style={{ width: "100%", height: "400px", position: "relative", background: "#e6f2ff" }}>
      {/* Flower */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "45%",
          width: "100px",
          height: "100px",
          background: "radial-gradient(circle, #f4a261, #e76f51)",
          borderRadius: "50%",
        }}
      ></div>

      {/* SVG Bee */}
      <motion.svg
        animate={beeControls}
        initial={{ x: -100, y: 0 }}
        viewBox="0 0 100 100"
        style={{
          width: "60px",
          height: "60px",
          position: "absolute",
          top: "200px",
          left: 0,
        }}
      >
        {/* Bee Body */}
        <circle cx="50" cy="50" r="20" fill="yellow" stroke="black" strokeWidth="3" />

        {/* Wings */}
        <motion.ellipse
          cx="35"
          cy="35"
          rx="10"
          ry="20"
          fill="rgba(255,255,255,0.6)"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 0.5,
            ease: "easeInOut",
          }}
        />
        <motion.ellipse
          cx="65"
          cy="35"
          rx="10"
          ry="20"
          fill="rgba(255,255,255,0.6)"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 0.5,
            ease: "easeInOut",
            delay: 0.2,
          }}
        />

        {/* Eye */}
        <circle cx="60" cy="45" r="4" fill="black" />
      </motion.svg>
    </div>
  );
};

export default BeeAnimation;
