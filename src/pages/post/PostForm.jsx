export default function PostForm({
  onSubmit,
  setTitle,
  setContent,
  title,
  content,
  handleCancel,
  submitBtnText,
  isPending,
}) {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        className="input input-bordered w-full text-2xl font-bold text-base-content"
        placeholder="Post title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        required
      />
      <textarea
        type="text"
        className="textarea textarea-bordered mt-2 h-40 w-full text-lg"
        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        onChange={(e) => setContent(e.target.value)}
        value={content}
        required
      />
      <div className="mt-4 flex justify-end gap-4">
        <button
          type="button"
          className="btn"
          onClick={handleCancel}
          disabled={isPending}
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-primary" disabled={isPending}>
          {submitBtnText}
        </button>
      </div>
    </form>
  );
}
