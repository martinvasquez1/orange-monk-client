export default function Mobile() {
  return (
    <div className="mx-auto mt-28 flex max-w-5xl flex-col gap-8 px-10 md:flex-row md:gap-16">
      <div className="mx-10">
        <h2 className="text-5xl font-bold">Lorem ipsum</h2>
        <p className="font-base mt-3 max-w-2xl text-xl text-base-content/70">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          possimus aspernatur cupiditate a numquam beatae aliquid magnam!
        </p>
      </div>
      <div className="mx-auto">
        <div className="mockup-phone">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1">
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1732740676396-ece9a9148342?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
