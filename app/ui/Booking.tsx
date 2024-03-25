import Image from "next/image";
import monito from "@/public/images-clinic/monito_cut.jpg";
import Link from "next/link";
import React from "react";

const Booking = () => {
  return (
    <div id="booking" className="relative w-full h-full py-16">
      <div className="mx-auto w-full h-full flex-col justify-center grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left Side - Text */}
        <div className=" absolute z-10 md:hidden flex items-center justify-center inset-0">
          <div className="relative mx-auto px-4 text-center">
            <h2 className="font-didot tracking-widest uppercase pb-4 text-[#2cd5c4]">
              Reserva tu cita
            </h2>
            <Link
              href="https://4c2c5c15e0c38ccb091c5ef98afcb3afac9dce65.agenda.softwaredentalink.com/agenda"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-2 font-bold text-white bg-[#2cd5c4] rounded-2xl hover:bg-[#1bb3a6] hover:scale-105 ease-in-out duration-300"
            >
              Agenda por Dentalink
            </Link>
          </div>
        </div>
        {/* Image */}
        <div className="relative col-span-3 md:col-span-2">
          <Image
            src={monito}
            alt="monito"
            quality={100}
            className="w-full h-full object-fill md:max-h-96"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#ecf0f3]  w-1/2 left-1/2" />
        </div>
        {/* Right Side */}
        <div className="hidden md:relative z-10 md:flex justify-center items-center bg-[#ecf0f3]">
          <div className="max-w-[320px] mx-auto px-4">
            <h2 className="font-didot tracking-widest uppercase text-[#2cd5c4] text-left pb-10">
              Reserva tu cita
            </h2>
            <Link
              href="https://4c2c5c15e0c38ccb091c5ef98afcb3afac9dce65.agenda.softwaredentalink.com/agenda"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-8 sm:px-4 lg:px-8 py-2 font-bold text-white bg-[#2cd5c4] rounded-2xl hover:bg-[#1bb3a6] hover:scale-105 ease-in-out duration-300"
            >
              Agenda por Dentalink
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
