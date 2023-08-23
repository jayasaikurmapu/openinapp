import React from 'react';
import dashboardIcon from '../images/dashboard_icon.jpg'
import transactionIcon from '../images/transaction_icon.jpg'
import schedulesIcon from '../images/schedules_icon.jpg';
import settingsIcon from '../images/settings_icon.jpg';
import userIcon from '../images/user_icon,jpg.png';
import Image from 'next/image';
// ------------------------------
const Navigation = () => {
  return (
    
    <div className="navigation-bar">
        <div style={{fontFamily:'Arial',
         fontSize:'36px',marginLeft:'50px',
         marginTop:'40px'}}>Board.</div>
      <div className="menu-list">
        <div className="menu-item" style={{marginTop:'60px', paddingBottom:'30px'}}>
          <Image className='imagee' src={dashboardIcon} alt="Dashboard Icon" />
          &nbsp;&nbsp;&nbsp;
          <span style={{textAlign:'center'}}>Dashboard</span>
        </div>
        <div className="menu-item" style={{paddingBottom:'30px'}}>
          <Image className='imagee' src={transactionIcon} alt="Transactions Icon" />
          &nbsp;&nbsp;&nbsp;
          <span>Transactions</span>
        </div>
        <div className="menu-item" style={{paddingBottom:'30px'}}>
          <Image className='imagee' src={schedulesIcon} alt="schedules Icon" />
          &nbsp;&nbsp;&nbsp;
          <span>Schedules</span>
        </div>
        <div className="menu-item" style={{paddingBottom:'30px'}}>
          <Image className='imagee' src={userIcon} alt="user Icon" />
          &nbsp;&nbsp;&nbsp;
          <span>users</span>
        </div>
        <div className="menu-item">
          <Image className='imagee' src={settingsIcon} alt="settings Icon" />
          &nbsp;&nbsp;&nbsp;
          <span>settings</span>
        </div>
        <div className="Help">

         

<span>Help</span>

</div>

<div className="ContactUs">



<span>Contact Us</span>

</div>
      </div>
    </div>
  );
};

export default Navigation;

