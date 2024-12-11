import { useParams } from 'react-router-dom';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getGroupPosts } from '../../api/groups';
import PostPreview from './PostPreview';
import useInfiniteScroll from './../../hooks/useInfiniteScroll';
import NoDataDisplay from '../../components/NoDataDisplay';
import PostSkeleton from '../../components/PostSkeleton';

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

  if (isLoading) return <PostSkeleton amount={6} numLines={3} />;
  if (isError) return <p>Error!</p>;

  const posts = data.pages
    .flatMap((data) => data.data)
    .flatMap((data) => data.results);
  const hasNoPosts = posts.length === 0;

  if (hasNoPosts) {
    return (
      <NoDataDisplay
        top="It's quiet here!"
        bottom="Share your first post and get the ball rolling."
      />
    );
  }

  return (
    <div className="space-y-6">
      {posts.map((post) => {
        return <PostPreview data={post} key={post._id} />;
      })}
      {isFetchingNextPage && <PostSkeleton numLines={3} />}
      {hasNextPage && <div ref={loadMoreRef}></div>}
    </div>
  );
}
