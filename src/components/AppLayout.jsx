import { Outlet } from 'react-router-dom';

import AppNavbar from './AppNavbar';

export default function AppLayout({}) {
  return (
    <div className="min-h-screen bg-base-300">
      <div className="mx-auto max-w-7xl px-6 pb-4 md:px-12">
        <AppNavbar />
        <div className="mt-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
