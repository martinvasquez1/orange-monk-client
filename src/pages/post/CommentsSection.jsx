import Comment from './Comment.jsx';
import CreateComment from './CreateComment.jsx';

const comments = [
  {
    id: 0,
    user: 'ActionFan101',
    body: 'I’m super excited about Dune: Part Two too! The first part was so immersive and well-crafted. I’m hoping they continue the epic scale and intricate storytelling in the next installment.',
  },
  {
    id: 1,
    user: 'ComicBookJunkie',
    body: 'The new Spider-Man movie looks amazing! I’ve seen the trailers and they’ve definitely got me hyped. I’m curious to see what new twists they’ll add to Spider-Man’s story this time.',
  },
  {
    id: 2,
    user: 'SciFiBuff24',
    body: 'Dune: Part One was one of my favorite movies of the last few years. The world-building was incredible, and the visuals were stunning. Part Two has a lot to live up to, but I’m optimistic!',
  },
  {
    id: 3,
    user: 'MarvelFanatic',
    body: 'I’m definitely looking forward to the new Spider-Man movie. I heard there might be some cool crossovers or new villains. This could be another great chapter in Spider-Man’s cinematic journey!',
  },
  {
    id: 4,
    user: 'MovieMaven',
    body: 'Besides Dune and Spider-Man, I’m also keeping an eye out for some indie films that are getting buzz at film festivals. There’s always a chance to discover a hidden gem that surprises everyone.',
  },
  {
    id: 5,
    user: 'FilmExplorer',
    body: 'I’m excited about both of these releases! I love how Dune combines science fiction with a deep narrative, and Spider-Man movies are always a blast with their action and humor. Can’t wait to see what’s next!',
  },
];

export default function CommentsSection() {
  return (
    <div className="mt-4 rounded-2xl bg-base-100 p-4 py-6 shadow">
      <CreateComment />
      <div className="space-y-10 pt-2">
        {comments.map((comment) => (
          <Comment data={comment} key={comment.id} />
        ))}
      </div>
    </div>
  );
}
