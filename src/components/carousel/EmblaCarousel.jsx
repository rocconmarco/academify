"use client"

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

export default function EmblaCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel(
      { loop: true }
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
              <img src="/hero-images/hero-image-1.webp"/>
            </div>
            <div className="embla__slide">
              <img src="/hero-images/hero-image-2.webp"/>
            </div>
            <div className="embla__slide">
              <img src="/hero-images/hero-image-3.webp"/>
            </div>
            <div className="embla__slide">
              <img src="/hero-images/hero-image-4.webp"/>
            </div>
            <div className="embla__slide">
              <img src="/hero-images/hero-image-5.webp"/>
            </div>
          </div>
        </div>
      </div>
    );
  }