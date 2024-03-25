"use client";
import React, { useEffect, useState } from "react";
import { LuCalendarSearch } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";
import { FaPaperPlane } from "react-icons/fa";

const Booking = () => {
  const [isActive, setIsActive] = useState(true);
  const [showCalendar, setShowCalendar] = useState(false);

  const handleClick = () => {
    if (isActive) {
      setIsActive(false);
      setShowCalendar(true);
    }
    if (!isActive) {
      setShowCalendar(false);
      setIsActive(true);
    }
  };
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      // Check if the click event happened inside the component
      if (!(event.target as HTMLElement).closest(".booking-container")) {
        // If clicked outside, set isActive to false
        setShowCalendar(false); // Hide the calendar icon if clicked outside
        setIsActive(true);
        // setTimeout(() => {
        // }, 210);
      }
    };

    // Add event listener to detect clicks outside of the component
    document.body.addEventListener("click", handleOutsideClick);

    // Remove event listener when component unmounts
    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <div
        className={`z-50 fixed bottom-6 right-6 ${isActive ? "active" : ""}`}
      >
        <div className="absolute bottom-0 right-0">
          <div
            className={`transition-all duration-300 transform ease-in-out ${
              isActive ? "" : "rotate-90"
            }`}
            onClick={handleClick}
          >
            <div
              className={`rounded-full pt-[9px] pl-[7px] w-12 h-12 ml-auto transition-all duration-300 transform ease-in-out ${isActive ? "bg-[#3A3C44]" : "bg-[#2cd5c4]"}`}
            >
              {isActive && !showCalendar && (
                <FaPaperPlane className="size-7 text-[#2cd5c4]" />
              )}
              {showCalendar && (
                <a
                  href="https://4c2c5c15e0c38ccb091c5ef98afcb3afac9dce65.agenda.softwaredentalink.com/agenda"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LuCalendarSearch className="size-8 -rotate-90" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`z-50 fixed bottom-20 right-8 ${isActive ? "active" : ""}`}
      >
        <div className="absolute bottom-0 right-0">
          <div
            className={`rounded-full p-1.5 w-8 h-8 ml-auto transition-all duration-300 transform ease-in-out ${isActive ? " -rotate-90 scale-0" : "bg-[#25D366]"}`}
          >
            {showCalendar && (
              <a
                href="https://api.whatsapp.com/send/?phone=56940987902&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="size-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
