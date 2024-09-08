export default function GroupColumns({ left, right }) {
  return (
    <div className="mt-4 flex gap-4">
      <div className="flex-[3_3_0%]">{left}</div>
      <div className="hidden flex-1 md:block">{right}</div>
    </div>
  );
}
