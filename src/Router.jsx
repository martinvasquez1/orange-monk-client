import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AuthRoute from './components/AuthRoute.jsx';

import Layout from './components/Layout.jsx';
import Landing from './pages/Landing.jsx';
import About from './pages/About.jsx';
import SignUp from './pages/SignUp.jsx';
import SignIn from './pages/SignIn.jsx';

import AppLayout from './components/AppLayout.jsx';
import Home from './pages/Home.jsx';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/app"
          element={
            <AuthRoute>
              <AppLayout />
            </AuthRoute>
          }
        >
          <Route index element={<Home />} />
        </Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="about" element={<About />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="sign-in" element={<SignIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
