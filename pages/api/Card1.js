import React from 'react';
import vector1 from '../images/vector1.jpg';
import Image from 'next/image';

const Card1 = ({ title3, title4, imageUrl, bulletPoints }) => {
  return (
    <div className="cards">
        <div className="vector1">
          <Image src={vector1} alt="vector1" />
          </div>
      <h2 className="TotalTransactions">{title3}</h2>
      <h3 className="hlo">{title4}</h3>
    </div>
  );
};

export default Card1;