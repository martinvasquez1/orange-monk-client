import axiosInstance from './axiosInstance';

export function getGroups() {
  return axiosInstance.get(`/groups`).then((res) => res.data);
}

export function createGroup({ name, description, privacy }) {
  return axiosInstance
    .post(`/groups`, { name, description, privacy })
    .then((res) => res.data);
}
