import { useParams } from 'react-router-dom';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getGroupPosts } from '../../api/groups';
import PostPreview from './PostPreview';
import useInfiniteScroll from './../../hooks/useInfiniteScroll';

function LoadingSkeleton({ amount }) {
  return (
    <div className="space-y-6 rounded-2xl">
      {Array.from({ length: amount }).map((_, index) => (
        <div
          key={index}
          className="block rounded-2xl bg-base-100 px-4 py-4 shadow"
        >
          <div className="flex items-center gap-4">
            <div className="skeleton h-10 w-10 rounded-full"></div>
            <div className="skeleton h-6 w-20"></div>
          </div>
          <div className="mt-3">
            <div className="skeleton h-6 w-full max-w-72"></div>
            <div className="skeleton mt-2 h-5 w-full"></div>
            <div className="skeleton mt-2 h-5 w-full"></div>
            <div className="skeleton mt-2 h-5 w-full"></div>
          </div>
          <div className="skeleton mt-4 inline-block h-11 w-16 rounded-xl"></div>
        </div>
      ))}
    </div>
  );
}

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

  if (isLoading) return <LoadingSkeleton amount={6} />;
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
      {isFetchingNextPage && <LoadingSkeleton amount={1} />}
      {hasNextPage && <div ref={loadMoreRef}></div>}
    </div>
  );
}
