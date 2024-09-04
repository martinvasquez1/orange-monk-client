import Icon from '../../components/Icon';
import { GoComment } from 'react-icons/go';
import GroupAside from '../group/GroupAside';
import CommentsSection from './CommentsSection';

const data = {
  id: 1,
  user: 'CinephileAlice',
  title: 'Upcoming Releases I’m Excited About!',
  body: 'The cinematic landscape is brimming with excitement as we approach some highly anticipated releases. I’m particularly thrilled about Dune: Part Two, which promises to continue the epic saga with even more depth and grandeur. Additionally, the new Spider-Man movie has generated a buzz with its potential to bring fresh and exhilarating twists to our beloved web-slinger. I’d love to hear what other films you’re eagerly awaiting this year. Are there any hidden gems or big blockbusters on your radar? Let’s dive into the upcoming cinematic adventures!',
  hoursAgo: '5 hours ago',
  amountComments: 11,
};

export default function Post() {
  return (
    <div className="flex gap-4 my-6">
      <div className="block flex-[3_3_0%]">
        {/* Post */}
        <div className="bg-white p-4 rounded-2xl shadow">
          <div className="flex gap-4 items-center">
            <img
              src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1459&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Profile picture."
              className="h-10 w-10 rounded-full"
            />
            <div className="text-lg">{data.user}</div>
          </div>
          <div className="mt-3">
            <h2 className="font-bold text-2xl">{data.title}</h2>
            <h2 className="mt-2 text-lg">{data.body}</h2>
          </div>
          <div className="mt-4 hover:bg-slate-200 inline-block px-4 py-2 bg-slate-100 rounded-xl">
            <div className="flex gap-2">
              <Icon icon={<GoComment />} />
              <span>{data.amountComments}</span>
            </div>
          </div>
        </div>
        <CommentsSection />
      </div>
      <div className="flex-1">
        <GroupAside />
      </div>
    </div>
  );
}
