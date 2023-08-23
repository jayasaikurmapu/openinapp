import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const LineChartComponent = ({ data }) => {
  return (
    <div className="Linechartcard" style={{
      backgroundColor:'#F5F5F5',
      paddingBottom:'10px'
    }}>
      <h3 className='bitcoin'>Bitcoin Price Chart</h3>
      <LineChart style={{marginLeft:'35px', paddingBottom:'0%'}} width={900} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend iconType='circle'/>
        <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="anotherPrice" stroke="#82ca9d" activeDot={{ r: 8 }} />
      </LineChart>
    </div>
  );
};

export default LineChartComponent;


