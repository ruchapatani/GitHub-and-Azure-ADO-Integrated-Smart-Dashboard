import * as React from 'react';
import './MessageAlert.scss';

const MessageAlert = ({ type, message, className = '' }: any) => (
  <div className={`alert alert-${type}${className}`} role="alert">
    {message}
  </div>
);

export default MessageAlert;
