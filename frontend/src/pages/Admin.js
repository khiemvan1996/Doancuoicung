import LoginPage from 'components/Admin/index';
import useCloseNavigation from 'hooks/useCloseNavigation';
import useTitle from 'hooks/useTitle';
import React from 'react';

function Admin() {
  useTitle('Admin');
  useCloseNavigation();

  return <LoginPage />;
}

export default Admin;
