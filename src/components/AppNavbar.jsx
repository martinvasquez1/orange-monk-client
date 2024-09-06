import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';

export default function AppNavbar() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem('jwt');
    navigate('/');
  }

  return (
    <div className="navbar py-4">
      <div className="flex-1">
        <Link to="/app">
          <Logo />
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/app/profile/999" className="justify-between">
                Profile
              </Link>
            </li>
            <li>
              <button type="button" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
