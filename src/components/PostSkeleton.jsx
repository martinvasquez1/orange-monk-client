export default function LoadingSkeleton({ amount = 1, numLines = 1 }) {
  return (
    <div className="space-y-6 rounded-2xl">
      {Array.from({ length: amount }).map((_, index) => (
        <div
          key={index}
          className="block rounded-2xl bg-base-100 px-4 py-4 shadow"
        >
          <div className="flex items-center gap-4">
            <div className="skeleton h-10 w-10 rounded-full"></div>
            <div className="skeleton h-6 w-20"></div>
          </div>
          <div className="mt-3">
            <div className="skeleton h-6 w-full max-w-72"></div>
            {Array.from({ length: numLines }).map((_, index) => (
              <div key={index} className="skeleton mt-2 h-5 w-full"></div>
            ))}
          </div>
          <div className="mt-4 flex gap-4">
            <div className="skeleton inline-block h-11 w-16 rounded-xl"></div>
            <div className="skeleton inline-block h-11 w-16 rounded-xl"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
