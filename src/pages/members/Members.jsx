import { useState } from 'react';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import Pagination from '../../components/Pagination';
import Icon from './../../components/Icon';
import { getGroupUsers } from '../../api/groups';

import { SlOptionsVertical } from 'react-icons/sl';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export default function Members() {
  const [page, setPage] = useState(1);

  const { groupId } = useParams();
  const id = groupId;

  const { isLoading, isError, data, isPlaceholderData } = useQuery({
    queryKey: ['groups', id, 'users', page],
    queryFn: () => getGroupUsers(id, page, 10),
    placeholderData: keepPreviousData,
  });

  if (isLoading) return 'Loading...';
  if (isError) return 'Error!';

  const users = data.data.results;

  return (
    <div className="rounded-2xl bg-base-100 p-4 px-6 shadow">
      <h2 className="text-xl font-bold">Members</h2>
      <div className="mt-4 overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th className="pl-0">Username</th>
              <th>Member since</th>
              <th>Role</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              const dateObject = new Date(user.createdAt);
              const options = {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              };
              const memberSince = dateObject.toLocaleDateString(
                'en-US',
                options,
              );
              return (
                <tr key={user._id}>
                  <td className="pl-0">
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                            className="skeleton"
                          />
                        </div>
                      </div>
                      <div className="font-bold">{user.user.username}</div>
                    </div>
                  </td>
                  <td>{memberSince}</td>
                  <td>{capitalizeFirstLetter(user.role)}</td>
                  <th>
                    <button className="btn btn-ghost">
                      <Icon icon={<SlOptionsVertical />} />
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Pagination
          currentPage={page}
          setPage={setPage}
          totalPages={data.data.totalPages}
        />
      </div>
    </div>
  );
}
