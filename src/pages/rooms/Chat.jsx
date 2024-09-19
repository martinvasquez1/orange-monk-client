export default function RoomList({ selectedRoom }) {
  return (
    <div className="rounded-2xl bg-base-100 p-4 px-6 shadow">
      {selectedRoom ? (
        <div>
          <div>Chat</div>
          <div>The room is: {selectedRoom}</div>
        </div>
      ) : (
        <div>No room picked</div>
      )}
    </div>
  );
}
