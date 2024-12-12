import axiosInstance from './axiosInstance';

export function getGroups(
  page = 1,
  limit = 20,
  name,
  userJoined = false,
  userId,
) {
  return axiosInstance
    .get(`/groups/`, {
      params: {
        page: page,
        limit: limit,
        name: name,
        userJoined: userJoined,
        userId: userId,
      },
    })
    .then((res) => res.data);
}

export function getGroup(id) {
  return axiosInstance.get(`/groups/${id}`).then((res) => res.data);
}

export function createGroup({ name, description, isPrivate, owner }) {
  return axiosInstance
    .post(`/groups`, { name, description, private: isPrivate, owner })
    .then((res) => res.data);
}

export function updateGroup({
  groupId,
  name,
  description,
  isPrivate,
  owner,
  sidebar,
  previewImage,
  bannerImage,
  theme,
}) {
  return axiosInstance
    .put(`/groups/${groupId}`, {
      name,
      description,
      private: isPrivate,
      owner,
      sidebar,
      previewImage,
      bannerImage,
      theme,
    })
    .then((res) => res.data);
}

export function deleteGroup(id) {
  return axiosInstance.delete(`/groups/${id}`).then((res) => res.data);
}

export function getGroupPosts(id, page = 1, limit = 15) {
  return axiosInstance
    .get(`/groups/${id}/posts`, { params: { page: page, limit: limit } })
    .then((res) => res.data);
}

export function getGroupUsers(id, page = 1, limit = 15) {
  return axiosInstance
    .get(`/groups/${id}/users`, { params: { page: page, limit: limit } })
    .then((res) => res.data);
}

export function joinGroup({ id, userId }) {
  return axiosInstance
    .post(`/groups/${id}/join-requests/`, { userId })
    .then((res) => res.data);
}

export function leaveGroup({ id, userId }) {
  return axiosInstance
    .delete(`groups/${id}/leave`, { data: { userId: userId } })
    .then((res) => res.data);
}

export function getIsAdmin(id, userId) {
  return axiosInstance
    .get(`groups/${id}/isAdmin`, { params: { userId } })
    .then((res) => res.data);
}
