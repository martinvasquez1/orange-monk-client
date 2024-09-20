import Icon from './Icon';
import { SlOptionsVertical, SlTrash, SlPencil } from 'react-icons/sl';
import { HiPencil, HiTrash } from 'react-icons/hi2';

export default function PostOptionsButton() {
  return (
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
            }}
          >
            <Icon icon={<HiTrash />} />
            <span>Delete</span>
          </button>
        </li>
      </ul>
    </div>
  );
}
