import GroupOverview from './GroupOverview';
import GroupFeed from './GroupFeed';

export default function Group() {
  return (
    <>
      <GroupOverview />
      <div className="flex gap-4">
        <div className="bg-red-100 flex-[3_3_0%]">
          <GroupFeed />
        </div>
        <div className="bg-blue-200 flex-1">3</div>
      </div>
    </>
  );
}
