import React, { useEffect, useState } from 'react';
import { Chart, ChartSeries, ChartSeriesItem, ChartCategoryAxis, ChartCategoryAxisItem, ChartTitle } from '@progress/kendo-react-charts';
import '@progress/kendo-theme-default/dist/all.css';
import { Card, CardHeader, CardBody } from '@progress/kendo-react-layout';

import { fetchDevelopmentfrequency,Deployment } from '../../services/githubService';
import { calculateDeploymentFrequency } from './calculateFrequency';
import { dummydata } from './dummyfrequency';

const DeploymentFrequency: React.FC = () => {
  const [frequencyData, setFrequencyData] = useState<{ date: Date, frequency: number }[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const deployments: Deployment[] = await fetchDevelopmentfrequency();
         const frequencies = calculateDeploymentFrequency(deployments);
         console.log(frequencies, deployments)
        setFrequencyData(frequencies);
      } catch (error) {
        console.error('Error fetching deployment data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="card">
        <div className='card-header' >
        Deployment Frequency
        </div>
        <div >
        <Chart>
        <ChartCategoryAxis>
            <ChartCategoryAxisItem   
            categories={frequencyData.map((data) => data.date)}
           />
          </ChartCategoryAxis>
          <ChartSeries>
            <ChartSeriesItem
            type='column'
              data={frequencyData}
              categoryField="date"  
              field="frequency"
              
            />
          </ChartSeries>
        </Chart>
        </div>
  </div>
  );
};

export default DeploymentFrequency;
