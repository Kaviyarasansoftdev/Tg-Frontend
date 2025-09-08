// import { XCircle } from 'lucide-react'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import apiurl from '../../services/apiendpoint/apiendpoint';

// export default function Popup({ welcomePopup, setActivePopup, activePopup }) {
//     return (
//         <>
//             {activePopup && (
//                 <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-300">
//                     <div className="relative w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl  animate-fadeIn">
//                         <Swiper
//                             modules={[Navigation, Pagination]}
//                             // pagination={{ clickable: true }}
//                             slidesPerView={1}
//                             spaceBetween={0}
//                             className="rounded-2xl"
//                         >
//                             {welcomePopup.map((facility, index) => (
//                                 <SwiperSlide
//                                     key={index}
//                                     className="relative flex justify-center items-center h-full w-fit max-h-[90vh] p-4"
//                                 >
//                                     <button onClick={() => setActivePopup(false)} className="absolute z-10 cursor-pointer top-4 right-4 bg-gray-100 hover:bg-red-100 text-red-600 p-2 rounded-full transition-all">
//                                         <XCircle className="w-6 h-6" />
//                                     </button>
//                                     <img
//                                         src={`${apiurl()}/${facility.Image}`}
//                                         alt={facility.Image}
//                                         className="max-h-[80vh] w-auto my-auto mx-auto max-w-full object-contain rounded-2xl shadow-md"
//                                     />
//                                 </SwiperSlide>
//                             ))}
//                         </Swiper>
//                     </div>
//                 </div>
//             )}

//         </>
//     )
// }

import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import apiurl from '../../services/apiendpoint/apiendpoint';

export default function Popup({ welcomePopup, setActivePopup, activePopup }) {
    return (
        <>
            {activePopup && (
                <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl mx-auto overflow-hidden animate-in zoom-in-95 duration-300">

                        {/* Close Button */}
                        <button
                            onClick={() => setActivePopup(false)}
                            className="absolute top-4 right-4 z-20 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-all duration-200 hover:scale-110"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            navigation={{
                                prevEl: '.promo-prev',
                                nextEl: '.promo-next',
                            }}
                            pagination={{
                                clickable: true,
                                bulletClass: 'swiper-pagination-bullet !bg-gray-400 !w-3 !h-3 !mx-1',
                                bulletActiveClass: 'swiper-pagination-bullet-active !bg-blue-600'
                            }}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                            }}
                            slidesPerView={1}
                            spaceBetween={0}
                            loop={welcomePopup.length > 1}
                            className="w-full"
                            style={{
                                '--swiper-pagination-bottom': '16px'
                            }}
                        >
                            {welcomePopup.map((facility, index) => (
                                <SwiperSlide key={index}>
                                    <div className="relative">
                                        <img
                                            src={`${apiurl()}/${facility.Image}`}
                                            alt={`Promotion ${index + 1}`}
                                            className="h-[500px] w-[350px] md:h-[700px] md:w-[600px] lg:h-[500px] 2xl:h-[800px] 2xl:w-[1000px]  object-contain bg-gray-50"
                                            loading="lazy"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Navigation Arrows */}
                        {welcomePopup.length > 1 && (
                            <>
                                <button className="promo-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110">
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                                <button className="promo-next absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110">
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </>
                        )}

                        {/* Image Counter */}
                        {welcomePopup.length > 1 && (
                            <div className="absolute top-4 left-4 bg-black/40 text-white px-3 py-1 rounded-full text-sm font-medium">
                                {welcomePopup.length} images
                            </div>
                        )}

                    </div>

                    {/* Click outside to close */}
                    <div
                        className="absolute inset-0 -z-10"
                        onClick={() => setActivePopup(false)}
                    ></div>
                </div>
            )}

            <style jsx>{`
                @keyframes zoom-in-95 {
                    from {
                        transform: scale(0.95);
                        opacity: 0;
                    }
                    to {
                        transform: scale(1);
                        opacity: 1;
                    }
                }
                
                .animate-in {
                    animation-fill-mode: both;
                }
                
                .zoom-in-95 {
                    animation: zoom-in-95 0.3s ease-out;
                }

                .swiper-pagination-bullet {
                    transition: all 0.3s ease !important;
                }
            `}</style>
        </>
    )
}



