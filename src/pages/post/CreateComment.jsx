import { useState } from 'react';
import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

import { getUser } from './../../api/users';
import { createComment } from '../../api/comments';

import UserAvatar from './../../components/UserAvatar';

export default function CreateComment() {
  const [content, setContent] = useState('');

  const queryClient = useQueryClient();
  const { postId } = useParams();

  const userId = jwtDecode(localStorage.getItem('jwt')).id;
  const { data, isLoading, isError } = useQuery({
    queryKey: ['users', userId],
    queryFn: () => getUser(userId),
  });

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
      <div>
        <UserAvatar
          url={data?.data.user.profilePicture}
          username={data?.data.user.username}
          color={data?.data.user.placeholderColor}
          hideUsername={true}
        />
      </div>
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
