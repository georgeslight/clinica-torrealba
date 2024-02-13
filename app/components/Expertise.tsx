import React from "react";
import Image from "next/image";
import { expertise } from "@/lib/expertise";

const Skills = () => {
  return (
    <div id="especialidades" className="w-full py-16">
      <div className="max-w-[1240px] mx-auto flex-col justify-center">
        <h2 className="tracking-widest uppercase text-[#2cd5c4] py-10 text-center items-center">
          Nuestras especialidades
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertise.map((image, index) => (
            <div
              className="shadow-lg rounded-lg hover:scale-105 ease-in duration-300 flex flex-col items-center max-w-[300px] mx-auto"
              key={index}
            >
              {/*<div className="flex flex-col items-center max-w-[300px] mx-auto">*/}
              {/*<div className="m-auto pb-3">*/}
              <Image
                src={image.src}
                alt={image.alt}
                width="300"
                height="200"
                className={"rounded-lg"}
              />
              {/*</div>*/}
              <div className="flex items-center justify-center py-3">
                <h3 className={"text-center text-[#2cd5c4]"}>{image.title}</h3>
              </div>
              <p className={"text-center pb-3 px-3"}>{image.description}</p>
              {/*</div>*/}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
