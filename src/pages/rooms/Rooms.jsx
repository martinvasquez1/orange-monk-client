import { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import { getRooms } from '../../api/rooms';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import RoomList from './RoomList';
import Chat from './Chat';
import NoDataDisplay from './../../components/NoDataDisplay';
import PostRoomModal from './PostRoomModal';

export default function Rooms() {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [messages, setMessages] = useState([]);
  const socketRef = useRef(null);

  const { groupId } = useParams();
  const { isLoading, isError, data } = useQuery({
    queryKey: ['groups', groupId, 'rooms'],
    queryFn: () => getRooms(groupId),
  });

  useEffect(() => {
    socketRef.current = io(
      import.meta.env.VITE_SOCKET_URL || 'http://localhost:3001',
    );

    socketRef.current.on('message', (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error!</div>;

  const rooms = data.data;
  const noRooms = rooms.length === 0;
  const postModalId = 'post-room-modal';

  if (noRooms) {
    const isUserAdmin = true;

    return (
      <>
        <NoDataDisplay
          top="No rooms"
          bottom="Tell your group administrator to create one."
        >
          {isUserAdmin && (
            <button
              type="button"
              onClick={() => document.getElementById(postModalId).showModal()}
              className="btn mt-2"
            >
              Create room
            </button>
          )}
        </NoDataDisplay>
        <PostRoomModal id={postModalId} />
      </>
    );
  }

  const roomName = rooms.find((room) => room._id === selectedRoom)?.name;

  return (
    <div className="flex gap-4">
      <div
        className={`w-full md:w-1/3 ${selectedRoom ? 'hidden md:block' : 'block'}`}
      >
        <RoomList
          rooms={rooms}
          postModalId={postModalId}
          selectedRoom={selectedRoom}
          setSelectedRoom={setSelectedRoom}
          socketRef={socketRef}
          setMessages={setMessages}
        />
      </div>
      <div
        className={`w-full md:w-2/3 ${selectedRoom ? 'block' : 'hidden md:block'}`}
      >
        {selectedRoom ? (
          <Chat
            roomName={roomName}
            selectedRoom={selectedRoom}
            setSelectedRoom={setSelectedRoom}
            socketRef={socketRef}
            messages={messages}
            setMessages={setMessages}
          />
        ) : (
          <NoDataDisplay
            top="Pick a room!"
            bottom="...or I’ll have to send in the virtual clowns!"
          />
        )}
      </div>
    </div>
  );
}
