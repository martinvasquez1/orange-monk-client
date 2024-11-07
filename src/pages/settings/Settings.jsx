import CurrentThemeOption from './CurrentThemeOption';
import DeleteAccount from './DeleteAccount';

export default function Settings() {
  return (
    <div className="4 w-full flex-1 rounded-2xl bg-base-100 p-4">
      <h1 className="text-2xl font-bold">Settings</h1>
      <CurrentThemeOption />
      <DeleteAccount />
    </div>
  );
}
