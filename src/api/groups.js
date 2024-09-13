import axiosInstance from './axiosInstance';

export function getGroups() {
  return axiosInstance.get(`/groups`).then((res) => res.data);
}
