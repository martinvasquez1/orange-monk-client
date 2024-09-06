import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

import AppNavbar from './AppNavbar';

export default function AppLayout({}) {
  return (
    <div className="px-8 bg-base-300 min-h-screen pb-4">
      <AppNavbar />
      <Outlet />
    </div>
  );
}
