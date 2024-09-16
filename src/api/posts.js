import axiosInstance from './axiosInstance';

export function getPost(id) {
  return axiosInstance.get(`/posts/${id}`).then((res) => res.data);
}
