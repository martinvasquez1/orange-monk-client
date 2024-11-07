export default function Option({ name, body, input }) {
  return (
    <div className="flex flex-col justify-between gap-6 pt-4 md:flex-row md:gap-8">
      <div className="md:w-5/6">
        <p className="text-lg text-base-content">{name}</p>
        <p className="text-sm text-base-content/70">{body}</p>
      </div>
      <div className="flex w-full items-center justify-center md:w-1/6">
        {input}
      </div>
    </div>
  );
}
