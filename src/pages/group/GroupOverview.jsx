import Icon from '../../components/Icon';
import { Link } from 'react-router-dom';

import { SlOptionsVertical } from 'react-icons/sl';

const groupData = {
  name: 'Movie Buffs',
  description:
    'Discuss your favorite films, discover new releases, and dive into movie reviews and critiques.',
  overviewImage:
    ' https://images.unsplash.com/photo-1526715875108-ed5fa46df641?q=80&w=1495&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
};

const buttonsData = [
  { name: 'Feed', url: '/' },
  { name: 'Rooms', url: '/rooms' },
  { name: 'About', url: '/about' },
  { name: 'Members', url: '/members' },
];

export default function GroupOverview() {
  return (
    <div className="bg-white rounded-2xl shadow">
      <img
        src={groupData.overviewImage}
        className="h-52 w-full rounded-tl-2xl rounded-tr-2xl object-cover"
      />
      <div className="flex justify-between mt-8 p-4">
        <div>
          <div className="text-3xl font-bold">{groupData.name}</div>
          <div className="text-sm mt-2">{groupData.description}</div>
        </div>
        <div className="">
          <button type="button" className="btn btn-ghost">
            <Icon icon={<SlOptionsVertical />} />
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="bg-[#f6f6f6] grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] max-w-[32rem] rounded-xl py-1 divide-x">
          {buttonsData.map((data) => {
            return (
              <Link
                to={data.url}
                key={data.name}
                className="py-2 text-center rounded-md hover:bg-white"
              >
                {data.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
