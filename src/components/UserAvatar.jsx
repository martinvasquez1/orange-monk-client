export default function UserAvatar({
  url,
  username,
  color,
  size,
  hideUsername = false,
}) {
  const firstLetter = username.charAt(0).toUpperCase();

  return (
    <div className="flex items-center gap-4">
      {url ? (
        <img
          src={url}
          alt="Profile picture."
          className={`skeleton ${size === 'xl' ? 'h-20 w-20' : 'h-10 w-10'} rounded-full`}
        />
      ) : (
        <div
          alt="Profile picture."
          className={`flex ${size === 'xl' ? 'h-20 w-20' : 'h-10 w-10'} items-center justify-center rounded-full bg-base-300 ${color}`}
        >
          <span className={`${size === 'xl' && 'text-3xl'}`}>
            {firstLetter}
          </span>
        </div>
      )}
      {!hideUsername && (
        <div
          className={`${size === 'xl' ? 'bold text-2xl' : 'text-lg'} line-clamp-1`}
        >
          {username}
        </div>
      )}
    </div>
  );
}
