import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const ProjectCard = ({ title, status, description, tags }) => {
  const statusLower = status.toLowerCase();
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <motion.article 
      className="project-card"
      data-status={statusLower}
      whileHover={shouldReduceMotion ? {} : {
        y: -3,
        borderColor: "rgba(28, 24, 22, 0.30)",
        boxShadow: "0 1px 0 rgba(28, 24, 22, 0.10), 0 6px 16px -8px rgba(28, 24, 22, 0.16)",
      }}
      transition={
        shouldReduceMotion 
          ? { duration: 0.01 }
          : { duration: 0.25, ease: [0.165, 0.84, 0.44, 1] }
      }
    >
      <div className="project-status">
        <span className="status-dot" aria-hidden="true" />
        <span className="project-status-label">{status}</span>
      </div>
      
      <h3 style={{ fontVariationSettings: '"opsz" 24' }}>
        {title}
      </h3>
      
      <p>
        {description}
      </p>
      
      <div className="project-tags">
        {tags.map((tag, i) => (
          <span 
            key={i} 
            className="chip"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
};

export default ProjectCard;

