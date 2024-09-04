import { Chart, ChartCategoryAxis, ChartCategoryAxisItem, ChartSeries, ChartSeriesItem, ChartTitle, ChartTooltip } from "@progress/kendo-react-charts";
import axios from "axios";
import { get } from "http";
import React, { useEffect, useState } from "react";
import { getWeeklyCommitHistory } from "../../../services/githubRepository/repositoryService";

export function RepositoryActivity() {
    const [chartData, setChartData] = useState<any[]>([]);

    const fetchData = async()=>{
        const data = await getWeeklyCommitHistory();
        setChartData(data)
    }

    useEffect(() => {
      
      fetchData();
    }, []);
  
    return ( <Chart>
        <ChartTitle text="Weekly Commit Activity" />
        <ChartCategoryAxis>
          <ChartCategoryAxisItem
            categories={chartData.map((item) => item.week)}
            labels={{ rotation: 'auto' }}
          />
        </ChartCategoryAxis>
        <ChartSeries>
          <ChartSeriesItem type="line" data={chartData.map((item) => item.commits)} name="Commits">
            <ChartTooltip visible={true} format="{0} commits" />
          </ChartSeriesItem>
        </ChartSeries>
      </Chart>
    );
}
