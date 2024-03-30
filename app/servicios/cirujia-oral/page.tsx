import { specialities } from "@/lib/specialities";
import foto from "@/public/specialities/cirugia-oral.png";
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
    <div className="w-full h-full">
      {/* bg-black */}
      <div className="h-full w-full mx-auto">
        {/*<h2 className="absolute z-50 font-bold text-4xl font-didot uppercase text-[#2cd5c4] tracking-widest flex self-center items-center justify-center py-16 left-1/2 transform translate-x-[-50%]">*/}
        <div className="relative w-ful">
          <h2 className="font-bold text-4xl md:text-5xl font-didot uppercase text-black opacity-80 tracking-widest flex self-center items-center text-center justify-center py-2 md:py-6 my-10 bg-[#2cd5c4] h-auto w-full md:w-1/2 transform md:translate-x-1/2">
            Cirugía oral
          </h2>
          {/*<div className="absolute w-full md:w-[600px] bg-[#2cd5c4] h-14 top-1/3 left-1/2 transform -translate-x-1/2 -z-50" />*/}
        </div>
        <div className="">
          <div className="max-w-[1280px] mx-auto grid md:grid-cols-2">
            {/* left */}
            <div className="col-span-1 relative">
              <div className="font-helvetica mb-8 md:mb-0 py-0 lg:py-24 px-6 lg:px-16">
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
            {/* right */}
            <div className="col-span-1">
              <Image
                className="object-cover z-1 rounded-sm"
                src={foto}
                alt="Foto Cirujia Oral"
                sizes={"100vw"}
                style={{
                  width: "110%",
                  height: "auto",
                }}
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
