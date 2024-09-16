import { useState } from 'react';
import { signIn } from '../api/auth';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

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
    <div>
      <h1>Login </h1>
      <form onSubmit={handleSubmit}>
        <input
          value={email}
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          value={password}
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
