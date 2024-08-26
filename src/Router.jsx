import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './components/Layout.jsx';
import Landing from './pages/Landing.jsx';
import About from './pages/About.jsx';
import SignUp from './pages/SignUp.jsx';
import SignIn from './pages/SignIn.jsx';

import AppLayout from './components/AppLayout.jsx';
import Home from './pages/Home.jsx';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/app',
      element: <AppLayout />,
      children: [{ index: true, element: <Home /> }],
    },
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Landing /> },
        { path: 'about', element: <About /> },
        { path: '/sign-up', element: <SignUp /> },
        { path: '/sign-in', element: <SignIn /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
