import { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useQuery } from '@tanstack/react-query';
import { getPost, updatePost } from '../../api/posts';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

import CommentsSection from './CommentsSection';
import PostSkeleton from './../../components/PostSkeleton';
import PostOptionsButton from './PostOptionsButton';
import PostForm from './PostForm';
import Icon from '../../components/Icon';
import { GoComment, GoHeart } from 'react-icons/go';
import { useQueryClient, useMutation } from '@tanstack/react-query';

export default function Post() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const query = new URLSearchParams(useLocation().search);
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { postId, groupId } = useParams();
  const { isLoading, isError, data } = useQuery({
    queryKey: ['posts', postId],
    queryFn: () => getPost(postId),
  });

  const mutation = useMutation({
    mutationFn: updatePost,
    onSuccess: () => {
      queryClient.invalidateQueries(['groups', groupId, 'posts']);
      queryClient.invalidateQueries(['posts', postId]);
      navigate(`/app/group/${groupId}/post/${postId}`);
    },
  });

  function handleSubmit(e) {
    e.preventDefault();
    const author = jwtDecode(localStorage.getItem('jwt')).id;
    mutation.mutate({ title, content, author, groupId, postId });
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (data) {
      setTitle(data.data.post.title);
      setContent(data.data.post.content);
    }
  }, [data]);

  if (isLoading) return <PostSkeleton />;
  if (isError) return <p>Error!</p>;

  const postData = data.data.post;
  const userId = jwtDecode(localStorage.getItem('jwt')).id;
  const isUserPost = userId === postData.author._id;
  const isEditMode = query.get('edit');

  return (
    <>
      <div className="rounded-2xl bg-base-100 p-4 shadow">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1459&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="skeleton h-10 w-10 rounded-full"
            />
            <div className="text-lg">{postData.author.username}</div>
          </div>
          {isUserPost && !isEditMode && <PostOptionsButton postId={postId} />}
        </div>
        <div className="mt-3">
          {isEditMode ? (
            <PostForm
              onSubmit={handleSubmit}
              setTitle={setTitle}
              setContent={setContent}
              title={title}
              content={content}
              submitBtnText="Update"
              isPending={mutation.isPending}
              handleCancel={(e) =>
                navigate(`/app/group/${groupId}/post/${postId}`)
              }
            />
          ) : (
            <>
              <h2 className="text-2xl font-bold">{postData.title}</h2>
              <h2 className="mt-2 text-lg">{postData.content}</h2>
            </>
          )}
        </div>
        <div className="mt-4 flex gap-4">
          <button
            type="button"
            onClick={(e) => e.preventDefault()}
            className={`flex gap-2 rounded-xl bg-base-200 px-4 py-3 hover:bg-base-300`}
          >
            <Icon icon={<GoHeart />} />
            <span>13</span>
          </button>
          <div className="flex gap-2 rounded-xl bg-base-200 px-4 py-3 hover:bg-base-300">
            <Icon icon={<GoComment />} />
            <span>{postData.comments.length}</span>
          </div>
        </div>
      </div>
      <CommentsSection />
    </>
  );
}
