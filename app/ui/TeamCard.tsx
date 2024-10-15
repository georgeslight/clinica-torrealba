import React from "react";
import Image, { StaticImageData } from "next/image";

const TeamCard = ({
  src,
  title,
  description,
  alt,
}: {
  src: StaticImageData;
  title: string;
  description: string[];
  alt: string;
}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full rounded-xl group">
      <Image className="rounded-md relative" src={src} alt={alt} quality={25} />
      <div className="text-wrap absolute bottom-0 left-0 right-0 h-1/3 bg-[#132634] bg-opacity-80 transition-all duration-500 ease-in-out transform opacity-75 group-hover:opacity-100 rounded-b-md">
        <h3 className="text-sm sm:text-base xl:text-xl text-white text-center px-1 pt-1.5 pb-0.5 sm:py-1.5 lg:py-3 text-wrap">
          {title}
        </h3>
        <ul className="text-xs sm:text-sm xl:text-lg  px-1 text-white text-center list m-auto w-fit leading-normal lg:leading-relaxed h-auto break-words text-wrap">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeamCard;
