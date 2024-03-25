"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import logo from "@/public/assets/TORRE-ALBA.png";

const Navbar = () => {
  const pathname = usePathname();
  const [nav, setNav] = useState(true);
  const [side, setSide] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [selected, setSelected] = useState("/#home");

  const [startX, setStartX] = useState<number | null>(null);
  const [startY, setStartY] = useState<number | null>(null);
  const toggleSide = () => {
    setSide(!side);
  };

  // close sidebar
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const sidebarContent = document.getElementById("sidebar-content");
    if (!sidebarContent || !sidebarContent.contains(e.target as Node)) {
      setSide(false);
    }
  };
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartX(e.touches[0].clientX);
    setStartY(e.touches[0].clientY);
  };
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!startX || !startY) {
      return;
    }

    const endX = e.touches[0].clientX;
    const endY = e.touches[0].clientY;

    const diffX = startX - endX;
    const diffY = startY - endY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) {
        // Swiped left
        setSide(false);
      }
    }

    setStartX(null);
    setStartY(null);
  };

  // navigation
  useEffect(() => {
    setSelected(pathname);
  }, [pathname]);

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

  // const goHome = () => {
  //   router.push = "/#home";
  // };

  return (
    <div
      className={
        // nav?
        shadow
          ? "px-8 py-3 2xl:py-2 fixed w-full shadow-xl z-[100] bg-[rgba(236,240,243,0.8)] transition-all duration-500"
          : "px-8 py-5 fixed w-full z-[100] bg-[#ecf0f3] transition-all duration-500"
        // : "px-8 fixed w-full h-20 z-[100] bg-[#ecf0f3] -translate-y-full transition-transform duration-300"
      }
    >
      <div className="flex justify-between items-center h-full 2xl:px-16">
        <div className="w-5/6 sm:w-1/3 lg:w-1/5 xl:w-[17.5%] 2xl:w-[13%]">
          <Link href="/">
            <Image
              src={logo}
              alt="Logo Nombre Clinica"
              className={"object-contain"}
              onClick={() => setSelected("/")}
            />
          </Link>
        </div>
        <div className="flex-grow">
          <ul className="hidden lg:flex justify-center">
            <Link href="/#home" className="font-didot">
              <li
                onClick={() => setSelected("/#home")}
                className={clsx(
                  "mx-5 2xl:mx-10 lg:text-md 2xl:text-lg uppercase cursor-pointer hover:text-[#2cd5c4] hover:scale-105 ease-in duration-300",
                  { "text-[#2cd5c4] font-bold": selected === "/#home" },
                )}
              >
                Inicio
              </li>
            </Link>
            <Link href="/#team" className="font-didot">
              <li
                onClick={() => setSelected("/#team")}
                className={clsx(
                  "mx-5 2xl:mx-10 lg:text-md 2xl:text-lg uppercase cursor-pointer hover:text-[#2cd5c4] hover:scale-105 ease-in duration-300",
                  { "text-[#2cd5c4] font-bold": selected === "/#team" },
                )}
              >
                Equipo Dental
              </li>
            </Link>
            <Link href="/#specialities" className="font-didot">
              <li
                onClick={() => setSelected("/#specialities")}
                className={clsx(
                  "mx-5 2xl:mx-10 lg:text-md 2xl:text-lg uppercase cursor-pointer hover:text-[#2cd5c4] hover:scale-105 ease-in duration-300",
                  {
                    "text-[#2cd5c4] font-bold": selected === "/#specialities",
                  },
                )}
              >
                Especialidades
              </li>
            </Link>
            <Link href="/#contact" className="font-didot">
              <li
                onClick={() => setSelected("/#contact")}
                className={clsx(
                  "mx-5 2xl:mx-10 lg:text-md 2xl:text-lg uppercase cursor-pointer hover:text-[#2cd5c4] hover:scale-105 ease-in duration-300",
                  { "text-[#2cd5c4] font-bold": selected === "/#contact" },
                )}
              >
                Contacto
              </li>
            </Link>
          </ul>
        </div>
        <div className="hidden lg:flex space-x-4">
          <div className="flex items-ceter justify-center rounded-full w-8 h-8 bg-[#2cd5c4] bg-opacity-70 p-2 cursor-pointer hover:scale-105 ease-in">
            <a
              href="https://www.facebook.com/profile.php?id=61552994867158"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
          </div>
          <div className="flex items-ceter justify-center rounded-full w-8 h-8 bg-[#2cd5c4] bg-opacity-70 p-2 cursor-pointer hover:scale-105 ease-in">
            <a
              href="https://www.instagram.com/clinicatorrealba/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
          <div className="flex items-ceter justify-center rounded-full w-8 h-8 bg-[#2cd5c4] bg-opacity-70 p-2 cursor-pointer hover:scale-105 ease-in">
            <a
              href="https://api.whatsapp.com/send/?phone=56940987902&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
          <div className="flex items-ceter justify-center rounded-full w-8 h-8 bg-[#2cd5c4] bg-opacity-70 p-2 cursor-pointer hover:scale-105 ease-in">
            <a
              href="mailto:clinicadentaltorrealba@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoIosMail />
            </a>
          </div>
        </div>
        <div onClick={toggleSide} className="lg:hidden p-auto">
          <AiOutlineMenu size={25} />
        </div>

        {/* Sidebar */}
        {/* black overlay that covers the whole screen when sidebar is open */}
        <div
          id="sidebar"
          className={
            side
              ? "lg:hidden fixed left-0 top-0 w-full h-[100%] bg-black/70"
              : ""
          }
          onClick={handleOverlayClick}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {/* When the side variable is true, it fills up 75% of the screen on small devices, 60% of the screen on medium devices and 45% on large devices. When side is false, it seems to be hidden to the left of the screen (due to the style left: [-100%]). */}
          <div
            id="sidebar-content"
            className={
              side
                ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-[100%] bg-[#ecf0f3] p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-[100%] bg-[#ecf0f3] p-10 transition-all duration-500"
            }
          >
            <div>
              <div className="flex w-full items-center justify-between border-b border-gray-300 my-4">
                <Link
                  href="/"
                  onClick={() => {
                    setSide(false);
                    setSelected("/");
                  }}
                >
                  <Image
                    src={logo}
                    alt="Logo Nombre Clinica"
                    sizes={"100vw"}
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </Link>
                {/*<div*/}
                {/*  onClick={toggleSide}*/}
                {/*  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"*/}
                {/*>*/}
                {/*  <AiOutlineClose />*/}
                {/*</div>*/}
              </div>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                <Link
                  href="/#home"
                  // scroll={false}
                  className="font-didot"
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
                  className="font-didot"
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
                  href="/#specialities"
                  // scroll={false}
                  className="font-didot"
                >
                  <li
                    onClick={() => {
                      setSide(false);
                      setSelected("/#specialities");
                    }}
                    className={clsx("py-4 text-sm", {
                      "text-[#2cd5c4] font-bold": selected === "/#specialities",
                    })}
                  >
                    Especialidades
                  </li>
                </Link>
                <Link href="/#contact" className="font-didot">
                  <li
                    onClick={() => {
                      setSide(false);
                      setSelected("/#contact");
                    }}
                    className={clsx("py-4 text-sm", {
                      "text-[#2cd5c4] font-bold": selected === "/#contact",
                    })}
                  >
                    Contacto
                  </li>
                </Link>
              </ul>
            </div>
            <div className="pt-40 w-3/4 absolute inset-x-[10%] bottom-10">
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="flex items-ceter justify-center rounded-full w-8 h-8 shadow-lg shadow-gray-400 bg-[#2cd5c4] bg-opacity-70 p-2 cursor-pointer hover:scale-105 ease-in duration-300">
                  <a
                    href="https://www.facebook.com/profile.php?id=61552994867158"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook />
                  </a>
                </div>
                <div className="flex items-ceter justify-center rounded-full w-8 h-8 shadow-lg shadow-gray-400 bg-[#2cd5c4] bg-opacity-70 p-2 cursor-pointer hover:scale-105 ease-in duration-300">
                  <a
                    href="https://www.instagram.com/clinicatorrealba/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </a>
                </div>
                <div className="flex items-ceter justify-center rounded-full w-8 h-8 shadow-lg shadow-gray-400 bg-[#2cd5c4] bg-opacity-70 p-2 cursor-pointer hover:scale-105 ease-in duration-300">
                  <a
                    href="https://api.whatsapp.com/send/?phone=56940987902&text&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp />
                  </a>
                </div>
                <div className="flex items-ceter justify-center rounded-full w-8 h-8 shadow-lg shadow-gray-400 bg-[#2cd5c4] bg-opacity-70 p-2 cursor-pointer hover:scale-105 ease-in duration-300">
                  <a
                    href="mailto:clinicadentaltorrealba@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoIosMail />
                  </a>
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
