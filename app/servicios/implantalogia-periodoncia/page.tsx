import foto from "@/public/specialities/implantologia-periodoncia.png";
import Image from "next/image";
import React from "react";
import picture from "@/public/implantologia-peridoncia/IMG_1873.png";

export default async function ImplantalogiaPeriodoncia({}) {
  return (
    <div className="w-full h-full pb-1">
      {/* bg-black */}
      <div className="h-full w-full mx-auto">
        <div className="bg-gradient-to-tl from-[#8F9BAB] to-[#E0E4E7] bg-opacity-75">
          <div className="w-full max-w-[1280px] mx-auto grid md:grid-cols-2 gap-6">
            {/* left */}
            <div className="col-span-1 relative flex flex-col justify-center items-center px-8 mt-16 md:mt-0">
              <div className="w-full text-center flex flex-col items-center">
                <h2 className="pt-0 sm:pt-8 text-center font-bold text-3xl md:text-4xl lg:text-5xl font-didot uppercase text-black tracking-widest">
                  Implantología y Periodoncia
                </h2>
                <div className="bg-[#2cd5c4] w-2/3 h-1 my-1" />
              </div>
              <div className="font-helvetica py-10 text-center text-sm lg:text-lg xl:text-xl">
                <p className="leading-relaxed">
                  La <span className="font-bold"> periodoncia </span>es la
                  especialidad que trata los tejidos que rodean el diente como
                  el hueso, encía y ligamento periodontal. La presencia de sarro
                  en los tejidos periodontales genera la pérdida progresiva de
                  soporte periodontal, hasta la avulsión de las piezas dentales.
                  Esta especialidad es la encargada de evitar el avance de la
                  enfermedad periodontal para prevenir pérdida de dientes. La
                  <span className="font-bold"> Implantología </span> es el área
                  de la odontologia que trata de pérdida dentaria a través de la
                  instalación de implantes.
                </p>
              </div>
            </div>
            {/* right */}
            <div className="col-span-1 relative w-full h-full flex items-end overflow-hidden">
              <Image
                className="object-contain w-full h-auto z-1 rounded-sm"
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
