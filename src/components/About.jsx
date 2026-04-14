import React from 'react';
import { motion } from 'framer-motion';
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
