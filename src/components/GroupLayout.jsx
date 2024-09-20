import { Outlet, useLocation } from 'react-router-dom';
import GroupOverview from './GroupOverview';
import GroupAside from './GroupAside';

export default function GroupLayout() {
  const location = useLocation();
  const hideOverviewList = [
    /^\/app\/group\/[a-zA-Z0-9]+\/post\/[a-zA-Z0-9]+$/, // Regex to match /app/group/groupId/post/postId
    /^\/app\/group\/[a-f0-9]{24}\/create-post$/,
  ];
  const hideOverview = hideOverviewList.some((regex) =>
    regex.test(location.pathname),
  );
  const hideAside = /^\/app\/group\/[a-f0-9]{24}\/rooms$/.test(
    location.pathname,
  );

  if (hideAside) {
    return (
      <>
        {!hideOverview && <GroupOverview />}
        <div className="mt-4 gap-4">
          <Outlet />
        </div>
      </>
    );
  }

  return (
    <>
      {!hideOverview && <GroupOverview />}
      <div className="mt-4 flex gap-4">
        <div className="flex-[3_3_0%] overflow-x-auto">
          <Outlet />
        </div>

        <div className="hidden flex-1 md:block">
          <GroupAside />
        </div>
      </div>
    </>
  );
}
