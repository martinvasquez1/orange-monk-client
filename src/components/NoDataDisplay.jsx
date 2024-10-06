export default function NoDataDisplay({
  top,
  bottom,
  noBackground = false,
  children,
}) {
  return (
    <div
      className={`mx-0 flex flex-col items-center gap-2 rounded-2xl py-24 text-center sm:py-36 ${noBackground ? '' : 'bg-base-100 px-8 shadow'}`}
    >
      <div className="text-2xl font-bold">{top}</div>
      <div className="text-base-content/70">{bottom}</div>
      {children}
    </div>
  );
}
