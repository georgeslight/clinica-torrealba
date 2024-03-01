// "use client";
//
// import Image from "next/image";
//
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
//
// import { imagesClinic } from "@/lib/imagesClinic";
//
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
//
// const ImageSlider = () => {
//   return (
//     <section className="py-12">
//       <div className="container">
//         <Swiper
//           autoplay={{ delay: 2500 }}
//           modules={[Autoplay, Pagination]}
//           loop={true}
//           className="h-full w-full rounded-md"
//         >
//           {imagesClinic.map((image, index) => (
//             <SwiperSlide key={index}>
//               <div className="">
//                 <Image
//                   src={image.src}
//                   alt={image.alt}
//                   sizes="100vw"
//                   style={{ width: "100%", height: "auto" }}
//                   width={1200}
//                   height={800}
//                   className="block h-full object-cover"
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };
//
// export default ImageSlider;
