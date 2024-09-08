import GroupOverview from './GroupOverview';
import GroupFeed from './GroupFeed';
import GroupAside from './GroupAside';
import CreatePostButton from './CreatePostButton';
import GroupColumns from '../../components/GroupColumns';

export default function Group() {
  return (
    <>
      <GroupOverview />
      <GroupColumns
        left={
          <>
            <CreatePostButton />
            <GroupFeed />
          </>
        }
        right={<GroupAside />}
      />
    </>
  );
}
