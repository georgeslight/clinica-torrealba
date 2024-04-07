import foto from "@/public/specialities/ortodoncia.png";
import Image from "next/image";
import React from "react";
import { ortodoncia } from "@/lib/ortodoncia";
import TreatmentCard from "@/app/ui/services/TreatmentCard";

export default async function Ortodoncia({}) {
  return (
    <div className="w-full h-full pb-1">
      {/* bg-black */}
      <div className="h-full max-w-[1240px] mx-auto">
        <div className="relative w-full">
          <h2 className="font-bold text-4xl md:text-5xl font-didot uppercase text-black opacity-80 tracking-widest flex self-center items-center text-center justify-center py-2 md:py-6 my-10 bg-[#2cd5c4] h-auto w-full md:w-1/2 transform md:translate-x-1/2">
            Ortodoncia
          </h2>
        </div>
        <div className="">
          <div className="max-w-[1280px] mx-auto grid md:grid-cols-2">
            {/* left */}
            <div className="col-span-1 relative">
              <div className="font-helvetica mb-8 md:mb-0 py-0 lg:py-24 px-6 lg:px-16">
                <p>
                  Especialidad de la odontología que se ocupa en tratar las
                  <span className="font-bold"> alteraciones maxilares </span> y
                  <span className="font-bold"> mal posición dentaria </span> en
                  niños, adolescentes y adultos. Logrando mejorar la higiene,
                  estética dental y autoestima del paciente.
                </p>
              </div>
            </div>
            {/* right */}
            <div className="col-span-1">
              <Image
                className="object-cover z-1 rounded-sm"
                src={foto}
                alt="Foto Ortodoncia"
                sizes={"100vw"}
                style={{
                  width: "110%",
                  height: "auto",
                }}
                priority={true}
              />
            </div>
          </div>
          {/* tratamientos */}
          <div className="py-16 grid md:grid-cols-2 gap-6 mx-2 md:mx-0">
            {ortodoncia.slice(0, 2).map((treatment, index) => (
              <TreatmentCard key={index} treatment={treatment} />
            ))}
          </div>
          <div className="flex-col justify-center md:w-1/2 items-center text-center object-center mx-2 md:mx-auto lg:px-2.5 ">
            {ortodoncia.slice(2).map((treatment, index) => (
              <TreatmentCard key={index} treatment={treatment} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
