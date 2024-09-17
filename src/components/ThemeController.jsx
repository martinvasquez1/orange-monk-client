import { useEffect } from 'react';
import { themeChange } from 'theme-change';

const themes = [
  'dark',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'synthwave',
  'retro',
  'cyberpunk',
  'valentine',
  'halloween',
  'garden',
  'forest',
  'aqua',
  'lofi',
  'pastel',
  'fantasy',
  'wireframe',
  'black',
  'luxury',
  'dracula',
  'cmyk',
  'autumn',
  'business',
  'acid',
  'lemonade',
  'night',
  'coffee',
  'winter',
  'dim',
  'nord',
  'sunset',
];

export default function ThemeController() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return (
    <select data-choose-theme className="p-4">
      <option value="">Default</option>
      {themes.map((theme) => (
        <option key={theme} value={theme}>
          {theme}
        </option>
      ))}
    </select>
  );
}
