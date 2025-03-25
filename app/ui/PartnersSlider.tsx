"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Autoplay,
  Mousewheel,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import SwiperCore from "swiper";

import { partners } from "@/lib/partners";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import PartnerCard from "@/app/ui/PartnerCard";
import Link from "next/link";

// SwiperCore.use([Autoplay, Pagination, Scrollbar, A11y, Mousewheel]);

const PartnersSlider = () => {
  return (
    <div id="team" className="w-full py-16">
      <div className="mx-auto w-full h-full justify-center">
        <h2 className="font-didot tracking-widest uppercase text-[#2cd5c4] py-10 text-center items-center text-2xl md:text-3xl">
          Nuestros Partners
        </h2>
        <div className="w-full px-5 sm:px-20">
          <Swiper
            modules={[Autoplay, Pagination, Scrollbar, A11y, Mousewheel]}
            spaceBetween={20}
            slidesPerView={4}
            breakpoints={{
              0: {
                slidesPerView: 2,
                centeredSlides: false,
              },
              641: {
                slidesPerView: 3,
                centeredSlides: false,
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
            scrollbar={{ draggable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            mousewheel={false}
            className="h-full w-full"
          >
            {partners.map((image, index) => (
              <SwiperSlide key={index}>
                <Link
                  href={image.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PartnerCard
                    src={image.src}
                    title={image.title}
                    alt={image.alt}
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PartnersSlider;
