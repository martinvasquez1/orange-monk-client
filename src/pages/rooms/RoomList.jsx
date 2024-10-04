const rooms = [
  { _id: '1', name: 'Classic Cinema' },
  { _id: '2', name: 'Indie Film Lovers' },
  { _id: '3', name: 'Horror Haven' },
  { _id: '4', name: 'Action & Adventure' },
  { _id: '5', name: 'Animated Features' },
];

export default function RoomList({
  selectedRoom,
  setSelectedRoom,
  socketRef,
  setMessages,
}) {
  const groupId = 123;
  const joinRoom = (roomId) => {
    console.log('join ', roomId);
    if (roomId) {
      socketRef.current.emit('joinRoom', { roomId, groupId });
    }
  };

  return (
    <div className="h-[90vh] overflow-y-scroll rounded-2xl bg-base-100 p-4 px-6 shadow">
      <div className="text-lg font-bold">Room list</div>
      <div className="flex flex-col items-start justify-center gap-4 pt-4">
        {rooms.map((room) => {
          return (
            <button
              type="button"
              className={`btn w-full ${selectedRoom === room.name && 'btn-primary'}`}
              onClick={() => {
                setSelectedRoom(room.name);
                joinRoom(room.name);
                if (selectedRoom !== room.name) {
                  setMessages([]);
                }
              }}
              key={room._id}
            >
              # {room.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
