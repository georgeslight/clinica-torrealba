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
  description: string;
  alt: string;
}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group">
      <Image className="rounded-md relative " src={src} alt={alt} />
      <div className="hidden group-hover:block absolute bottom-0 left-0 right-0 h-1/3 bg-[#132634] bg-opacity-80 pb-0 transition-all duration-500 ease-in-out transform group-hover:opacity-80 rounded-md">
        <h3 className="text-2xl text-white tracking-wider text-center pt-4">
          {title}
        </h3>
        <p className="pt-2 text-white text-center">{description}</p>
      </div>
    </div>
  );
};

export default TeamCard;
