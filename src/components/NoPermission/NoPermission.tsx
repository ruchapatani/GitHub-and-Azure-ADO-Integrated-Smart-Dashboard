import React from 'react';

/**
 * If user have no permission it'll redirect to this page
 * @returns {JSX.Element} no permission tag
 */
const NoPermission = (): JSX.Element => <h1>You are not authorized to view this page</h1>;

export default NoPermission;
