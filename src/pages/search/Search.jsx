import Icon from '../../components/Icon';
import { IoSearchSharp } from 'react-icons/io5';
import { useQuery } from '@tanstack/react-query';
import { getGroups } from '../../api/groups';
import GroupCard from './GroupCard';

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
          return <GroupCard data={data} key={data._id} />;
        })}
      </div>
    </div>
  );
}
