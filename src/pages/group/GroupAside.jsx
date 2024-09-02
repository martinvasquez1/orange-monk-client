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
    <aside className="flex flex-col gap-8">
      {data.map((info) => {
        return (
          <div key={info.id} className="bg-white p-4 rounded-2xl shadow-sm">
            <h3 className="font-bold text-lg">{info.title}</h3>
            <p className="mt-4">{info.body}</p>
          </div>
        );
      })}
    </aside>
  );
}
