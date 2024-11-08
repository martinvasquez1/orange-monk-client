import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { signIn } from '../api/auth';
import { Link } from 'react-router-dom';

export default function SignIn({}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: signIn,
    onSuccess: (data) => {
      localStorage.setItem('jwt', data.data.token);
      navigate('/app');
    },
  });

  function handleSubmit(e) {
    e.preventDefault();
    mutation.mutate({
      email,
      password,
    });
  }

  return (
    <div className="mx-auto mb-10 max-w-md">
      <div className="mx-8 mt-10 flex flex-col justify-center md:mt-16">
        <h1 className="text-center text-2xl font-bold">Sign In</h1>
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-2">
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
          <label className="mt-4 flex cursor-pointer items-center gap-4">
            <input
              type="checkbox"
              defaultChecked
              className="checkbox-primary checkbox"
            />
            <span className="label-text">Remember me</span>
          </label>
          <button type="submit" className="btn btn-primary mt-4">
            Sign In
          </button>
        </form>
        <p className="mt-8 text-center text-sm">
          Don't have an account?{' '}
          <Link to="/sign-up" className="link link-primary">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
