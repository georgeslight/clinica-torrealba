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
    <div id="contact" className="w-full lg:h-full py-16">
      <div className="max-w-[1240px] mx-auto w-full flex-col justify-center">
        <div className="grid lg:grid-cols-8 gap-8">
          {/* left */}
          <div className="col-span-4 w-full h-full">
            <div className="lg:p-4 h-full max-w-screen-vw flex items-center justify-center">
              <h2 className="font-didot tracking-widest uppercase text-[#2cd5c4] py-10 text-center items-center">
                ¡Ven a conocernos!
              </h2>
            </div>
          </div>
          {/* right */}
          <div className="col-span-4 w-full h-auto p-4">
            <div className="p-4">
              <div>
                <div className="px-6 py-2 flex items-start">
                  <div className="pt-1">
                    <FaLocationDot color={"#2cd5c4"} className="mr-3 size-4" />
                  </div>
                  <p>
                    Av. Pedro Fontova 6651, Local 33, Huechuraba, Región
                    Metropolitana
                  </p>
                </div>
                <div className="px-6 py-2 flex items-start">
                  <div className="pt-1">
                    <FaLocationDot color={"#2cd5c4"} className="mr-3 size-4" />
                  </div>
                  <p>
                    Estoril 120, Oficina 204, Las Condes, Región Metropolitana
                  </p>
                </div>
                <Link
                  href="/ubicacion"
                  className="inline-block bg-[#2cd5c4] hover:bg-[#1bb3a6] text-white py-1 px-4 rounded-2xl mt-1 ml-12 mb-4 text-center"
                >
                  Ver Ubicación
                </Link>
              </div>
              <div className="px-6 py-2 flex items-start">
                <div className="pt-1">
                  <FaPhoneAlt color={"#2cd5c4"} className="mr-3 size-4" />
                </div>
                <p>+569 4098 7902</p>
              </div>
              <div className="px-6 py-2 flex items-start">
                <div className="pt-1">
                  <IoIosMailOpen color={"#2cd5c4"} className="mr-3 size-4" />
                </div>
                <p>clinicadentaltorrealba@gmail.com</p>
              </div>
              <div className="px-6 py-2 flex items-start">
                <div className="pt-1">
                  <FaRegCalendarAlt color={"#2cd5c4"} className="mr-3 size-4" />
                </div>
                <p>Lunes a Viernes de 9:00 a 19:30 hrs.</p>
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
