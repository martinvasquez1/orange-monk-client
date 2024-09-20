import axiosInstance from './axiosInstance';

export function getPost(id) {
  return axiosInstance.get(`/posts/${id}`).then((res) => res.data);
}

export function createPost({ title, content, author, groupId }) {
  return axiosInstance
    .post(`/posts`, { title, content, author, groupId })
    .then((res) => res.data);
}

export function deletePost({ id, groupId }) {
  return axiosInstance
    .delete(`/posts/${id}`, { data: { groupId } })
    .then((res) => res.data);
}
