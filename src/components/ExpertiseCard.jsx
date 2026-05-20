import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const ExpertiseCard = ({ num, title, description, details }) => {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <motion.article 
      className="expertise-card"
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
      <span className="expertise-num" aria-hidden="true">
        {num}
      </span>
      <h3 style={{ fontVariationSettings: '"opsz" 18' }}>
        {title}
      </h3>
      <p>
        {description}
      </p>
      <ul>
        {details.map((detail, i) => (
          <li key={i}>
            {detail}
          </li>
        ))}
      </ul>
    </motion.article>
  );
};

export default ExpertiseCard;

