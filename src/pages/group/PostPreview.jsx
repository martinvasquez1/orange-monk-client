import { Link } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

import VideoPlayer from '../../components/VideoPlayer';
import PostOptionsButton from '../post/PostOptionsButton';
import UserAvatar from '../../components/UserAvatar';
import PostStats from '../post/PostStats';

export default function PostPreview({ data }) {
  const userId = jwtDecode(localStorage.getItem('jwt')).id;
  const isUserPost = userId === data.author._id;

  const regex =
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|watch\?v=|watch\?.*v=|v=|embed\/|shorts\/|.+\/|.+\/)([a-zA-Z0-9_-]{11})/;
  const match = data.content.match(regex);
  const videoId = match ? match[1] : null;
  const hasYoutubeUrl = videoId !== null;

  return (
    <div className="block rounded-2xl bg-base-100 px-4 py-4 shadow">
      <div className="flex justify-between">
        <UserAvatar
          url={data.author.profilePicture}
          username={data.author.username}
          color={data.author.placeholderColor}
        />
        {isUserPost && <PostOptionsButton postId={data._id} />}
      </div>
      <Link to={`post/${data._id}`}>
        <div className="mt-3">
          <h2 className="text-xl font-bold">{data.title}</h2>
          <h2 className="mt-2 line-clamp-3 text-base-content/70">
            {data.content}
          </h2>
          {hasYoutubeUrl && <VideoPlayer id={videoId} />}
        </div>
        <PostStats data={data} />
      </Link>
    </div>
  );
}
