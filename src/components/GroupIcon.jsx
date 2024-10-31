import Icon from './../components/Icon';

import { FaBomb } from 'react-icons/fa6';
import { FaBurger } from 'react-icons/fa6';
import { FaCrow } from 'react-icons/fa6';
import { FaDharmachakra } from 'react-icons/fa6';
import { FaDiceFive } from 'react-icons/fa6';
import { FaFortAwesome } from 'react-icons/fa6';

const iconMap = {
  bomb: <FaBomb />,
  burger: <FaBurger />,
  crow: <FaCrow />,
  dharmachakra: <FaDharmachakra />,
  diceFive: <FaDiceFive />,
  fortAwesome: <FaFortAwesome />,
};

export default function GroupIcon({ icon = 'crow' }) {
  const selectedIcon = iconMap[icon];

  return (
    <div className="flex aspect-square h-20 w-20 items-center justify-center rounded-full bg-base-300/50">
      <Icon icon={selectedIcon} />
    </div>
  );
}
