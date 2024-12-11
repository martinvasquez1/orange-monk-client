import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getLikes,
  checkLikeStatus,
  likePost,
  removeLike,
} from '../../api/likes';
import { jwtDecode } from 'jwt-decode';

import Icon from '../../components/Icon';
import { GoComment, GoHeart, GoHeartFill } from 'react-icons/go';

function LoadingSkeleton() {
  return (
    <div className="mt-4 flex gap-4">
      <div className="skeleton h-12 w-20 rounded-xl bg-base-200 hover:bg-base-300"></div>
      <div className="skeleton h-12 w-20 rounded-xl bg-base-200 hover:bg-base-300"></div>
    </div>
  );
}

export default function PostStats({ data }) {
  const userId = jwtDecode(localStorage.getItem('jwt')).id;
  const postId = data._id;

  const queryClient = useQueryClient();

  const {
    isLoading,
    isError,
    data: likesData,
  } = useQuery({
    queryKey: [postId, 'likes'],
    queryFn: () => getLikes(postId),
  });

  const {
    isLoading: isLoadingLikeStatus,
    isError: isErrorLikeStatus,
    data: likeStatusData,
  } = useQuery({
    queryKey: [postId, 'likes', 'status'],
    queryFn: () => checkLikeStatus(postId, userId),
  });

  const likeMutation = useMutation({
    mutationFn: likePost,
    onSuccess: () => {
      queryClient.invalidateQueries([postId, 'likes', 'status']);
      queryClient.invalidateQueries([postId, 'likes']);
    },
  });

  const dislikeMutation = useMutation({
    mutationFn: removeLike,
    onSuccess: () => {
      queryClient.invalidateQueries([postId, 'likes', 'status']);
      queryClient.invalidateQueries([postId, 'likes']);
    },
  });

  function handleLike(e) {
    e.preventDefault();

    if (hasLikedPost) {
      dislikeMutation.mutate({ id: postId, userId });
    } else {
      likeMutation.mutate({ id: postId, userId });
    }
  }

  if (isLoading || isLoadingLikeStatus) return <LoadingSkeleton />;
  if (isError || isErrorLikeStatus) return 'Error!';

  const hasLikedPost = likeStatusData.data;

  return (
    <div className="mt-4 flex gap-4">
      <button
        type="button"
        onClick={handleLike}
        className={`flex gap-2 rounded-box bg-base-200 px-4 py-3 hover:bg-base-300`}
        disabled={likeMutation.isPending || dislikeMutation.isPending}
      >
        <Icon
          icon={hasLikedPost ? <GoHeartFill /> : <GoHeart />}
          color={hasLikedPost ? 'primary' : ''}
        />
        <span>{likesData.data}</span>
      </button>
      <div className="flex gap-2 rounded-box bg-base-200 px-4 py-3 hover:bg-base-300">
        <Icon icon={<GoComment />} />
        <span>{data.comments.length}</span>
      </div>
    </div>
  );
}
