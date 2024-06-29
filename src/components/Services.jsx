import React from "react";
import { Airplay, ChevronDown, Plane } from "lucide-react";
import { FaPlane, FaHotel, FaWalking, FaBox } from "react-icons/fa";
import { MdDirectionsBoat } from "react-icons/md";
import { BsTicketPerforatedFill } from "react-icons/bs";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../shadcdn/NavigationMenu";

export default function Services() {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <div className=" group flex mr-2 flex-col ">
                <div className="group-hover:text-[#ef8fbb] transition flex flex-row gap-2 items-center">
                  Servicios
                </div>
                <figure className="group-hover:bg-[#ef8fbb] w-[0px] h-[1px] scale-x-0 group-hover:w-full transition group-hover:scale-x-100" />
              </div>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-2 p-2 md:w-[400px] w-[200px] bg-white lg:w-[500px] lg:grid-cols-[.75fr_1fr] ">
                <LiItem
                  route={"/vuelos"}
                  icon={<FaPlane className="h-7" />}
                  title={"Vuelos"}
                  description={"Haga reservaciones, obtenga ofertas"}
                />
                <LiItem
                  route={"/hoteles"}
                  icon={<FaHotel className="h-7" />}
                  title={"Hoteles"}
                  description={"Haga reservaciones, obtenga ofertas"}
                />
                <LiItem
                  route={"/cruceros"}
                  icon={<MdDirectionsBoat className="h-7" />}
                  title={"Cruceros"}
                  description={"Haga reservaciones, obtenga ofertas"}
                />
                <LiItem
                  route={"/promociones"}
                  icon={<BsTicketPerforatedFill className="h-7" />}
                  title={"Promociones"}
                  description={"Obtenga ofertas y promociones"}
                />
                <LiItem
                  route={"/paquetes"}
                  icon={<FaBox className="h-7" />}
                  title={"Paquetes"}
                  description={
                    "Informacion y orientacion en la compra de sus paquetes vacacionales"
                  }
                />
                <LiItem
                  route={"/recorridos"}
                  icon={<FaWalking className="h-7" />}
                  title={"Recorridos"}
                  description={"Recorridos turisticos del mundo"}
                />
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}

const LiItem = ({ title, description, icon, route }) => {
  return (
    <li>
      <a
        href={route || "/"}
        className="flex flex-col hover:bg-[#6aabff]/15 transition p-2 select-none cursor-pointer rounded-xl"
      >
        <div className="flex flex-row items-center gap-2">
          {icon}
          <span className="font-semibold">{title || ""}</span>
        </div>
        <span className="text-[11px] font-medium">{description || ""}</span>
      </a>
    </li>
  );
};
