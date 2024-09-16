import axiosInstance from './axiosInstance';

export function getComments(id) {
  return axiosInstance.get(`/posts/${id}/comments`).then((res) => res.data);
}
