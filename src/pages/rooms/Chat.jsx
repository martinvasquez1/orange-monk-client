import { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';

export default function RoomList({ selectedRoom }) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const socketRef = useRef(null);

  const roomId = 'Room love';
  const groupId = 123;

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

  const joinRoom = () => {
    console.log('join ', roomId);
    if (roomId) {
      socketRef.current.emit('joinRoom', { roomId, groupId });
    }
  };

  const leaveRoom = () => {
    console.log('leave');
    socket.emit('leaveRoom', { roomId });
    setMessages([]);
  };

  function sendMessage() {
    if (message) {
      console.log('Send ', message, ' to ', roomId);
      socketRef.current.emit('message', {
        message,
        roomId,
        username: 'Paquito',
      });
      setMessage('');
    }
  }

  return (
    <div>
      <h2>Chat Room: {selectedRoom}</h2>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.username}: </strong>
            {msg.message}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message"
      />
      <button onClick={sendMessage}>Send</button>

      <button onClick={joinRoom}>Join Room</button>
      <button onClick={leaveRoom}>Leave Room</button>
    </div>
  );
}
