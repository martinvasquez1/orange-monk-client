import { useMutation, useQueryClient } from '@tanstack/react-query';
import { joinGroup } from '../../api/groups';
import { jwtDecode } from 'jwt-decode';

export default function JoinButton({ groupId }) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: joinGroup,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['groups'] });
    },
  });

  function handleSubmit(e) {
    e.preventDefault();
    const userId = jwtDecode(localStorage.getItem('jwt')).id;
    mutation.mutate({ id: groupId, userId: userId });
  }

  return (
    <form onSubmit={handleSubmit}>
      <button
        type="submit"
        className="btn btn-primary"
        disabled={mutation.isPending || mutation.isSuccess}
      >
        {mutation.isPending || mutation.isSuccess ? 'Joining...' : 'Join'}
      </button>
    </form>
  );
}
