import axiosInstance from './axiosInstance';

export function getUser(id) {
  return axiosInstance.get(`users/${id}`).then((res) => res.data);
}

export function getUserGroups(userId, page = 1, limit = 9) {
  return axiosInstance
    .get(`users/${userId}/groups`, { params: { page: page, limit: limit } })
    .then((res) => res.data);
}

export default function deleteUser(userId) {
  return axiosInstance.delete(`users/${userId}`).then((res) => res.data);
}
