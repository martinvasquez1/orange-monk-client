export default function LoadingIndicator({ type = 'ring' }) {
  let indicator = (
    <span className="loading loading-spinner loading-lg text-primary"></span>
  );

  if (type == 'ring') {
    indicator = (
      <span className="loading loading-ring loading-lg text-primary"></span>
    );
  }

  return (
    <div className="flex h-52 items-center justify-center">{indicator}</div>
  );
}
