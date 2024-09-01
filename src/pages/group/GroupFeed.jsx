import { GoComment } from 'react-icons/go';
import Icon from './../../components/Icon';

const posts = [
  {
    user: 'MovieBuff92',
    title: 'Why "Inception" is the Best Sci-Fi Film of the Decade',
    body: 'Inception stands out as one of the most innovative sci-fi films of the past decade, merging a labyrinthine plot with awe-inspiring visuals. Christopher Nolan’s film intricately explores the concept of dreams within dreams, making viewers question the very nature of reality. The film’s narrative complexity is matched by its stunning special effects and a hauntingly memorable score by Hans Zimmer. It’s not just a movie but an experience that engages the mind and senses alike. What are your personal reflections on how Inception has impacted the genre, or do you think there are other films that rival its brilliance?',
    hoursAgo: '2 hours ago',
    amountComments: 4,
  },
  {
    user: 'CinephileAlice',
    title: 'Upcoming Releases I’m Excited About!',
    body: 'The cinematic landscape is brimming with excitement as we approach some highly anticipated releases. I’m particularly thrilled about Dune: Part Two, which promises to continue the epic saga with even more depth and grandeur. Additionally, the new Spider-Man movie has generated a buzz with its potential to bring fresh and exhilarating twists to our beloved web-slinger. I’d love to hear what other films you’re eagerly awaiting this year. Are there any hidden gems or big blockbusters on your radar? Let’s dive into the upcoming cinematic adventures!',
    hoursAgo: '5 hours ago',
    amountComments: 11,
  },
  {
    user: 'DirectorFan47',
    title: 'Did Anyone Catch the New Tarantino Movie?',
    body: 'Quentin Tarantino’s latest film has hit the screens, and it’s nothing short of a cinematic feast. From the opening scene to the final credits, Tarantino’s signature style is on full display—sharp dialogues, intricate character arcs, and an impeccable blend of humor and suspense. The film’s storytelling prowess and character development are truly exceptional. I watched it last night and am still buzzing from the experience. What are your thoughts on the film’s impact, its standout performances, and its place within Tarantino’s filmography? Let’s share our opinions and dissect the latest addition to his impressive oeuvre!',
    hoursAgo: '8 hours ago',
    amountComments: 17,
  },
  {
    user: 'FilmNerd123',
    title: 'Discussion: Best Movie Soundtracks',
    body: 'Movie soundtracks often play a pivotal role in shaping the emotional landscape of a film, and some scores manage to transcend the screen, becoming iconic pieces of music in their own right. For me, Interstellar stands out with its hauntingly beautiful score by Hans Zimmer, which perfectly complements the film’s vast and profound exploration of space and time. It’s a soundtrack that not only enhances the movie but also holds its own as an extraordinary piece of music. I’m keen to hear what other soundtracks have left a lasting impression on you. Whether it’s a stirring orchestral score or a memorable theme, let’s discuss the soundtracks that have moved us!',
    hoursAgo: '12 hours ago',
    amountComments: 2,
  },
  {
    user: 'RetroFilmie',
    title: 'Classic Movie Night: “Casablanca”',
    body: 'There’s something truly magical about classic films, and Casablanca is a prime example of timeless cinema. I recently revisited this masterpiece and was struck once again by its charm and emotional depth. The film’s memorable lines, unforgettable characters, and its blend of romance and drama continue to resonate with audiences today. Casablanca is more than just a film; it’s a piece of cinematic history that captures the essence of its era. Who else has a soft spot for classic films? Let’s come together to reminisce and discuss what makes these timeless treasures so special. What are your favorite classic films and what impact have they had on you?',
    hoursAgo: '1 day ago',
    amountComments: 43,
  },
];

export default function GroupFeed() {
  return (
    <div className="space-y-8 mt-6">
      {posts.map((post) => {
        return (
          <div className="hover:bg-gray-100 rounded-2xl py-2 px-4">
            <div className="flex gap-4 items-center">
              <img
                src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1459&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Profile picture."
                className="h-10 w-10 rounded-full"
              />
              <div className="text-lg">{post.user}</div>
            </div>
            <div className="mt-3">
              <h2 className="font-bold text-xl">{post.title}</h2>
              <h2 className="mt-2 line-clamp-3">{post.body}</h2>
            </div>
            <div className="mt-4 hover:bg-slate-200 inline-block px-4 py-2 bg-slate-100 rounded-xl">
              <div className="flex gap-2">
                <Icon icon={<GoComment />} />
                <span>{post.amountComments}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
