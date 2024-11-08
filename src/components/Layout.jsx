import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({}) {
  const location = useLocation();
  const isNotAuthRoute = !(
    location.pathname === '/sign-in' || location.pathname === '/sign-up'
  );

  return (
    <>
      <Navbar />
      <Outlet />
      {isNotAuthRoute && <Footer />}
    </>
  );
}
