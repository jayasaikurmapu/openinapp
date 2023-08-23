import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navigation from './Navigation';
import Header from './Header'
import Card from './Card';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import LineChartComponent from './LineChart';
import Schedulecard from './Schedulecard';
import Piechart from './Piechart';

const Dashboard = () => {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => {
        const priceData = response.data.bpi;
        const formattedData = Object.keys(priceData).map(time => ({
          time,
          price: priceData[time].rate_float,
          anotherPrice: priceData[time].rate_float * 1.5,
        }));
        setJsonData(formattedData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const cardInfo = {
    title: 'Total Revenues',
    title2: '$ 2,129,430',
  };

  const cardInfo1 = {
    title3: 'Total Transactions',
    title4: '1520',
  };

  const cardInfo2 = {
    title5: 'Total Likes',
    title6: '9,721',
  };

  const cardInfo3 = {
    title7: 'Total Users',
    title8: '892',
  };

  const cardInfo4 = {
    title9: 'Todays Schedule',
    
  };

  const groupCardContent = [
    'Meeting with suppliers from Kuta Bali',
    '14:00-15:00',
    'at Sunset Road, Kuta, Bali',
  ];

  const groupCardContent1=[
    'Check operation at Giga factory 1',
    '18.00-20.00',
    'at Central Jakarta',
  ];

  const seeAll={
    title13:"See All",
  }

  return (
    <div className="container">
      <div className="dashboard-container">
        <Header />

        <div className="main-content">
          {/* Other content sections */}
        </div>

        {/* Card components */}
        <div>
          <Card title={cardInfo.title} title2={cardInfo.title2} />
        </div>
        <div>
          <Card1 title3={cardInfo1.title3} title4={cardInfo1.title4} />
        </div>
        <div>
          <Card2 title5={cardInfo2.title5} title6={cardInfo2.title6} />
        </div>
        <div>
          <Card3 title7={cardInfo3.title7} title8={cardInfo3.title8} />
        </div>

        {/* LineChartComponent */}
        <LineChartComponent data={jsonData} />
        <div className='lastComp' style={{display:'flex'}}>
            <Piechart />

            <Schedulecard title9={cardInfo4.title9}  
            groupContent={groupCardContent} 
            groupContent1={groupCardContent1} 
            title13={seeAll.title13}/>
        </div>
       
      </div>
    </div>
  );
};

export default Dashboard;


