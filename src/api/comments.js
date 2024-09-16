import axiosInstance from './axiosInstance';

export function getComments(id) {
  return axiosInstance.get(`/posts/${id}/comments`).then((res) => res.data);
}

export function createComment({ postId, content, author }) {
  return axiosInstance
    .post(`/posts/${postId}/comments`, { content, author })
    .then((res) => res.data);
}
