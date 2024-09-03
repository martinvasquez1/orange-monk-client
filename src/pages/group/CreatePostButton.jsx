export default function CreatePostButton() {
  return (
    <div className="bg-white p-4 flex gap-4 rounded-xl items-center mb-4">
      <img
        src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1459&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Profile picture."
        className="h-10 w-10 rounded-full"
      />
      <button
        type="button"
        className="bg-slate-100 w-full text-left pl-4 text-slate-500 py-4 rounded-lg hover:bg-slate-200"
      >
        Create Post
      </button>
    </div>
  );
}
