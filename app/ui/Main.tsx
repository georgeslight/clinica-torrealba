"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { images, T } from "@/lib/images";
import { AnimatePresence, motion } from "framer-motion";

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
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
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
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
    startInterval(); // restart interval
  };

  return (
    <div id="home" className="w-full pb-16 pt-20 relative md:bg-black">
      <div className="max-w-[1280px] h-full w-full mx-auto">
        {/*<div className="grid md:grid-cols-2 gap-0 relative grid-cols-1 md:grid-flow-col">*/}
        <div className="flex flex-col md:flex-row relative z-10">
          {/* left */}
          {/*<div className="h-full relative col-span-1">*/}
          <div className="relative md:w-1/2 xl:mt-10 2xl:mt-24">
            <Image src={T.src} className="h-full" alt={T.alt} />
            <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-50 px-8 md:px-10 lg:px-16 py-8 md:py-8 lg:py-16 text-[#ecf0f3]">
              <h2 className=" justify-center uppercase font-light">
                <span className="font-bold">similique</span> Lorem ipsum dolor
              </h2>
              <h3 className="justify-center font-light py-[5%]">
                quis eripuit ponderum singulis
              </h3>
              {/*<p className="justify-center text-wrap pb-10 md:text-xs lg:text-[13px] xl:text-lg">*/}
              <p className="justify-center text-wrap pb-10 h-[75%] xl:h-full overflow-auto">
                ridens autem ac mauris vituperatoribus tempor persius has
                habemus explicari appetere deseruisse sociosqu reprimique in.
                <br /> possit sed lacinia semper error facilis sapientem
                ocurreret curabitur euripidis esse malesuada lectus maiorum quo
                ceteros nisl massa iaculis curae repudiare vituperatoribus
                malesuada taciti instructior indoctum liber ornatus litora
                lectus ornatus ludus mentitum detraxit constituto purus class
                comprehensam dolore impetus simul animal sem arcu efficitur
                facilisi ultricies senectus id eget possim evertitur
                vituperatoribus lorem posuere definiebas voluptaria vis laudem
                nisl iaculis falli ea volutpat percipit qui detraxit fuisset
                vivamus iuvaret repudiare noluisse convenire inceptos dicant
                facilis iudicabit mauris iaculis maecenas voluptatum mandamus
                quaerendum graeco no fusce nulla ludus venenatis constituto
                appetere eirmod ridiculus electram dis ac consul persecuti
                bibendum inani.
              </p>
            </div>
          </div>
          {/* right */}
          {/*<div className="h-full relative flex items-center justify-center right-0 mx-auto col-span-1">*/}
          <div className="relative md:w-1/2 flex items-center justify-center bg-black">
            <AnimatePresence mode={"wait"}>
              {images.map(
                (image, index) =>
                  index === currentIndex && (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0.05, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0.05, x: -15 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className={"h-full w-full"}
                    >
                      <Image
                        className="object-cover z-1 rounded-sm"
                        src={image.src}
                        alt={image.alt}
                        onClick={nextImage}
                        sizes={"100vw"}
                        style={{
                          width: "110%",
                          height: "auto",
                        }}
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
