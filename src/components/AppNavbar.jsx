import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';
import ThemeController from './ThemeController';

export default function AppNavbar() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem('jwt');
    navigate('/');
  }

  return (
    <div className="navbar px-0 py-4">
      <div className="flex-1">
        <Link to="/app">
          <Logo />
        </Link>
        <ThemeController />
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="avatar btn btn-circle btn-ghost"
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
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            <li>
              <Link to="/app/profile/999" className="justify-between py-1">
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
