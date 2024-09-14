import axiosInstance from './axiosInstance';

export function createUser({ username, email, password, confirmPassword }) {
  return axiosInstance
    .post('/auth/sign-up', {
      username,
      email,
      password,
      confirmPassword,
    })
    .then((res) => res.data);
}
