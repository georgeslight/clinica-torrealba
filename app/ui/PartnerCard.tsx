import React from "react";
import Image, { StaticImageData } from "next/image";

const PartnerCard = ({
  src,
  title,
  // description,
  alt,
}: {
  src: StaticImageData;
  title: string;
  // description: string[];
  alt: string;
}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full rounded-xl group">
      <Image
        className="rounded-md relative max-w-36 object-scale-down py-1"
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default PartnerCard;
