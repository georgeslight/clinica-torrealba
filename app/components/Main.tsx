import React from "react";
import Image from "next/image";
import ImageSlider from "@/app/components/ImageSlider";

const Main = () => {
  return (
    <div id="home" className="w-full text-center h-screen p-2 py-16 px-[10%]">
      <div className="flex items-center justify-center mx-auto px-2 py-16">
        <div className="absolute py-4 h-auto transform -translate-x-1/3 translate-y-28 w-full max-w-[200px] md:max-w-[300px] lg:max-m-[400px] xl:max-w-[600px] 2xl:max-w-[1000px]">
          <Image
            className={"rounded-md block h-full"}
            src={"/assets/Logotipo option2_cut.png"}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            width={1200}
            height={800}
            alt={"/"}
          />
        </div>
        <div className="absolute py-4 h-auto transform translate-x-1/3 translate-y-44 w-full max-w-[200px] md:max-w-[300px] lg:max-m-[400px] xl:max-w-[600px] 2xl:max-w-[1000px]">
          <ImageSlider />
        </div>
      </div>
    </div>
  );
};

export default Main;
