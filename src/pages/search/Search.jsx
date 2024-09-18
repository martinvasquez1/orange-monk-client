import Icon from '../../components/Icon';
import { IoSearchSharp } from 'react-icons/io5';
import { useQuery } from '@tanstack/react-query';
import { getGroups } from '../../api/groups';
import GroupCard from './GroupCard';

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
  const { isLoading, isError, data } = useQuery({
    queryKey: ['groups'],
    queryFn: getGroups,
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
      <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
        {isError ? (
          <p>Error!</p>
        ) : isLoading ? (
          Array.from({ length: skeletonCount }).map((_, index) => (
            <LoadingSkeleton key={index} />
          ))
        ) : (
          data.data.groups.map((data) => {
            return <GroupCard data={data} key={data._id} />;
          })
        )}
      </div>
    </div>
  );
}
