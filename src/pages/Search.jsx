import Icon from './../components/Icon';
import { IoSearchSharp } from 'react-icons/io5';

const groups = [
  {
    name: 'Innovators',
    description:
      'A group for enthusiasts and professionals in the tech industry to share ideas and trends.',
    imageUrl: 'https://example.com/images/tech-innovators.jpg',
  },
  {
    name: 'Book Club',
    description:
      'Join fellow readers to discuss the latest books, share reviews, and enjoy literary conversations.',
    imageUrl: 'https://example.com/images/book-club.jpg',
  },
  {
    name: 'Fitness Fanatics',
    description:
      'Connect with others who are passionate about fitness, wellness, and healthy living.',
    imageUrl: 'https://example.com/images/fitness-fanatics.jpg',
  },
  {
    name: 'Travel Enthusiasts',
    description:
      'Share travel experiences, tips, and recommendations with fellow adventurers.',
    imageUrl: 'https://example.com/images/travel-enthusiasts.jpg',
  },
  {
    name: 'Programming Wizards',
    description:
      'A community for developers of all levels to collaborate on projects and share coding tips.',
    imageUrl: 'https://example.com/images/programming-wizards.jpg',
  },
  {
    name: 'Cooking Creatives',
    description:
      'Explore new recipes, cooking techniques, and culinary adventures with a group of food lovers.',
    imageUrl: 'https://example.com/images/cooking-creatives.jpg',
  },
  {
    name: 'Movie Buffs',
    description:
      'Discuss your favorite films, discover new releases, and dive into movie reviews and critiques.',
    imageUrl: 'https://example.com/images/movie-buffs.jpg',
  },
];

export default function Search() {
  return (
    <div className="p-4 rounded-2xl shadow">
      <h1 className="text-3xl font-bold">Search groups</h1>
      <form onSubmit={(e) => e.preventDefault()} className="mt-4">
        <div className="flex">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full rounded-none rounded-tl-2xl rounded-bl-2xl"
          />
          <button
            type="submit"
            className="bg-primary flex  items-center justify-center px-6 rounded-tr-2xl rounded-br-2xl"
          >
            <Icon icon={<IoSearchSharp />} className="text-primary-content" />
          </button>
        </div>
      </form>
      <div className="gap-4 grid grid-cols-[repeat(auto-fit,minmax(500px,1fr))] mt-6">
        {groups.map((data) => {
          return (
            <div className="bg-base-100  p-4 rounded-xl " key={data.name}>
              <div className="flex gap-4 items-center">
                <img
                  src="https://images.unsplash.com/photo-1599272771314-f3ec16bda3f2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Profile picture."
                  className="h-20 w-20 rounded-full aspect-square object-cover"
                />
                <div>
                  <h2 className="text-lg">{data.name}</h2>
                  <p className="text-sm mt-1">{data.description}</p>
                </div>
                <button type="button" className="btn ">
                  Join
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
