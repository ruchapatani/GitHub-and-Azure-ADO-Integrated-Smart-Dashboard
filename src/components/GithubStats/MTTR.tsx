import React, { useEffect, useState } from 'react';
import { Chart, ChartSeries, ChartSeriesItem, ChartCategoryAxis, ChartCategoryAxisItem, ChartTitle } from '@progress/kendo-react-charts';
import { fetchAndCalculateMTTR, MTTRData } from '../../services/githubService';

const MTTRChart: React.FC = () => {
  const [data, setData] = useState<MTTRData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const mttrData = await fetchAndCalculateMTTR();
        console.log(mttrData)
        setData(mttrData);
      } catch (error) {
        console.error('Error fetching MTTR data:', error);
      }
    };

    fetchData();
  }, []);

  return (
 
                    <div className="card">
                        <div className="card-header">
                  Median Time to Restore      
                    </div>    
                    <div>
    <Chart>
      <ChartTitle text="Median Time to Restore" />
      <ChartCategoryAxis>
        <ChartCategoryAxisItem categories={data.map(item => item.date)} />
      </ChartCategoryAxis>
      <ChartSeries>
        <ChartSeriesItem
          type="line"
          data={data}
          field='mttr'
            categoryField="date"
        />
      </ChartSeries>
    </Chart>
    </div>
    </div>
  );
};

export default MTTRChart;
