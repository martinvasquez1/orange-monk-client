import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';

import { getGroup, updateGroup } from './../../api/groups';
import ImageInput from '../../components/ImageInput';
import LoadingIndicator from './../../components/LoadingIndicator';

const themes = [
  'dark',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'synthwave',
  'retro',
  'cyberpunk',
  'valentine',
  'halloween',
  'garden',
  'forest',
  'aqua',
  'lofi',
  'pastel',
  'fantasy',
  'wireframe',
  'black',
  'luxury',
  'dracula',
  'cmyk',
  'autumn',
  'business',
  'acid',
  'lemonade',
  'night',
  'coffee',
  'winter',
  'dim',
  'nord',
  'sunset',
];

export default function GroupEdit({}) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);
  const [sidebar, setSidebar] = useState('');
  const [theme, setTheme] = useState('Choose a theme');
  const [previewImage, setPreviewImage] = useState(null);
  const [bannerImage, setBannerImage] = useState(null);

  const { groupId } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isLoading, isError, data } = useQuery({
    queryKey: ['groups', groupId],
    queryFn: () => getGroup(groupId),
  });

  const mutation = useMutation({
    mutationFn: updateGroup,
    onSuccess: (data) => {
      queryClient.invalidateQueries(['groups', groupId]);
      navigate(`/app/group/${groupId}/about`);
    },
  });

  function handleSubmit(e) {
    e.preventDefault();

    const group = data.data.group;
    const dataToSend = {
      groupId,
      name,
      description,
      isPrivate,
      sidebar,
      theme,
      previewImage: previewImage ? previewImage : group.previewImage,
      bannerImage: bannerImage ? bannerImage : group.bannerImage,
    };

    mutation.mutate(dataToSend);
  }

  useEffect(() => {
    if (!data) {
      return;
    }

    const group = data.data.group;
    setName(group.name);
    setDescription(group.description);
    setIsPrivate(group.private);
    setSidebar(group.sidebar);
    setTheme(group.theme);
    setIsPrivate(group.private);
  }, [data]);

  if (isLoading) return <LoadingIndicator />;
  if (isError) return 'Error!';

  return (
    <div className="rounded-box bg-base-100 p-4 shadow">
      <form onSubmit={handleSubmit}>
        <h2 className="mb-2 text-xl font-bold">Update Group</h2>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Name</span>
          </div>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>

        <label className="form-control">
          <div className="label">
            <span className="label-text">Description</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-24"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
        </label>

        <label className="form-control">
          <div className="label">
            <span className="label-text">Sidebar</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-24"
            onChange={(e) => setSidebar(e.target.value)}
            value={sidebar}
          ></textarea>
        </label>

        <div className="flex flex-col gap-4 lg:flex-row">
          <ImageInput
            labelText="Pick a preview image"
            setImage={setPreviewImage}
          />
          <ImageInput
            labelText="Pick a banner image"
            setImage={setBannerImage}
          />
        </div>

        <label className="form-control mt-2 w-full max-w-xs">
          <div className="label">
            <span className="label-text">Theme</span>
          </div>
          <select
            className="select select-bordered"
            onChange={(e) => setTheme(e.target.value)}
            value={theme}
          >
            <option disabled>Choose a theme</option>
            {themes.map((theme) => {
              return <option key={theme}>{theme}</option>;
            })}
          </select>
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
                checked={!isPrivate}
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
                checked={isPrivate}
              />
            </label>
          </div>
        </div>

        <div className="mt-4 flex justify-end gap-4">
          <button
            type="button"
            className="btn"
            disabled={mutation.isPending}
            onClick={() => navigate(`/app/group/${groupId}/about`)}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={mutation.isPending}
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
