import { useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import { createPost } from '../../api/posts';
import { getUser } from '../../api/users';
import PostForm from './PostForm';
import UserAvatar from '../../components/UserAvatar';
import LoadingIndicator from './../../components/LoadingIndicator';

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const { groupId } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const userId = jwtDecode(localStorage.getItem('jwt')).id;
  const { data, isLoading, isError } = useQuery({
    queryKey: ['users', userId],
    queryFn: () => getUser(userId),
  });

  const mutation = useMutation({
    mutationFn: createPost,
    onSuccess: (data) => {
      queryClient.invalidateQueries(['groups', groupId, 'posts']);
      const postId = data.data.savedPost._id;
      navigate(`/app/group/${groupId}/post/${postId}`);
    },
  });

  function handleSubmit(e) {
    e.preventDefault();
    const author = jwtDecode(localStorage.getItem('jwt')).id;
    mutation.mutate({ title, content, author, groupId });
  }

  if (isLoading) return <LoadingIndicator />;
  if (isError) return 'Error!';

  const user = data.data.user;

  return (
    <div className="rounded-box bg-base-100 p-4 shadow">
      <div className="mt-2 flex justify-between">
        <UserAvatar
          url={user.profilePicture}
          username={user.username}
          color={user.placeholderColor}
        />
      </div>
      <div className="mt-5">
        <PostForm
          onSubmit={handleSubmit}
          setTitle={setTitle}
          setContent={setContent}
          handleCancel={(e) => navigate(`/app/group/${groupId}`)}
          submitBtnText="Create"
          isPending={mutation.isPending}
        />
      </div>
    </div>
  );
}
