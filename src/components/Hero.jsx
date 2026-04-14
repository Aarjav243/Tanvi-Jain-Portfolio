import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const StatBadge = ({ value, label, delay }) => {
  const [count, setCount] = useState(0);
  const target = parseInt(value);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <motion.div 
      className="stat-badge"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <div className="stat-value">{count}{value.includes('+') ? '+' : ''}</div>
      <div className="stat-label">{label}</div>
    </motion.div>
  );
};

const Hero = () => {
  const expertise = [
    '#BioMEMS', '#TissueEngineering', '#Biosensors', 
    '#GenomicDiagnostics', '#Bioinformatics'
  ];

  return (
    <section className="hero">
      <div className="hero-dna-container">
        <svg className="dna-bg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <path d="M30,0 Q50,50 30,100 M70,0 Q50,50 70,100" fill="none" stroke="white" strokeWidth="0.5" opacity="0.2" />
          <circle cx="30" cy="10" r="1" fill="white" />
          <circle cx="70" cy="10" r="1" fill="white" />
          <circle cx="35" cy="25" r="1" fill="white" />
          <circle cx="65" cy="25" r="1" fill="white" />
          <circle cx="50" cy="50" r="1.5" fill="white" />
        </svg>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="eyebrow">PROFESSOR · BIOMEDICAL ENGINEERING & BIOTECHNOLOGY</span>
            <h1 className="hero-title">Prof. Tanvi Jain</h1>
            <p className="hero-subtitle">BML Munjal University</p>
            <p className="hero-tagline">
              "Bridging molecular science and medical innovation — one breakthrough at a time."
            </p>
            
            <div className="hero-ctas">
              <a href="#research" className="btn btn-primary">Explore Research</a>
              <a href="#contact" className="btn btn-ghost">Get in Touch</a>
            </div>

            <div className="hero-stats">
              <StatBadge value="42+" label="Papers Published" delay={0.5} />
              <StatBadge value="680+" label="Citations" delay={0.6} />
              <StatBadge value="18" label="Students Supervised" delay={0.7} />
              <StatBadge value="8" label="Years at BML Munjal" delay={0.8} />
            </div>
          </motion.div>
        </div>

        <div className="hero-visual">
          <motion.div 
            className="profile-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="profile-photo">
              {/* Replace with actual image when available */}
              <div className="photo-placeholder"></div>
            </div>
            
            {expertise.map((tag, i) => (
              <motion.span 
                key={tag} 
                className={`expertise-tag tag-${i}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 + i * 0.1 }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
