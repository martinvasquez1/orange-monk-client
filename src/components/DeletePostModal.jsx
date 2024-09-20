import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deletePost } from '../api/posts';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Modal from './../components/Modal';

export default function DeletePostModal({ modalId, postId }) {
  const { groupId } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [['groups', groupId, 'posts']],
      });
      document.getElementById(modalId).close();
      navigate(`/app/group/${groupId}`);
    },
  });

  function handleSubmit(e) {
    e.preventDefault();
    const id = postId;
    mutation.mutate({ id, groupId });
  }

  return (
    <Modal id={modalId}>
      <form onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold">Do you wish to delete this post?</h2>
        <p className="mt-2 text-base-content/70">
          Deleting this post is permanent and cannot be undone.
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
