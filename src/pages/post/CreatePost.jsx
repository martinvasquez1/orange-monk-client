import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createPost } from '../../api/posts';
import { jwtDecode } from 'jwt-decode';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const { groupId } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries(['groups', groupId, 'posts']);
      navigate(`/app/group/${groupId}`);
    },
  });

  function handleSubmit(e) {
    e.preventDefault();
    const author = jwtDecode(localStorage.getItem('jwt')).id;
    mutation.mutate({ title, content, author, groupId });
  }

  return (
    <div className="rounded-2xl bg-base-100 p-4 shadow">
      <form onSubmit={handleSubmit}>
        <h3 className="text-xl font-bold">Create Post</h3>
        <label className="form-control mt-2 w-full max-w-xs">
          <div className="label">
            <span className="label-text">Title</span>
          </div>
          <input
            type="text"
            placeholder="Lorem"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label className="form-control mt-2">
          <div className="label">
            <span className="label-text">Content</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Sed ut perspiciatis unde omnis iste natus error sit..."
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </label>

        <div className="mt-6 flex justify-end gap-4">
          <Link
            to={`/app/group/${groupId}`}
            className="btn"
            disabled={mutation.isPending}
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={mutation.isPending}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
