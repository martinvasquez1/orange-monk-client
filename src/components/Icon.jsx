import { IconContext } from 'react-icons';
import { cva } from 'class-variance-authority';
import PropTypes from 'prop-types';

const iconStyles = cva([''], {
  variants: {
    size: {
      small: ['1.0em'],
      medium: ['1.5em'],
      large: ['2.5em'],
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});

export default function Icon({ icon, color, size, className }) {
  return (
    <IconContext.Provider
      value={{
        size: iconStyles({ size }),
      }}
    >
      <div className={className + ' text-' + color}>{icon}</div>
    </IconContext.Provider>
  );
}

Icon.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string,
  variant: PropTypes.string,
};
