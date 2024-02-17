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
                <span className="font-bold">Bienvenidos</span> a OPH Dental
              </h2>
              <h3 className="justify-center text-white font-light py-8">
                Odontología Digital con CEREC
              </h3>
              <p className="justify-center text-white text-wrap pb-10 text-sm">
                El CEREC es un elemento central en el desarrollo de la
                Odontología en OPH Dental. <br />
                Nuestro equipo de profesionales es pionero en Chile y Sudamérica
                en la utilización de esta tecnología. Fuimos los primeros en
                realizar una restauración CEREC iniciando el desarrollo de la
                Odontología Digital en Chile.
                <br /> Hoy en día nos mantenemos como líderes siendo la única
                clínica con más de un equipo de la línea PRIMESCAN (último
                modelo CEREC) y son parte de nuestro STAFF casi la mitad de los
                instructores CEREC actuales en Chile. ¿Qué es CEREC? Se describe
                como un sistema CAD-CAM para realizar restauraciones dentales.
                Esto es la obtención de un modelo digital a partir de una cámara
                intraoral, el posterior diseño en un computador y luego la
                fabricación con materiales de alta estética y resistencia en un
                sistema de un torno computarizado. Esto permite tratamientos en
                muy poco tiempo (en una sesión) y de altísima durabilidad.
                <br /> Pero esto no es todo, ya que la integración de los
                modelos obtenidos a partir de la cámara permiten hacer análisis
                virtual de la oclusión, generación de guías quirúrgicas para
                tratamientos de implantes mediante la unión con sistemas
                radiológicos, realizar estudios digitales de ortodoncia y
                creación de aparatos mediante una impresora 3D para controlar el
                bruxismo.
                <br /> Además esto permite que nuestro laboratorio pueda
                realizar tratamientos de mayor complejidad en materiales como el
                zirconio y cerámicas de disilicatos para prótesis fija unitaria
                (corona) y plural (puentes).
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
