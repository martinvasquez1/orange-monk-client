import { GoComment } from 'react-icons/go';
import { Link } from 'react-router-dom';
import Icon from './../../components/Icon';
import VideoPlayer from './../../components/VideoPlayer';

export default function PostPreview({ data }) {
  const regex =
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|watch\?v=|watch\?.*v=|v=|embed\/|shorts\/|.+\/|.+\/)([a-zA-Z0-9_-]{11})/;
  const match = data.body.match(regex);
  const videoId = match ? match[1] : null;
  const hasYoutubeUrl = videoId !== null;

  return (
    <Link
      className="block rounded-2xl bg-base-100 px-4 py-4 shadow"
      to="/app/group/123/post/777"
    >
      <div className="flex items-center gap-4">
        <img
          src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1459&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Profile picture."
          className="h-10 w-10 rounded-full"
        />
        <div className="text-lg">{data.user}</div>
      </div>
      <div className="mt-3">
        <h2 className="text-xl font-bold">{data.title}</h2>
        <h2 className="mt-2 line-clamp-3 text-base-content/70">{data.body}</h2>
        {hasYoutubeUrl && <VideoPlayer id={videoId} />}
      </div>
      <div className="mt-4 inline-block rounded-xl bg-base-200 px-4 py-3">
        <div className="flex gap-2">
          <Icon icon={<GoComment />} />
          <span>{data.amountComments}</span>
        </div>
      </div>
    </Link>
  );
}
