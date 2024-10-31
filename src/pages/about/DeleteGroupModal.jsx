import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteGroup } from './../../api/groups';
import Modal from './../../components/Modal';

export default function DeleteGroupModal({ modalId, groupId }) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: deleteGroup,
    onSuccess: () => {
      navigate('/app');
      document.getElementById(modalId).close();
      queryClient.invalidateQueries({ queryKey: ['groups'] });
    },
  });

  function handleSubmit(e) {
    e.preventDefault();
    mutation.mutate(groupId);
  }

  return (
    <Modal id={modalId}>
      <form onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold">
          Do You <strong>Really</strong> Want to Delete This Group?
        </h2>
        <p className="mt-2 text-base-content/70">
          This action is irreversible. Once deleted, all associated content and
          member data will be permanently removed.
        </p>
        <div className="mt-8 flex justify-between">
          <div></div>
          <div className="flex gap-4">
            <button
              type="button"
              className="btn btn-ghost"
              disabled={mutation.isPending}
              onClick={() => document.getElementById(modalId).close()}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-error"
              disabled={mutation.isPending}
            >
              Delete
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
}
