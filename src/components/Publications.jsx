import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, FileText } from 'lucide-react';
import DnaHelix from './DnaHelix';
import './Publications.css';

const PublicationRow = ({ year, title, authors, journal, citations, doi, delay }) => {
  // Function to bold the professor's name
  const formatAuthors = (text) => {
    const name = "Tanvi Jain";
    const parts = text.split(name);
    return (
      <>
        {parts[0]}
        <strong>{name}</strong>
        {parts[1]}
      </>
    );
  };

  return (
    <motion.div 
      className="pub-row"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay }}
    >
      <div className="pub-year-badge">{year}</div>
      <div className="pub-main">
        <h4 className="pub-title">{title}</h4>
        <p className="pub-authors">{formatAuthors(authors)}</p>
        <p className="pub-journal"><em>{journal}</em></p>
      </div>
      <div className="pub-meta">
        <div className="pub-citations">
          <span className="citation-count">{citations}</span>
          <span className="citation-label">Citations</span>
        </div>
        <a href={`https://doi.org/${doi}`} target="_blank" rel="noopener noreferrer" className="doi-link" aria-label="View DOI">
          <ExternalLink size={18} />
        </a>
      </div>
    </motion.div>
  );
};

const Publications = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Journal Articles', 'Conference Proceedings', 'Book Chapters', 'Patents'];

  const allPublications = [
    {
      type: 'Journal Articles',
      year: '2023',
      title: 'Electrochemical Biosensor for Rapid COVID-19 Detection',
      authors: 'Kumar, R., Tanvi Jain, & Sharma, P.',
      journal: 'Biosensors & Bioelectronics',
      citations: 45,
      doi: '10.1016/j.bios.2023.115000'
    },
    {
      type: 'Journal Articles',
      year: '2022',
      title: '3D Bioprinted Cartilage Scaffold with Alginate-GelMA Hydrogel',
      authors: 'Singh, A., Tanvi Jain, & Verma, S.',
      journal: 'Biomaterials Science',
      citations: 32,
      doi: '10.1039/D2BM00000X'
    },
    {
      type: 'Conference Proceedings',
      year: '2023',
      title: 'Microfluidic Platform for Circulating Tumor Cell Isolation',
      authors: 'Tanvi Jain, & Gupta, M.',
      journal: 'Lab on a Chip (Conference Track)',
      citations: 12,
      doi: '10.1039/D3LC00000Y'
    },
    {
      type: 'Journal Articles',
      year: '2021',
      title: 'COMSOL-Based Simulation of Blood Flow in Stenotic Arteries',
      authors: 'Mishra, K., & Tanvi Jain',
      journal: 'Medical Engineering & Physics',
      citations: 28,
      doi: '10.1016/j.medengphy.2021.103000'
    }
  ];

  const filteredPubs = activeFilter === 'All' 
    ? allPublications 
    : allPublications.filter(p => p.type === activeFilter);

  return (
    <section id="publications" className="publications">
      <DnaHelix 
        className="publications-watermark" 
        strokeColor="#05C3A3" 
        opacity={0.15} 
        width="800px" 
        height="1200px" 
        animated={true} 
      />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-head">
          <h2 className="section-title">Publications</h2>
          <p className="section-subtitle">Peer-reviewed research advancing biomedical science</p>
        </div>

        <div className="pub-filters">
          {filters.map((filter) => (
            <button 
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="pub-list">
          <AnimatePresence mode="popLayout">
            {filteredPubs.map((pub, i) => (
              <PublicationRow 
                key={pub.title} 
                {...pub} 
                delay={i * 0.05}
              />
            ))}
          </AnimatePresence>
          
          {filteredPubs.length === 0 && (
            <div className="empty-state">
              No results — try a different filter
            </div>
          )}
        </div>

        <div className="pub-actions">
          <a href="#" className="btn-cite ghost-primary">View Full List on Google Scholar →</a>
          <button className="btn-cite ghost-secondary">
            <FileText size={16} />
            Export BibTeX
          </button>
        </div>
      </div>
    </section>
  );
};

export default Publications;
