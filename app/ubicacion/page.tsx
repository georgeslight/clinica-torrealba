import Contact from "@/app/ui/Contact";
import Map from "@/app/ui/location/Map";
import React, { Suspense } from "react";

export default function Location() {
  return (
    <main>
      <div id="map" className="w-full py-16 relative">
        <div className="max-w-[1240px] mx-auto w-full h-full justify-center pt-16">
          <h2 className="tracking-widest uppercase text-[#2cd5c4] py-10 text-center items-center">
            ¡NUESTRO EQUIPO TE ESPERA!
          </h2>
          <Map />
        </div>
      </div>
      <Contact />
    </main>
  );
}
