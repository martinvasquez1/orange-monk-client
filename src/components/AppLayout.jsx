import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function AppLayout({}) {
  return (
    <div>
      <p>The app Layout</p>
      <Link to="#">?</Link>
      <Outlet />
    </div>
  );
}
