import axiosInstance from './axiosInstance';

export function getUser(id) {
  return axiosInstance.get(`users/${id}`).then((res) => res.data);
}

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

export function getUserGroups(id) {
  return axiosInstance.get(`users/${id}/groups`).then((res) => res.data);
}
