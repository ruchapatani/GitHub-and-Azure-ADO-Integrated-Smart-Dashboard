import React, { useEffect, useState } from "react";
import "./shell-dashboard.scss";
import { Chart, ChartCategoryAxis, ChartCategoryAxisItem, ChartSeries, ChartSeriesItem } from "@progress/kendo-react-charts";
import UserInfo from "../userInfo/userInfo";

export function ShellDashboard() {
    const [languageList, setLanguageList] = React.useState([]);
    const [commitSeries] = React.useState([20, 1, 18, 3, 15, 5, 10]);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
    const [prSeries] = React.useState([3, 4, 2, 5, 1, 6, 7]);
 
     const commits = [
        {
            "sha": "801da1797a0bc2a877ccc80b09e9217218b1d37f",
            "node_id": "C_kwDOMrCIbNoAKDgwMWRhMTc5N2EwYmMyYTg3N2NjYzgwYjA5ZTkyMTcyMThiMWQzN2Y",
            "commit": {
                "author": {
                    "name": "Rucha Patani",
                    "email": "62741834+ruchapatani@users.noreply.github.com",
                    "date": "2024-08-31T18:45:57Z"
                },
                "committer": {
                    "name": "GitHub",
                    "email": "noreply@github.com",
                    "date": "2024-08-31T18:45:57Z"
                },
                "message": "Update readme.txt",
                "tree": {
                    "sha": "01f4e1397ddcd67748511809c9302621bdacb278",
                    "url": "https://api.github.com/repos/ruchapatani/Detection-and-Classification-of-Different-Types-of-Tumor-using-Image-Analysis-and-CNN/git/trees/01f4e1397ddcd67748511809c9302621bdacb278"
                },
                "url": "https://api.github.com/repos/ruchapatani/Detection-and-Classification-of-Different-Types-of-Tumor-using-Image-Analysis-and-CNN/git/commits/801da1797a0bc2a877ccc80b09e9217218b1d37f",
                "comment_count": 0,
                "verification": {
                    "verified": true,
                    "reason": "valid",
                    "signature": "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJm02TlCRC1aQ7uu5UhlAAAccsQABtMkIeP7gjwaevKzfjdWX34\n4Lwp3njgOnBAsGlmAYUFfJPNf7qp/wTRYA1qCiCfV3Rl7qm4gmBZFrH1cqH9wDTN\nBR7eYVoqjqW6kGArCvwiU0rzPJmPPGsv4WutFViTWLRvXLpHJcF8cJ0hG/JUof1P\nIKnfq7V94PIgZSQ5zP7kpYxXTMDRc9xv7j7nNsUzOh4Yi8EVtOua6GYPrRpCa4rE\ndhBace+b5YWJZ6zRt0sXKVikwHLjqAzc3h4ch1A8ndovjzx1Cgwa0lQmk4GpGgdH\ndQvLDrHNsC/NFPgmJoXe3y9jiPQ4zNN75z/RPpX0dIU6hrVAiFaxG23U5ir0newa\nUkzA+VdeT5eKaCpdQ6FJTVRBI/urwik1UTZzjlmQUENWUy+WLfd8b6467ZgBgVGK\nEmjKOq3A0889hp/Fng5OOUwFBTno1DNh1DRLPrPUucCDMlHliPGIqlSOsopVyZV9\nUWXZ4ad8JZ3itHe9cz+pS4ZXsEtyUwBQ0Alo+PPJh34llE/M5DH6TkVYEPtkyJ30\n7m/ouPbVl/uBoukmPJi0Asmd7OCwUZwHsklKeAHgFxdc6liNa/NG99TNAlEt5hp1\nCKmtaqgri9yeagzQZ7WUGqhOdjr+Xn95k/1ejy9mHS42tJBT/gtFYSApI2wCcjtL\n5idbLl1fMR8zNu3RTMj/\n=O74P\n-----END PGP SIGNATURE-----\n",
                    "payload": "tree 01f4e1397ddcd67748511809c9302621bdacb278\nparent 382d0e1801708558bbcb56dad6a2cc31bed4ed8a\nauthor Rucha Patani <62741834+ruchapatani@users.noreply.github.com> 1725129957 +0530\ncommitter GitHub <noreply@github.com> 1725129957 +0530\n\nUpdate readme.txt"
                }
            },
            "url": "https://api.github.com/repos/ruchapatani/Detection-and-Classification-of-Different-Types-of-Tumor-using-Image-Analysis-and-CNN/commits/801da1797a0bc2a877ccc80b09e9217218b1d37f",
            "html_url": "https://github.com/ruchapatani/Detection-and-Classification-of-Different-Types-of-Tumor-using-Image-Analysis-and-CNN/commit/801da1797a0bc2a877ccc80b09e9217218b1d37f",
            "comments_url": "https://api.github.com/repos/ruchapatani/Detection-and-Classification-of-Different-Types-of-Tumor-using-Image-Analysis-and-CNN/commits/801da1797a0bc2a877ccc80b09e9217218b1d37f/comments",
            "author": {
                "login": "ruchapatani",
                "id": 62741834,
                "node_id": "MDQ6VXNlcjYyNzQxODM0",
                "avatar_url": "https://avatars.githubusercontent.com/u/62741834?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/ruchapatani",
                "html_url": "https://github.com/ruchapatani",
                "followers_url": "https://api.github.com/users/ruchapatani/followers",
                "following_url": "https://api.github.com/users/ruchapatani/following{/other_user}",
                "gists_url": "https://api.github.com/users/ruchapatani/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/ruchapatani/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/ruchapatani/subscriptions",
                "organizations_url": "https://api.github.com/users/ruchapatani/orgs",
                "repos_url": "https://api.github.com/users/ruchapatani/repos",
                "events_url": "https://api.github.com/users/ruchapatani/events{/privacy}",
                "received_events_url": "https://api.github.com/users/ruchapatani/received_events",
                "type": "User",
                "site_admin": false
            },
            "committer": {
                "login": "web-flow",
                "id": 19864447,
                "node_id": "MDQ6VXNlcjE5ODY0NDQ3",
                "avatar_url": "https://avatars.githubusercontent.com/u/19864447?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/web-flow",
                "html_url": "https://github.com/web-flow",
                "followers_url": "https://api.github.com/users/web-flow/followers",
                "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
                "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
                "organizations_url": "https://api.github.com/users/web-flow/orgs",
                "repos_url": "https://api.github.com/users/web-flow/repos",
                "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
                "received_events_url": "https://api.github.com/users/web-flow/received_events",
                "type": "User",
                "site_admin": false
            },
            "parents": [
                {
                    "sha": "382d0e1801708558bbcb56dad6a2cc31bed4ed8a",
                    "url": "https://api.github.com/repos/ruchapatani/Detection-and-Classification-of-Different-Types-of-Tumor-using-Image-Analysis-and-CNN/commits/382d0e1801708558bbcb56dad6a2cc31bed4ed8a",
                    "html_url": "https://github.com/ruchapatani/Detection-and-Classification-of-Different-Types-of-Tumor-using-Image-Analysis-and-CNN/commit/382d0e1801708558bbcb56dad6a2cc31bed4ed8a"
                }
            ]
        },
        {
            "sha": "382d0e1801708558bbcb56dad6a2cc31bed4ed8a",
            "node_id": "C_kwDOMrCIbNoAKDM4MmQwZTE4MDE3MDg1NThiYmNiNTZkYWQ2YTJjYzMxYmVkNGVkOGE",
            "commit": {
                "author": {
                    "name": "Rucha Patani",
                    "email": "62741834+ruchapatani@users.noreply.github.com",
                    "date": "2024-08-31T18:44:33Z"
                },
                "committer": {
                    "name": "GitHub",
                    "email": "noreply@github.com",
                    "date": "2024-08-31T18:44:33Z"
                },
                "message": "Code for Detection and Classification of cancers\n\naims at developing ML models that give an accurate result and helps in detecting a tumor in the brain, breast and skin from\r\nthe input image (MRI, Histopathological, and skin patches) using CNN. The model output is further available on GUI,\r\nmaking it user-friendly and easy for diagnosis. The result obtained can be used by the medical fraternity for the early\r\ndetection and diagnosis of cancer.",
                "tree": {
                    "sha": "56e12cedb9192b4a5694880edd810ea4de3d9188",
                    "url": "https://api.github.com/repos/ruchapatani/Detection-and-Classification-of-Different-Types-of-Tumor-using-Image-Analysis-and-CNN/git/trees/56e12cedb9192b4a5694880edd810ea4de3d9188"
                },
                "url": "https://api.github.com/repos/ruchapatani/Detection-and-Classification-of-Different-Types-of-Tumor-using-Image-Analysis-and-CNN/git/commits/382d0e1801708558bbcb56dad6a2cc31bed4ed8a",
                "comment_count": 0,
                "verification": {
                    "verified": true,
                    "reason": "valid",
                    "signature": "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJm02STCRC1aQ7uu5UhlAAAxeoQABLZChyb8Sk9Od55De5xfE6u\nvw9PTQ+uterekBm1Youn776yby0SyQ6qyFBfxecI6Teoym7bBGhiJIGWfpIYlQcS\nKi/X8JSTn1SL7pkifvmbWNeIcCjztfoQVsA7WPXmMlC27xyE16/7YCp0MIEymxfG\n9Xg7EMmbOodjgKM1Vi3Ecg5EuOXMQ42ggU4eF9qCg/48ag4HD4705CCft1SLmybn\n21CEojzWduU517lZvy7MvmYN3D5m9U65VDgkJe8a60Q5OBr/JXgW3KzSYxBY6MZn\nNLh7bJFOQ76Zzzfa/a09Cv8ny8BKwLpRimdJBRSBxgyYutLcAJxEKgpYQoyj8MVK\njn+nkUVC59dtaZ6b7Ogq7xaxwHH/IdOKdN9XXmxYIOiMJ8zRzJ9gQexKcRi9YmXd\nDtFkZTNfd+oG6kq8SlAG+ib0KO/JVWtO8ZaoRsMdMRLVZszKJ5POvu94dwYDolcJ\nSgAmzmwJ7lzQVYNo9Yaxm7jsPD51GsJujdTRRD/XnLs5HITnRgKElC+GCwOraTcL\nqp/KFRYq7as7tjeN1PrBZPkkrnrdRsFzjelgmvUJUyf+JU3eRlgfPhh34m6UpOHC\nhaTKLrX3ZwM/XrrTGu2zcOQtdWU4zHzI9PVzyltM+8n7QyJCr/RXj76H1OCS7CuJ\nboeFBhz5YafDCpv0zcfI\n=hxsX\n-----END PGP SIGNATURE-----\n",
                    "payload": "tree 56e12cedb9192b4a5694880edd810ea4de3d9188\nauthor Rucha Patani <62741834+ruchapatani@users.noreply.github.com> 1725129873 +0530\ncommitter GitHub <noreply@github.com> 1725129873 +0530\n\nCode for Detection and Classification of cancers\n\naims at developing ML models that give an accurate result and helps in detecting a tumor in the brain, breast and skin from\r\nthe input image (MRI, Histopathological, and skin patches) using CNN. The model output is further available on GUI,\r\nmaking it user-friendly and easy for diagnosis. The result obtained can be used by the medical fraternity for the early\r\ndetection and diagnosis of cancer."
                }
            },
            "url": "https://api.github.com/repos/ruchapatani/Detection-and-Classification-of-Different-Types-of-Tumor-using-Image-Analysis-and-CNN/commits/382d0e1801708558bbcb56dad6a2cc31bed4ed8a",
            "html_url": "https://github.com/ruchapatani/Detection-and-Classification-of-Different-Types-of-Tumor-using-Image-Analysis-and-CNN/commit/382d0e1801708558bbcb56dad6a2cc31bed4ed8a",
            "comments_url": "https://api.github.com/repos/ruchapatani/Detection-and-Classification-of-Different-Types-of-Tumor-using-Image-Analysis-and-CNN/commits/382d0e1801708558bbcb56dad6a2cc31bed4ed8a/comments",
            "author": {
                "login": "ruchapatani",
                "id": 62741834,
                "node_id": "MDQ6VXNlcjYyNzQxODM0",
                "avatar_url": "https://avatars.githubusercontent.com/u/62741834?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/ruchapatani",
                "html_url": "https://github.com/ruchapatani",
                "followers_url": "https://api.github.com/users/ruchapatani/followers",
                "following_url": "https://api.github.com/users/ruchapatani/following{/other_user}",
                "gists_url": "https://api.github.com/users/ruchapatani/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/ruchapatani/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/ruchapatani/subscriptions",
                "organizations_url": "https://api.github.com/users/ruchapatani/orgs",
                "repos_url": "https://api.github.com/users/ruchapatani/repos",
                "events_url": "https://api.github.com/users/ruchapatani/events{/privacy}",
                "received_events_url": "https://api.github.com/users/ruchapatani/received_events",
                "type": "User",
                "site_admin": false
            },
            "committer": {
                "login": "web-flow",
                "id": 19864447,
                "node_id": "MDQ6VXNlcjE5ODY0NDQ3",
                "avatar_url": "https://avatars.githubusercontent.com/u/19864447?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/web-flow",
                "html_url": "https://github.com/web-flow",
                "followers_url": "https://api.github.com/users/web-flow/followers",
                "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
                "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
                "organizations_url": "https://api.github.com/users/web-flow/orgs",
                "repos_url": "https://api.github.com/users/web-flow/repos",
                "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
                "received_events_url": "https://api.github.com/users/web-flow/received_events",
                "type": "User",
                "site_admin": false
            },
            "parents": []
        }
    ];

            const branches =[
                {
                    "name": "main",
                    "commit": {
                        "sha": "801da1797a0bc2a877ccc80b09e9217218b1d37f",
                        "url": "https://api.github.com/repos/ruchapatani/Detection-and-Classification-of-Different-Types-of-Tumor-using-Image-Analysis-and-CNN/commits/801da1797a0bc2a877ccc80b09e9217218b1d37f"
                    },
                    "protected": false
                }
            ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const languageListTemp = await githubService.getRepoLanguagelist('facebook', 'react');
                // setLanguageList(languageListTemp);
            } catch (error) {
                // Handle error
            }
        };

        // fetchData();
    }, []);

    return (

        <>
            {/* <div className='dashboard-header-conatiner container-fluid'>
                <div className='dashboard-header'>
                    <h3 className="dashboard-header-text">Lit Lines Lets do it </h3>
                </div>
            </div> */}

            <div className="dashboard-container">
                <div className="row mt-10">
                    <div className="col-lg-3">
                        <div className="card">
                            <div className="card-header">
                                User Details
                            </div>
                            <div className="card-body">
                                <UserInfo username="anant-dev" repo="ngx-color-picker" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="card">
                            <div className="card-header">
                                User Commits
                            </div>
                            <div className="card-body">
                            <div className="commit-dashboard">
      <h2>Commit Analytics</h2>
      <div className="commit-summary">
        <p><strong>Recent Commits:</strong> {commits.length}</p>
      </div>
      <div className="commit-details">
        {commits.map((commit, index) => (
          <div key={index} className="commit-item">
            <p><strong>Commit SHA:</strong> {commit.sha}</p>
            <p><strong>Author:</strong> {commit.commit.author.name} ({commit.commit.author.email})</p>
            <p><strong>Message:</strong> {commit.commit.message}</p>
            <p><strong>Date:</strong> {new Date(commit.commit.author.date).toLocaleString()}</p>
            <p><strong>Verified:</strong> {commit.commit.verification.verified ? "Yes" : "No"}</p>
            <p><strong>Commit URL:</strong> <a href={commit.html_url} target="_blank" rel="noopener noreferrer">{commit.html_url}</a></p>
          </div>
        ))}
      </div>
    </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-header">
                                User Branches
                            </div>
                            <div className="card-body">
                            <div className="branches-dashboard">
      <h2>Branches Dashboard</h2>
      <div className="branch-summary">
        <p>Total Branches: {branches.length}</p>
      </div>
      <div className="branch-details">
        {branches.map((branch, index) => (
          <div className="branch-item" key={index}>
            <p><strong>Branch Name:</strong> {branch.name}</p>
            <p><strong>Commit SHA:</strong> {branch.commit.sha}</p>
            <p><strong>Commit URL:</strong> <a href={branch.commit.url} target="_blank" rel="noopener noreferrer">{branch.commit.url}</a></p>
            <p><strong>Protected:</strong> {branch.protected ? "Yes" : "No"}</p>
          </div>
        ))}
      </div>
    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-lg-8">
                        <div className='row'>
                            <div className="col-lg-4">
                                {/* <Card className="overview-card">
                            <CardTitle className="title-text">
                                <span style={{ fontSize: '20px' }}>Total Commits</span>
                            </CardTitle>
                            <CardBody className="card-body">
                                <h4> 30 </h4>
                            </CardBody>
                        </Card> */}
                                <div className="card">
                                    <div className="card-header">
                                        Total Commits
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">30</h5>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card">
                                    <div className="card-header">
                                        Total Pulln requests
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">12</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="card">
                                    <div className="card-header">
                                        Total active branches
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">4</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-header">
                                Activity
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Last commited to RuchaPatani on 3rd August 2024</h5>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Trends start here */}
                <div className="row mt-10">
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-header">
                                Commit History
                            </div>
                            <div className="card-body">
                                <Chart>
                                    <ChartCategoryAxis>
                                        <ChartCategoryAxisItem
                                            categories={months}
                                            title={{ text: "Months" }}
                                        />
                                    </ChartCategoryAxis>
                                    <ChartSeries>
                                        <ChartSeriesItem
                                            type="area"
                                            data={commitSeries}
                                            markers={{ visible: false }}
                                            line={{ style: 'smooth' }}
                                        />
                                    </ChartSeries>
                                </Chart>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-header">
                                Pull request History
                            </div>
                            <div className="card-body">
                                <Chart>
                                    <ChartCategoryAxis>
                                        <ChartCategoryAxisItem
                                            categories={months}
                                            title={{ text: "Months" }}
                                        />
                                    </ChartCategoryAxis>
                                    <ChartSeries>
                                        <ChartSeriesItem
                                            type="area"
                                            data={prSeries}
                                            markers={{ visible: false }}
                                            line={{ style: 'smooth' }}
                                            color="#ff4081"
                                        />
                                    </ChartSeries>
                                </Chart>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-header">
                                Total active branches
                            </div>
                            <div className="card-body">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-10">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                My Open Pr's
                            </div>
                            <div className="card-body">

                            </div>
                        </div>
                    </div>


                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                Pr's for review
                            </div>
                            <div className="card-body">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}
