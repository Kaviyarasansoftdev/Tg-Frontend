import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import Marquee from "react-fast-marquee";
import { Navigation } from "swiper/modules";

export default function HighLight() {
  const data = [
    { img: "/images/home/highlight1.png" },
    { img: "/images/home/highlight2.png" },
    { img: "/images/home/highlight3.png" },
    { img: "/images/home/highlight4.png" },
    { img: "/images/home/highlight5.png" },
  ];
  return (
    <div className="">
      <div className="bg-white">
        <div className="">
          <div className="px-5 flex items-center justify-between">
            <div className="">
              <h2 className="whitespace-nowrap text-2xl">1K+ Trusted Brands</h2>
            </div>
            <div className="h-20 w-3/5 flex items-center">
              {/* <div className="h-full w-full mx-auto overflow-hidden flex justify-center items-center rounded-t-[40px] bg-white">
                <div className="">
                  <Marquee
                    gradient={false}
                    speed={50}
                    direction="left"
                    pauseOnHover={true}
                    pauseOnClick={true}
                    loop={0}
                    className=""
                  >
                    <p className="mr-3">Highlight Content Goes Here ....</p>
                    <p className="mr-3">Highlight Content Goes Here ....</p>
                    <p className="mr-3">Highlight Content Goes Here ....</p>
                    <p className="mr-3">Highlight Content Goes Here ....</p>
                    <p className="mr-3">Highlight Content Goes Here ....</p>
                  </Marquee>
                </div>
              </div> */}
              <hr className="text-gray-300 w-full mx-auto " />
            </div>
            <div className="flex gap-3">
              <div className="swiper-button-high-prev p-3 bg-white rounded-full border border-gray-100 shadow-md">
                <GrFormPrevious className="text-lg" />
              </div>
              <div className="swiper-button-high-next p-3 bg-white rounded-full border border-gray-100 shadow-md">
                <MdNavigateNext className="text-lg" />
              </div>
            </div>
          </div>
          <div className="bg-white p-5">
            <Swiper
              modules={[Navigation]}
              loop={true}
              breakpoints={{
                320: { slidesPerView: 2, spaceBetween: 30 },
                640: { slidesPerView: 3, spaceBetween: 30 },
                1024: { slidesPerView: 4, spaceBetween: 50 },
                1440: { slidesPerView: 5, spaceBetween: 50 },
              }}
              navigation={{
                nextEl: ".swiper-button-high-next",
                prevEl: ".swiper-button-high-prev",
              }}
            >
              {data?.map((dt, i) => (
                <SwiperSlide key={i}>
                  <div className="relative h-20">
                    <img
                      src={dt?.img}
                      alt=""
                      className="object-contain h-full "
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
