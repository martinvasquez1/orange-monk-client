import { Outlet, useLocation } from 'react-router-dom';
import GroupOverview from './GroupOverview';
import GroupAside from './GroupAside';

export default function GroupLayout() {
  const location = useLocation();
  const hideList = [
    /^\/app\/group\/\d+\/post\/\d+$/, // Regex to match /app/group/groupId/post/postId
  ];
  const hideOverview = hideList.some((regex) => regex.test(location.pathname));

  return (
    <>
      {!hideOverview && <GroupOverview />}
      <div className="mt-4 flex gap-4">
        <div className="flex-[3_3_0%]">
          <Outlet />
        </div>
        <div className="hidden flex-1 md:block">
          <GroupAside />
        </div>
      </div>
    </>
  );
}
