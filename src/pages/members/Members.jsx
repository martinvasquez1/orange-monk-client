import MembersTable from './MembersTable';
import JoinRequestsTable from './JoinRequestsTable';

export default function Members() {
  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-2xl bg-base-100 p-4 px-6 shadow">
        <h2 className="text-xl font-bold">Members</h2>
        <MembersTable />
      </div>
      <div className="rounded-2xl bg-base-100 p-4 px-6 shadow">
        <h2 className="text-xl font-bold">Join Requests</h2>
        <JoinRequestsTable />
      </div>
    </div>
  );
}
