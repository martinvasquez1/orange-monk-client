import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { getGroup } from '../api/groups';

export default function ThemeSwitcher({ children }) {
  const location = useLocation();
  const path = location.pathname;

  const match = path.match(/\/app\/group\/([^\/]+)/);
  const groupId = match ? match[1] : null;

  const { isLoading, isError, data, refetch } = useQuery({
    queryKey: ['groups', groupId],
    queryFn: () => getGroup(groupId),
    enabled: !!groupId,
  });

  useEffect(() => {
    if (path.startsWith('/app/group')) {
      refetch();
      const theme = data?.data?.group?.theme;
      document.documentElement.setAttribute('data-theme', theme);
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [path]);

  return children;
}
