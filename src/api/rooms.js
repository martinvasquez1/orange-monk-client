import axiosInstance from './axiosInstance';

export function getRooms(groupId) {
  return axiosInstance.get(`/groups/${groupId}/rooms`).then((res) => res.data);
}

export function createRoom({ groupId, name }) {
  return axiosInstance
    .post(`/groups/${groupId}/rooms`, { name })
    .then((res) => res.data);
}

export function deleteRoom({ groupId, roomId }) {
  return axiosInstance
    .delete(`/groups/${groupId}/rooms/${roomId}`)
    .then((res) => res.data);
}
