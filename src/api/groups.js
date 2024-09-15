import axiosInstance from './axiosInstance';

export function getGroups() {
  return axiosInstance.get(`/groups`).then((res) => res.data);
}

export function createGroup({ name, description, isPrivate }) {
  return axiosInstance
    .post(`/groups`, { name, description, private: isPrivate })
    .then((res) => res.data);
}

export function joinGroup(id) {
  return axiosInstance.post(`/groups/${id}/join`).then((res) => res.data);
}
