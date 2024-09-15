import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getGroupPosts } from '../../api/groups';
import PostPreview from './PostPreview';

export default function GroupFeed() {
  const { groupId } = useParams();
  const { isLoading, isError, data } = useQuery({
    queryKey: ['groups', groupId, 'posts'],
    queryFn: () => getGroupPosts(groupId),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error!</p>;

  const posts = data.data.posts;
  const hasNoPosts = posts.length === 0;

  if (hasNoPosts) {
    return <div>No posts! Be the first one </div>;
  }

  return (
    <div className="space-y-6 rounded-2xl">
      {posts.map((post) => {
        return <PostPreview data={post} key={post._id} />;
      })}
    </div>
  );
}
