export const dummydata: { date: string, frequency: number , _date_date:string}[] = [
        {
            "date": "2024-08-04T18:30:00.000Z",
            "frequency": 30,
            "_date_date": "2024-08-04T18:30:00.000Z"
        }
    ]

    
interface Creator {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
  }
  
  interface StatusDataItem {
    url: string;
    id: number;
    node_id: string;
    state: string;
    creator: Creator;
    description: string;
    environment: string;
    target_url: string;
    created_at: string;
    updated_at: string;
    deployment_url: string;
    repository_url: string;
    environment_url: string;
    log_url: string;
    performed_via_github_app: null | any; // Adjust type as needed for your use case
  }
  
  export const dummystatusdata: StatusDataItem[] = [
    {
      url: "https://api.github.com/repos/facebook/react/deployments/1704615419/statuses/4267648446",
      id: 4267648446,
      node_id: "DES_kwDOAJy2Ks7-XyW-",
      state: "success",
      creator: {
        login: "vercel[bot]",
        id: 35613825,
        node_id: "MDM6Qm90MzU2MTM4MjU=",
        avatar_url: "https://avatars.githubusercontent.com/in/8329?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/vercel%5Bbot%5D",
        html_url: "https://github.com/apps/vercel",
        followers_url: "https://api.github.com/users/vercel%5Bbot%5D/followers",
        following_url: "https://api.github.com/users/vercel%5Bbot%5D/following{/other_user}",
        gists_url: "https://api.github.com/users/vercel%5Bbot%5D/gists{/gist_id}",
        starred_url: "https://api.github.com/users/vercel%5Bbot%5D/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/vercel%5Bbot%5D/subscriptions",
        organizations_url: "https://api.github.com/users/vercel%5Bbot%5D/orgs",
        repos_url: "https://api.github.com/users/vercel%5Bbot%5D/repos",
        events_url: "https://api.github.com/users/vercel%5Bbot%5D/events{/privacy}",
        received_events_url: "https://api.github.com/users/vercel%5Bbot%5D/received_events",
        type: "Bot",
        site_admin: false
      },
      description: "Deployment has completed",
      environment: "Preview",
      target_url: "https://react-compiler-playground-8e2dxtdig-fbopensource.vercel.app",
      created_at: "2024-08-07T07:39:44Z",
      updated_at: "2024-08-07T07:39:44Z",
      deployment_url: "https://api.github.com/repos/facebook/react/deployments/1704615419",
      repository_url: "https://api.github.com/repos/facebook/react",
      environment_url: "https://react-compiler-playground-8e2dxtdig-fbopensource.vercel.app",
      log_url: "https://react-compiler-playground-8e2dxtdig-fbopensource.vercel.app",
      performed_via_github_app: null
    },
    {
      url: "https://api.github.com/repos/facebook/react/deployments/1704615419/statuses/4267338093",
      id: 4267338093,
      node_id: "DES_kwDOAJy2Ks7-Wmlt",
      state: "success",
      creator: {
        login: "vercel[bot]",
        id: 35613825,
        node_id: "MDM6Qm90MzU2MTM4MjU=",
        avatar_url: "https://avatars.githubusercontent.com/in/8329?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/vercel%5Bbot%5D",
        html_url: "https://github.com/apps/vercel",
        followers_url: "https://api.github.com/users/vercel%5Bbot%5D/followers",
        following_url: "https://api.github.com/users/vercel%5Bbot%5D/following{/other_user}",
        gists_url: "https://api.github.com/users/vercel%5Bbot%5D/gists{/gist_id}",
        starred_url: "https://api.github.com/users/vercel%5Bbot%5D/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/vercel%5Bbot%5D/subscriptions",
        organizations_url: "https://api.github.com/users/vercel%5Bbot%5D/orgs",
        repos_url: "https://api.github.com/users/vercel%5Bbot%5D/repos",
        events_url: "https://api.github.com/users/vercel%5Bbot%5D/events{/privacy}",
        received_events_url: "https://api.github.com/users/vercel%5Bbot%5D/received_events",
        type: "Bot",
        site_admin: false
      },
      description: "Deployment has completed",
      environment: "Preview",
      target_url: "https://react-compiler-playground-fr67uztb2-fbopensource.vercel.app",
      created_at: "2024-08-07T06:49:19Z",
      updated_at: "2024-08-07T06:49:19Z",
      deployment_url: "https://api.github.com/repos/facebook/react/deployments/1704615419",
      repository_url: "https://api.github.com/repos/facebook/react",
      environment_url: "https://react-compiler-playground-fr67uztb2-fbopensource.vercel.app",
      log_url: "https://react-compiler-playground-fr67uztb2-fbopensource.vercel.app",
      performed_via_github_app: null
    }
  ];
  

  interface Creator {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
  }
  
  interface DeploymentPayload {
    [key: string]: any; // Adjust type as needed if you have a specific structure
  }
  
  interface Deployment {
    id: number;
    sha: string;
    ref: string;
    task: string;
    payload: DeploymentPayload;
    original_environment: string;
    environment: string;
    description: string;
    creator: Creator;
    created_at: string;
    updated_at: string;
    statuses_url: string;
    repository_url: string;
  }
  
  export const dummydeployments: Deployment[] = [
    {
      id: 123456789,
      sha: "abcdef1234567890abcdef1234567890abcdef12",
      ref: "main",
      task: "deploy",
      payload: {
        some: "data"
      },
      original_environment: "production",
      environment: "production",
      description: "Deploying to production",
      creator: {
        login: "octocat",
        id: 1,
        node_id: "MDQ6VXNlcjE=",
        avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/octocat",
        html_url: "https://github.com/octocat",
        followers_url: "https://api.github.com/users/octocat/followers",
        following_url: "https://api.github.com/users/octocat/following{/other_user}",
        gists_url: "https://api.github.com/users/octocat/gists{/gist_id}",
        starred_url: "https://api.github.com/users/octocat/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/octocat/subscriptions",
        organizations_url: "https://api.github.com/users/octocat/orgs",
        repos_url: "https://api.github.com/users/octocat/repos",
        events_url: "https://api.github.com/users/octocat/events{/privacy}",
        received_events_url: "https://api.github.com/users/octocat/received_events",
        type: "User",
        site_admin: false
      },
      created_at: "2024-08-08T00:00:00Z",
      updated_at: "2024-08-08T00:00:00Z",
      statuses_url: "https://api.github.com/repos/facebook/react/deployments/123456789/statuses",
      repository_url: "https://api.github.com/repos/facebook/react"
    }
  ];
  