import { useState } from 'react';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getGroupUsers } from '../../api/groups';

import UserAvatar from './../../components/UserAvatar';
import Pagination from '../../components/Pagination';
import LoadingIndicator from './../../components/LoadingIndicator';

import Icon from './../../components/Icon';
import { SlOptionsVertical } from 'react-icons/sl';
import capitalizeFirstLetter from './../../utils/capitalize';

export default function MembersTable({}) {
  const [page, setPage] = useState(1);

  const { groupId } = useParams();
  const id = groupId;

  const { isLoading, isError, data } = useQuery({
    queryKey: ['groups', id, 'users', page],
    queryFn: () => getGroupUsers(id, page, 10),
    placeholderData: keepPreviousData,
  });

  if (isLoading) return <LoadingIndicator />;
  if (isError) return 'Error!';

  const users = data.data.results;

  return (
    <div className="mt-4 min-h-[16rem] overflow-x-auto">
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
            const memberSince = dateObject.toLocaleDateString('en-US', options);
            return (
              <tr key={user._id}>
                <td className="pl-0">
                  <div className="flex items-center gap-3">
                    <UserAvatar
                      url={user.user.profilePicture}
                      username={user.user.username}
                    />
                  </div>
                </td>
                <td>{memberSince}</td>
                <td>{capitalizeFirstLetter(user.role)}</td>
                <td className="flex justify-end">
                  <button className="btn btn-ghost">
                    <Icon icon={<SlOptionsVertical />} />
                  </button>
                </td>
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
  );
}
