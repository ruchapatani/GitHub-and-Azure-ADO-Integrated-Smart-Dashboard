import React, { useState, useEffect } from 'react';
import { getUserInfo, getUserCommits, getUserBranches, getStaleBranches } from '../../services/githubRepository/repositoryService';

interface UserInfoProps {
  username: string;
  repo: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ username, repo }) => {
  const [commits, setCommits] = useState<any[]>([]);
  const [branches, setBranches] = useState<any[]>([]);
  const [staleBranches, setStaleBranches] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const userInfo = {
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
    "site_admin": false,
    "name": "Rucha Patani",
    "company": null,
    "blog": "Rucha Patani",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 2,
    "public_gists": 0,
    "followers": 100,
    "following": 10,
    "created_at": "2020-03-27T08:08:22Z",
    "updated_at": "2024-08-31T18:32:39Z"
};

  if (error) {
    return <div>{error}</div>;
  }

  if (!userInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-info">
    <div className="user-details">
      <p><strong>Username:</strong> {userInfo.name}</p>
      <p><strong>Login:</strong> {userInfo.login}</p>
      <p><strong>Profile URL:</strong> <a href={userInfo.html_url}>{userInfo.html_url}</a></p>
      <p><strong>Company:</strong> {userInfo.company}</p>
      <p><strong>Blog:</strong> <a href={`https://${userInfo.blog}`}>{userInfo.blog}</a></p>
      <p><strong>Location:</strong> {userInfo.location}</p>
      <p><strong>Hireable:</strong> {userInfo.hireable ? "Yes" : "No"}</p>
      <p><strong>Public Repos:</strong> {userInfo.public_repos}</p>
      <p><strong>Followers:</strong> {userInfo.followers}</p>
      <p><strong>Following:</strong> {userInfo.following}</p>
      <p><strong>Created At:</strong> {new Date(userInfo.created_at).toLocaleDateString()}</p>
      <p><strong>Updated At:</strong> {new Date(userInfo.updated_at).toLocaleDateString()}</p>
    </div>
    <div className="user-avatar">
      <img src={userInfo.avatar_url} alt="avatar" className="avatar-image" />
    </div>
  </div>
  );
};

export default UserInfo;
