import React from 'react';
import vector3 from '../images/vector3.jpg';
import Image from 'next/image';

const Card3 = ({ title7, title8, imageUrl, bulletPoints }) => {
  return (
    <div className="card3">
      <div className="vector3">
          <Image src={vector3} alt="vector3" />
          </div>
          
      <h2 className="TotalUsers">{title7}</h2>
      <h3 className="hru">{title8}</h3>
      {/* <p className="card-description">{description}</p> */}
      {/* <ul className="bullet-points">
        {bulletPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default Card3;