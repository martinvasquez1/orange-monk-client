import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

import AppNavbar from './AppNavbar';

export default function AppLayout({}) {
  return (
    <div>
      <AppNavbar />
      <div className="flex">
        <div className="flex-1 bg-red-200">Hi</div>
        <div className="flex-[3_3_0%] bg-green-200">
          <Outlet />
        </div>
        <div className="flex-1 bg-blue-200">Hi</div>
      </div>
    </div>
  );
}
