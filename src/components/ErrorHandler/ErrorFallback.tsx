import React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import MessageAlert from '../MessageAlert/MessageAlert';
import './ErrorFallback.scss';

/**
 * Used to display error catch by error boundary
 * @param {Object} error
 * @param {Function} resetErrorBoundary
 * @returns {Component} ErrorFallback
 */
const ErrorFallback = ({ error, resetErrorBoundary }: any) => (
  <div role="alert">
    <MessageAlert
      type={'danger'}
      message={`Something went wrong: ${error.message}`}
    />
    <Button
      onClick={() => {
        resetErrorBoundary();
        window.location.reload();
      }}
      themeColor={'primary'}
      type="button"
      className="try-again-btn"
    >
      Try Again
    </Button>
  </div>
);

export default ErrorFallback;
