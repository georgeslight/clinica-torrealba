import foto from "@/public/specialities/ortodoncia.png";
import Image from "next/image";
import React from "react";
import { ortodoncia } from "@/lib/ortodoncia";
import TreatmentCard from "@/app/ui/services/TreatmentCard";
import bg_ortodoncia from "@/public/ortodoncia/ortodoncia.png";

export default async function Ortodoncia({}) {
  return (
    <div className="w-full h-full pb-1">
      {/* bg-black */}
      <div className="h-full w-full mx-auto">
        <div className="bg-[#BEC0C8] bg-opacity-75">
          <div className="w-full max-w-[1280px] mx-auto grid md:grid-cols-2 gap-6">
            {/* left */}
            <div className="col-span-1 relative flex flex-col justify-center items-center px-8 mt-16 md:mt-0">
              <div className="w-full text-center flex flex-col items-center">
                <h2 className="text-center font-bold text-4xl lg:text-5xl font-didot uppercase text-black tracking-widest">
                  Ortodoncia
                </h2>
                <div className="bg-[#2cd5c4] w-2/3 h-1 my-1" />
              </div>
              <div className="font-helvetica py-10 text-center">
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
                className="object-cover z-1 rounded-sm h-full"
                src={bg_ortodoncia}
                alt="Foto Ortodoncia"
                priority={true}
              />
            </div>
          </div>
        </div>
        {/* tratamientos */}
        <div className="max-w-[1000px] 2xl:max-w-[1280px] mx-auto">
          <div className="py-16 grid md:grid-cols-2 gap-6 mx-2 lg:mx-0">
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
