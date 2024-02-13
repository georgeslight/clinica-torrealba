"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaWhatsappSquare,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { didot, imb_plex } from "@/app/ui/fonts";

const Navbar = () => {
  const pathname = usePathname();

  const [nav, setNav] = useState(false);
  const toggleNav = () => {
    setNav(!nav);
  };

  const [shadow, setShadow] = useState(false);

  // handle shadow effect
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-6 2xl:px-16">
        <Image src="/assets/TORRE-ALBA.png" alt="/" width={300} height={100} />
        <div className="flex-grow">
          <ul className="hidden lg:flex justify-center">
            <Link href="/#home" className={`${didot.className} antialiased`}>
              <li
                className={clsx(
                  "ml-10 text-sm uppercase cursor-pointer hover:text-[#2cd5c4 hover:scale-105 ease-in duration-300",
                  { "text-[#2cd5c4] font-bold": pathname === "/" },
                )}
              >
                Inicio
              </li>
            </Link>
            <Link href="/#team" className={`${didot.className} antialiased`}>
              <li
                className={clsx(
                  "ml-10 text-sm uppercase cursor-pointer hover:text-[#2cd5c4] hover:scale-105 ease-in duration-300",
                  { "text-[#2cd5c4] font-bold": pathname === "/nosotros" },
                )}
              >
                Nosotros
              </li>
            </Link>
            <Link
              href="/#expertise"
              className={`${didot.className} antialiased`}
            >
              <li
                className={clsx(
                  "ml-10 text-sm uppercase cursor-pointer hover:text-[#2cd5c4] hover:scale-105 ease-in duration-300",
                  {
                    "text-[#2cd5c4] font-bold": pathname === "/especialidades",
                  },
                )}
              >
                Especialidades
              </li>
            </Link>
            <Link href="/" className={`${didot.className} antialiased`}>
              <li
                className={clsx(
                  "ml-10 text-sm uppercase cursor-pointer hover:text-[#2cd5c4] hover:scale-105 ease-in duration-300",
                  { "text-[#2cd5c4] font-bold": pathname === "/team" },
                )}
              >
                Equipo Dental
              </li>
            </Link>
            <Link href="/" className={`${didot.className} antialiased`}>
              <li
                className={clsx(
                  "ml-10 text-sm uppercase cursor-pointer hover:text-[#2cd5c4] hover:scale-105 ease-in duration-300",
                  { "text-[#2cd5c4] font-bold": pathname === "/contacto" },
                )}
              >
                Contacto
              </li>
            </Link>
          </ul>
        </div>
        <div className="hidden lg:flex space-x-4">
          <div className="flex items-ceter justify-center rounded-full w-8 h-8 shadow-lg shadow-gray-400 bg-[#2cd5c4] bg-opacity-70 p-2 cursor-pointer hover:scale-105 ease-in duration-300">
            <FaFacebook />
          </div>
          <div className="flex items-ceter justify-center rounded-full w-8 h-8 shadow-lg shadow-gray-400 bg-[#2cd5c4] bg-opacity-70 p-2 cursor-pointer hover:scale-105 ease-in duration-3000">
            <FaInstagram />
          </div>
          <div className="flex items-ceter justify-center rounded-full w-8 h-8 shadow-lg shadow-gray-400 bg-[#2cd5c4] bg-opacity-70 p-2 cursor-pointer hover:scale-105 ease-in duration-300">
            <FaWhatsapp />
          </div>
          <div className="flex items-ceter justify-center rounded-full w-8 h-8 shadow-lg shadow-gray-400 bg-[#2cd5c4] bg-opacity-70 p-2 cursor-pointer hover:scale-105 ease-in duration-300">
            <IoIosMail />
          </div>
        </div>
        <div onClick={toggleNav} className="lg:hidden pr-10">
          <AiOutlineMenu size={25} />
        </div>

        {/* black overlay that covers the whole screen when sidebar is open */}
        <div
          className={
            nav
              ? "lg:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
              : ""
          }
        >
          {/* When the nav variable is true, it fills up 75% of the screen on small devices, 60% of the screen on medium devices and 45% on large devices. When nav is false, it seems to be hidden to the left of the screen (due to the style left: [-100%]). */}
          <div
            className={
              nav
                ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
            }
          >
            <div>
              <div className="flex w-full items-center justify-between border-b border-gray-300 my-4">
                <Image
                  src="/assets/Logo_fondo_blanco.png"
                  alt="/"
                  width={200}
                  height={100}
                />
                <div
                  onClick={toggleNav}
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                >
                  <AiOutlineClose />
                </div>
              </div>
              {/*<div className='border-b border-gray-300 my-4'>*/}
              {/*    <p className={`${imb_plex.className} w-[85%] md:w-[90%] py-4`}>nam aenean malorum eius</p>*/}
              {/*</div>*/}
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                <Link href="/" className={`${didot.className} antialiased`}>
                  <li
                    className={clsx("py-4 text-sm", {
                      "text-[#2cd5c4]": pathname === "/",
                    })}
                  >
                    Inicio
                  </li>
                </Link>
                <Link href="/" className={`${didot.className} antialiased`}>
                  <li
                    className={clsx("py-4 text-sm", {
                      "text-[#2cd5c4]": pathname === "/nosotros",
                    })}
                  >
                    Nosotros
                  </li>
                </Link>
                <Link href="/" className={`${didot.className} antialiased`}>
                  <li
                    className={clsx("py-4 text-sm", {
                      "text-[#2cd5c4]": pathname === "/especialidades",
                    })}
                  >
                    Especialidades
                  </li>
                </Link>
                <Link href="/" className={`${didot.className} antialiased`}>
                  <li
                    className={clsx("py-4 text-sm", {
                      "text-[#2cd5c4]": pathname === "/team",
                    })}
                  >
                    Equipo Dental
                  </li>
                </Link>
                <Link href="/" className={`${didot.className} antialiased`}>
                  <li
                    className={clsx("py-4 text-sm", {
                      "text-[#2cd5c4]": pathname === "/contacto",
                    })}
                  >
                    Contacto
                  </li>
                </Link>
              </ul>
            </div>
            <div className="pt-40 w-3/4 absolute inset-x-[10%] bottom-10">
              {/*<p className={`${didot.className} antialiased tracking-widest`}>*/}
              {/*    Conectemos*/}
              {/*</p>*/}
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="flex items-ceter justify-center rounded-full w-8 h-8 shadow-lg shadow-gray-400 bg-[#2cd5c4] bg-opacity-70 p-2 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaFacebook />
                </div>
                <div className="flex items-ceter justify-center rounded-full w-8 h-8 shadow-lg shadow-gray-400 bg-[#2cd5c4] bg-opacity-70 p-2 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaInstagram />
                </div>
                <div className="flex items-ceter justify-center rounded-full w-8 h-8 shadow-lg shadow-gray-400 bg-[#2cd5c4] bg-opacity-70 p-2 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaWhatsapp />
                </div>
                <div className="flex items-ceter justify-center rounded-full w-8 h-8 shadow-lg shadow-gray-400 bg-[#2cd5c4] bg-opacity-70 p-2 cursor-pointer hover:scale-105 ease-in duration-300">
                  <IoIosMail />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
