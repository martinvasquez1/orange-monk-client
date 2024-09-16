export default function Comment({ data }) {
  return (
    <div>
      <div className="flex items-center gap-4">
        <img
          src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1459&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Profile picture."
          className="h-10 w-10 rounded-full"
        />
        <div className="text-lg">{data.author.username}</div>
      </div>
      <p className="ml-14">{data.content}</p>
    </div>
  );
}
