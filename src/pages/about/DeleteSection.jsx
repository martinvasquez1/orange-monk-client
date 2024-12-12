import DeleteGroupModal from './DeleteGroupModal';

export default function DeleteSection({ group }) {
  const deleteGroupModalId = 'delete-group-modal-id';

  return (
    <>
      <div className="rounded-box bg-base-100 p-4 shadow">
        <h2 className="text-xl font-bold">Delete</h2>
        <p className="mt-4 text-base-content/70">
          Deleting a group is a permanent action and <strong>cannot</strong> be
          undone.
        </p>
        <button
          type="button"
          className="btn btn-error mt-4"
          onClick={() =>
            document.getElementById(deleteGroupModalId).showModal()
          }
        >
          Delete group
        </button>
      </div>
      <DeleteGroupModal modalId={deleteGroupModalId} groupId={group._id} />
    </>
  );
}
