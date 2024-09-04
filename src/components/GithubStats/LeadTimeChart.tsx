import React, { useEffect, useState } from 'react';
import { Chart, ChartSeries, ChartSeriesItem, ChartCategoryAxis, ChartCategoryAxisItem, ChartTitle } from '@progress/kendo-react-charts';
import { fetchAndCalculateLeadTime, LeadTimeData } from '../../services/githubService';

const LeadTimeChart: React.FC = () => {
  const [data, setData] = useState<LeadTimeData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const leadTimeData = await fetchAndCalculateLeadTime();
        console.log(leadTimeData)
        setData(leadTimeData);
      } catch (error) {
        console.error('Error fetching lead time data:', error);
      }
    };

    fetchData();
  }, []);

  return (
  
                        <div className="card">
                            <div className="card-header">
                            Lead Time for Changes
        </div>
        <div className="card-body"></div>
    <Chart>
      <ChartTitle text="Lead Time for Changes" />
      <ChartCategoryAxis>
        <ChartCategoryAxisItem categories={data.map(item => item.date)} />
      </ChartCategoryAxis>
      <ChartSeries>
        <ChartSeriesItem
          type="line"
          data={data}
          field="leadTime"
          categoryField="date"
        />
      </ChartSeries>
    </Chart>
    </div>
  );
};

export default LeadTimeChart;
