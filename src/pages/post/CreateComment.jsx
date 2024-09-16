import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { createComment } from '../../api/comments';
import { jwtDecode } from 'jwt-decode';

export default function CreateComment() {
  const [content, setContent] = useState('');

  const queryClient = useQueryClient();
  const { postId } = useParams();

  const mutation = useMutation({
    mutationFn: createComment,
    onSuccess: () => {
      queryClient.invalidateQueries(['posts', postId, 'comments']);
      setContent('');
    },
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (content === '') return;

    const author = jwtDecode(localStorage.getItem('jwt')).id;
    mutation.mutate({ postId, content, author });
  }

  return (
    <div className="flex gap-4">
      <img
        src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1459&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Profile picture."
        className="h-10 w-10 rounded-full"
      />
      <form className="w-full" onSubmit={handleSubmit}>
        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="Write a comment"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <div className="flex justify-end gap-4">
          <button
            type="button"
            className="btn mt-4"
            disabled={mutation.isPending}
            onClick={() => setContent('')}
          >
            Clear
          </button>
          <button
            type="submit"
            disabled={mutation.isPending}
            className="btn btn-primary mt-4"
          >
            Comment
          </button>
        </div>
      </form>
    </div>
  );
}
