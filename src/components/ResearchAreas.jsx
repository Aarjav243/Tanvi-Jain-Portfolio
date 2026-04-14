import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Activity, Zap, Dna, Atom, Network } from 'lucide-react';
import './ResearchAreas.css';

const AreaCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div 
    className="area-card"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -8 }}
  >
    <div className="card-icon">
      <Icon size={32} />
    </div>
    <h3 className="card-title">{title}</h3>
    <p className="card-desc">{description}</p>
  </motion.div>
);

const ResearchAreas = () => {
  const areas = [
    {
      icon: Cpu,
      title: 'BioMEMS & Microfluidics',
      description: 'Fabricating micro-scale devices for diagnostics, drug delivery, and point-of-care testing using PDMS and silicon lithography.'
    },
    {
      icon: Activity,
      title: 'Tissue Engineering',
      description: 'Designing biocompatible scaffolds and hydrogels for regenerative medicine applications in bone, cartilage, and skin repair.'
    },
    {
      icon: Zap,
      title: 'Biosensors & Diagnostics',
      description: 'Developing electrochemical and optical biosensors for rapid, label-free detection of biomarkers and pathogens.'
    },
    {
      icon: Dna,
      title: 'Genomic Diagnostics & Bioinformatics',
      description: 'Leveraging PCR, sequencing, and computational tools to decode genetic information for disease profiling and precision medicine.'
    },
    {
      icon: Atom,
      title: 'Nanobiotechnology',
      description: 'Engineering nanoparticles and nanostructures for targeted drug delivery, imaging contrast agents, and anti-cancer therapy.'
    },
    {
      icon: Network,
      title: 'Computational Biomedical Modeling',
      description: 'Using COMSOL and MATLAB to simulate biological systems, device performance, and fluid dynamics in physiological environments.'
    }
  ];

  return (
    <section id="research" className="research-areas">
      {/* Floating DNA Particles */}
      <div className="dna-particles">
        {[...Array(10)].map((_, i) => (
          <div key={i} className={`particle p${i}`}></div>
        ))}
      </div>
      
      <div className="container">
        <div className="section-head text-center">
          <h2 className="section-title">Research Focus</h2>
          <p className="section-subtitle">Five converging fields that define the lab's scientific identity</p>
        </div>

        <div className="areas-grid">
          {areas.map((area, i) => (
            <AreaCard 
              key={area.title} 
              {...area} 
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchAreas;
