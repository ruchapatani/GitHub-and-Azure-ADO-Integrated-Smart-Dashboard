import { Deployment } from '../../services/githubService';

interface Frequency {
  date: string;  // Changed to string to accommodate formatted dates
  frequency: number;
}

export function calculateDeploymentFrequency(deployments: Deployment[]): Frequency[] {
  const now = new Date();
  const oneMonthAgo = new Date(now);
  oneMonthAgo.setMonth(now.getMonth() - 1);

  // Filter deployments within the last month
  const recentDeployments = deployments.filter(deployment => {
    const deploymentDate = new Date(deployment.created_at);
    return deploymentDate >= oneMonthAgo && deploymentDate <= now;
  });

  // Ensure deployments are sorted by date
  const deploymentDates = recentDeployments.map(deployment => new Date(deployment.created_at));
  deploymentDates.sort((a, b) => a.getTime() - b.getTime());

  // Group deployments by day
  const days: Record<string, number> = {};
  deploymentDates.forEach(date => {
    const dayKey = date.toISOString().split('T')[0];
    days[dayKey] = (days[dayKey] || 0) + 1;
  });

  // Convert days record to array of objects with formatted date
  const frequencyData: Frequency[] = Object.entries(days).map(([dayKey, frequency]) => {
    const date = new Date(dayKey);
    const formattedDate = date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
    return { date: formattedDate, frequency };
  });

  // Sort by date
  frequencyData.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return frequencyData;
}
