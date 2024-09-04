import * as React from 'react';
import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import * as ls from "../../../utils/localStorageUtil";
import { PATH } from '../../../constants/appContants';

const RedirectComponent = () => {
  const navigate = useNavigate();
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const url = window.location.toString();
    const authCode = url.split('code=')[1]; // extract auth code from url
    getTokens(authCode);
  }, []);

  async function getTokens(authCode: string) {
    authService.getAccessToken(authCode).then(function (tokenTuple) {
      setAuthTokens(tokenTuple); // set tokens in localStorage storage 
      setRedirect(true);
    }).catch(function (error) {
      console.error(error);
      clearAuthData();
      navigate('/login'); // redirect to login page
    });
  }

  if (redirect) {
    return <Navigate to={ls.getItem(PATH) || "/"} replace={true} />;
  }

  return (
    <p>redirecting...</p>
  );
};

export default RedirectComponent;
