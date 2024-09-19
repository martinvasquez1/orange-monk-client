import Icon from './../../components/Icon';
import { SlOptionsVertical } from 'react-icons/sl';

const users = [
  {
    username: 'john_doe',
    memberSince: '2021-05-15',
    role: 'Admin',
  },
  {
    username: 'jane_smith',
    memberSince: '2020-08-22',
    role: 'Moderator',
  },
  {
    username: 'alice_jones',
    memberSince: '2019-11-30',
    role: 'Moderator',
  },
  {
    username: 'bob_brown',
    memberSince: '2022-01-10',
    role: 'Moderator',
  },
];

export default function Members() {
  return (
    <div className="rounded-2xl bg-base-100 p-4 px-6 shadow">
      <h2 className="text-xl font-bold">Members</h2>
      <div className="mt-4 overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th className="pl-0">Username</th>
              <th>Member since</th>
              <th>Role</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user.username}>
                  <td className="pl-0">
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                            className="skeleton"
                          />
                        </div>
                      </div>
                      <div className="font-bold">{user.username}</div>
                    </div>
                  </td>
                  <td>{user.memberSince}</td>
                  <td>{user.role}</td>
                  <th>
                    <button className="btn btn-ghost">
                      <Icon icon={<SlOptionsVertical />} />
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
