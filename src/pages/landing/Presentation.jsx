export default function Presentation({}) {
  return (
    <div className="mx-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-10 rounded-3xl bg-base-200/70 p-20 md:flex-row">
        <div className="h-full">
          <h2 className="text-6xl font-bold">Lorem ipsum dolor</h2>
          <p className="font-base mt-3 max-w-2xl text-2xl text-base-content/70">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            necessitatibus fuga eius aliquid velit suscipit tempora perferendis
            officiis dolores dolore. Cum, deleniti!
          </p>
        </div>
        <div className="grid aspect-square w-full grid-cols-4 grid-rows-4 gap-4 md:w-[30rem]">
          <div className="col-span-3 rounded-2xl bg-red-500"></div>
          <div className="col-span-3 col-start-2 row-span-3 row-start-2 rounded-2xl bg-blue-500"></div>
          <div className="col-start-4 row-start-1 rounded-2xl bg-green-500"></div>
          <div className="col-start-1 row-span-2 row-start-2 rounded-2xl bg-yellow-400"></div>
          <div className="row-start-4 rounded-2xl bg-orange-400"></div>
        </div>
      </div>
    </div>
  );
}
