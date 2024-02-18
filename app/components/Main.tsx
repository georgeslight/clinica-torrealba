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
      <div className="max-w-[1280px] h-full w-full mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-0 relative">
          {/* left */}
          <div className="h-full relative col-span-1">
            <Image
              src={T.src}
              className="object-cover object-center"
              alt={T.alt}
              sizes={"100vw"}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
            <div className="absolute top-0 left-0 h-full w-full bg-black opacity-80 px-16 py-16">
              <h2 className=" justify-center text-white uppercase font-light">
                <span className="font-bold">similique</span> Lorem ipsum dolor
              </h2>
              <h3 className="justify-center text-white font-light py-8">
                quis eripuit ponderum singulis
              </h3>
              <p className="justify-center text-white text-wrap pb-10 text-sm">
                ridens autem ac mauris vituperatoribus tempor persius has
                habemus explicari appetere deseruisse sociosqu reprimique in.
                <br />
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo.
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
                <br /> impetus offendit qualisque tellus sumo suscipit
                honestatis eripuit doctus numquam comprehensam bibendum iusto
                vitae tractatos suscipiantur ad melius dicit causae laoreet
                veniam ex varius eos eloquentiam suscipit in dicunt blandit
                nullam consequat vidisse harum ornare eget interesset elaboraret
                inciderint platonem atomorum mel non suscipit habeo propriae
                diam conubia leo definiebas.
                <br /> constituam faucibus deterruisset dicat proin noluisse
                error alienum torquent mattis evertitur efficiantur varius
                sodales prodesset facilisis vim nisl imperdiet elitr posuere
                tamquam eirmod orci suavitate.
              </p>
            </div>
          </div>
          {/* right */}
          <div className="h-full relative flex items-center justify-center right-0 mx-auto col-span-1">
            {images.map((image, index) => (
              <div key={index}>
                {index === currentIndex && (
                  <Image
                    className="object-cover z-1"
                    src={image.src}
                    alt={image.alt}
                    onClick={nextImage}
                    sizes={"100vw"}
                    style={{
                      width: "110%",
                      height: "auto",
                    }}
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
