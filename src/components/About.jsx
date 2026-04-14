import React from 'react';
import { motion } from 'framer-motion';
import DnaHelix from './DnaHelix';
import './About.css';

const TimelineItem = ({ year, title, institution, delay }) => (
  <motion.div 
    className="timeline-item"
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
  >
    <div className="timeline-dot"></div>
    <div className="timeline-content">
      <div className="timeline-year">{year}</div>
      <div className="timeline-title">{title}</div>
      <div className="timeline-institution">{institution}</div>
    </div>
  </motion.div>
);

const About = () => {
  const expertise = [
    'MEMS Fabrication', 'Cell Culture', 'PCR & qPCR', 
    'COMSOL Simulation', 'Bioreactor Design', 'Flow Cytometry', 
    'Western Blot', 'Nanomaterial Synthesis'
  ];

  const timeline = [
    { year: '2024 — Current', title: 'Professor', institution: 'BML Munjal University' },
    { year: '2019 — 2024', title: 'Associate Professor', institution: 'BML Munjal University' },
    { year: '2014 — 2019', title: 'Assistant Professor', institution: 'Top Tier Institute' },
    { year: '2013', title: 'PhD in Biomedical Engineering', institution: 'Prestigious University' },
    { year: '2008', title: 'M.Tech in Biotechnology', institution: 'Leading Technical Institute' }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow dark">ABOUT</span>
          <h2 className="section-title">Scientist. Educator. Innovator.</h2>
          <div className="about-dna-divider">
            <svg viewBox="0 0 300 40" preserveAspectRatio="xMidYMid meet">
              <defs>
                <filter id="about-glow">
                  <feGaussianBlur stdDeviation="1" result="blur"/>
                  <feMerge>
                    <feMergeNode in="blur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              {/* Sine wave rungs and strands in teal */}
              {[...Array(15)].map((_, i) => {
                const x = i * 20 + 10;
                const y1 = 20 + 15 * Math.sin(i * 0.8);
                const y2 = 20 + 15 * Math.sin(i * 0.8 + Math.PI);
                return (
                  <g key={i}>
                    <line x1={x} y1={y1} x2={x} y2={y2} stroke="#05C3A3" strokeWidth="1.5" opacity="0.4" />
                    <circle cx={x} cy={y1} r="3" fill="#05C3A3" filter="url(#about-glow)" />
                    <circle cx={x} cy={y2} r="3" fill="#E85D4A" filter="url(#about-glow)" />
                  </g>
                );
              })}
              <path d="M 10 20 Q 20 5, 30 20 T 50 20 T 70 20 T 90 20 T 110 20 T 130 20 T 150 20 T 170 20 T 190 20 T 210 20 T 230 20 T 250 20 T 270 20 T 290 20" fill="none" stroke="#05C3A3" strokeWidth="1" opacity="0.2" />
            </svg>
          </div>
        </div>

        <div className="about-grid">
          <div className="about-main">
            <p className="bio-text">
              "My research sits at the intersection of molecular biology and engineering design — 
              developing diagnostic tools, biosensors, and tissue constructs that can move from 
              bench to bedside. At BML Munjal, I believe in training engineers who think like 
              scientists and scientists who build like engineers."
            </p>
            
            <div className="expertise-grid">
              {expertise.map((item) => (
                <span key={item} className="expertise-pill">{item}</span>
              ))}
            </div>

            <div className="institution-logos">
              {/* Logos would go here */}
              <div className="logo-placeholder">BML Munjal University</div>
              <div className="logo-placeholder">Collaborator 1</div>
              <div className="logo-placeholder">Collaborator 2</div>
            </div>
          </div>

          <div className="about-timeline">
            <div className="timeline-line"></div>
            {timeline.map((item, i) => (
              <TimelineItem 
                key={i} 
                year={item.year} 
                title={item.title} 
                institution={item.institution} 
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
