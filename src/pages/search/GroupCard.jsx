import GroupIcon from '../../components/GroupIcon';
import LeaveButton from './LeaveButton';
import JoinButton from './JoinButton';
import { Link } from 'react-router-dom';

export default function GroupCard({ data }) {
  return (
    <div className="rounded-xl bg-base-100 p-4 shadow">
      <div className="flex items-center gap-4">
        {data.previewImage ? (
          <img
            src={data.previewImage}
            className="skeleton aspect-square h-20 w-20 rounded-full object-cover"
          />
        ) : (
          <GroupIcon icon={data.icon} />
        )}
        <div className="flex-1">
          <h2 className={`line-clamp-1 text-lg`}>
            {data.isJoined ? (
              <Link
                to={`/app/group/${data._id}`}
                className="font-bold text-primary/80 hover:link"
              >
                {data.name}
              </Link>
            ) : (
              data.name
            )}
          </h2>
          <p className="mt-1 line-clamp-2 text-sm text-base-content/70">
            {data.description}
          </p>
        </div>
        {!data.isJoined ? (
          <JoinButton groupId={data._id} />
        ) : (
          <LeaveButton groupId={data._id} />
        )}
      </div>
    </div>
  );
}
