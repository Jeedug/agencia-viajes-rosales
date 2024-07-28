import { BoxIcon, FootprintsIcon, HotelIcon, Ship, ShipIcon, Ticket, TicketIcon } from "lucide-react";
import React from "react";
import { BsAirplane } from "react-icons/bs";
import { FaPeopleCarry } from "react-icons/fa";

export default function Products() {
  return (
    <section className=' px-20 py-10'>
      <div className="">
        <h2 className="font-bold text-black/50 tracking-widest ">
          DESTINOS POPULARES
        </h2>
        <span className=" text-[42px] text-black font-bold cursor-pointer text-black/100 select-none ">
          Obten ofertas y promociones de los lugares más populares
        </span>
      </div>
      <div className="py-10">

        <ul className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-10 mt-10">
            <li className="">
                <a href="/vuelos" className="p-10 border rounded-2xl shadow-sm transition cursor-pointer hover:shadow-lg flex flex-col font-bold text-[24px] items-center justify-center">
                    <BsAirplane  />
                    <span>
                        Vuelos
                    </span>
                </a>
            </li>
            <li className="">
                <a href="/cruceros" className="p-10 border rounded-2xl shadow-sm transition cursor-pointer hover:shadow-lg flex flex-col font-bold text-[24px] items-center justify-center">
                    <ShipIcon  />
                    <span>
                        Cruceros
                    </span>
                </a>
            </li>
            <li className="">
                <a href="/hoteles" className="p-10 border rounded-2xl shadow-sm transition cursor-pointer hover:shadow-lg flex flex-col font-bold text-[24px] items-center justify-center">
                    <HotelIcon  />
                    <span>
                        Hoteles
                    </span>
                </a>
            </li>
            <li className="">
                <a href="/paquetes" className="p-10 border rounded-2xl shadow-sm transition cursor-pointer hover:shadow-lg flex flex-col font-bold text-[24px] items-center justify-center">
                    <BoxIcon  />
                    <span>
                        Paquetes
                    </span>
                </a>
            </li>
            <li className="">
                <a href="/recorridos" className="p-10 border rounded-2xl shadow-sm transition cursor-pointer hover:shadow-lg flex flex-col font-bold text-[24px] items-center justify-center">
                    <FootprintsIcon  />
                    <span>
                        Recorridos
                    </span>
                </a>
            </li>
        </ul>


      </div>
    </section>
  );
}
