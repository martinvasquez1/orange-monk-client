import { Link } from 'react-router-dom';

export default function CreatePostButton() {
  return (
    <>
      <div className="mb-4 flex items-center gap-4 rounded-xl bg-base-100 p-4 shadow">
        <img
          src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1459&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="skeleton h-10 w-10 rounded-full"
        />
        <Link
          to="create-post"
          className="w-full rounded-lg bg-base-200 py-4 pl-4 text-left"
        >
          Create Post
        </Link>
      </div>
    </>
  );
}
