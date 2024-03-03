import Image from "next/image";
import monito from "@/public/images-clinic/IMG_3596.jpg";
import clinica_fuera from "@/public/images-clinic/IMG_3867.jpg";
import dcta_black_bg from "@/public/assets/CDTA_black_bg.png";
import chat_bubble from "@/public/assets/chat-bubble.svg";
import Link from "next/link";
import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

const Booking = () => {
  return (
    <div className="z-50 fixed bottom-[6%] right-[3%] hover:scale-105 ease-in-out duration-300 group">
      <div className="invisible group-hover:visible group-active:visible">
        <Image src={chat_bubble} alt="Speech Buble SVG" className="w-40 h-20" />
        <p className="absolute bottom-[90px] right-12">
          ¡Agenda <br /> tu cita!
        </p>
      </div>
      <div className="w-full">
        <div className="rounded-full bg-[#2cd5c4] p-4 w-16 h-16 ml-auto">
          <Link
            href="https://4c2c5c15e0c38ccb091c5ef98afcb3afac9dce65.agenda.softwaredentalink.com/agenda"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaRegCalendarAlt className="size-8" />
          </Link>
        </div>
      </div>
    </div>
    // <div
    //   id="booking"
    //   className="relative w-full h-full py-16 bg-black opacity-90"
    // >
    //   <div className="max-w-[1240px] mx-auto w-full h-full flex-col justify-center grid grid-cols-2">
    //     {/*<Image*/}
    //     {/*  src={monito}*/}
    //     {/*  alt="monito"*/}
    //     {/*  placeholder="blur"*/}
    //     {/*  quality={100}*/}
    //     {/*  // sizes="100vw"*/}
    //     {/*  className="absolute z-0 object-top"*/}
    //     {/*  layout="fill"*/}
    //     {/*/>*/}
    //     <div className="col-span-1 justify-center items-center flex">
    //       <Image
    //         src={dcta_black_bg}
    //         alt="Clinica Dental Torre Alba"
    //         className="w-full"
    //       />
    //     </div>
    //     <div className="col-span-1 relative z-10 max-w-[1240px] mx-auto w-full h-full flex flex-col justify-center items-center">
    //       <h2 className="font-didot tracking-widest uppercase text-[#2cd5c4] pb-10">
    //         Reserva tu cita
    //       </h2>
    //       {/*<div className="flex items-center space-x-2">*/}
    //       <Link
    //         href="https://4c2c5c15e0c38ccb091c5ef98afcb3afac9dce65.agenda.softwaredentalink.com/agenda"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         className="px-8 py-2 font-bold text-white bg-[#2cd5c4] rounded-2xl hover:bg-[#1bb3a6] hover:scale-105 ease-in-out duration-300"
    //       >
    //         Agenda por Dentalink
    //       </Link>
    //       {/*</div>*/}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Booking;
