import React from "react";
import Image from "next/image";
import { specialities } from "@/lib/specialities";

const Skills = () => {
  return (
    <div id="specialities" className="w-full py-16">
      <div className="max-w-[1240px] mx-auto w-full h-full flex-col justify-center">
        <h2 className="font-didot tracking-widest uppercase text-[#2cd5c4] py-10 text-center items-center">
          Nuestras especialidades
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
          {specialities.map((image, index) => (
            <div
              className="rounded-md flex flex-col items-center max-w-[350px] mx-auto"
              key={index}
            >
              {/*<div*/}
              {/*  className="shadow-lg rounded-lg hover:scale-105 ease-in duration-300 flex flex-col items-center max-w-[300px] mx-auto"*/}
              {/*  key={index}*/}
              {/*>*/}
              <Image src={image.src} alt={image.alt} className="rounded-t-md" />
              {/*</div>*/}
              <div className="flex items-center justify-center py-3">
                <h3 className={"text-center text-[#2cd5c4]"}>{image.title}</h3>
              </div>
              <p className={"text-center px-3"}>{image.description}</p>
              {/*</div>*/}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;