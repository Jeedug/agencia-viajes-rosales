import React from "react";
import toast, { Toaster } from 'react-hot-toast';

export default function Request() {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const res = await fetch("/api/subscriptions/create-subscription", {
      method: "POST",
      body: JSON.stringify({
        email: data.get("email"),
      }),
    });

    const resolved = await res.json();

    if (!res.ok){
      toast.error(resolved.message,{
        duration: 3000,
        position: "top-right"
      });
    } else {
      toast.success(resolved.message,{
        duration: 3000,
        position: "top-right"
      });
    }
  };



  return (
    <section className="flex flex-col gap-5 w-full h-[600px] items-center justify-center">
      <img
        className="w-full h-[600px] object-cover absolute contrast-[80%]"
        src="/sections/request.jpg"
        alt="building of a hotel"
        width="100%"
        height="100%"
        loading="lazy"
        decoding="async"
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
        <form method="get"  className="flex flex-row" onSubmit={(e)=>{handleSubmit(e)}}>
          <input
            name="email"
            type="email"
            placeholder="tucorreo@gmail.com"
            className="w-full placeholder:text-white placeholder:text-white/60 text-white font-bold px-2 h-[40px] border-2 border-l-transparent border-r-transparent border-t-transparent border-white outline-none bg-transparent"
          />
          <button type="submit" method="POST" className="text-white border border-white px-4 whitespace-nowrap hover:bg-white/50 transition">
            Recibir noticias
          </button>
        </form>
      </article>
      <Toaster />
    </section>
  );
}
