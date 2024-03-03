"use client";
import Link from "next/link";
import React, { useState } from "react";
import { LuCalendarSearch } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";

const Booking = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div onClick={() => setIsActive(false)}>
      <div
        className={`z-50 fixed bottom-[10%] right-[15%] lg:right-[5%] group ${isActive ? "active" : ""}`}
        onMouseDown={(e) => {
          e.preventDefault();
          setIsActive(true);
        }}
        onTouchStart={(e) => {
          e.stopPropagation();
          setIsActive(true);
        }}
      >
        <div className="absolute bottom-0 right-0">
          <div
            className={`absolute -translate-y-[20%] transition-transform duration-500 group-hover:-translate-y-3/4 ${isActive ? "-translate-y-3/4" : "-translate-y-[20%]"}`}
          >
            <div className="rounded-full bg-[#25D366] p-2.5 w-12 h-12 ml-auto">
              <Link
                href={
                  isActive
                    ? "https://api.whatsapp.com/send/?phone=56940987902&text&type=phone_number&app_absent=0"
                    : ""
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="size-7" />
              </Link>
            </div>
          </div>
          <div
            className={`absolute -translate-x-[20%] transition-transform duration-500 group-hover:-translate-x-3/4 ${isActive ? "-translate-x-3/4" : "-translate-x-[20%]"}`}
          >
            <div className="rounded-full bg-[#2cd5c4] p-2.5 w-12 h-12 ml-auto">
              <Link
                href={
                  isActive
                    ? "https://4c2c5c15e0c38ccb091c5ef98afcb3afac9dce65.agenda.softwaredentalink.com/agenda"
                    : ""
                }
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
