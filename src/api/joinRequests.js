import axiosInstance from './axiosInstance';

export function getJoinRequests(id, page, limit) {
  return axiosInstance
    .get(`/groups/${id}/join-requests`, {
      params: { page: page, limit: limit },
    })
    .then((res) => res.data);
}

export function acceptJoinRequest({ groupId, requestId }) {
  return axiosInstance
    .post(`/groups/${groupId}/join-requests/${requestId}/accept`, {})
    .then((res) => res.data);
}

export function denyJoinRequest({ groupId, requestId }) {
  return axiosInstance
    .post(`/groups/${groupId}/join-requests/${requestId}/deny`, {})
    .then((res) => res.data);
}
