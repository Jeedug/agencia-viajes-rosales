import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../shadcdn/Carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Promotions() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
          active: true,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent>
        <CarouselItem>
          <div className="w-full h-[700px] flex items-center">
            <img
              width="100%"
              height="100%"
              loading="lazy"
              decoding="async"
              className=" w-full object-cover h-full object-center grayscale-[20%] contrast-[60%] absolute"
              src="/promotions/promotion-01.webp"
              alt="airplane flight promotion"
            />
            <div className="relative left-7 md:left-24 top-[120px] flex flex-col w-[300px] md:w-full">
              <span className="text-white font-bold text-[52px] ">
                Titulo de la promocion
              </span>
              <span className="text-white/75 font-medium text-xl">
                Explicacion de la promocion con toda la explicacion que esto con
                lleva, ofertas y mas
              </span>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="w-full h-[700px] flex items-center">
            <img
              className=" w-full object-cover h-full object-center grayscale-[20%] contrast-[60%] absolute"
              width="100%"
              height="100%"
              loading="lazy"
              decoding="async"
              src="/promotions/promotion-02.webp"
              alt="airplane flight promotion"
            />
            <div className="relative left-7 md:left-24 top-[120px] flex flex-col w-[300px] md:w-full">
              <span className="text-white font-bold text-[52px] ">
                Titulo de la promocion
              </span>
              <span className="text-white/75 font-medium text-xl">
                Explicacion de la promocion con toda la explicacion que esto con
                lleva, ofertas y mas
              </span>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="w-full h-[700px] flex items-center">
            <img
              className=" w-full object-cover h-full object-center grayscale-[20%] contrast-[60%] absolute"
              width="100%"
              height="100%"
              loading="lazy"
              decoding="async"
              src="/promotions/promotion-03.webp"
              alt="airplane flight promotion"
            />
            <div className="relative left-7 md:left-24 top-[120px] flex flex-col w-[300px] md:w-full">
              <span className="text-white font-bold text-[52px] ">
                Titulo de la promocion
              </span>
              <span className="text-white/75 font-medium text-lg ">
                Explicacion de la promocion con toda la explicacion que esto con
                lleva, ofertas y mas
              </span>
              <button className="text-black font-semibold rounded-full py-2 px-4 bg-white w-[120px] mt-2 hover:bg-gray-200 transition">
                Saber mas
              </button>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
