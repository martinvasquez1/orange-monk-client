import { Link } from 'react-router-dom';

const links = [
  { text: 'Home', to: '/' },
  { text: 'About', to: '/about' },
  { text: 'Sign in', to: '/sign-in' },
  { text: 'Sign up', to: '/sign-up' },
];

export default function Sidebar() {
  function closeDrawer() {
    document.getElementById('my-drawer-1').click();
  }

  return (
    <div className="drawer-side z-50">
      <label
        htmlFor="my-drawer-1"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu bg-base-200 min-h-full w-80 p-4">
        {links.map((link) => (
          <li key={link.text}>
            <Link to={link.to} onClick={closeDrawer}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
