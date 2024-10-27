import { useMutation } from '@tanstack/react-query';
import { acceptJoinRequest } from '../../api/joinRequests';
import { useParams } from 'react-router-dom';

import Icon from './../../components/Icon';
import { FaCheck } from 'react-icons/fa6';

export default function AcceptButton({ requestId }) {
  const { id } = useParams();

  const mutation = useMutation({
    mutationFn: acceptJoinRequest,
    onSuccess: () => {
      // TODO: Doesn't work :(
      queryClient.invalidateQueries({
        queryKey: ['groups', id, 'join-requests'],
      });
      queryClient.invalidateQueries({
        queryKey: ['groups', id, 'users'],
      });
    },
  });

  function handleClick() {
    mutation.mutate({ groupId: id, requestId });
  }

  return (
    <button className="btn text-success" type="button" onClick={handleClick}>
      <span>Accept</span>
      <Icon icon={<FaCheck />} />
    </button>
  );
}
