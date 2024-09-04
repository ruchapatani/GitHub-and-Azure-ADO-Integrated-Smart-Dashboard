import * as React from 'react';
import { Outlet } from "react-router";
import { logout } from "../utils/commonUtil";
import { useCurrentPath } from '../hooks/routerHook';
import { AuthContext, AuthContextType } from '../contexts/AuthContext';
import { PATH } from '../constants/appContants';

export function RequireAuth() {
  const { login } = React.useContext(AuthContext) as AuthContextType;
  if (true) {
    return <Outlet />
  } else if (!true) {
    logout();
    login();
    const url = useCurrentPath(); // store the current path if user is not logged in to support deep linking/ bookmark url feature
    localStorage.setItem(PATH, url);
  }
};
