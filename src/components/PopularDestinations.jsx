import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../shadcdn/Carousel";
import Autoplay from "embla-carousel-autoplay";

export default function PopularDestinations() {
  return (
    <section className="h-[600px] w-full flex flex-row">
      <div className=" h-full pl-16 py-12 pr-10 flex flex-col">
        <h2 className="font-bold text-black/50 tracking-widest ">
          DESTINOS POPULARES
        </h2>
        <span className=" text-[42px] text-black font-bold cursor-pointer text-black/100 select-none ">
          Obten ofertas y promociones de los lugares más populares
        </span>
        <button className="rounded-full border px-4 py-2 text-black/100 hover:text-black transition hover:bg-gray-100 mt-10 border-gray-300">
          Saber mas
        </button>
      </div>

      <div className="py-10 px-10 w-full">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
              active: true,
            }),
          ]}
          className="h-full w-full "
        >
          <CarouselContent className="h-full w-full gap-[20px]">
            <CarouselItem className="h-full basis-1/2 lg:basis-1/3">
              <article className="bg-black w-[400px] h-[500px] border flex flex-col relative group">
                <img
                  className="w-[400px] h-full object-cover object-center "
                  src="/sections/paris.jpg"
                />
                <div className="absolute flex-col left-0 right-0 bottom-0 border flex items-center transition duration-500 justify-center translate-y-0 group-hover:-translate-y-0  py-2 bg-black/30">
                    <span className=" font-extrabold text-[48px] text-center text-white">
                      Visita Paris
                    </span>
                    <span className=" font-bold text-[17px] text-center text-white group-hover:flex">
                      Encuentra un lugar para visitar
                    </span>
                    <button className=" w-[200px] items-center justify-center h-[25px] py-5 bg-white hover:bg-gray-100 rounded-full text-center font-bold px-4 text-gray-500 hover:text-black transition hidden group-hover:flex">
                      Ver más
                    </button>
                  </div>
              </article>
            </CarouselItem>
            <CarouselItem className="h-full basis-1/2 lg:basis-1/3">
              <article className="bg-black w-[400px] h-[500px] border flex flex-col relative group">
                <img
                  className="w-[400px] h-full object-cover object-center "
                  src="/sections/cancun.jpg"
                />
                <div className="absolute flex-col left-0 right-0 bottom-0 border flex items-center transition duration-500 justify-center translate-y-0 group-hover:-translate-y-0  py-2 bg-black/30">
                    <span className=" font-extrabold text-[48px] text-center text-white">
                      Visita Cancun
                    </span>
                    <span className=" font-bold text-[17px] text-center text-white group-hover:flex">
                      Encuentra un lugar para visitar
                    </span>
                    <button className=" w-[200px] items-center justify-center h-[25px] py-5 bg-white hover:bg-gray-100 rounded-full text-center font-bold px-4 text-gray-500 hover:text-black transition hidden group-hover:flex">
                      Ver más
                    </button>
                  </div>
              </article>
            </CarouselItem>
            <CarouselItem className="h-full basis-1/2 lg:basis-1/3">
              <article className="bg-black w-[400px] h-[500px] border flex flex-col relative group">
                <img
                  className="w-[400px] h-full object-cover object-center "
                  src="/sections/londres.jpg"
                />
                <div className="absolute flex-col left-0 right-0 bottom-0 border flex items-center transition duration-500 justify-center translate-y-0 group-hover:-translate-y-0  py-2 bg-black/30">
                    <span className=" font-extrabold text-[48px] text-center text-white">
                      Visita Londres
                    </span>
                    <span className=" font-bold text-[17px] text-center text-white group-hover:flex">
                      Encuentra un lugar para visitar
                    </span>
                    <button className=" w-[200px] items-center justify-center h-[25px] py-5 bg-white hover:bg-gray-100 rounded-full text-center font-bold px-4 text-gray-500 hover:text-black transition hidden group-hover:flex">
                      Ver más
                    </button>
                  </div>
              </article>
            </CarouselItem>
            <CarouselItem className="h-full basis-1/2 lg:basis-1/3">
              <article className="bg-black w-[400px] h-[500px] border flex flex-col relative group">
                <img
                  className="w-[400px] h-full object-cover object-center "
                  src="/sections/peru.webp"
                />
                <div className="absolute flex-col left-0 right-0 bottom-0 border flex items-center transition duration-500 justify-center translate-y-0 group-hover:-translate-y-0  py-2 bg-black/30">
                    <span className=" font-extrabold text-[48px] text-center text-white">
                      Visita Perú
                    </span>
                    <span className=" font-bold text-[17px] text-center text-white group-hover:flex">
                      Encuentra un lugar para visitar
                    </span>
                    <button className=" w-[200px] items-center justify-center h-[25px] py-5 bg-white hover:bg-gray-100 rounded-full text-center font-bold px-4 text-gray-500 hover:text-black transition hidden group-hover:flex">
                      Ver más
                    </button>
                  </div>
              </article>
            </CarouselItem>
            <CarouselItem className="h-full basis-1/2 lg:basis-1/3">
              <article className="bg-white w-[400px] h-[500px]  flex flex-col relative group">
              </article>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
