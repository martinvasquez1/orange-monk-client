import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getPost } from '../../api/posts';
import { useEffect } from 'react';

import Icon from '../../components/Icon';
import { GoComment } from 'react-icons/go';
import CommentsSection from './CommentsSection';

export default function Post() {
  const { postId } = useParams();
  const { isLoading, isError, data } = useQuery({
    queryKey: ['posts', postId],
    queryFn: () => getPost(postId),
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error!</p>;

  const postData = data.data.post;

  return (
    <>
      <div className="rounded-2xl bg-base-100 p-4 shadow">
        <div className="flex items-center gap-4">
          <img
            src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1459&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Profile picture."
            className="h-10 w-10 rounded-full"
          />
          <div className="text-lg">{postData.author.username}</div>
        </div>
        <div className="mt-3">
          <h2 className="text-2xl font-bold">{postData.title}</h2>
          <h2 className="mt-2 text-lg">{postData.content}</h2>
        </div>
        <div className="mt-4 inline-block rounded-xl bg-base-300 px-4 py-3">
          <div className="flex gap-2">
            <Icon icon={<GoComment />} />
            <span>{postData.comments.length}</span>
          </div>
        </div>
      </div>
      <CommentsSection />
    </>
  );
}
