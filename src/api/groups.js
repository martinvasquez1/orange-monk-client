import axiosInstance from './axiosInstance';

export function getGroups() {
  return axiosInstance.get(`/groups`).then((res) => res.data);
}

export function getGroup(id) {
  return axiosInstance.get(`/groups/${id}`).then((res) => res.data);
}

export function createGroup({ name, description, isPrivate, owner }) {
  return axiosInstance
    .post(`/groups`, { name, description, private: isPrivate, owner })
    .then((res) => res.data);
}

export function getGroupPosts(id) {
  return axiosInstance.get(`/groups/${id}/posts`).then((res) => res.data);
}

export function joinGroup(id) {
  return axiosInstance.post(`/groups/${id}/join`).then((res) => res.data);
}
