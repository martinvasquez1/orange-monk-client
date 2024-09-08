const data = [
  {
    title: 'Welcome to Movie Buffs!',
    body: `Here you can chat about all things movies—share your top picks, find out what's new, and engage in lively discussions about reviews and critiques. Dive in and let&s talk films!`,
    id: 0,
  },
  {
    title: 'Maximize Your Experience',
    body: 'To get the most out of Movie Buffs, use the search function to find discussions on your favorite genres and directors. Don’t forget to check out our top threads for insightful reviews and recommendations. Enjoy exploring the world of cinema!',
    id: 1,
  },
];

export default function GroupAside() {
  return (
    <aside className="flex flex-col gap-4">
      {data.map((info) => {
        return (
          <div key={info.id} className="rounded-2xl bg-base-100 p-4 shadow">
            <h3 className="text-lg font-bold">{info.title}</h3>
            <p className="mt-4 text-base-content/70">{info.body}</p>
          </div>
        );
      })}
    </aside>
  );
}
