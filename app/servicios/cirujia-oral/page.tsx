import { specialities } from "@/lib/specialities";
import Image from "next/image";
import LogoT from "@/public/assets/T-fondo_negro.jpg";
import { AnimatePresence, motion } from "framer-motion";
import { imagesClinic } from "@/lib/images-clinic";
import React from "react";

export default async function Cirujia({}) {
  return (
    // <div className="h-full w-full">
    //   <div className="flex flex-col items-center justify-center">
    //     <h1 className="text-4xl font-didot uppercase text-[#2cd5c4] tracking-widest self-center items-center justify-center py-10">
    //       Cirugía oral
    //     </h1>
    //     <div className="grid grid-cols-2 gap-4 py-10 bg-black">
    //       <div className="col-span-1 justify-center items-center font-helvetica">
    //         <p>
    //           Especialidad quirúrgica encargada de la prevención y diagnóstico
    //           de patologías orales como:{" "}
    //         </p>
    //         <ul className="list-disc pl-5">
    //           <li>terceros molares o dientes retenidos,</li>
    //           <li>infecciones bucales,</li>
    //           <li>reabsorción o atrofia de los huesos maxilares,</li>
    //           <li>entre otras.</li>
    //         </ul>
    //         <p>
    //           Los tratamientos más realizados son las{" "}
    //           <span className="font-bold">
    //             extracciones de terceros molares
    //           </span>{" "}
    //           y <span className="font-bold">dientes retenidos</span>.
    //         </p>
    //       </div>
    //       <div className="col-span-1 flex justify-center items-center">
    //         <Image src={specialities[2].src} alt={specialities[2].alt} />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="w-full pt-16 lg:pt-0 relative">
      {/* bg-black */}
      <div className="max-w-[1280px] h-full w-full mx-auto">
        {/*<h2 className="absolute z-50 font-bold text-4xl font-didot uppercase text-[#2cd5c4] tracking-widest flex self-center items-center justify-center py-16 left-1/2 transform translate-x-[-50%]">*/}
        <h2 className="z-50 font-bold text-4xl font-didot uppercase text-[#2cd5c4] tracking-widest flex self-center items-center justify-center py-16">
          Cirugía oral
        </h2>
        <div className="flex flex-col md:flex-row relative z-10 pb-16">
          {/* left */}
          <div className="relative md:w-1/2 xl:mt-10 2xl:mt-24">
            {/*<Image src={LogoT} className="h-full" alt="Logo T" />*/}
            <div className="absolute top-0 left-0 h-full w-full bg-opacity-50 px-8 md:px-10 lg:px-16 flex flex-col">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 font-helvetica pt-16">
                  {/* text-[#ecf0f3] */}
                  <p>
                    Especialidad quirúrgica encargada de la prevención y
                    diagnóstico de patologías orales como:{" "}
                  </p>
                  <ul className="list-disc pl-5">
                    <li>terceros molares o dientes retenidos,</li>
                    <li>infecciones bucales,</li>
                    <li>reabsorción o atrofia de los huesos maxilares,</li>
                    <li>entre otras.</li>
                  </ul>
                  <p>
                    Los tratamientos más realizados son las{" "}
                    <span className="font-bold">
                      extracciones de terceros molares
                    </span>{" "}
                    y <span className="font-bold">dientes retenidos</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="relative md:w-1/2 flex items-center justify-center">
            <Image
              className="object-cover z-1 rounded-sm"
              src={specialities[2].src}
              alt={specialities[2].alt}
              sizes={"100vw"}
              style={{
                width: "110%",
                height: "auto",
              }}
              priority={true}
            />
          </div>
        </div>
        {/*<div className="hidden md:block absolute bottom-0 inset-x-0 md:h-0 z-10 bg-transparent mx-auto">*/}
        {/*  <svg*/}
        {/*    xmlns="http://www.w3.org/2000/svg"*/}
        {/*    viewBox="0 0 70 100"*/}
        {/*    preserveAspectRatio="none"*/}
        {/*    className="absolute bottom-[25%] h-[55px] lg:h-[100px] w-[100%] z-10"*/}
        {/*  >*/}
        {/*    <path d="M0 0 L50 90 L100 -50 V100 H0" fill="#ecf0f3"></path>*/}
        {/*  </svg>*/}
        {/*</div>*/}
      </div>
    </div>
  );
}
