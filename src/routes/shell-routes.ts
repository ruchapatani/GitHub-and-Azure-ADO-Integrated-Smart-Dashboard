import RedirectComponent from "../components/login/pages/RedirectComponent";
import SplashComponent from "../components/login/pages/splash";
import { Repositories } from "../pages/Repositories/repositories";
import { ShellDashboard } from "../pages/shell-dashboard/shell-dashboard";
import { Stats } from "../pages/Stats/stats";
import { AdoStatsComponent } from "../pages/AdoStats/adoStats";
import { Route } from "./router";


//List of public open routes
export const PublicRoutes: Route[] = [
  {
    path: "/login",
    element: SplashComponent,
  },
  {
    path: "/redirect",
    element: RedirectComponent,
  },
];

//List of routes for which user is required to be Authenticated
export const PrivateRoutes: Route[] = [
  {
    path: "/",
    element: ShellDashboard,
  },
  {
    path: "/repositories",
    element: Repositories,
  },
  {
    path: "/stats",
    element: Stats,
  },
  {
    path: "/adostats",
    element: AdoStatsComponent,
  },
];
