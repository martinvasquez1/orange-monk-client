import { useState, useEffect } from 'react';

export default function Settings() {
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
    <div className="4 w-full flex-1 rounded-2xl bg-base-100 p-4">
      <h1 className="text-2xl font-bold">Settings</h1>
      <div className="flex items-center justify-between gap-8">
        <div className="mt-4">
          <p className="font-bold text-base-content">Keep Current Theme</p>
          <p className="text-sm text-base-content/70">
            Disable automatic theme switching when selecting a group, allowing
            you to maintain your preferred visual style throughout the app.
          </p>
        </div>
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
      </div>
    </div>
  );
}
