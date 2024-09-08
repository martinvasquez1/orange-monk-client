export default function CreateGroup() {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-3xl rounded-2xl bg-base-100 p-8 shadow">
        <div className="text-2xl font-bold">Create group</div>
        <form>
          <label className="form-control mt-2 w-full max-w-xs">
            <div className="label">
              <span className="label-text">Name</span>
            </div>
            <input
              type="text"
              placeholder="Lorem"
              className="input input-bordered w-full max-w-xs"
              required
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
            ></textarea>
          </label>
          <label className="form-control mt-2">
            <div className="label">
              <span className="label-text">Rules</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Sed ut perspiciatis unde omnis iste natus error sit..."
              required
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
                  defaultChecked
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
                  defaultChecked
                />
              </label>
            </div>
          </div>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Logo</span>
            </div>
            <input
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Banner</span>
            </div>
            <input
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </label>

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
