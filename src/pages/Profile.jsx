const data = {
  username: 'CinephileAlice',
  biography:
    'Passionate movie lover with a particular interest in sci-fi and classic films. Always on the lookout for the latest releases and hidden gems in cinema. Enjoys discussing film theory, favorite directors, and everything related to the world of movies. Feel free to reach out if you want to chat about the latest blockbusters or timeless classics!',
};

export default function Profile() {
  return (
    <div className="mt-8 bg-white p-4 rounded-2xl shadow-sm">
      <div className="flex gap-4 items-center">
        <img
          src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1459&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Profile picture."
          className="h-20 w-20 rounded-full"
        />
        <div className="text-2xl font-bold">{data.username}</div>
      </div>
      <div className="mt-8">{data.biography}</div>
    </div>
  );
}
