import { useEffect, useRef } from 'react';

export default function useInfiniteScroll(hasNextPage, fetchNextPage) {
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

  return loadMoreRef;
}
