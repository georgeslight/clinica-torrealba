import foto from "@/public/specialities/cirugia-oral.png";
import Image from "next/image";
import React from "react";

export default async function Cirujia({}) {
  return (
    <div className="w-full h-full pb-1">
      {/* bg-black */}
      <div className="h-full max-w-[1240px] mx-auto">
        <div className="relative w-full">
          <h2 className="font-bold text-4xl md:text-5xl font-didot uppercase text-black opacity-80 tracking-widest flex self-center items-center text-center justify-center py-2 md:py-6 my-10 bg-[#2cd5c4] h-auto w-full md:w-1/2 transform md:translate-x-1/2">
            Cirugía oral
          </h2>
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
