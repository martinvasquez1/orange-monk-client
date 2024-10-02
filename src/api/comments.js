import axiosInstance from './axiosInstance';

export function getComments(id) {
  return axiosInstance.get(`/posts/${id}/comments`).then((res) => res.data);
}

export function createComment({ postId, content, author }) {
  return axiosInstance
    .post(`/posts/${postId}/comments`, { content, author })
    .then((res) => res.data);
}

export function updateComment({ postId, id, author, content, likes }) {
  return axiosInstance
    .put(`posts/${postId}/comments/${id}`, { author, content, likes })
    .then((res) => res.data);
}

export function deleteComment({ postId, id, authorId }) {
  return axiosInstance
    .delete(`posts/${postId}/comments/${id}`, { data: { author: authorId } })
    .then((res) => res.data);
}
