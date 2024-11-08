import { useQuery } from '@tanstack/react-query';
import { getGroup } from './../../api/groups';

import { useParams } from 'react-router-dom';
import PublicAbout from './PublicAbout';
import DeleteSection from './DeleteSection';
import LoadingIndicator from './../../components/LoadingIndicator';

export default function GroupAbout() {
  const { groupId } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['groups', groupId],
    queryFn: () => getGroup(groupId),
  });

  if (isLoading) return <LoadingIndicator />;
  if (isError) return <p>Error!</p>;

  const group = data.data.group;

  return (
    <div className="flex flex-col gap-4">
      <PublicAbout group={group} />
      <DeleteSection group={group} />
    </div>
  );
}
