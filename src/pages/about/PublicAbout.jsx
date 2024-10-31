import { Link } from 'react-router-dom';
import Icon from './../../components/Icon';
import { HiPencil } from 'react-icons/hi2';

export default function PublicAbout({ group }) {
  return (
    <div className="rounded-2xl bg-base-100 p-4 shadow">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">About</h2>
        <Link to={`/app/group/${group._id}/edit`} className="btn btn-ghost">
          <Icon icon={<HiPencil />} />
        </Link>
      </div>
      <p className="mt-4 text-base-content/70">{group.description}</p>
      <p className="mt-4">
        This group is <strong>{group.private ? 'Private' : 'Public'}</strong>.
      </p>
      <p className="mt-2">
        <span className="font-bold">Created at:</span> {group.createdAt}
      </p>
    </div>
  );
}
