"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import ImageSlider from "@/app/components/ImageSlider";
import { images } from "@/lib/images";

const Main = () => {
  // State to hold the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Effect to handle image changing
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Check if currentIndex is at the last image, reset to 0, else increment
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 2500); // Change image every 2.5 seconds

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="home" className="w-full h-screen text-center p-2">
      <div>
        <div className="max-w[1240px] w-full h-full p-2 flex flex-col pt-28 sm:justify-center items-center">
          <div className="w-full sm:absolute left-0 md:bottom-[45%] lg:left-[10%] xl:bottom-[35%] xl:left-[10%] sm:max-w-[200px] md:max-w-[600px]">
            <Image
              className="rounded-md block h-full"
              src={"/assets/Logotipo option2_cut.png"}
              style={{ width: "100%", height: "auto" }}
              width={1200}
              height={800}
              alt={"/"}
            />
          </div>
          <div className="w-full sm:absolute right-0 md:top-[45%] lg:right-[10%] xl:top-[35%] xl:right-[10%] sm:max-w-[200px] md:max-w-[600px]">
            {images.map((image, index) => (
              <div key={index}>
                {index === currentIndex && (
                  <Image
                    src={image.src}
                    alt={image.alt}
                    style={{ width: "100%", height: "auto" }}
                    width={1200}
                    height={800}
                    className="rounded-md block h-full"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
