import React from 'react';
import seeallimg from '../images/seeall.jpg';
import Image from 'next/image';
// You can create a CSS file for styling

const Schedulecard = ({ title9, groupContent,groupContent1,title13}) => {
  return (
    <div className="cardschedule" style={{backgroundColor:"#F5F5F5"}}>
        <div className="seeallimg">
          <Image src={seeallimg} alt="seeallimg" />
          </div> 
    <h2 className="seeall">{title13}</h2>  
      <h2 className="TodaysSchedule">{title9}</h2>
     
      
      <div className="groups">
        <div className="Line6"></div>
        {/* Render group content */}
        <h3 className="MeetingwithsuppliersfromKutaBali">{groupContent[0]}</h3>
        <h3 className="time">{groupContent[1]}</h3>
        <h3 className="atSunsetRoadKutaBali">{groupContent[2]}</h3>
        
        
      </div>
      <div className="group2">
        <div className="Line7"></div>
        {/* Render group content */}
        <h3 className="CheckoperationatGigafactory1">{groupContent1[0]}</h3>
        <h3 className="time1">{groupContent1[1]}</h3>
        <h3 className="atCentralJakarta">{groupContent1[2]}</h3>
        
         </div>
    </div>
  );
};

export default Schedulecard;
