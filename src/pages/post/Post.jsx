import Icon from '../../components/Icon';
import { GoComment } from 'react-icons/go';
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
    <>
      <div className="rounded-2xl bg-base-100 p-4 shadow">
        <div className="flex items-center gap-4">
          <img
            src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1459&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Profile picture."
            className="h-10 w-10 rounded-full"
          />
          <div className="text-lg">{data.user}</div>
        </div>
        <div className="mt-3">
          <h2 className="text-2xl font-bold">{data.title}</h2>
          <h2 className="mt-2 text-lg">{data.body}</h2>
        </div>
        <div className="mt-4 inline-block rounded-xl bg-base-300 px-4 py-3">
          <div className="flex gap-2">
            <Icon icon={<GoComment />} />
            <span>{data.amountComments}</span>
          </div>
        </div>
      </div>
      <CommentsSection />
    </>
  );
}
