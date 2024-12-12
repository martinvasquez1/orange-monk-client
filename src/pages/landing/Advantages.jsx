import Icon from './../../components/Icon';
import { BiBrush } from 'react-icons/bi';
import { BsEmojiSmile } from 'react-icons/bs';
import { AiOutlineThunderbolt } from 'react-icons/ai';

const advantages = [
  {
    title: 'Customizable',
    body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fugit nesciunt rerum! Earum, facilis',
    style: 'bg-[#3b82f6]',
    icon: <BiBrush />,
  },
  {
    title: 'Feature-Rich',
    body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fugit nesciunt rerum! Earum, facilis',
    style: 'bg-[#22c55e]',
    icon: <AiOutlineThunderbolt />,
  },
  {
    title: 'Friendly',
    body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fugit nesciunt rerum! Earum, facilis',
    style: 'bg-[#fb923c]',
    icon: <BsEmojiSmile />,
  },
];

export default function Advantages({}) {
  return (
    <div className="mx-auto my-32 max-w-6xl">
      <h2 className="mx-auto max-w-3xl text-center text-6xl font-bold">
        Lorem ipsum dolor sit amet consectetur
      </h2>
      <div className="mx-10 mt-20 grid flex-col items-center gap-10 sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] md:flex-row md:gap-8">
        {advantages.map((advantage, index) => (
          <div
            key={index}
            className={`rounded-3xl border p-10 ${advantage.style} pb-20 text-white`}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-3xl font-bold">{advantage.title}</h3>
              <Icon icon={advantage.icon} size="large" className="text-white" />
            </div>
            <p className="mt-3 text-2xl">{advantage.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
