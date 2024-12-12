import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getComments } from '../../api/comments';

import Comment from './Comment.jsx';
import CreateComment from './CreateComment.jsx';
import NoDataDisplay from '../../components/NoDataDisplay';
import LoadingIndicator from '../../components/LoadingIndicator';

export default function CommentsSection() {
  const { postId } = useParams();
  const { isLoading, isError, data } = useQuery({
    queryKey: ['posts', postId, 'comments'],
    queryFn: () => getComments(postId),
  });

  if (isLoading) return <LoadingIndicator />;
  if (isError) return <p>Error!</p>;

  const comments = data.data.comments;
  const hasNoComments = comments.length === 0;

  return (
    <div className="mb-20 mt-4 rounded-box bg-base-100 p-4 py-6 shadow">
      <CreateComment />
      <div className="space-y-10 pt-2">
        {hasNoComments ? (
          <NoDataDisplay
            top="No Comments Yet!"
            bottom="Don't be shy 🫣"
            noBackground={true}
          />
        ) : (
          comments.map((comment) => (
            <Comment data={comment} key={comment._id} />
          ))
        )}
      </div>
    </div>
  );
}
