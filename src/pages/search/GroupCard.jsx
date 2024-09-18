import { useMutation } from '@tanstack/react-query';
import { joinGroup } from '../../api/groups';

export default function GroupCard({ data }) {
  const mutation = useMutation({
    mutationFn: () => joinGroup(data._id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['groups'] });
    },
  });

  function handleSubmit(e) {
    e.preventDefault();
    mutation.mutate();
  }

  return (
    <div className="rounded-xl bg-base-100 p-4 shadow">
      <div className="flex items-center gap-4">
        <img
          src="https://images.unsplash.com/photo-1599272771314-f3ec16bda3f2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="skeleton aspect-square h-20 w-20 rounded-full object-cover"
        />
        <div className="flex-1">
          <h2 className="line-clamp-1 text-lg">{data.name}</h2>
          <p className="mt-1 line-clamp-2 text-sm text-base-content/70">
            {data.description}
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <button type="submit" className="btn">
            Join
          </button>
        </form>
      </div>
    </div>
  );
}
