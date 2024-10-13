import Image, { StaticImageData } from "next/image";
import React from "react";

interface Treatment {
  image: {
    src: StaticImageData;
    alt: string;
  };
  imageMobile: {
    src: StaticImageData;
    alt: string;
  };
}

interface TreatmentCardProps {
  treatment: Treatment;
}

const AestheticsCard: React.FC<TreatmentCardProps> = ({ treatment }) => {
  return (
    <div className="w-full h-full shadow-sm shadow-gray-300 rounded-sm relative">
      <div className="relative rounded-sm flex flex-col items-center mx-auto border-[1px] border-[#e6e6e6] border-opacity-50 h-full">
        <div className="relative">
          <Image
            src={treatment.image.src}
            alt={treatment.image.alt}
            className="object-contain" // hidden lg:block
          />
          {/*<Image*/}
          {/*  src={treatment.imageMobile.src}*/}
          {/*  alt={treatment.image.alt}*/}
          {/*  className="block lg:hidden object-contain"*/}
          {/*/>*/}
        </div>
      </div>
    </div>
  );
};

export default AestheticsCard;
