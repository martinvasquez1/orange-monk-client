import { useState } from 'react';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getJoinRequests } from '../../api/joinRequests';

import UserAvatar from './../../components/UserAvatar';
import Pagination from '../../components/Pagination';
import NoDataDisplay from './../../components/NoDataDisplay';
import AcceptButton from './AcceptButton';
import DenyButton from './DenyButton';

export default function JoinRequestsTable({}) {
  const [page, setPage] = useState(1);

  const { groupId } = useParams();
  const id = groupId;

  const { isLoading, isError, data, isPlaceholderData } = useQuery({
    queryKey: ['groups', id, 'join-requests', page],
    queryFn: () => getJoinRequests(id, page, 10),
    placeholderData: keepPreviousData,
  });

  if (isLoading) return 'Loading...';
  if (isError) return 'Error!';

  const requests = data.data.results;

  if (requests.length === 0) {
    return (
      <NoDataDisplay top="No join requests" bottom="..." noBackground={true} />
    );
  }

  return (
    <div className="mt-4 overflow-x-auto">
      {requests.map((request) => {
        return (
          <div className="flex justify-between gap-4" key={request._id}>
            <UserAvatar
              url={request.user.profilePicture}
              username={request.user.username}
            />
            <div className="flex gap-4">
              <AcceptButton requestId={request._id} requestPage={page} />
              <DenyButton requestId={request._id} />
            </div>
          </div>
        );
      })}
      <Pagination
        currentPage={page}
        setPage={setPage}
        totalPages={data.data.totalPages}
      />
    </div>
  );
}
