import Dropdown from '../../components/Dropdown';
import DeleteCommentModal from './DeleteCommentModal';
import Icon from '../../components/Icon';
import { SlOptionsVertical, SlTrash, SlPencil } from 'react-icons/sl';
import { HiPencil, HiTrash } from 'react-icons/hi2';

export default function CommentOptionsButton({
  setIsEditing,
  commentId,
  authorId,
}) {
  const deleteCommentModalId = 'delete-comment-modal' + commentId;

  return (
    <>
      <Dropdown
        trigger={
          <div tabIndex={0} role="button" className="btn btn-ghost m-1">
            <Icon icon={<SlOptionsVertical />} />
          </div>
        }
      >
        <button type="button" onClick={(e) => setIsEditing(() => true)}>
          <Icon icon={<HiPencil />} />
          <span>Edit</span>
        </button>
        <button
          className="button"
          onClick={(e) => {
            e.stopPropagation();
            document.getElementById(deleteCommentModalId).showModal();
          }}
        >
          <Icon icon={<HiTrash />} />
          <span>Delete</span>
        </button>
      </Dropdown>
      {/* Can't nest button inside a button, so Modals must stay outside */}
      <DeleteCommentModal
        modalId={deleteCommentModalId}
        commentId={commentId}
        authorId={authorId}
      />
    </>
  );
}
