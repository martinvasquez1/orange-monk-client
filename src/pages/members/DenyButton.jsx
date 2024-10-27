import { useMutation } from '@tanstack/react-query';
import { denyJoinRequest } from '../../api/joinRequests';
import { useParams } from 'react-router-dom';

import Icon from './../../components/Icon';
import { FaXmark } from 'react-icons/fa6';

export default function DenyButton({ requestId }) {
  const { groupId } = useParams();

  const mutation = useMutation({
    mutationFn: denyJoinRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['groups', groupId, 'join-requests'],
      });
    },
  });

  function handleClick() {
    mutation.mutate({ groupId, requestId });
  }

  return (
    <button className="btn text-error" type="button" onClick={handleClick}>
      <span>Deny</span>
      <Icon icon={<FaXmark />} />
    </button>
  );
}
