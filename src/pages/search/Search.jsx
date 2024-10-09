import { useState } from 'react';
import { useQuery, keepPreviousData } from '@tanstack/react-query';

import GroupCard from './GroupCard';
import NoDataDisplay from '../../components/NoDataDisplay';
import Pagination from '../../components/Pagination';
import Icon from '../../components/Icon';

import { IoSearchSharp } from 'react-icons/io5';
import { getGroups } from '../../api/groups';

function LoadingSkeleton() {
  return (
    <div className="rounded-xl bg-base-100 p-4 shadow">
      <div className="flex items-center gap-4">
        <div className="skeleton aspect-square h-20 w-20 rounded-full object-cover"></div>
        <div className="flex-1">
          <div className="skeleton line-clamp-1 h-7 w-full max-w-48 text-lg"></div>
          <div className="skeleton mt-1 h-5 w-full max-w-96"></div>
        </div>
        <div>
          <div className="skeleton h-12 w-16"></div>
        </div>
      </div>
    </div>
  );
}

export default function Search() {
  const [page, setPage] = useState(1);

  const { isLoading, isError, data, isPlaceholderData } = useQuery({
    queryKey: ['groups', page],
    queryFn: () => getGroups(page, 18),
    placeholderData: keepPreviousData,
  });

  const skeletonCount = 21;

  return (
    <div className="rounded-2xl">
      <h1 className="text-3xl font-bold">Search groups</h1>
      <form onSubmit={(e) => e.preventDefault()} className="mt-4">
        <div className="flex">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full rounded-none rounded-bl-2xl rounded-tl-2xl"
          />
          <button
            type="submit"
            className="flex items-center justify-center rounded-br-2xl rounded-tr-2xl bg-primary px-6"
          >
            <Icon icon={<IoSearchSharp />} className="text-primary-content" />
          </button>
        </div>
      </form>
      <div>
        {
          // TOOD: Create a new component for this mess
          isError ? (
            <p>Error!</p>
          ) : isLoading ? (
            <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
              {Array.from({ length: skeletonCount }).map((_, index) => (
                <LoadingSkeleton key={index} />
              ))}
            </div>
          ) : data.data.results.length === 0 ? (
            <NoDataDisplay
              top="No Groups Found!"
              bottom="This should never have happened, but it did..."
            />
          ) : (
            <div>
              <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
                {data.data.results.map((data) => {
                  return <GroupCard data={data} key={data._id} />;
                })}
              </div>
              <Pagination
                currentPage={page}
                setPage={setPage}
                totalPages={data.data.totalPages}
              />
            </div>
          )
        }
      </div>
    </div>
  );
}
