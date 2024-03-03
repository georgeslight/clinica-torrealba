import Link from "next/link";
import React from "react";
import { LuCalendarSearch } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";

const Booking = () => {
  return (
    <div>
      <div className="z-50 fixed bottom-[10%] right-[5%] group">
        <div className="absolute bottom-0 right-0">
          <div className="absolute -translate-y-[20%] transition-transform duration-500 group-hover:-translate-y-3/4">
            <div className="rounded-full bg-[#25D366] p-2.5 w-12 h-12 ml-auto">
              <Link
                href="https://api.whatsapp.com/send/?phone=56940987902&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="size-7" />
              </Link>
            </div>
          </div>
          <div className="absolute -translate-x-[20%] transition-transform duration-500 group-hover:-translate-x-3/4">
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
      </div>
    </div>
  );
};

export default Booking;
