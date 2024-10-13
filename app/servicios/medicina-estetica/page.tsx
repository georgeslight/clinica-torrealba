import Image from "next/image";
import React from "react";
import picture from "@/public/medicina-estetica/IMG_2003.png";
import { aesthetics } from "@/lib/aesthetics";
import AestheticsCard from "@/app/ui/services/AestheticsCard";

export default async function Estetica({}) {
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
                  Medicina Estética
                </h2>
                <div className="bg-[#2cd5c4] w-2/3 h-1 my-1" />
              </div>
              <div className="font-helvetica py-10 text-center lg:text-lg xl:text-xl">
                <p className="leading-relaxed">
                  Procedimientos estéticos no invasivos que buscan{" "}
                  <span className="font-bold">
                    {" "}
                    prevenir y tratar el envejecimiento facial
                  </span>
                  . Estos procedimientos buscan obtener resultados naturales a
                  través del aumento de hidratación, mejora de la calidad de
                  piel, disminución de flacidez y de líneas finas y correción de
                  proporciones faciales.
                </p>
              </div>
            </div>
            {/* right */}
            <div className="col-span-1">
              <Image
                className="object-cover z-1 rounded-sm h-full"
                src={picture}
                alt="Foto Ortodoncia"
                priority={true}
              />
            </div>
          </div>
        </div>
        <div className="max-w-[1000px] 2xl:max-w-[1280px] mx-auto">
          <div className="flex-col justify-center py-16 space-y-5 md:space-y-10 items-center text-center object-center mx-2 md:mx-auto px-1 sm:px-2.5 md:pm-0">
            {aesthetics.map((treatment, index) => (
              <AestheticsCard key={index} treatment={treatment} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
