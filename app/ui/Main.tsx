"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { imagesClinic } from "@/lib/images-clinic";
import { AnimatePresence, motion } from "framer-motion";
import LogoT from "@/public/assets/T-fondo_negro.jpg";

const Main = () => {
  // State to hold the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Ref to store the interval ID
  const intervalRef = useRef<NodeJS.Timeout | number>();

  const startInterval = () => {
    // clear existing interval if any
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === imagesClinic.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000); // Change image every 5 seconds
  };

  // Effect to handle image changing
  useEffect(() => {
    startInterval();
    // Clear interval on component unmount
    return () => clearInterval(intervalRef.current);
  }, []);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imagesClinic.length - 1 ? 0 : prevIndex + 1,
    );
    startInterval(); // restart interval
  };

  return (
    <div
      id="home"
      className="w-full h-full mb-16 md:mb-0 lg:pt-0 relative bg-black"
    >
      <div className="max-w-[1280px] h-full w-full mx-auto">
        <div className="flex flex-col h-full md:flex-row relative z-10">
          {/* left */}
          <div className="relative h-full mt-16 md:w-1/2 xl:mt-10 2xl: flex items-center justify-center">
            <Image src={LogoT} className="h-full " alt="Logo T" />
            <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-50 px-8 md:px-10 lg:px-16  text-[#ecf0f3] flex flex-col justify-center">
              <h2 className="uppercase font-light pb-[5%]">
                <span className="font-bold text-center">Bienvenidos</span> a
                Clinica Dental Torrealba
              </h2>
              {/*<h3 className="justify-center font-light py-[5%]">*/}
              {/*  quis eripuit ponderum singulis*/}
              {/*</h3>*/}
              <p className="text-xl text-wrap overflow-auto">
                Somos una clínica odontológica y estética en la cual contamos
                con un equipo de especialistas, lo que permite entregar a
                nuestros pacientes todos los tratamientos necesarios para su
                salud dental de manera integral.
              </p>
            </div>
          </div>
          {/* right */}
          <div className="relative md:w-1/2 flex items-center justify-center bg-black">
            <AnimatePresence mode={"wait"}>
              {imagesClinic.map(
                (image, index) =>
                  index === currentIndex && (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0.05, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0.05, x: -15 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className={"h-full w-full items-center flex"}
                    >
                      <Image
                        className="object-cover z-1 rounded-sm"
                        src={image.src}
                        alt={image.alt}
                        onClick={nextImage}
                        style={{
                          width: "100%",
                          height: "auto",
                        }}
                        priority={true}
                      />
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="hidden md:block absolute bottom-0 inset-x-0 md:h-0 z-10 bg-transparent mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 70 100"
            preserveAspectRatio="none"
            className="absolute bottom-[25%] h-[55px] lg:h-[100px] w-[100%] z-10"
          >
            <path d="M0 0 L50 90 L100 -50 V100 H0" fill="#ecf0f3"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Main;
