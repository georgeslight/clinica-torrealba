import Image, { StaticImageData } from "next/image";
import React from "react";
import Link from "next/link";

interface Treatment {
  name: string;
  description: string;
  image: {
    src: StaticImageData;
    alt: string;
  };
}

interface TreatmentCardProps {
  treatment: Treatment;
}

const TreatmentCard: React.FC<TreatmentCardProps> = ({ treatment }) => {
  return (
    <div className="w-full h-full shadow-sm shadow-gray-300 rounded-sm relative">
      <div className="relative rounded-sm flex flex-col items-center mx-auto border-[1px] border-[#e6e6e6] border-opacity-50 h-full pb-20">
        <div className="relative">
          <Image
            src={treatment.image.src}
            alt={treatment.image.alt}
            className="object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#ecf0f3] to-transparent top-1/2 h-1/2" />
        </div>
        <div className="w-full text-center flex flex-col items-center">
          <h3 className="text-2xl font-medium font-didot">{treatment.name}</h3>
          <div className="bg-[#2cd5c4] w-1/2 h-[2px] my-1" />
          <p className="font-helvetica text-sm font-light pt-2 px-6">
            {treatment.description}
          </p>
        </div>
        <div className="absolute flex flex-col text-center items-center bottom-0 mb-4">
          <Link
            href="https://4c2c5c15e0c38ccb091c5ef98afcb3afac9dce65.agenda.softwaredentalink.com/agenda"
            target="_blank"
            rel="noopener noreferrer"
            className="w-52 px-8 sm:px-4 lg:px-8 py-2 font-bold text-white bg-[#2cd5c4] rounded-sm hover:bg-[#1bb3a6] uppercase font-helvetica"
          >
            Pide Cita
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TreatmentCard;
