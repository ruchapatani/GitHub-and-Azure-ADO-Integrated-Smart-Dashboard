import * as React from 'react';
import { useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useAuth } from '../../../contexts/AuthContext';
import ErrorFallback from '../../ErrorHandler/ErrorFallback';

const Logout = () => {
  const { logout } = useAuth();

  useEffect(() => {
    logout();
  }, []);

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // reset the state of your app so the error doesn't happen again
      }}
    >
      <div>
        <h5
          style={{
            borderRadius: '3px',
            color: 'black',
            backgroundColor: 'lightblue',
            padding: '5px',
            fontFamily: 'serif',
          }}
        >
          <i>
            <b>Logout Successful!</b>
          </i>
        </h5>
        <a
          style={{
            borderRadius: '3px',
            color: 'black',
            backgroundColor: 'lightblue',
            padding: '5px',
          }}
          href="/login"
        >
          Return to application
        </a>
      </div>
    </ErrorBoundary>
  );
};

export default Logout;
