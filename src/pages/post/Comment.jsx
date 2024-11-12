import { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useParams } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { updateComment } from '../../api/comments';

import CommentOptionsButton from './CommentOptionsButton';
import UserAvatar from '../../components/UserAvatar';

export default function Comment({ data }) {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState('');

  const userId = jwtDecode(localStorage.getItem('jwt')).id;
  const isUserComment = userId === data.author._id;

  const queryClient = useQueryClient();
  const { postId } = useParams();

  const mutation = useMutation({
    mutationFn: updateComment,
    onSuccess: () => {
      queryClient.invalidateQueries(['posts', postId, 'comments']);
      setIsEditing(false);
    },
  });

  function handleSubmit(e) {
    e.preventDefault();
    const author = jwtDecode(localStorage.getItem('jwt')).id;
    mutation.mutate({ postId, id: data._id, author, content });
  }

  useEffect(() => {
    if (data) {
      setContent(data.content);
    }
  }, [data]);

  return (
    <div className="flex justify-between">
      {!isEditing ? (
        <div>
          <UserAvatar
            url={data.author.profilePicture}
            username={data.author.username}
            color={data.author.placeholderColor}
          />
          <p className="ml-14">{data.content}</p>
        </div>
      ) : (
        <div className="w-full">
          <UserAvatar
            url={data.author.profilePicture}
            username={data.author.username}
            color={data.author.placeholderColor}
          />
          <form className="w-full pl-14" onSubmit={handleSubmit}>
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
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={mutation.isPending}
                className="btn btn-primary mt-4"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      )}
      {isUserComment && !isEditing && (
        <CommentOptionsButton
          setIsEditing={setIsEditing}
          commentId={data._id}
          authorId={data.author._id}
        />
      )}
    </div>
  );
}
