import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { createGroup } from './../api/groups';

export default function CreateGroup() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);

  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: createGroup,
    onSuccess: () => {
      navigate('/app');
    },
  });

  function handleSubmit(e) {
    e.preventDefault();
    mutation.mutate({ name, description, isPrivate });
  }

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-3xl rounded-2xl bg-base-100 p-8 shadow">
        <div className="text-2xl font-bold">Create group</div>
        <form onSubmit={handleSubmit}>
          <label className="form-control mt-2 w-full max-w-xs">
            <div className="label">
              <span className="label-text">Name</span>
            </div>
            <input
              type="text"
              placeholder="Lorem"
              className="input input-bordered w-full max-w-xs"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="form-control mt-2">
            <div className="label">
              <span className="label-text">Description</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Sed ut perspiciatis unde omnis iste natus error sit..."
              required
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </label>
          <div className="form-control mt-2">
            <div className="label">
              <span className="label-text">Visibility</span>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text mr-4">Public</span>
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-primary"
                  onChange={(e) => setIsPrivate(false)}
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text mr-4">Private</span>
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-primary"
                  onChange={(e) => setIsPrivate(true)}
                />
              </label>
            </div>
          </div>

          <div className="flex justify-end">
            <button type="submit" className="btn btn-primary mt-4">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
