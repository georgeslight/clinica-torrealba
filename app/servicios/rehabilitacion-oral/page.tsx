import foto from "@/public/specialities/rehabilitacion-oral.png";
import Image from "next/image";
import React from "react";
import picture from "@/public/rehabilitaion-oral/IMG_2003.png";

export default async function Rehabilitacion({}) {
  return (
    <div className="w-full h-full pb-1">
      {/* bg-black */}
      <div className="h-full w-full mx-auto">
        <div className="bg-gradient-to-tl from-[#8F9BAB] to-[#E0E4E7] bg-opacity-75">
          <div className="w-full max-w-[1280px] mx-auto grid md:grid-cols-2 gap-6">
            {/* left */}
            <div className="w-[100vw] sm:w-full col-span-1 relative flex flex-col justify-center items-center px-8 mt-16 md:mt-0">
              <div className="w-full text-center flex flex-col items-center">
                <h2 className="text-center font-bold text-4xl md:text-5xl font-didot uppercase text-black tracking-widest">
                  Rehabilitación Oral
                </h2>
                <div className="bg-[#2cd5c4] w-2/3 h-1 my-1" />
              </div>
              <div className="font-helvetica py-10 text-center lg:text-xl xl:text-2xl">
                <p className="leading-relaxed">
                  Área de la odontologia que se encarga de restaurar de manera
                  total o parcial estructuras dentarias perdidas devolviendo
                  función, estética y armonía oral. Los tratamientos más
                  realizados son{" "}
                  <span className="font-bold">prótesis dentales</span>,{" "}
                  <span className="font-bold">incrustaciones cerámicas</span>,
                  <span className="font-bold">coronas cerámicas</span> y{" "}
                  <span className="font-bold">
                    carillas de resina o cerámicas
                  </span>
                  .
                </p>
              </div>
            </div>
            {/* right */}
            <div className="col-span-1">
              <Image
                className="w-[100vw] sm:w-full object-cover z-1 rounded-sm h-full"
                src={picture}
                alt="Foto Ortodoncia"
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
