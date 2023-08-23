import React from 'react';
import vector from '../images/vector.png';
import Image from 'next/image';

const Card = ({ title, title2, imageUrl, bulletPoints }) => {
  return (
    <div className="card">
      <div className="vector">
          <Image src={vector} alt="vector" />
          </div>
          
      <h2 className="TotalRevenues">{title}</h2>
      <h3 className="hi">{title2}</h3>
    </div>
  );
};

export default Card;
