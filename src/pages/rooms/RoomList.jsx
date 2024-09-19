const rooms = [
  { _id: '1', name: 'Classic Cinema' },
  { _id: '2', name: 'Indie Film Lovers' },
  { _id: '3', name: 'Horror Haven' },
  { _id: '4', name: 'Action & Adventure' },
  { _id: '5', name: 'Romantic Comedies' },
  { _id: '6', name: 'Documentary Discussions' },
  { _id: '7', name: 'Animated Features' },
  { _id: '8', name: 'Sci-Fi & Fantasy' },
  { _id: '9', name: 'Film Noir Nights' },
  { _id: '10', name: 'Cult Classics' },
  { _id: '11', name: 'Blockbuster Bonanza' },
  { _id: '12', name: 'International Cinema' },
];

export default function RoomList({ setSelectedRoom }) {
  return (
    <div className="rounded-2xl bg-base-100 p-4 px-6 shadow">
      <div>Room list</div>
      <div className="flex flex-col items-start pt-4">
        {rooms.map((room) => {
          return (
            <button
              type="button"
              onClick={() => setSelectedRoom(room._id)}
              key={room._id}
            >
              {room.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
