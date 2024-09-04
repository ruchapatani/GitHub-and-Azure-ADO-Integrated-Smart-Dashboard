import React, { useEffect, useState } from "react";
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartSeriesLabels,
} from "@progress/kendo-react-charts";
import { MultiSelect } from "@progress/kendo-react-dropdowns";
import { Card, CardBody, CardHeader } from "@progress/kendo-react-layout";
import "./repositoryOverview.scss";
import {
  getContributersList,
  getLanguagesList,
  getRepoInfo,
} from "../../../services/githubRepository/repositoryService";
const LabelContent = (props) =>
  `${props.category}: ${props.value.toLocaleString()}`;

export function RepositoryOverView() {
  const [allContributors, setAllContributers] = useState<any[]>([]);
  const [languageData, setLanguageData] = useState<any[]>([]);
  const [repoInfo, setRepoInfo] = useState<any>({});

  // const languageData = remodelData(languageInfo);

  const [selectedContributors, setSelectedContributors] = useState<any[]>([]);
  const fetchData = async () => {
    const constributers = await getContributersList();
    const languages = await getLanguagesList();
    const repoInfo = await getRepoInfo();
    setLanguageData(languages);
    setAllContributers(constributers);
    setSelectedContributors(constributers);
    setRepoInfo(repoInfo);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleSelectionChange = (event) => {
    setSelectedContributors(event.target.value);
  };
  return (
    <div className="mb-20">
      <div>
        <div className="card">
          <div className="card-header" style={{color: "white"}}>
            <h2 style={{color: "white"}}>{repoInfo.full_name}</h2>
          </div>
          <div className="card-body">
            <p>{repoInfo.description}</p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "20px",
            width: "100%",
          }}
        >
          <div style={{ width: "600px", height: "400px" }}>
            <Chart>
              <ChartSeries>
                <ChartSeriesItem
                  type="pie"
                  data={languageData}
                  field="value"
                  categoryField="category"
                >
                  <ChartSeriesLabels
                    content={LabelContent}
                    position="insideBase"
                    background="none"
                    visible={false}
                  />
                </ChartSeriesItem>
              </ChartSeries>
            </Chart>
          </div>
          <Card
            style={{
              marginLeft: "20px",
              width: "40%",
              height: "100%",
              textAlign: "left",
            }}
          >
            <CardHeader>No of forks :{repoInfo.forks_count}</CardHeader>
            <CardBody>No of Open Issues :{repoInfo.open_issues_count}</CardBody>
          </Card>
        </div>
      </div>

      <hr></hr>
      <hr></hr>

      <h3>Contributers :</h3>

      <MultiSelect
        data={allContributors}
        textField="login"
        dataItemKey="login"
        value={selectedContributors}
        onChange={handleSelectionChange}
        placeholder="Select contributors..."
      />
      <Chart>
        <ChartCategoryAxis>
          <ChartCategoryAxisItem
            categories={selectedContributors.map(
              (contributor) => contributor.name
            )}
          />
        </ChartCategoryAxis>
        <ChartSeries>
          <ChartSeriesItem
            type="column"
            data={selectedContributors.map(
              (contributor) => contributor.contributions
            )}
            name="Contributions"
          />
        </ChartSeries>
      </Chart>
    </div>
  );
}
