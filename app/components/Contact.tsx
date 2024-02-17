import React from "react";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaRegCalendarAlt } from "react-icons/fa";
import { IoIosMailOpen } from "react-icons/io";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-full p-2 py-16">
      <div className="max-w-[1240px] m-auto px-2 w-full">
        <div className="grid lg:grid-cols-8 gap-8">
          {/* left */}
          <div className="col-span-4 w-full h-full p-4">
            <div className="lg:p-4 h-full flex items-center justify-center">
              <div>
                <h2 className="py-2 uppercase text-[#2cd5c4] text-center">
                  ¡Ven a conocernos!
                </h2>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-span-4 w-full h-auto p-4">
            <div className="p-4">
              <div>
                <h3 className="py-2 uppercase text-[#2cd5c4] text-center font-bold">
                  Vitacura
                </h3>
              </div>
              <div className="px-6 py-2 flex items-start">
                <div className="pt-1">
                  <FaLocationDot color={"#2cd5c4"} className="mr-3 size-4" />
                </div>
                <p>
                  Avenida Kennedy #7600, 4° piso, Vitacura (El acceso al
                  edificio es por la calle Wisconsin)
                </p>
              </div>
              <div className="px-6 py-2 flex items-start">
                <div className="pt-1">
                  <FaPhoneAlt color={"#2cd5c4"} className="mr-3 size-4" />
                </div>
                <p>+5622428 8900</p>
              </div>
              <div className="px-6 py-2 flex items-start">
                <div className="pt-1">
                  <IoIosMailOpen color={"#2cd5c4"} className="mr-3 size-4" />
                </div>
                <p>contacto@clinicaoph.cl</p>
              </div>
              <div className="px-6 py-2 flex items-start">
                <div className="pt-1">
                  <FaRegCalendarAlt color={"#2cd5c4"} className="mr-3 size-4" />
                </div>
                <p>Lunes a Viernes de 9:00 a 18:00 hrs.</p>
              </div>
            </div>
          </div>
        </div>
        {/*<div className="flex justify-center py-12">*/}
        {/*  <Link href="/#home">*/}
        {/*    <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">*/}
        {/*      <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />*/}
        {/*    </div>*/}
        {/*  </Link>*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

export default Contact;
