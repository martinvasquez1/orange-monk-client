import Navbar from '../components/Navbar';

export default function NotFound() {
  return (
    <div>
      <Navbar />
      <div className="mt-40 flex justify-center">
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-5xl font-bold">Oops!</h1>
          <p className="text-lg">Sorry, an unexpected error has occurred.</p>
        </div>
      </div>
    </div>
  );
}