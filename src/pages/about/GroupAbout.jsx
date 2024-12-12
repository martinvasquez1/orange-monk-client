import { useQuery } from '@tanstack/react-query';
import { getGroup, getIsAdmin } from './../../api/groups';
import { jwtDecode } from 'jwt-decode';

import { useParams } from 'react-router-dom';
import PublicAbout from './PublicAbout';
import DeleteSection from './DeleteSection';
import LoadingIndicator from './../../components/LoadingIndicator';

export default function GroupAbout() {
  const { groupId } = useParams();
  const userId = jwtDecode(localStorage.getItem('jwt')).id;

  const { data, isLoading, isError } = useQuery({
    queryKey: ['groups', groupId],
    queryFn: () => getGroup(groupId),
  });

  const {
    data: dataRol,
    isLoading: isLoadingRol,
    isError: isErrorRol,
  } = useQuery({
    queryKey: ['groups', groupId, 'isAdmin'],
    queryFn: () => getIsAdmin(groupId, userId),
  });

  if (isLoading || isLoadingRol) return <LoadingIndicator />;
  if (isError || isErrorRol) return <p>Error!</p>;

  const group = data.data.group;

  return (
    <div className="flex flex-col gap-4">
      <PublicAbout group={group} />
      {dataRol.isAdmin && <DeleteSection group={group} />}
    </div>
  );
}
