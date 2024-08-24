import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Layout({}) {
  return (
    <div>
      <p>Layout</p>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/sign-up">Up</Link>
      <Link to="/sign-in">In</Link>
      <Outlet />
    </div>
  );
}
