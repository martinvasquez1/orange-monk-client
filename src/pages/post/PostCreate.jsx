import { useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { createPost } from '../../api/posts';
import { getUser } from '../../api/users';

import PostForm from './PostForm';

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

  if (isLoading) return '';
  if (isError) return '';
  const user = data.data.user;

  return (
    <div className="rounded-2xl bg-base-100 p-4 shadow">
      <div className="mt-2 flex justify-between">
        <div className="flex items-center gap-4">
          <img
            src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1459&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="skeleton h-10 w-10 rounded-full"
          />
          <div className="text-lg">{user.username}</div>
        </div>
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
