import Image from "next/image";
import React from "react";
import picture from "@/public/cirujia/IMG_2156.png";

export default async function Cirujia({}) {
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
                  Cirugía oral
                </h2>
                <div className="bg-[#2cd5c4] w-2/3 h-1 my-1" />
              </div>
              <div className="font-helvetica py-10 text-left lg:text-lg xl:text-xl">
                <p className="leading-relaxed">
                  Especialidad quirúrgica encargada de la prevención y
                  diagnóstico de patologías orales como:
                </p>
                <ul className="list-disc list-outside text-start py-2 pl-10">
                  <li>terceros molares o dientes retenidos,</li>
                  <li>infecciones bucales,</li>
                  <li>reabsorción o atrofia de los huesos maxilares,</li>
                  <li>entre otras.</li>
                </ul>
                <p className="leading-relaxed">
                  Los tratamientos más realizados son las
                  <span className="font-bold">
                    {" "}
                    extracciones de terceros molares
                  </span>{" "}
                  y <span className="font-bold">dientes retenidos</span>.
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
      </div>
    </div>
  );
}
