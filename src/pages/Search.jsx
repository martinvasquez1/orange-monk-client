import Icon from './../components/Icon';
import { IoSearchSharp } from 'react-icons/io5';
import { useQuery } from '@tanstack/react-query';
import { getGroups } from '../api/groups';

export default function Search() {
  const groupsQuery = useQuery({ queryKey: ['groups'], queryFn: getGroups });

  if (groupsQuery.isLoading) return <p>Loading...</p>;
  if (groupsQuery.isError) return <p>Error!</p>;

  const groups = groupsQuery.data.data.groups;

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
      <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(500px,1fr))] gap-4">
        {groups.map((data) => {
          return (
            <div className="rounded-xl bg-base-100 p-4" key={data.name}>
              <div className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1599272771314-f3ec16bda3f2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Profile picture."
                  className="aspect-square h-20 w-20 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h2 className="text-lg">{data.name}</h2>
                  <p className="mt-1 text-sm text-base-content/70">
                    {data.description}
                  </p>
                </div>
                <button type="button" className="btn">
                  Join
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
