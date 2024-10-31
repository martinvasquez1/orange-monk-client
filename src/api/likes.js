import axiosInstance from './axiosInstance';

export function getLikes(id) {
  return axiosInstance.get(`/posts/${id}/likes`).then((res) => res.data);
}

export function likePost({ id, userId }) {
  return axiosInstance
    .post(`/posts/${id}/likes`, { userId })
    .then((res) => res.data);
}

export function removeLike({ id, userId }) {
  return axiosInstance
    .delete(`/posts/${id}/likes`, { data: { userId } })
    .then((res) => res.data);
}

export function checkLikeStatus(id, userId) {
  return axiosInstance
    .get(`/posts/${id}/likes/status`, { params: { userId } })
    .then((res) => res.data);
}
