import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteRoom } from '../../api/rooms';
import { useParams } from 'react-router-dom';

import Modal from './../../components/Modal';

export default function DeleteRoomtModal({ id, roomId }) {
  const { groupId } = useParams();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deleteRoom,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['groups', groupId, 'rooms'],
      });
      document.getElementById(id).close();
    },
  });

  function handleSubmit(e) {
    e.preventDefault();
    mutation.mutate({ groupId, roomId });
  }

  return (
    <Modal id={id}>
      <form onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold">Do you wish to delete this room?</h2>
        <p className="mt-2 text-base-content/70">
          Deleting this room is permanent.
        </p>
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
              Delete
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
}
