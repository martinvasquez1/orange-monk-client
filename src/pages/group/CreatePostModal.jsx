import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createPost } from '../../api/posts';
import { jwtDecode } from 'jwt-decode';
import { useParams } from 'react-router-dom';

export default function CreatePostModal() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const { groupId } = useParams();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries(['groups', groupId, 'posts']);
    },
  });

  function handleSubmit(e) {
    e.preventDefault();
    const author = jwtDecode(localStorage.getItem('jwt')).id;
    mutation.mutate({ title, content, author, groupId });
    document.getElementById(id).close();
  }

  const id = 'create_post_modal';

  return (
    <dialog id={id} className="modal modal-bottom sm:modal-middle">
      <div className="modal-box sm:w-2/3 sm:max-w-[600px]">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">
            ✕
          </button>
        </form>

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

          <div className="mt-6 flex justify-end">
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
