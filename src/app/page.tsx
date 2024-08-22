"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true } /* [
    Autoplay({ delay: 5000 }),
  ] */
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla -z-10">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <img src="/hero-images/hero-image-1.webp" /* loading="lazy" */ />
          </div>
          <div className="embla__slide">
            <img src="/hero-images/hero-image-2.webp" /* loading="lazy" */ />
          </div>
          <div className="embla__slide">
            <img src="/hero-images/hero-image-3.webp" /* loading="lazy" */ />
          </div>
          <div className="embla__slide">
            <img src="/hero-images/hero-image-4.webp" /* loading="lazy" */ />
          </div>
          <div className="embla__slide">
            <img src="/hero-images/hero-image-5.webp" /* loading="lazy" */ />
          </div>
        </div>
      </div>
      <div>
        <button className="embla__prev" onClick={scrollPrev}>
          Prev
        </button>
        <button className="embla__next" onClick={scrollNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <div className="relative">
        <EmblaCarousel />
        <div className="absolute top-0 left-0 w-full h-full z-0 bg-black bg-opacity-50">
          <div className="absolute inset-0 bg-gradient-radial from-black/50 via-black/20 to-white/10"></div>
        </div>
        <div className="min-h-screen flex flex-col items-center justify-center px-2 sm:px-20 xl:px-28 absolute top-0 z-10">
          <header className="flex flex-col gap-6 text-white">
            <h1 className="text-4xl md:text-6xl text-center font-extrabold">
              Premium knowledge for <span className="text-[#ffe0B3]">everyone</span>
            </h1>
            <p className="text-lg font-semibold md:text-xl text-center lg:px-36">
              Breaking down traditional barriers to <span className="text-[#ffe0B3]">high-quality education </span>
              through the security and transparency of <span className="text-[#ffe0B3]">blockchain technology</span>.
            </p>
          </header>
        </div>
      </div>

      {/* <div className="min-h-screen bg-owlBeige">
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
      </div> */}
    </>
  );
}
