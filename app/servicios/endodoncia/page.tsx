import Image from "next/image";
import React from "react";
import picture from "@/public/endodoncia/IMG_2071.png";

export default async function Endodoncia({}) {
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
                  Endodoncia
                </h2>
                <div className="bg-[#2cd5c4] w-2/3 h-1 my-1" />
              </div>
              <div className="font-helvetica py-10 text-center lg:text-lg xl:text-xl">
                <p className="leading-relaxed">
                  El tratamiento de endodoncia o más conocido como
                  <span className="font-bold"> “tratamiento de conducto” </span>
                  es el procedimiento dental que permite conservar en boca los
                  dientes dañados. Este se realiza bajo anestesia local y trata
                  la pulpa dental para aliviar el dolor y eliminar infecciones
                  dentales.
                </p>
              </div>
            </div>
            {/* right */}
            <div className="col-span-1">
              <Image
                className="object-cover z-1 rounded-sm h-full"
                src={picture}
                alt="Foto Endoconcia"
                priority={true}
                quality={50}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
