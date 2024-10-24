import UserAvatar from './../../components/UserAvatar';

export default function ChatBubble({ data, prev, loggedInUser }) {
  const date = new Date(data.time);
  const time = date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  const prevUsername = prev?.username;
  const currentUsername = data.username;

  if (prevUsername === currentUsername) {
    return (
      <div
        className={`chat ${data.username === loggedInUser ? 'chat-end mr-10' : 'chat-start ml-10'}`}
      >
        <div
          className={`chat-bubble ${data.username === loggedInUser ? 'chat-bubble-primary' : ''}`}
        >
          {data.message}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`chat ${data.username === loggedInUser ? 'chat-end' : 'chat-start'}`}
    >
      <div className="avatar chat-image">
        <UserAvatar
          url={data.profilePicture}
          username={data.username}
          hideUsername={true}
        />
      </div>
      <div className="chat-header">
        {data.username}
        <time className="ml-1 text-xs opacity-50">{time}</time>
      </div>
      <div
        className={`chat-bubble ${data.username === loggedInUser ? 'chat-bubble-primary' : ''}`}
      >
        {data.message}
      </div>
    </div>
  );
}
