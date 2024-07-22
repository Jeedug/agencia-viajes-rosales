import React, { useEffect } from "react";

export default function ServicesExplanation() {
  return (
    <section className="flex flex-row bg-white">
      <div className="w-[50%] h-[550px] ">
        <img
          className="w-full h-full object-cover"
          src="/sections/hotels.jpg"
          alt="hotels"
          width="100%"
          height="100%"
          loading="lazy"
          decoding="async"
        />
      </div>
      <article className="flex flex-col w-[50%] gap-5 pl-20 pt-10">
        <h2 className="font-bold text-black/50 tracking-widest ">
          NUESTROS SERVICIOS
        </h2>
        <div className="h-full flex flex-row">
          <div className="flex flex-col gap-6 w-[40%] items-center h-full">
            <span className=" text-[38px] text-black font-bold cursor-pointer text-black/100 select-none">
              Reservacion de viajes.
            </span>
            <span className=" text-[38px] text-black font-bold cursor-pointer hover:text-black/100 select-none transblack">
              Visado y pasaporte.
            </span>
            <span className="text-[38px] text-black font-bold cursor-pointer transition hover:text-black/100 select-none">
              Paquetes y ofertas.
            </span>
          </div>
          <article className="w-[50%] px-5 h-full text-md font-medium flex flex-col  text-gray-500 gap-10">
            <span className=" text-sm font-medium text-black/50 ">
              Servicio viajes a los destinos más populares en el mundo, incluyendo países de América Latina, Asia, Europa, y África.
            </span>
            <span className=" text-sm font-medium text-black/50 ">
              Ofrecemos servicio de visado y pasaporte sin importar a dónde vayas.
            </span>
            <span className=" text-sm font-medium text-black/50 ">
              Paquetes y ofertas para viajes a los destinos más populares en el mundo, in cluyendo países de América Latina, Asia, Europa, y África.
            </span>
          </article>
        </div>
      </article>
    </section>
  );
}
