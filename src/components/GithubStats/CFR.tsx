import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardBody } from '@progress/kendo-react-layout';
import { Chart, ChartTitle, ChartCategoryAxis, ChartCategoryAxisItem, ChartSeries, ChartSeriesItem } from '@progress/kendo-react-charts';
import { calculateChangeFailureRate, CFRData } from '../../services/githubService'; // Adjust the path as needed

const CFRChart: React.FC = () => {
  const [chartData, setChartData] = useState<CFRData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCFRData = async () => {
      try {
        const data = await calculateChangeFailureRate();
        setChartData(data);
      } catch (error) {
        setError('Failed to fetch Change Failure Rate data');
      } finally {
        setLoading(false);
      }
    };

    fetchCFRData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
                        <div className="card">
                            <div className="card-header">
        Deployment Metrics
        </div>
        <div className="card-body">
        <Chart className="chart-body">
          <ChartCategoryAxis>
            <ChartCategoryAxisItem   categories={chartData.map((data) => data.category)}
           />
          </ChartCategoryAxis>
          <ChartSeries>
            <ChartSeriesItem
              type="column"
              data={chartData}
              field="value"
              categoryField="category"
              colorField="category"
            />
          </ChartSeries>
        </Chart>
        </div>
                        </div>
  );
};

export default CFRChart;
