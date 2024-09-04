import axios from "axios";
const baseApiUrl = process.env.GITHUB_API_BASE_URL;

import { contributers } from "../dataStore/contributers.datastore";
import { languageInfo, repoInfo, weeklyCommitsHistory } from "../dataStore/repoInfo.datastore";
export async function getRepoLanguagelist(owner: string, repo: string) {
  const url = `${baseApiUrl}/repos/${owner}/${repo}/contributors`;
  const res = await axios.get(url);
  return res.data;
}

const BASE_URL = process.env.REACT_APP_GITHUB_API_BASE_URL || 'https://api.github.com';

const githubApi = axios.create({
  baseURL: BASE_URL,
});

export const getUserInfo = async (username: string) => {
  try {
    const response = await githubApi.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user info:', error);
    throw error;
  }
};

export const getUserCommits = async (username: string, repo: string) => {
  try {
    const response = await githubApi.get(`/repos/${username}/${repo}/commits`);
    return response.data;
  } catch (error) {
    console.error('Error fetching commits:', error);
    throw error;
  }
};

export const getUserBranches = async (username: string, repo: string) => {
  try {
    const response = await githubApi.get(`/repos/${username}/${repo}/branches`);
    return response.data;
  } catch (error) {
    console.error('Error fetching branches:', error);
    throw error;
  }
};

export const getStaleBranches = async (username: string, repo: string) => {
  try {
    const branches = await getUserBranches(username, repo);
    const staleBranches = branches.filter((branch: any) => {
      const lastCommitDate = new Date(branch.commit.commit.author.date);
      const sixMonthsAgo = new Date();
      sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
      return lastCommitDate < sixMonthsAgo;
    });
    return staleBranches;
  } catch (error) {
    console.error('Error fetching stale branches:', error);
    throw error;
  }
};

export const getLanguageList = async () => {
  try {
    const response = await githubApi.get(`/repos/facebook/react/languages`);
    return response.data;
  } catch (error) {
    console.error('Error fetching language list:', error);
    throw error;
  }
};

export const getContributersList = async () => {
  try {
    return contributers;
  } catch (error) {
    console.error("Error fetching language list:", error);
    throw error;
  }
};

export function remodelData(data) {
  return Object.entries(data).map(([category, value]) => ({ category, value }));
}

export const getLanguagesList = async () => {
  try {
    return remodelData(languageInfo);
  } catch (error) {
    console.error("Error fetching language list:", error);
    throw error;
  }
};

export const getRepoInfo = async () => {
  try {
    return repoInfo;
  } catch (error) {
    console.error("Error fetching language list:", error);
    throw error;
  }
};

export const getWeeklyCommitHistory = async () => {
    try {
      return weeklyCommitsHistory;
    } catch (error) {
      console.error("Error fetching language list:", error);
      throw error;
    }
  };
