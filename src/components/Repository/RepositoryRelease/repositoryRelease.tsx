import { Chart, ChartCategoryAxis, ChartCategoryAxisItem, ChartSeries, ChartSeriesItem } from "@progress/kendo-react-charts";
import React, { useState } from "react";
import { ReleaseListCompressed } from "../../../github-data/releaseData";
import {
    ListView,
    ListViewHeader,
    ListViewFooter,
} from '@progress/kendo-react-listview';
import "./repositoryRelease.scss";

export function RepositoryRelease() {

    const MyItemRender = (props) => {
        let item = props.dataItem;
        return (
            <div
                className="k-listview-item row p-2 border-bottom align-middle"
                style={{
                    margin: 0,
                }}
            >

                <div className="col-6">
                    <h2
                        style={{
                            fontSize: 14,
                            color: '#454545',
                            marginBottom: 0,
                        }}
                        className="text-uppercase"
                    >
                        {item.name}
                    </h2>
                    <div
                        style={{
                            fontSize: 12,
                            color: '#a0a0a0',
                        }}
                    >
                        Author: {item.author}
                    </div>
                </div>
                <div className="col-4">
                    <div
                        style={{
                            fontSize: 12,
                            color: '#000000',
                        }}
                    >
                        Release Date:  {item.date}
                    </div>
                </div>
                <div className="col-2">
                    <a href={item.url} target="_blank" className="btn btn-primary" rel="noopener noreferrer">View</a>
                </div>

            </div>
        );
    };





    return (<>
        <div className="row">
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-header">
                        Release Frequency
                    </div>
                    <div className="card-body release-frequency">
                        <Chart style={{
                            width: 800,
                            height: 500,
                        }}>
                            <ChartCategoryAxis>
                                <ChartCategoryAxisItem
                                    categories={["2019", "2020", "2021", "2022", "2024"]}
                                    title={{ text: "Release year" }}
                                />
                            </ChartCategoryAxis>
                            <ChartSeries>
                                <ChartSeriesItem
                                    type="line"
                                    data={[15, 6, 2, 3, 2]}
                                    markers={{ visible: false }}
                                    line={{ style: 'smooth' }}
                                />
                            </ChartSeries>
                        </Chart>
                    </div>
                </div>
            </div>
        </div>

        <div className="row mt-20">
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-header">
                        Releases
                    </div>
                    <div className="card-body">
                        <ListView
                            data={ReleaseListCompressed}
                            item={MyItemRender}
                            style={{
                                width: '100%',
                            }}

                        />
                    </div>
                </div>
            </div>
        </div>
    </>);
}