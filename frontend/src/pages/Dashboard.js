import Dashboard from 'components/Dashboard/dashboard';
import useCloseNavigation from 'hooks/useCloseNavigation';
import useTitle from 'hooks/useTitle';
import React from 'react';

function Dashboardshow() {
  useTitle('Dashboard');
  useCloseNavigation();

  return <Dashboard />;
}

export default Dashboardshow;
