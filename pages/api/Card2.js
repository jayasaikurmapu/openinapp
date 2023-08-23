import React from 'react';
import Vector2 from '../images/Vector2.jpg';
import Image from 'next/image';

const Card2 = ({ title5, title6, imageUrl, bulletPoints }) => {
  return (
    <div className="card2">
      <div className="vector2">
          <Image src={Vector2} alt="vector2" />
          </div>
          
      <h2 className="TotalLikes">{title5}</h2>
      <h3 className="how">{title6}</h3>
      {/* <p className="card-description">{description}</p> */}
      {/* <ul className="bullet-points">
        {bulletPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default Card2;