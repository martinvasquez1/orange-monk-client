import { useState, useEffect } from 'react';

import Option from './Option';

export default function CurrentThemeOption() {
  const [disableThemeSwitch, setDisableThemeSwitch] = useState(false);

  useEffect(() => {
    const localThemeSwitch = localStorage.getItem('disableThemeSwitch');

    if (localThemeSwitch === 'true') {
      setDisableThemeSwitch(true);
    } else {
      setDisableThemeSwitch(false);
    }
  }, []);

  function disableThemeValue() {
    const localThemeSwitch = localStorage.getItem('disableThemeSwitch');

    if (localThemeSwitch === 'true') {
      return true;
    } else {
      return false;
    }
  }

  return (
    <Option
      name="Keep Current Theme"
      body="Disable automatic theme switching when selecting a group, allowing you to maintain your preferred visual style throughout the app."
      input={
        <input
          type="checkbox"
          className="toggle toggle-primary"
          checked={disableThemeValue()}
          onChange={(e) => {
            const isActive = e.target.checked === true;
            setDisableThemeSwitch(isActive);
            localStorage.setItem('disableThemeSwitch', isActive);
          }}
        />
      }
    />
  );
}
