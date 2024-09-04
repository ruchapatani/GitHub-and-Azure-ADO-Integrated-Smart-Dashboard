import axios from 'axios';


// export const fetchRepoData = async () => {
//   const url = `${process.env.GITHUB_API_BASE_URL}/repos/facebook/react`
//   console.log(process.env.GITHUB_API_BASE_URL);
//   const options = {
//     method: "GET",
//     url: url,
//     headers: {
//       "content-type": "application/json",
//     },

//   };
//   const res = await axios.request(options);
//   return res.data;
// };

// export const fetchCommitsData = async (commitsUrl: string) => {
//   const options = {
//     method: "GET",
//     url: commitsUrl,
//     headers: {
//       "content-type": "application/json",
//     },
// };
//     const res = await axios.request(options);
//     return res.data;
// };

// export const fetchPullsData = async (pullsUrl: string) => {
//   const options = {
//     method: "GET",
//     url: pullsUrl,
//     headers: {
//       "content-type": "application/json",
//     },
//   };
//   const res = await axios.request(options);
//   return res.data;
// };

// export const fetchBranchesData = async (branchesUrl: string) => {
//     const options = {
//         method: "GET",
//         url: branchesUrl,
//         headers: {
//           "content-type": "application/json",
//         },
//       };
//       const res = await axios.request(options);
//       return res.data;
// };

// export const fetchPullRequestReviews = async (reviewsUrl: string) => {
//     const options = {
//         method: "GET",
//         url: reviewsUrl,
//         headers: {
//           "content-type": "application/json",
//         },
//       };
//       const res = await axios.request(options);
//       return res.data;
// };

import {dummydeployments,dummystatusdata} from '../components/GithubStats/dummyfrequency';
export interface Deployment {
  id: number;
  created_at: string;
}

export interface DeploymentStatus {
  state: string;
}

export interface CFRData {
  category: string;
  value: number;
}
const repoOwner = 'facebook';
const repoName = 'react';

export const fetchDevelopmentfrequency = async () => {
  const url = `${process.env.GITHUB_API_BASE_URL}/repos/${repoOwner}/${repoName}/deployments`;
  console.log(process.env.GITHUB_API_BASE_URL);

  const options = {
    method: 'GET',
    url: url,
    headers: {
      'content-type': 'application/json',
    },
  };

  const res = await axios.request(options);
  console.log("hi"+ res.data)
  return res.data;
};

export interface Deployment {
  created_at: string;
}



async function fetchDeploymentStatuses(deploymentId: number) {
    const url = `${process.env.GITHUB_API_BASE_URL}/repos/${repoOwner}/${repoName}/deployments/${deploymentId}/statuses`;
    console.log(url)
    const options = {
      method: 'GET',
      url: url,
      headers: {
        'content-type': 'application/json',
      },
    };
  
    const res = await axios.request(options);
    console.log("hi"+ res)
    return res.data;
}

export const calculateChangeFailureRate = async (): Promise<CFRData[]> => {
  try {
    const deployments = await fetchDevelopmentfrequency();
    
    // Get the current date and calculate the date 1 week ago
    const now = new Date();
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(now.getDate() - 7);

    let totalDeployments = 0;
    let failedDeployments = 0;

    for (const deployment of deployments) {
      const deploymentDate = new Date(deployment.created_at);

      // Only consider deployments from the past week
      if (deploymentDate >= oneWeekAgo && deploymentDate <= now) {
        const statuses = await fetchDeploymentStatuses(deployment.id);
        totalDeployments += 1;
        if (statuses.some((status: DeploymentStatus) => status.state === 'failure')) {
          failedDeployments += 1;
        }
      }
    }

    const cfr = totalDeployments > 0 ? (failedDeployments / totalDeployments) * 100 : 0;
    return [
      { category: 'Change Failure Rate', value: cfr },
      { category: 'Successful Deployments', value: 100 - cfr }
    ];
  } catch (error) {
    console.error('Error calculating Change Failure Rate:', error);
    throw error;
  }
};
export interface LeadTimeData {
  date: string;
  leadTime: number;
}
export const fetchAndCalculateLeadTime = async (): Promise<LeadTimeData[]> => {
  try {
    // Define the URL to fetch pull requests
    const pullsUrl = `${process.env.GITHUB_API_BASE_URL}/repos/${repoOwner}/${repoName}/pulls?state=closed`;

    // Set up the options for the axios request
    const options = {
      method: "GET",
      url: pullsUrl,
      headers: {
        "content-type": "application/json",
      },
    };

    // Fetch pull requests data
    const response = await axios.request(options);

    // Extract and calculate lead time data
    const leadTimeData: LeadTimeData[] = response.data.map((pr: any) => {
      const createdAt = new Date(pr.created_at);
      const mergedAt = pr.merged_at ? new Date(pr.merged_at) : null;

      if (!mergedAt) {
        return null;
      }

      const leadTime = (mergedAt.getTime() - createdAt.getTime()) / (1000 * 60 * 60 * 24); // Lead time in days
      const formattedDate = mergedAt.toLocaleDateString('en-GB');
      return {
        date: formattedDate, // Format date as YYYY-MM-DD
        leadTime,
      };
    }).filter(Boolean); // Remove null entries

    return leadTimeData;
  } catch (error) {
    console.error('Error fetching or calculating lead time data:', error);
    throw error;
  }
};

export interface MTTRData {
  date: string;
  mttr: number;
}

// Fetch and calculate MTTR
export const fetchAndCalculateMTTR = async (): Promise<MTTRData[]> => {
  try {
    // Define the URL to fetch issues labeled with "incident"
    const issuesUrl = `${process.env.GITHUB_API_BASE_URL}/repos/${repoOwner}/${repoName}/issues?state=closed&labels=incident`;

    // Set up the options for the axios request
    const options = {
      method: "GET",
      url: issuesUrl,
      headers: {
        "content-type": "application/json",
      },
    };

    // Fetch issues data
    const response = await axios.request(options);
    console.log(response)

    // Extract and calculate MTTR data
    const mttrData: MTTRData[] = response.data.map((issue: any) => {
      const createdAt = new Date(issue.created_at);
      const closedAt = issue.closed_at ? new Date(issue.closed_at) : null;

      if (!closedAt) {
        return null;
      }

      const mttr = (closedAt.getTime() - createdAt.getTime()) / (1000 * 60 * 60 * 24); // MTTR in days
      const formattedDate = closedAt.toLocaleDateString('en-GB');
      return {
        date: formattedDate, // Format date as YYYY-MM-DD
        mttr,
      };
    }).filter(Boolean); // Remove null entries
console.log(mttrData)
    return mttrData;
  } catch (error) {
    console.error('Error fetching or calculating MTTR data:', error);
    throw error;
  }
};
