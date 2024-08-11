export default function Home() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center px-2 sm:px-20 xl:px-28 bg-backgroundColor">
        <header className="flex flex-col gap-6">
          <h1 className="text-4xl md:text-6xl text-center font-extrabold">
            Premium knowledge for everyone
          </h1>
          <p className="text-lg font-light md:text-xl text-center lg:px-36">
            Breaking down traditional barriers to high-quality education through
            the security and transparency of blockchain technology.
          </p>
        </header>
      </div>
      <div className="min-h-screen bg-owlBeige">
        <div className="flex justify-center min-h-screen">
          <div className="w-[50%] flex flex-col gap-6">
            <h2 className="text-3xl ml-20 font-extrabold mt-16">
              What's Academify?
            </h2>
            <p className="text-lg ml-20">
              A new way to access academic resources and papers. A decentralized
              e-commerce platform for high-quality scientific literature without
              the need of third-party institution. A win-win idea that make
              premium education available to everyone and that supports creators
              directly.
            </p>
          </div>
          <div className="w-[50%]">
            <img src="./whats-academify-icon.png" className="h-96" />
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-backgroundColor">
        <div className="flex justify-center min-h-screen">
          <div className="w-[50%]">
            <img src="./whats-academify-icon.png" className="h-96" />
          </div>
          <div className="w-[50%]">
            <h2 className="text-3xl text-center font-extrabold mt-16">Token</h2>
          </div>
        </div>
      </div>
    </>
  );
}
