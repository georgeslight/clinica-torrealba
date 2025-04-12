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
    <div
      id="contact"
      className="w-full max-w-full lg:max-w-screen-lg mx-auto py-16"
    >
      {/*<div className="max-w-[1240px] mx-auto w-full flex-col justify-center">*/}
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
          <div>
            <div className="px-6 py-2 flex items-start">
              <div className="pt-1">
                <FaLocationDot color={"#2cd5c4"} className="mr-3 size-4" />
              </div>
              {/*<a*/}
              {/*  href="https://www.google.com/maps/place/Av.+Pedro+Fontova+6651,+8600578+Huechuraba,+Regi%C3%B3n+Metropolitana/@-33.3620955,-70.6727549,17z/data=!3m1!4b1!4m6!3m5!1s0x9662c70014676fe1:0x95ac91d8716be252!8m2!3d-33.3621!4d-70.67018!16s%2Fg%2F11rxnhbln8?entry=ttu"*/}
              {/*  target="_blank"*/}
              {/*  rel="noopener noreferrer"*/}
              {/*  className="hover:underline"*/}
              {/*>*/}
              <p>
                Av. Pedro Fontova 6651, Local 33, Huechuraba, Región Metropolitana
              </p>
              {/*</a>*/}
            </div>
            <div className="px-6 py-2 flex items-start">
              <div className="pt-1">
                <FaLocationDot color={"#2cd5c4"} className="mr-3 size-4" />
              </div>
              {/*<a*/}
              {/*  href="https://www.google.com/maps/place/Estoril+120,+Las+Condes,+Regi%C3%B3n+Metropolitana/@-33.3841889,-70.5353433,17z/data=!3m1!4b1!4m6!3m5!1s0x9662ceaca8d1cd1f:0x2f66c5142b0b4c99!8m2!3d-33.3841934!4d-70.5327684!16s%2Fg%2F11b8zc8mx1?entry=ttu"*/}
              {/*  target="_blank"*/}
              {/*  rel="noopener noreferrer"*/}
              {/*  className="hover:underline"*/}
              {/*>*/}
              <p>
                Av. la Dehesa 1201,
                Oficina 227,
                Torre Oriente,
                Región Metropolitana
              </p> 
              {/*</a>*/}
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
            <a href="tel:+569 4098 7902" className="hover:underline">
              +569 4098 7902
            </a>
          </div>
          <div className="px-6 py-2 flex items-start">
            <div className="pt-1">
              <IoIosMailOpen color={"#2cd5c4"} className="mr-3 size-4" />
            </div>
            <a
              href="mailto:clinicadentaltorrealba@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              clinicadentaltorrealba@gmail.com
            </a>
          </div>
          <div className="px-6 py-2 flex items-start">
            <div className="pt-1">
              <FaRegCalendarAlt color={"#2cd5c4"} className="mr-3 size-4" />
            </div>
            <p>Lunes a Viernes de 9:00 a 19:30 hrs.</p>
          </div>
        </div>
        {/*</div>*/}
      </div>
      {/*<div className="flex justify-center py-12">*/}
      {/*  <Link href="/#home">*/}
      {/*    <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">*/}
      {/*      <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />*/}
      {/*    </div>*/}
      {/*  </Link>*/}
      {/*</div>*/}
    </div>
  );
};

export default Contact;
