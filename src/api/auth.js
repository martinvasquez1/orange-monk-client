import axiosInstance from './axiosInstance';

export function signUp({ username, email, password, confirmPassword }) {
  return axiosInstance
    .post('/auth/sign-up', {
      username,
      email,
      password,
      confirmPassword,
    })
    .then((res) => res.data);
}

export function signIn({ email, password }) {
  return axiosInstance
    .post('/auth/sign-in', {
      email,
      password,
    })
    .then((res) => res.data);
}
