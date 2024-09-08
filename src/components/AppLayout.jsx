import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

import AppNavbar from './AppNavbar';

export default function AppLayout({}) {
  return (
    <div className="min-h-screen bg-base-300 px-8 pb-4">
      <AppNavbar />
      <Outlet />
    </div>
  );
}
