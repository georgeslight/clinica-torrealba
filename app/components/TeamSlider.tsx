"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Autoplay,
  Mousewheel,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";

import { team } from "@/lib/team";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TeamCard from "@/app/components/TeamCard";

const TeamSlider = () => {
  return (
    <div id="team" className="w-full py-16">
      <div className="w-full mx-auto py-16">
        <h2 className="tracking-widest uppercase text-[#2cd5c4] py-10 text-center items-center">
          Nuestro Equipo
        </h2>
        <div className="w-full">
          <Swiper
            modules={[
              Autoplay,
              Pagination,
              Navigation,
              Scrollbar,
              A11y,
              Mousewheel,
            ]}
            spaceBetween={25}
            breakpoints={{
              640: {
                slidesPerView: 2.5,
              },
              // when viewport is 768px or above, show 3.5 slides per view
              768: {
                slidesPerView: 3.5,
              },
              // when viewport is 1024px or above, show 4.5 slides per view
              1024: {
                slidesPerView: 4.5,
              },
            }}
            centeredSlides={true}
            navigation={true}
            scrollbar={{ draggable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            mousewheel={false}
            className="h-full w-full"
          >
            {team.map((image, index) => (
              <SwiperSlide key={index}>
                <TeamCard
                  src={image.src}
                  title={image.title}
                  description={image.description}
                  alt={image.alt}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TeamSlider;
