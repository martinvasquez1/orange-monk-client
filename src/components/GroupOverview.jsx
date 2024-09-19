import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getGroup } from '../api/groups';

import Icon from './Icon';
import { NavLink } from 'react-router-dom';
import { SlOptionsVertical } from 'react-icons/sl';

function LoadingSkeleton({ buttonsData }) {
  return (
    <div className="rounded-2xl bg-base-100 shadow">
      <div className="skeleton h-52 w-full rounded-bl-none rounded-br-none rounded-tl-2xl rounded-tr-2xl"></div>
      <div className="mt-8 flex justify-between p-4">
        <div className="w-full">
          <div className="skeleton h-9 w-full max-w-80"></div>
          <div className="skeleton mt-2 h-5 w-full max-w-80"></div>
        </div>
        <div>
          <button type="button" className="btn btn-ghost">
            <Icon icon={<SlOptionsVertical />} />
          </button>
        </div>
      </div>
      <div className="px-4 pb-2">
        <div className="my-1 grid grid-cols-2 gap-4 sm:flex">
          {buttonsData.map((data) => {
            return (
              <NavLink
                to={data.url}
                key={data.name}
                end={data.name === 'Home'}
                className={({ isActive }) =>
                  `${isActive ? 'bg-primary text-primary-content' : ''} rounded-xl bg-base-200 px-6 py-3 text-center`
                }
                onClick={(e) => e.preventDefault()}
              >
                {data.name}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function GroupOverview() {
  const { groupId } = useParams();
  const { isLoading, isError, data } = useQuery({
    queryKey: ['groups', groupId],
    queryFn: () => getGroup(groupId),
  });

  const buttonsData = [
    { name: 'Home', url: `/app/group/${groupId}` },
    { name: 'Rooms', url: `/app/group/${groupId}/rooms` },
    { name: 'About', url: `/app/group/${groupId}/about` },
    { name: 'Members', url: `/app/group/${groupId}/members` },
  ];

  if (isLoading) return <LoadingSkeleton buttonsData={buttonsData} />;
  if (isError) return 'Error!';

  const groupData = data.data.group;

  return (
    <div className="rounded-2xl bg-base-100 shadow">
      <img
        src={
          groupData.overviewImage ||
          ' https://images.unsplash.com/photo-1526715875108-ed5fa46df641?q=80&w=1495&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
        className="skeleton h-52 w-full rounded-bl-none rounded-br-none rounded-tl-2xl rounded-tr-2xl object-cover"
      />
      <div className="mt-8 flex justify-between p-4">
        <div>
          <div className="text-3xl font-bold">{groupData.name}</div>
          <div className="mt-2 text-sm text-base-content/70">
            {groupData.description}
          </div>
        </div>
        <div>
          <button type="button" className="btn btn-ghost">
            <Icon icon={<SlOptionsVertical />} />
          </button>
        </div>
      </div>
      <div className="px-4 pb-2">
        <div className="my-1 grid grid-cols-2 gap-4 sm:flex">
          {buttonsData.map((data) => {
            return (
              <NavLink
                to={data.url}
                key={data.name}
                end={data.name === 'Home'}
                className={({ isActive }) =>
                  `${isActive ? 'bg-primary text-primary-content' : ''} rounded-xl bg-base-200 px-6 py-3 text-center`
                }
              >
                {data.name}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}
