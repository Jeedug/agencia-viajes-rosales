import React from "react";

export default function Request() {
  return (
    <section className="flex flex-col gap-5 w-full h-[600px] items-center justify-center">
      <img
        className="w-full h-[600px] object-cover absolute contrast-[80%]"
        src="/sections/request.jpg"
      />
      <article className="flex flex-col z-10  border p-16 bg-black/15">
        <span className="text-[24px] font-bold text-white">
          ¿Solicitud de viaje?
        </span>
        <div className="flex flex-row items-center justify-between gap-10">
          <div className="flex flex-col">
            <span className="text-[16px] font-bold text-white">
              ¿Quieres viajar a Europa?
            </span>
            <span className="text-[16px] font-bold text-white">
              ¿Quieres viajar a América?
            </span>
            <span className="text-[16px] font-bold text-white">
              ¿Quieres viajar a Asia?
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[16px] font-bold text-white">
              viajesrosales@hotmail.com
            </span>
            <span className="text-[16px] font-bold text-white">
              878 782 5877
            </span>
          </div>
        </div>
        <h2 className="text-[24px] font-extrabold tracking-tight text-white">
          Suscrbete para recibir noticias sobre nuestros viajes
        </h2>
        <div className="flex flex-row">
          <input
            type="email"
            placeholder="tucorreo@gmail.com"
            className="w-full placeholder:text-white placeholder:text-white/60 text-white font-bold px-2 h-[40px] border-2 border-l-transparent border-r-transparent border-t-transparent border-white outline-none bg-transparent"
          />
          <button className="text-white border border-white px-4 whitespace-nowrap hover:bg-white/50 transition">Recibir noticias</button>
        </div>
      </article>
    </section>
  );
}
