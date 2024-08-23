"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback } from "react";

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide relative">
              {/* Immagine di sfondo */}
              <img
                className="absolute inset-0 w-full h-full object-cover z-0"
                src="/hero-images/hero-image-1.webp"
              />

              {/* Layer nero con opacità */}
              <div className="absolute inset-0 bg-black bg-opacity-40 pointer-events-none z-10"></div>

              {/* Sfumatura */}
              <div className="absolute inset-0 bg-gradient-radial from-black/50 via-black/20 to-white/10 pointer-events-none z-20"></div>

              {/* Testo */}
              <div className="min-h-screen flex flex-col items-center justify-center px-10 relative z-30">
                <header className="flex flex-col gap-6 text-white">
                  <h1 className="text-4xl md:text-6xl text-center font-extrabold">
                    Premium knowledge for{" "}
                    <span className="text-[#ffe0B3]">everyone</span>
                  </h1>
                  <p className="text-lg font-semibold md:text-xl text-center lg:px-44">
                    Breaking down traditional barriers to{" "}
                    <span className="text-[#ffe0B3]">
                      high-quality education{" "}
                    </span>
                    through the security and transparency of{" "}
                    <span className="text-[#ffe0B3]">
                      blockchain technology
                    </span>
                    .
                  </p>
                </header>
              </div>
            </div>

            <div className="embla__slide relative">
              {/* Immagine di sfondo */}
              <img
                className="absolute inset-0 w-full h-full object-cover z-0"
                src="/hero-images/hero-image-2.webp"
              />

              {/* Layer nero con opacità */}
              <div className="absolute inset-0 bg-black bg-opacity-40 pointer-events-none z-10"></div>

              {/* Sfumatura */}
              <div className="absolute inset-0 bg-gradient-radial from-black/50 via-black/20 to-white/10 pointer-events-none z-20"></div>

              {/* Testo */}
              <div className="min-h-screen flex flex-col items-center justify-center px-10 relative z-30">
                <header className="flex flex-col gap-6 text-white">
                  <h1 className="text-4xl md:text-6xl text-center font-extrabold">
                    What's <span className="text-[#ffe0B3]">Academify</span>?
                  </h1>
                  <p className="text-lg font-semibold md:text-xl text-center lg:px-44">
                    A new way to access academic resources and papers. A{" "}
                    <span className="text-[#ffe0B3]">
                      decentralized e-commerce
                    </span>{" "}
                    platform{" "}
                    {/* for high-quality scientific literature without the
                    need of third-party institution. A win-win idea  */}
                    that make{" "}
                    <span className="text-[#ffe0B3]">
                      premium education available to everyone
                    </span>{" "}
                    and that supports creators directly.
                  </p>
                </header>
              </div>
            </div>
            <div className="embla__slide relative">
              {/* Immagine di sfondo */}
              <img
                className="absolute inset-0 w-full h-full object-cover z-0"
                src="/hero-images/hero-image-3.webp"
              />

              {/* Layer nero con opacità */}
              <div className="absolute inset-0 bg-black bg-opacity-40 pointer-events-none z-10"></div>

              {/* Sfumatura */}
              <div className="absolute inset-0 bg-gradient-radial from-black/50 via-black/20 to-white/10 pointer-events-none z-20"></div>

              {/* Testo */}
              <div className="min-h-screen flex flex-col items-center justify-center px-10 relative z-30">
                <header className="flex flex-col gap-6 text-white">
                  <h1 className="text-4xl md:text-6xl text-center font-extrabold">
                    No<span className="text-[#ffe0B3]"> intermediaries</span>{" "}
                    involved
                  </h1>
                  <p className="text-lg font-semibold md:text-xl text-center lg:px-44">
                    Enjoy direct access to{" "}
                    <span className="text-[#ffe0B3]">
                      immutable and decentralized content
                    </span>{" "}
                    with Academify. Articles are stored on the{" "}
                    <span className="text-[#ffe0B3]">IPFS network</span>,
                    ensuring that no third parties have rights over them.{" "}
                    {/* This
                    setup guarantees full transparency and security, so you can
                    trust that the resources you access are both reliable and
                    free from intermediary control. */}
                  </p>
                </header>
              </div>
            </div>
            <div className="embla__slide relative">
              {/* Immagine di sfondo */}
              <img
                className="absolute inset-0 w-full h-full object-cover z-0"
                src="/hero-images/hero-image-4.webp"
              />

              {/* Layer nero con opacità */}
              <div className="absolute inset-0 bg-black bg-opacity-40 pointer-events-none z-10"></div>

              {/* Sfumatura */}
              <div className="absolute inset-0 bg-gradient-radial from-black/50 via-black/20 to-white/10 pointer-events-none z-20"></div>

              {/* Testo */}
              <div className="min-h-screen flex flex-col items-center justify-center px-10 relative z-30">
                <header className="flex flex-col gap-6 text-white">
                  <h1 className="text-4xl md:text-6xl text-center font-extrabold">
                    Publish <span className="text-[#ffe0B3]">your</span>{" "}
                    articles
                  </h1>
                  <p className="text-lg font-semibold md:text-xl text-center lg:px-44">
                    Submit your articles and be{" "}
                    <span className="text-[#ffe0B3]">rewarded directly</span> by
                    your readers. A community of independent certifiers will
                    review your content to ensure the platform{" "}
                    <span className="text-[#ffe0B3]">
                      always delivers high-quality
                    </span>{" "}
                    resources and insights.
                  </p>
                </header>
              </div>
            </div>
            <div className="embla__slide relative">
              {/* Immagine di sfondo */}
              <img
                className="absolute inset-0 w-full h-full object-cover z-0"
                src="/hero-images/hero-image-5.webp"
              />

              {/* Layer nero con opacità */}
              <div className="absolute inset-0 bg-black bg-opacity-40 pointer-events-none z-10"></div>

              {/* Sfumatura */}
              <div className="absolute inset-0 bg-gradient-radial from-black/50 via-black/20 to-white/10 pointer-events-none z-20"></div>

              {/* Testo */}
              <div className="min-h-screen flex flex-col items-center justify-center px-10 relative z-30">
                <header className="flex flex-col gap-6 text-white">
                  <h1 className="text-4xl md:text-6xl text-center font-extrabold">
                    Become a <span className="text-[#ffe0B3]">Certifier</span>{" "}
                  </h1>
                  <p className="text-lg font-semibold md:text-xl text-center lg:px-44">
                    Give your contribution to the community by <span className="text-[#ffe0B3]">quality-checking</span>{" "}
                    the articles. Help Academify maintain <span className="text-[#ffe0B3]">premium quality
                    resources</span> through high-standard revisioning and earn <span className="text-[#ffe0B3]">$OWL
                    rewards</span> for your efforts.
                  </p>
                </header>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Frecce di navigazione */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-40"
        onClick={scrollPrev}
      >
        <ChevronLeft size={40} color="white" />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-40"
        onClick={scrollNext}
      >
        <ChevronRight size={40} color="white" />
      </button>
    </div>
  );
}
