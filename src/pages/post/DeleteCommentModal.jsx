import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { deleteComment } from '../../api/comments';

import Modal from './../../components/Modal';

// TODO: Create delete component
export default function DeleteCommentModal({ modalId, commentId, authorId }) {
  const { postId } = useParams();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deleteComment,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['posts', postId, 'comments'],
      });
      document.getElementById(modalId).close();
    },
  });

  function handleSubmit(e) {
    e.preventDefault();
    const id = commentId;
    mutation.mutate({ postId, id, authorId });
  }

  return (
    <Modal id={modalId}>
      <form onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold">
          Are you sure you want to delete this comment?
        </h2>
        <p className="mt-2 text-base-content/70">
          Deleting this comment is permanent and cannot be undone.
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
