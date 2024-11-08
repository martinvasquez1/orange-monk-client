import { useQuery } from '@tanstack/react-query';
import { getUser } from './../api/users';
import { jwtDecode } from 'jwt-decode';

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';
import UserAvatar from './UserAvatar';

export default function AppNavbar() {
  const navigate = useNavigate();

  const userId = jwtDecode(localStorage.getItem('jwt')).id;
  const { data, isLoading, isError } = useQuery({
    queryKey: ['users', userId],
    queryFn: () => getUser(userId),
  });

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
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button">
            {isLoading ? (
              <div
                alt="Profile picture."
                className="skeleton h-10 w-10 rounded-full bg-base-300"
              ></div>
            ) : (
              <UserAvatar
                url={data.data.user.profilePicture}
                username={data.data.user.username}
                color={data.data.user.placeholderColor}
                hideUsername={true}
              />
            )}
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
              <Link to="/app/settings" className="justify-between py-1">
                Settings
              </Link>
            </li>
            <li>
              <button type="button" onClick={handleLogout}>
                Log out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
