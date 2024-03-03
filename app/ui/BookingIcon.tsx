import Image from "next/image";
import chat_bubble from "@/public/assets/chat-bubble.svg";
import Link from "next/link";
import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { LuCalendarSearch } from "react-icons/lu";

const Booking = () => {
  return (
    <div className="z-50 fixed bottom-[3%] right-[3%] hover:scale-110 ease-in-out duration-[400ms] group">
      {/*<div className="invisible group-hover:visible group-active:visible">*/}
      {/*  <Image src={chat_bubble} alt="Speech Buble SVG" className="w-40 h-20" />*/}
      {/*  <p className="font-helvetica font-bold text-black absolute bottom-[73px] right-12">*/}
      {/*    ¡Agenda <br /> tu cita!*/}
      {/*  </p>*/}
      {/*</div>*/}
      <div className="w-full">
        <div className="rounded-full bg-[#2cd5c4] p-2.5 w-12 h-12 ml-auto">
          <Link
            href="https://4c2c5c15e0c38ccb091c5ef98afcb3afac9dce65.agenda.softwaredentalink.com/agenda"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LuCalendarSearch className="size-7" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Booking;
