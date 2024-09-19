import { useState } from 'react';

import RoomList from './RoomList';
import Chat from './Chat';

export default function Rooms() {
  const [selectedRoom, setSelectedRoom] = useState(null);

  return (
    <div className="flex">
      <div
        className={`w-full md:w-1/3 ${selectedRoom ? 'hidden md:block' : 'block'}`}
      >
        <RoomList setSelectedRoom={setSelectedRoom} />
      </div>
      <div
        className={`w-full md:w-2/3 ${selectedRoom ? 'block' : 'hidden md:block'}`}
      >
        <Chat selectedRoom={selectedRoom} />
      </div>
    </div>
  );
}
