import { useMutation, useQueryClient } from '@tanstack/react-query';
import { acceptJoinRequest } from '../../api/joinRequests';
import { useParams } from 'react-router-dom';

import Icon from './../../components/Icon';
import { FaCheck } from 'react-icons/fa6';

export default function AcceptButton({ requestId }) {
  const { groupId } = useParams();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: acceptJoinRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['groups', groupId, 'join-requests'],
      });
      queryClient.invalidateQueries({
        queryKey: ['groups', groupId, 'users'],
      });
    },
  });

  function handleClick() {
    mutation.mutate({ groupId: groupId, requestId });
  }

  return (
    <button className="btn text-success" type="button" onClick={handleClick}>
      <span>Accept</span>
      <Icon icon={<FaCheck />} />
    </button>
  );
}
