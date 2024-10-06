import { useState } from 'react';

import PostRoomModal from './PostRoomModal';
import DeleteRoomModal from './DeleteRoomModal';
import Dropdown from '../../components/Dropdown';
import Icon from './../../components/Icon';

import { FaPlus } from 'react-icons/fa6';
import { SlOptionsVertical } from 'react-icons/sl';
import { HiTrash } from 'react-icons/hi';

export default function RoomList({
  rooms,
  postModalId,
  selectedRoom,
  setSelectedRoom,
  socketRef,
  setMessages,
}) {
  const [deleteRoomId, setDeleteRoomId] = useState(null);

  const groupId = 123;
  const isAdmin = true;
  const deleteModalId = 'delete-room-modal';

  const joinRoom = (roomId) => {
    console.log('join ', roomId);
    if (roomId) {
      socketRef.current.emit('joinRoom', { roomId, groupId });
    }
  };

  return (
    <div className="h-[90vh] overflow-y-scroll rounded-2xl bg-base-100 p-4 px-6 shadow">
      <div className="flex items-center justify-between">
        <div className="text-lg font-bold">Room list</div>
        <button
          type="button"
          onClick={() => document.getElementById(postModalId).showModal()}
          className="btn btn-ghost aspect-square"
        >
          <Icon icon={<FaPlus />} />
        </button>
      </div>
      <div className="flex w-full flex-col items-start justify-center gap-2 pt-4">
        {rooms.map((room) => {
          return (
            <div
              key={room._id}
              className="flex w-full items-center justify-between gap-2"
            >
              <button
                type="button"
                className={`btn flex-1 ${selectedRoom === room._id && 'btn-primary'} line-clamp-1`}
                onClick={() => {
                  setSelectedRoom(room._id);
                  joinRoom(room.name);
                  if (selectedRoom !== room._id) {
                    setMessages([]);
                  }
                }}
              >
                # {room.name}
              </button>
              {isAdmin && (
                <Dropdown
                  trigger={
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn btn-ghost m-1 aspect-square"
                    >
                      <Icon icon={<SlOptionsVertical />} />
                    </div>
                  }
                >
                  <button
                    className="button"
                    onClick={(e) => {
                      setDeleteRoomId(room._id);
                      document.getElementById(deleteModalId).showModal();
                    }}
                  >
                    <Icon icon={<HiTrash />} />
                    <span>Delete</span>
                  </button>
                </Dropdown>
              )}
            </div>
          );
        })}
      </div>
      <PostRoomModal id={postModalId} />
      <DeleteRoomModal id={deleteModalId} roomId={deleteRoomId} />
    </div>
  );
}
