import { useEffect } from 'react';
import { themeChange } from 'theme-change';

export default function ThemeController() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return (
    <select data-choose-theme className="p-4">
      <option value="">Default</option>
      <option value="dark">Dark</option>
      <option value="coffee">Coffee</option>
      <option value="forest">Forest</option>
    </select>
  );
}
