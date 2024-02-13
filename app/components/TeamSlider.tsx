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
import SwiperCore from "swiper";

import { team } from "@/lib/team";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import TeamCard from "@/app/components/TeamCard";
import { color } from "framer-motion";

SwiperCore.use([Autoplay, Pagination, Navigation, Scrollbar, A11y, Mousewheel]);

const TeamSlider = () => {
  return (
    <div id="team" className="w-full py-16">
      <div className="max-w-[1240px] mx-auto w-full h-full justify-center">
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
            slidesPerView={4}
            breakpoints={{
              0: {
                slidesPerView: 2,
                centeredSlides: true,
              },
              641: {
                slidesPerView: 3.5,
                centeredSlides: true,
              },
              // when viewport is 768px or above, show 3.5 slides per view
              // 769: {
              //   slidesPerView: 4,
              //   centeredSlides: true,
              // },
              // when viewport is 1024px or above, show 4.5 slides per view
              1025: {
                slidesPerView: 4,
                centeredSlides: false,
              },
            }}
            // centeredSlides={true}
            navigation={{
              enabled: true,
            }}
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
          <style>
            {`
            .swiper-button-next,
            .swiper-button-prev {
              color: #2cd5c4
          }
          // .swiper-button-next {
          //   right: -40px;
          // }
          // .swiper-button-prev {
          //   left: -40px
          }`}
          </style>
        </div>
      </div>
    </div>
  );
};

export default TeamSlider;
