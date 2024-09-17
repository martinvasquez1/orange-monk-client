import { useParams } from 'react-router-dom';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getGroupPosts } from '../../api/groups';
import { useRef, useEffect } from 'react';
import PostPreview from './PostPreview';

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
    getNextPageParam: (lastPage) => lastPage.data.next.page,
  });

  const loadMoreRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const bottomIsVisible = entries[0].isIntersecting;
      if (bottomIsVisible && hasNextPage) {
        fetchNextPage();
      }
    });

    const currentRef = loadMoreRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasNextPage, fetchNextPage]);

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
      {hasNextPage && (
        <button
          type="button"
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
        >
          {isFetchingNextPage ? 'Loading' : 'Load more'}
        </button>
      )}
      {/*hasNextPage && <div ref={loadMoreRef}>abc</div>*/}
    </div>
  );
}
