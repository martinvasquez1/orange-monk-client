import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

import { leaveGroup } from '../api/groups';
import Modal from './../components/Modal';

export default function LeaveModal({ modalId, groupId }) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: leaveGroup,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['groups', groupId],
      });
      document.getElementById(modalId).close();
      navigate(`/app`);
    },
  });

  function handleSubmit(e) {
    e.preventDefault();
    const userId = jwtDecode(localStorage.getItem('jwt')).id;
    mutation.mutate({ id: groupId, userId });
  }

  return (
    <Modal id={modalId}>
      <form onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold">Thinking of leaving the group?</h2>
        <p className="mt-2 text-base-content/70">No hard feelings!</p>
        <div className="mt-8 flex justify-between">
          <div></div>
          <div className="flex gap-4">
            <button
              type="button"
              className="btn btn-ghost"
              disabled={mutation.isPending}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-error"
              disabled={mutation.isPending}
            >
              Leave
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
}
