import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

import Sidebar from './Sidebar';

export default function Layout({}) {
  return (
    <div className="drawer">
      <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
      <Sidebar />
    </div>
  );
}
