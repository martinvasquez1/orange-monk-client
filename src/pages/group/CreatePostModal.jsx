export default function CreatePostModal() {
  const id = 'create_post_modal';

  return (
    <dialog id={id} className="modal modal-bottom sm:modal-middle">
      <div className="modal-box sm:w-2/3 sm:max-w-[600px]">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">
            ✕
          </button>
        </form>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            document.getElementById(id).close();
          }}
        >
          <h3 className="text-xl font-bold">Create Post</h3>
          <label className="form-control mt-2 w-full max-w-xs">
            <div className="label">
              <span className="label-text">Title</span>
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
              <span className="label-text">Body</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Sed ut perspiciatis unde omnis iste natus error sit..."
              required
            ></textarea>
          </label>

          <div className="mt-6 flex justify-end">
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
