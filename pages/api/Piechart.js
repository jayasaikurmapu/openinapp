import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { FaChevronDown } from 'react-icons/fa';
import { PieChart, Pie, Cell } from 'recharts';

const Card = () => {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        // Fetch data from the API using Axios
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                console.log(response.data.slice(0, 3))
                setTasks(response.data.slice(0, 3));
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    // Calculate the sum of all the id values
    const totalIdSum = tasks.reduce((sum, task) => sum + task.id, 0);

    // Calculate the ratios and angles for the pie chart slices
    const sliceData = tasks.map(task => {
        const ratio = task.id / totalIdSum;
        return {
            id: task.id,
            ratio,
            title: task.title,
        };
    });

    const COLORS = ['#36A2EB', '#FFCE56', '#FF6384'];


    return (
        <div className="productscard" style={{backgroundColor:'#F5F5F5'}} >
            <div className='texthead'>
                <div className="top-products">
                    Top Products
                </div>
                <div className="may-june">
                    May - June 2021 <FaChevronDown className="icon" />
                </div>
            </div>
            <div className="chart-container">
                <PieChart width={134} height={134}>
                    <Pie
                        dataKey="ratio"
                        data={sliceData}
                        cx={67}
                        cy={67}
                        outerRadius={50}
                        fill="#8884d8"
                        stroke="none" // Remove the stroke
                        strokeWidth={0}
                    >
                        {sliceData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
                <div className="legend">
                    {sliceData.map((entry, index) => (
                        <div key={`legend-${index}`} className="legend-item">
                            <div className="legend-dot" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                            <div className="legend-text">
                                <div className="legend-title">{entry.title}</div>
                                <div className="legend-ratio">{`${(entry.ratio * 100).toFixed(0)}%`}</div>
                                <span> </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Card;
