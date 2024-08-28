import { Navigate } from 'react-router-dom';

export default function AuthRoute({ children }) {
  const isAuthenticated = Boolean(localStorage.getItem('jwt'));

  if (!isAuthenticated) {
    return <Navigate to="/sign-in" />;
  }

  return children;
}
