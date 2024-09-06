import { GoComment } from 'react-icons/go';
import { Link } from 'react-router-dom';
import Icon from './../../components/Icon';

export default function PostPreview({ data }) {
  return (
    <Link
      className="bg-base-100 rounded-2xl py-4 px-4 block"
      to="/app/group/123/post/777"
    >
      <div className="flex gap-4 items-center">
        <img
          src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1459&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Profile picture."
          className="h-10 w-10 rounded-full"
        />
        <div className="text-lg">{data.user}</div>
      </div>
      <div className="mt-3">
        <h2 className="font-bold text-xl">{data.title}</h2>
        <h2 className="mt-2 line-clamp-3">{data.body}</h2>
      </div>
      <div className="mt-4 inline-block px-4 py-3 bg-base-200 rounded-xl">
        <div className="flex gap-2">
          <Icon icon={<GoComment />} />
          <span>{data.amountComments}</span>
        </div>
      </div>
    </Link>
  );
}
