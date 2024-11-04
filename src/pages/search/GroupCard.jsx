import { useMutation } from '@tanstack/react-query';
import { joinGroup } from '../../api/groups';
import { jwtDecode } from 'jwt-decode';

import GroupIcon from '../../components/GroupIcon';
import LeaveButton from './LeaveButton';

export default function GroupCard({ data }) {
  const mutation = useMutation({
    mutationFn: joinGroup,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['groups'] });
    },
  });

  function handleSubmit(e) {
    e.preventDefault();
    const userId = jwtDecode(localStorage.getItem('jwt')).id;
    mutation.mutate({ id: data._id, userId: userId });
  }

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
          <h2 className="line-clamp-1 text-lg">{data.name}</h2>
          <p className="mt-1 line-clamp-2 text-sm text-base-content/70">
            {data.description}
          </p>
        </div>
        {!data.isJoined ? (
          <form onSubmit={handleSubmit}>
            <button type="submit" className="btn btn-primary">
              Join
            </button>
          </form>
        ) : (
          <LeaveButton groupId={data._id} />
        )}
      </div>
    </div>
  );
}
