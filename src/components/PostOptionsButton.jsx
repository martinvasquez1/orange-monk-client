import Icon from './Icon';
import { SlOptionsVertical, SlTrash, SlPencil } from 'react-icons/sl';
import { HiPencil, HiTrash } from 'react-icons/hi2';
import DeletePostModal from './DeletePostModal';

export default function PostOptionsButton({ postId }) {
  const deletePostModalId = 'delete-post-modal';

  return (
    <>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost m-1"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
          }}
        >
          <Icon icon={<SlOptionsVertical />} />
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow-md"
        >
          <li>
            <button
              className="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              <Icon icon={<HiPencil />} />
              <span>Edit</span>
            </button>
          </li>
          <li>
            <button
              className="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                document.getElementById(deletePostModalId).showModal();
              }}
            >
              <Icon icon={<HiTrash />} />
              <span>Delete</span>
            </button>
          </li>
        </ul>
      </div>
      {/* Can't nest button inside a button, so Modals must stay outside */}
      <DeletePostModal modalId={deletePostModalId} postId={postId} />
    </>
  );
}
