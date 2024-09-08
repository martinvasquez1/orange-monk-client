export default function CreateComment() {
  return (
    <div className="flex gap-4">
      <img
        src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1459&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Profile picture."
        className="h-10 w-10 rounded-full"
      />
      <form className="w-full" onClick={(e) => e.preventDefault()}>
        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="Write a comment"
        ></textarea>
        <div className="flex justify-end gap-4">
          <button type="button" className="btn mt-4">
            Clear
          </button>
          <button type="submit" className="btn btn-primary mt-4">
            Comment
          </button>
        </div>
      </form>
    </div>
  );
}
