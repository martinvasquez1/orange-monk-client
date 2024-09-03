import GroupOverview from './GroupOverview';
import GroupFeed from './GroupFeed';
import GroupAside from './GroupAside';
import CreatePostButton from './CreatePostButton';

export default function Group() {
  return (
    <>
      <GroupOverview />
      <div className="flex gap-4 my-6">
        <div className="flex-[3_3_0%]">
          <CreatePostButton />
          <GroupFeed />
        </div>
        <div className="flex-1">
          <GroupAside />
        </div>
      </div>
    </>
  );
}
