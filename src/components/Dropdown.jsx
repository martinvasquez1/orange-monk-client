import React from 'react';

export default function OptionsButton({ trigger, children }) {
  return (
    <div className="dropdown dropdown-end">
      {trigger}
      <ul
        tabIndex={0}
        className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow-md"
      >
        {React.Children.map(children, (child) => (
          <li>{child}</li>
        ))}
      </ul>
    </div>
  );
}
