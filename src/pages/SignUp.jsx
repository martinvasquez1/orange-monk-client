import { useState } from 'react';
import { signUp } from '../api/auth';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

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
    <div>
      <h1>Sign up for free</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label>
          <span>Username</span>
          <input
            value={username}
            type="username"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            className="input input-bordered"
          />
        </label>
        <label>
          <span>Email</span>
          <input
            value={email}
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered"
          />
        </label>
        <label>
          <span>Password</span>
          <input
            value={password}
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            className="input input-bordered"
          />
        </label>
        <label>
          <span>Confirm password</span>
          <input
            value={confirmPassword}
            type="confirmPassword"
            name="confirmPassword"
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="input input-bordered"
          />
        </label>
        <button type="submit" disabled={mutation.isPending} className="btn">
          {mutation.isPending ? 'Signing Up...' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
}
