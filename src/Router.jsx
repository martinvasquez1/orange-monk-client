import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import AuthRoute from './components/AuthRoute.jsx';

import Layout from './components/Layout.jsx';
import Landing from './pages/Landing.jsx';
import About from './pages/About.jsx';
import SignUp from './pages/SignUp.jsx';
import SignIn from './pages/SignIn.jsx';
import NotFound from './pages/NotFound.jsx';

import AppLayout from './components/AppLayout.jsx';
import Home from './pages/Home.jsx';
import Profile from './pages/Profile.jsx';
import Search from './pages/Search.jsx';
import CreateGroup from './pages/CreateGroup.jsx';

import Group from './pages/group/Group.jsx';
import Post from './pages/post/Post.jsx';

const queryClient = new QueryClient();

export default function Router() {
  return (
    <QueryClientProvider client={queryClient}>
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
            <Route path="profile/:profileId" element={<Profile />} />
            <Route path="search/" element={<Search />} />
            <Route path="create-group" element={<CreateGroup />} />
            <Route path="group/:groupId" element={<Group />} />
            <Route path="group/:groupId/post/:postId" element={<Post />} />
          </Route>
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path="about" element={<About />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="sign-in" element={<SignIn />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
