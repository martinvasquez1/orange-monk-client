import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignIn({}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  function submitUser(event) {
    event.preventDefault();
    fetch(import.meta.env.VITE_API_URL + 'auth/sign-in', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log;
        if (result.status === 'success') {
          localStorage.setItem('jwt-token', result.data.token);
          setEmail('');
          setPassword('');
          console.log('redirect ');
          navigate('/app');
        } else {
          console.log('Fail sign in');
        }
      });
  }

  return (
    <div>
      <h1>Login </h1>
      <form onSubmit={submitUser}>
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
