import * as React from 'react';
import { getCloseItemsByUser, getOpenItemsByUser } from '../../utils/adoUtil';
import { Chart, ChartCategoryAxis, ChartCategoryAxisItem, ChartSeries, ChartSeriesItem } from '@progress/kendo-react-charts';


export function AdoStatsComponent() {

    const [closedItems, setClosedItems] = React.useState(null);
    const [openItems, setOpenItems] = React.useState(null);


    React.useEffect(() => {
        if (closedItems === null) {
            const closedItemsTemp = getCloseItemsByUser();
            setClosedItems(closedItemsTemp);
        }

        if (openItems === null) {
            const openItemsTemp = getOpenItemsByUser();
            setOpenItems(openItemsTemp);
        }
    },);

    return (

        <>
            <div className='container-fluid' style={{ marginTop: "20px" }}>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                Open Tickets vs User
                            </div>
                            <div className="card-body">
                                {openItems && <Chart
                                    style={{
                                        width: 800,
                                        height: 600,
                                    }}>
                                    <ChartCategoryAxis>
                                        <ChartCategoryAxisItem
                                            categories={openItems?.usersList || []}
                                        />
                                    </ChartCategoryAxis>
                                    <ChartSeries>
                                        <ChartSeriesItem
                                            type="column"
                                            data={openItems?.pbiCount || []}
                                            name="Open Items"
                                            color="#ff4081"
                                        />
                                    </ChartSeries>
                                </Chart>}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                Closed Tickets vs User
                            </div>
                            <div className="card-body">
                                {closedItems && <Chart
                                    style={{
                                        width: 800,
                                        height: 600,
                                    }}>
                                    <ChartCategoryAxis>
                                        <ChartCategoryAxisItem
                                            categories={closedItems?.usersList || []}
                                        />
                                    </ChartCategoryAxis>
                                    <ChartSeries>
                                        <ChartSeriesItem
                                            type="column"
                                            data={closedItems?.pbiCount || []}
                                            name="Closed Items"
                                        />
                                    </ChartSeries>
                                </Chart>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}
