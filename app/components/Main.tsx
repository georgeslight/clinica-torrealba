"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { images, T } from "@/lib/images";

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
    }, 5000); // Change image every 5 seconds

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <div id="home" className="w-full pb-16 pt-20">
      <div className="max-w-[1240px] h-screen w-full mx-auto relative">
        <div className="h-full absolute">
          <Image
            src={T.src}
            className="object-contain"
            alt={T.alt}
            sizes={"100vw"}
            style={{
              width: "auto",
              height: "100%",
            }}
          />
        </div>
        <div className="h-full absolute flex items-center  right-0 mx-auto">
          {images.map((image, index) => (
            <div key={index}>
              {index === currentIndex && (
                <Image
                  className="object-contain"
                  src={image.src}
                  alt={image.alt}
                  onClick={nextImage}
                  sizes={"100vw"}
                  style={{
                    width: "auto",
                    height: "60vh",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
