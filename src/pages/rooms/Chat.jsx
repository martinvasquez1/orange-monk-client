import { useState, useEffect, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getUser } from './../../api/users';
import { jwtDecode } from 'jwt-decode';

import ChatBubble from './ChatBubble';
import Icon from './../../components/Icon';
import { BsSend } from 'react-icons/bs';
import { BsDoorOpen } from 'react-icons/bs';

export default function RoomList({
  roomName,
  selectedRoom,
  setSelectedRoom,
  socketRef,
  messages,
  setMessages,
}) {
  const [message, setMessage] = useState('');

  const userId = jwtDecode(localStorage.getItem('jwt')).id;
  const { data, isLoading, isError } = useQuery({
    queryKey: ['users', userId],
    queryFn: () => getUser(userId),
  });

  const leaveRoom = () => {
    console.log('leave');
    socketRef.current.emit('leaveRoom', { roomId: selectedRoom });
    setMessages([]);
    setSelectedRoom(null);
  };

  function sendMessage() {
    const username = data.data.user.username;
    const time = new Date();

    if (message) {
      console.log('Send ', message, ' to ', selectedRoom);
      socketRef.current.emit('message', {
        message,
        roomId: selectedRoom,
        username,
        time,
      });
      setMessage('');
    }
  }

  return (
    <div className="flex h-[90vh] flex-col rounded-2xl bg-base-100 shadow">
      <div className="flex items-center justify-between border-b-[1px] border-base-300 px-4 py-2">
        <div className="text-2xl font-bold">{roomName}</div>
        <button
          type="button"
          onClick={leaveRoom}
          className="btn btn-ghost aspect-square h-full"
        >
          <Icon icon={<BsDoorOpen />} />
        </button>
      </div>
      <div className="mb-4 flex-1 space-y-1 overflow-y-scroll p-4 px-6">
        {messages.map((msg, index) => {
          const prevMessage = index > 0 ? messages[index - 1] : null;
          return (
            <ChatBubble
              data={msg}
              prev={prevMessage}
              loggedInUser={data.data.user.username}
              key={index}
            />
          );
        })}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage();
        }}
        className="flex gap-4 p-4 px-6"
      >
        <input
          type="text"
          className="input input-bordered w-full"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="btn btn-primary aspect-square"
        >
          <Icon icon={<BsSend />} />
        </button>
      </form>
    </div>
  );
}
