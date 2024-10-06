import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { createRoom } from '../../api/rooms';
import { useState } from 'react';

import Modal from './../../components/Modal';

export default function PostRoomModal({ id, commentId, authorId }) {
  const [name, setName] = useState('');

  const { groupId } = useParams();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createRoom,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['groups', groupId, 'rooms'],
      });
      document.getElementById(id).close();
      setName('');
    },
  });

  function handleSubmit(e) {
    e.preventDefault();
    mutation.mutate({ groupId, name });
  }

  return (
    <Modal id={id}>
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold">Create room</h2>
        <label className="form-control mt-2 w-full max-w-xs">
          <div className="label">
            <span className="label-text">Name</span>
          </div>
          <input
            type="text"
            placeholder="Lorem"
            className="input input-bordered w-full max-w-xs"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>

        <div className="flex justify-end gap-4">
          <button
            type="button"
            className="btn btn-ghost"
            disabled={mutation.isPending}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={mutation.isPending}
          >
            Create
          </button>
        </div>
      </form>
    </Modal>
  );
}
