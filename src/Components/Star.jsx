import React from 'react';

const Star = ({ filled, onClick }) => (
  <span 
    onClick={onClick} 
    style={{ cursor: 'pointer',fontSize:'25px', color: filled ? 'gold' : 'gray'}}
  >
    ★
  </span>
);

export default Star;
