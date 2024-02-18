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
import { logoNombre } from "@/lib/images";

const Navbar = () => {
  const pathname = usePathname();
  const [nav, setNav] = useState(true);
  const [side, setSide] = useState(false);
  const toggleSide = () => {
    setSide(!side);
  };
  const [shadow, setShadow] = useState(false);
  const [selected, setSelected] = useState("/#home");

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

  // hide navbar when scrolling down
  useEffect(() => {
    let lastScrollPos = 0;
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = currentScrollPos < lastScrollPos;

      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }

      if (isScrollingUp || window.scrollY === 0) {
        setNav(true);
      } else {
        setNav(false);
      }
      lastScrollPos = currentScrollPos;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={
        // nav?
        shadow
          ? "px-8 py-1 fixed w-full shadow-xl z-[100] bg-[#ecf0f3] opacity-80 transition-all duration-500"
          : "px-8 py-5 fixed w-full z-[100] bg-[#ecf0f3] transition-all duration-500"
        // : "px-8 fixed w-full h-20 z-[100] bg-[#ecf0f3] -translate-y-full transition-transform duration-300"
      }
    >
      <div className="flex justify-between items-center h-full px-6 2xl:px-16">
        <div className="w-5/6 sm:w-1/3 lg:w-1/5">
          <Image
            src={logoNombre.src}
            alt={logoNombre.alt}
            // layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="flex-grow">
          <ul className="hidden lg:flex justify-center">
            <Link href="/#home" className={`${didot.className} antialiased`}>
              <li
                onClick={() => setSelected("/#home")}
                className={clsx(
                  "ml-10 text-sm uppercase cursor-pointer hover:text-[#2cd5c4] hover:scale-105 ease-in duration-300",
                  { "text-[#2cd5c4] font-bold": selected === "/#home" },
                )}
              >
                Inicio
              </li>
            </Link>
            <Link href="/#team" className={`${didot.className} antialiased`}>
              <li
                onClick={() => setSelected("/#team")}
                className={clsx(
                  "ml-10 text-sm uppercase cursor-pointer hover:text-[#2cd5c4] hover:scale-105 ease-in duration-300",
                  { "text-[#2cd5c4] font-bold": selected === "/#team" },
                )}
              >
                Equipo Dental
              </li>
            </Link>
            <Link
              href="/#expertise"
              className={`${didot.className} antialiased`}
            >
              <li
                onClick={() => setSelected("/#expertise")}
                className={clsx(
                  "ml-10 text-sm uppercase cursor-pointer hover:text-[#2cd5c4] hover:scale-105 ease-in duration-300",
                  {
                    "text-[#2cd5c4] font-bold": selected === "/#expertise",
                  },
                )}
              >
                Especialidades
              </li>
            </Link>
            {/*<Link href="/" className={`${didot.className} antialiased`}>*/}
            {/*  <li*/}
            {/*    onClick={() => setSelected("")}*/}
            {/*    className={clsx(*/}
            {/*      "ml-10 text-sm uppercase cursor-pointer hover:text-[#2cd5c4] hover:scale-105 ease-in duration-300",*/}
            {/*      { "text-[#2cd5c4] fonts-bold": selected === "/" },*/}
            {/*    )}*/}
            {/*  >*/}
            {/*    Equipo Dental*/}
            {/*  </li>*/}
            {/*</Link>*/}
            <Link href="/#contact" className={`${didot.className} antialiased`}>
              <li
                onClick={() => setSelected("")}
                className={clsx(
                  "ml-10 text-sm uppercase cursor-pointer hover:text-[#2cd5c4] hover:scale-105 ease-in duration-300",
                  { "text-[#2cd5c4] font-bold": selected === "/" },
                )}
              >
                Contacto
              </li>
            </Link>
          </ul>
        </div>
        <div className="hidden lg:flex space-x-4">
          <div className="flex items-ceter justify-center rounded-full w-8 h-8 bg-[#2cd5c4] bg-opacity-70 p-2 cursor-pointer hover:scale-105 ease-in">
            <FaFacebook />
          </div>
          <div className="flex items-ceter justify-center rounded-full w-8 h-8 bg-[#2cd5c4] bg-opacity-70 p-2 cursor-pointer hover:scale-105 ease-in">
            <FaInstagram />
          </div>
          <div className="flex items-ceter justify-center rounded-full w-8 h-8 bg-[#2cd5c4] bg-opacity-70 p-2 cursor-pointer hover:scale-105 ease-in">
            <FaWhatsapp />
          </div>
          <div className="flex items-ceter justify-center rounded-full w-8 h-8 bg-[#2cd5c4] bg-opacity-70 p-2 cursor-pointer hover:scale-105 ease-in">
            <IoIosMail />
          </div>
        </div>
        <div onClick={toggleSide} className="lg:hidden p-auto">
          <AiOutlineMenu size={25} />
        </div>

        {/* black overlay that covers the whole screen when sidebar is open */}
        <div
          className={
            side
              ? "lg:hidden fixed left-0 top-0 w-full h-[100%] bg-black/70"
              : ""
          }
        >
          {/* When the side variable is true, it fills up 75% of the screen on small devices, 60% of the screen on medium devices and 45% on large devices. When side is false, it seems to be hidden to the left of the screen (due to the style left: [-100%]). */}
          <div
            className={
              side
                ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-[100%] bg-[#ecf0f3] p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-[100%] bg-[#ecf0f3] p-10 transition-all duration-500"
            }
          >
            <div>
              <div className="flex w-full items-center justify-between border-b border-gray-300 my-4">
                <Image
                  src={logoNombre.src}
                  alt={logoNombre.alt}
                  sizes={"100vw"}
                  style={{
                    width: "75%",
                    height: "auto",
                  }}
                />
                <div
                  onClick={toggleSide}
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                >
                  <AiOutlineClose />
                </div>
              </div>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                <Link
                  href="/#home"
                  // scroll={false}
                  // className={`${didot.className} antialiased`}
                >
                  <li
                    onClick={() => {
                      setSide(false);
                      setSelected("/#home");
                    }}
                    className={clsx("py-4 text-sm", {
                      "text-[#2cd5c4] font-bold": selected === "/#home",
                    })}
                  >
                    Inicio
                  </li>
                </Link>
                <Link
                  href="/#team"
                  // scroll={false}
                  // className={`${didot.className} antialiased`}
                >
                  <li
                    onClick={() => {
                      setSide(false);
                      setSelected("/#team");
                    }}
                    className={clsx("py-4 text-sm", {
                      "text-[#2cd5c4] font-bold": selected === "/#team",
                    })}
                  >
                    Equipo Dental
                  </li>
                </Link>
                <Link
                  href="/#expertise"
                  // scroll={false}
                  // className={`${didot.className} antialiased`}
                >
                  <li
                    onClick={() => {
                      setSide(false);
                      setSelected("/#expertise");
                    }}
                    className={clsx("py-4 text-sm", {
                      "text-[#2cd5c4] font-bold": selected === "#expertise",
                    })}
                  >
                    Especialidades
                  </li>
                </Link>
                {/*<Link*/}
                {/*  href="/"*/}
                {/*  // scroll={false}*/}
                {/*  // className={`${didot.className} antialiased`}*/}
                {/*>*/}
                {/*  <li*/}
                {/*    onClick={() => {*/}
                {/*      setSide(false);*/}
                {/*      setSelected("");*/}
                {/*    }}*/}
                {/*    className={clsx("py-4 text-sm", {*/}
                {/*      "text-[#2cd5c4] fonts-bold": selected === "",*/}
                {/*    })}*/}
                {/*  >*/}
                {/*    Equipo Dental*/}
                {/*  </li>*/}
                {/*</Link>*/}
                <Link
                  href="/#contact"
                  // scroll={false}
                  // className={`${didot.className} antialiased`}
                >
                  <li
                    onClick={() => {
                      setSide(false);
                      setSelected("");
                    }}
                    className={clsx("py-4 text-sm", {
                      "text-[#2cd5c4] font-bold": selected === "#contact",
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
