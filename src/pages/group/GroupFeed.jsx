import { useParams } from 'react-router-dom';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getGroupPosts } from '../../api/groups';
import PostPreview from './PostPreview';
import useInfiniteScroll from './../../hooks/useInfiniteScroll';

export default function GroupFeed() {
  const { groupId } = useParams();
  const {
    isLoading,
    isError,
    data,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ['groups', groupId, 'posts'],
    queryFn: ({ pageParam = 1 }) => getGroupPosts(groupId, pageParam, 10),
    getNextPageParam: (lastPage) => {
      if (lastPage.data.next != undefined) {
        return lastPage.data.next.page;
      }
      return undefined;
    },
  });

  const loadMoreRef = useInfiniteScroll(hasNextPage, fetchNextPage);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error!</p>;

  const posts = data.pages
    .flatMap((data) => data.data)
    .flatMap((data) => data.results);
  const hasNoPosts = posts.length === 0;

  if (hasNoPosts) {
    return <div>No posts! Be the first one </div>;
  }

  return (
    <div className="space-y-6 rounded-2xl">
      {posts.map((post) => {
        return <PostPreview data={post} key={post._id} />;
      })}
      {hasNextPage && <div ref={loadMoreRef}></div>}
    </div>
  );
}
