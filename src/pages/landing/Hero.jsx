export default function Hero() {
  return (
    <div className="relative flex min-h-[80vh] items-center justify-center">
      <div className="mx-auto flex w-full max-w-4xl flex-col justify-center">
        <p className="text-center font-crimson text-8xl font-bold sm:text-9xl md:text-[10rem]">
          Monk
        </p>
      </div>
      {/*
      <div
        className="absolute left-1/2 top-1/2 -z-10 aspect-square h-[30rem] -translate-x-1/2 -translate-y-1/2 transform rounded-full blur-2xl"
        style={{ background: 'radial-gradient(circle, #ef77b3, #ffffff)' }}
      ></div>
       */}
    </div>
  );
}
