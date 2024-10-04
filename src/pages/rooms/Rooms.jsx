import { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';

import RoomList from './RoomList';
import Chat from './Chat';
import NoDataDisplay from './../../components/NoDataDisplay';

export default function Rooms() {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [messages, setMessages] = useState([]);
  const socketRef = useRef(null);

  useEffect(() => {
    socketRef.current = io(
      import.meta.env.VITE_SOCKET_URL || 'http://localhost:3001',
    );

    socketRef.current.on('connect', () => {
      console.log('Socket connected:', socketRef.current.id);
    });

    socketRef.current.on('message', (data) => {
      console.log('Message received:', data);
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  return (
    <div className="flex gap-4">
      <div
        className={`w-full md:w-1/3 ${selectedRoom ? 'hidden md:block' : 'block'}`}
      >
        <RoomList
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
