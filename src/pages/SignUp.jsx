import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate, Link } from 'react-router-dom';

import { signUp } from '../api/auth';

export default function SignUp({}) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: signUp,
    onSuccess: (data) => {
      localStorage.setItem('jwt', data.data.token);
      navigate('/app');
    },
  });

  function handleSubmit(e) {
    e.preventDefault();
    mutation.mutate({
      username,
      email,
      password,
      confirmPassword,
    });
  }

  return (
    <div className="mx-auto mb-10 max-w-md">
      <div className="mx-8 mt-10 flex flex-col justify-center md:mt-16">
        <h1 className="text-center text-2xl font-bold">Sign Up</h1>
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-2">
          <label className="form-control w-full">
            <div className="label cursor-pointer">
              <span className="label-text">Username</span>
            </div>
            <input
              value={username}
              type="username"
              name="username"
              placeholder="Enter username"
              onChange={(e) => setUsername(e.target.value)}
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full">
            <div className="label cursor-pointer">
              <span className="label-text">Email</span>
            </div>
            <input
              value={email}
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full">
            <div className="label cursor-pointer">
              <span className="label-text">Password</span>
            </div>
            <input
              value={password}
              type="password"
              name="password"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full">
            <div className="label cursor-pointer">
              <span className="label-text">Password confirmation</span>
            </div>
            <input
              value={confirmPassword}
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="input input-bordered w-full"
            />
          </label>
          <label className="mt-4 flex cursor-pointer items-center gap-4">
            <input
              type="checkbox"
              defaultChecked
              className="checkbox-primary checkbox"
            />
            <span className="label-text">Remember me</span>
          </label>
          <button type="submit" className="btn btn-primary mt-4">
            Sign Up
          </button>
        </form>
        <p className="mt-8 text-center text-sm">
          Already have an account?{' '}
          <Link to="/sign-in" className="link link-primary">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
