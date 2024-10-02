import { useParams, Link } from 'react-router-dom';

import Dropdown from '../../components/Dropdown';
import DeletePostModal from '../../components/DeletePostModal';
import Icon from '../../components/Icon';
import { SlOptionsVertical, SlTrash, SlPencil } from 'react-icons/sl';
import { HiPencil, HiTrash } from 'react-icons/hi2';

export default function PostOptionsButton({ postId }) {
  const deletePostModalId = 'delete-post-modal';
  const { groupId } = useParams();

  return (
    <>
      <Dropdown
        trigger={
          <div tabIndex={0} role="button" className="btn btn-ghost m-1">
            <Icon icon={<SlOptionsVertical />} />
          </div>
        }
      >
        <Link
          className=""
          to={`/app/group/${groupId}/post/${postId}?edit=true`}
        >
          <Icon icon={<HiPencil />} />
          <span>Edit</span>
        </Link>
        <button
          className="button"
          onClick={(e) => {
            e.stopPropagation();
            document.getElementById(deletePostModalId).showModal();
          }}
        >
          <Icon icon={<HiTrash />} />
          <span>Delete</span>
        </button>
      </Dropdown>
      {/* Can't nest button inside a button, so Modals must stay outside */}
      <DeletePostModal modalId={deletePostModalId} postId={postId} />
    </>
  );
}
