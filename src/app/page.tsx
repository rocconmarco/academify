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
        <div className="flex flex-col md:flex-row justify-center min-h-screen">
          <div className="md:w-[50%] flex flex-col gap-6">
            <h2 className="text-3xl text-center md:text-left ml-10 mr-10 md:ml-20 lg:ml-36 font-extrabold mt-16">
              What's Academify?
            </h2>
            <p className="text-lg text-center md:text-left ml-10 mr-10 md:ml-20 lg:ml-36">
              A new way to access academic resources and papers. A decentralized
              e-commerce platform for high-quality scientific literature without
              the need of third-party institution. A win-win idea that make
              premium education available to everyone and that supports creators
              directly.
            </p>
          </div>
          <div className="md:w-[50%] flex justify-center">
            <img
              src="./whats-academify-icon.png"
              className="h-96 md:ml-20 md:mr-20 lg:ml-36 lg:mr-36"
            />
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-backgroundColor">
        <div className="flex flex-col md:flex-row justify-center min-h-screen">
          <div className="md:w-[50%] flex justify-center">
            <img src="./ipfs-icon.png" className="h-96 md:mt-10" />
          </div>
          <div className="md:w-[50%] flex flex-col gap-6">
            <h2 className="text-3xl text-center md:text-left md:ml-10 font-extrabold md:mt-16">
              No Intermediaries Involved
            </h2>
            <p className="text-lg text-center ml-10 md:ml-10 md:text-left mr-10 lg:mr-20">
              Enjoy direct access to immutable and decentralized content with
              Academify. Articles are stored on the IPFS network, ensuring that
              no third parties have rights over them. This setup guarantees full
              transparency and security, so you can trust that the resources you
              access are both reliable and free from intermediary control.
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-owlBeige">
        <div className="flex flex-col md:flex-row justify-center min-h-screen">
          <div className="md:w-[50%] flex flex-col gap-6">
            <h2 className="text-3xl text-center md:text-left ml-10 mr-10 md:ml-20 lg:ml-36 font-extrabold mt-16">
              Become a verifier
            </h2>
            <p className="text-lg text-center md:text-left ml-10 mr-10 md:ml-20 lg:ml-36">
              Give your contribution to the community by quality-checking the
              articles. Help Academify maintain premium quality resources
              through high-standard revisioning and earn $OWL rewards for your
              efforts.
            </p>
          </div>
          <div className="md:w-[50%] flex justify-center">
            <img
              src="./verify-icon-2.png"
              className="h-96 md:ml-20 md:mr-20 lg:ml-36 lg:mr-36"
            />
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-backgroundColor">
        <div className="flex flex-col md:flex-row justify-center min-h-screen">
          <div className="md:w-[50%] flex justify-center">
            <img src="./owl-token-icon.png" className="h-96 md:mt-10" />
          </div>
          <div className="md:w-[50%] flex flex-col gap-6">
            <h2 className="text-3xl text-center md:text-left md:ml-10 font-extrabold md:mt-16">
              $OWL Token (Coming Soon)
            </h2>
            <p className="text-lg text-center ml-10 md:ml-10 md:text-left mr-10 lg:mr-20">
              Purchase your articles with $OWL, the new cryptocurrency of the
              Academify ecosystem. Request some $OWL with the faucet function
              and start reading premium quality articles for free.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
