import * as React from 'react';
import UserInfo from '../../../pages/userInfo/userInfo';
import DeploymentFrequency from '../../GithubStats/DeploymentFrequency';
import CFRChart from '../../GithubStats/CFR';
import { Card,CardHeader,CardBody } from '@progress/kendo-react-layout';
import LeadTimeChart from '../../GithubStats/LeadTimeChart';
import MTTRChart from '../../GithubStats/MTTR';
import './stats.scss'

export function Issues() {
    return (
        <> 
        <Card className="card-container">
            <div className='top-container'>
        <CardBody className='cfrchart-card'>
            <CFRChart />
        </CardBody>
      
    <CardBody className='deployment-card'>
      <DeploymentFrequency />
    </CardBody>
    </div>
    <div className='bottom-container'>
    <CardBody className='LTC-card'>
        <LeadTimeChart/>
    </CardBody>
    <CardBody className='MTTR-card'>
        <MTTRChart/>
    </CardBody>
    </div>
    </Card>
        </>

    );
}
