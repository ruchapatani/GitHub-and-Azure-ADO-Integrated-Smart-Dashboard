import React, { useEffect, useRef } from 'react';
import './App.scss';
import Router from './routes/router';
import { PrivateRoutes, PublicRoutes } from './routes/shell-routes';
import { HeaderComponent } from './components/header/headerComponent';
import { Provider } from 'react-redux';
import { shellStore } from './state/shellStore';
import moment from "moment";
import { AUTH_CHECK_INTERVAL, EXPIRE_AT, REFRESH_TOKEN } from './constants/appContants';
import * as ls from "./utils/localStorageUtil";
import { BrowserRouter } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import "@progress/kendo-theme-material/dist/all.css";
import { axiosInterceptor } from './services/axiosInterceptor';
import { AuthProvider } from './contexts/AuthContext';
import DrawerRouterContainer from './components/DrawerRouteContainer/drawerroutecontainer';

function App() {
  const [expanded, setExpanded] = React.useState(true);
  const interval = useRef<any>(null); // to store the interval
  axiosInterceptor(); // instantiate the axios interceptor

  const drawerClicked = () => { setExpanded(!expanded) };

  return (
    <AuthProvider>
      <BrowserRouter>
        <Provider store={shellStore}>
          <HeaderComponent drawerClicked={drawerClicked} />
          <DrawerRouterContainer expanded={expanded} drawerClicked={drawerClicked}>
            <Router publicRoutes={PublicRoutes} privateRoutes={PrivateRoutes} />
          </DrawerRouterContainer>
        </Provider>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
