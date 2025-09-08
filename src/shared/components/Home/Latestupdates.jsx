// // // // import { Swiper, SwiperSlide } from 'swiper/react';
// // // // import { Navigation, Autoplay, Scrollbar, A11y } from 'swiper/modules';
// // // // import { Link } from 'react-router-dom';
// // // // import apiurl from '../../services/apiendpoint/apiendpoint';

// // // // export default function Latestupdates({data}) {
// // // //   return (
// // // //     <>
// // // //      <div className="text-center mb-8 lg:mb-12">
// // // //         <div className="w-fit mx-auto flex items-center justify-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6">
// // // //           <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
// // // //           <span className="text-sm font-medium text-purple-700 uppercase tracking-wide">Updates</span>
// // // //         </div>
// // // //         <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
// // // //           Latest <span className="text-purple-600">Happenings</span>
// // // //         </h2>
// // // //         <p className="text-lg text-gray-600 max-w-2xl mx-auto">
// // // //           From academic events to extracurricular buzz — see what's happening around campus.
// // // //         </p>
// // // //       </div>

// // // //       <Swiper
// // // //         modules={[Navigation, Scrollbar, A11y, Autoplay]}
// // // //         spaceBetween={20}
// // // //         breakpoints={{
// // // //           320: { slidesPerView: 2, },
// // // //           640: { slidesPerView: 3, },
// // // //           1024: { slidesPerView: 4, },
// // // //         }}
// // // //         // navigation
// // // //         loop={true}
// // // //         autoplay={{ delay: 1000, disableOnInteraction: false }}
// // // //         speed={2000}
// // // //         // pagination={{ clickable: true }}
// // // //         scrollbar={{ draggable: true }}
// // // //         className='w-full mt-5 lg:mt-10 max-w-[1920px]'
// // // //       >
// // // //         {data?.map((data, idx) => (
// // // //           <SwiperSlide key={idx} className='' >
// // // //             <Link to={`${data?.link ? data?.link : '/'}  `}>
// // // //               <div className='group cursor-pointer'>
// // // //                 {/* Fixed size image container */}
// // // //                 <div className='relative w-full h-48 sm:h-56 lg:h-64 bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 lg:p-3'>
// // // //                   <div className='w-full h-full rounded-2xl overflow-hidden'>
// // // //                     <img 
// // // //                       src={`${apiurl()}/${data.Image}`}  
// // // //                       alt={data?.Title || "Update image"} 
// // // //                       className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300' 
// // // //                     />
// // // //                   </div>
// // // //                 </div>
                
// // // //                 {/* Title with fixed height */}
// // // //                 <div className='h-16 sm:h-20 flex items-center justify-center px-2'>
// // // //                   <h3 className='text-center text-black text-sm sm:text-base font-medium line-clamp-2 leading-tight'>
// // // //                     {data?.Title}
// // // //                   </h3>
// // // //                 </div>
// // // //               </div>
// // // //             </Link>
// // // //           </SwiperSlide>
// // // //         ))}
// // // //       </Swiper>

// // // //       <style jsx>{`
// // // //         @keyframes gradient-x {
// // // //           0%, 100% {
// // // //             transform: translate3d(-50%, 0, 0);
// // // //           }
// // // //           50% {
// // // //             transform: translate3d(50%, 0, 0);
// // // //           }
// // // //         }
        
// // // //         .animate-gradient-x {
// // // //           animation: gradient-x 3s ease infinite;
// // // //           background-size: 400% 400%;
// // // //         }

// // // //         /* Line clamp utility for title truncation */
// // // //         .line-clamp-2 {
// // // //           display: -webkit-box;
// // // //           -webkit-line-clamp: 2;
// // // //           -webkit-box-orient: vertical;
// // // //           overflow: hidden;
// // // //         }
// // // //       `}</style>
// // // //     </>
// // // //   )
// // // // }


// // // import { Swiper, SwiperSlide } from 'swiper/react';
// // // import { Navigation, Autoplay, Scrollbar, A11y } from 'swiper/modules';
// // // import { Link } from 'react-router-dom';
// // // import apiurl from '../../services/apiendpoint/apiendpoint';

// // // export default function Latestupdates({ data }) {
// // //   return (
// // //     <>
// // //       <div className="text-center mb-8 lg:mb-12">
// // //         <div className="w-fit mx-auto flex items-center justify-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6">
// // //           <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
// // //           <span className="text-sm font-medium text-purple-700 uppercase tracking-wide">Updates</span>
// // //         </div>
// // //         <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
// // //           Latest <span className="text-purple-600">Happenings</span>
// // //         </h2>
// // //         <p className="text-lg text-gray-600 max-w-2xl mx-auto">
// // //           From academic events to extracurricular buzz — see what's happening around campus.
// // //         </p>
// // //       </div>
      
// // //       <Swiper
// // //         modules={[Navigation, Scrollbar, A11y, Autoplay]}
// // //         spaceBetween={20}
// // //         breakpoints={{
// // //           320: { slidesPerView: 2 },
// // //           640: { slidesPerView: 3 },
// // //           1024: { slidesPerView: 4 },
// // //         }}
// // //         loop={true}
// // //         autoplay={{ delay: 1000, disableOnInteraction: false }}
// // //         speed={2000}
// // //         scrollbar={{ draggable: true }}
// // //         className='w-full mt-5 lg:mt-10 max-w-[1920px]'
// // //       >
// // //         {data?.map((data, idx) => (
// // //           <SwiperSlide key={idx} className='' >
// // //             <Link to={`${data?.link ? data?.link : '/'}  `}>
// // //               <div className='group cursor-pointer'>
// // //                 {/* Fixed size image container */}
// // //                 <div className='relative w-full h-48 sm:h-56 lg:h-64 bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 lg:p-3'>
// // //                   <div className='w-full h-full rounded-2xl overflow-hidden'>
// // //                     <img 
// // //                       src={`${apiurl()}/${data.Image}`}  
// // //                       alt={data?.Title || "Update image"} 
// // //                       className='w-full h-full object-contains group-hover:scale-105 transition-transform duration-300' 
// // //                     />
// // //                   </div>
// // //                 </div>
// // //                 </div>
// // //               </Link>
// // //             </SwiperSlide>
// // //           )
// // //         )}
// // //       </Swiper>
      
// // //       <style jsx>{`
// // //         @keyframes gradient-x {
// // //           0%, 100% {
// // //             transform: translate3d(-50%, 0, 0);
// // //           }
// // //           50% {
// // //             transform: translate3d(50%, 0, 0);
// // //           }
// // //         }
       
// // //         .animate-gradient-x {
// // //           animation: gradient-x 3s ease infinite;
// // //           background-size: 400% 400%;
// // //         }
        
// // //         /* Line clamp utility for title truncation */
// // //         .line-clamp-2 {
// // //           display: -webkit-box;
// // //           -webkit-line-clamp: 2;
// // //           -webkit-box-orient: vertical;
// // //           overflow: hidden;
// // //         }
// // //       `}</style>
// // //     </>
// // //   );
// // // }


// // import { Link } from 'react-router-dom';
// // import apiurl from '../../services/apiendpoint/apiendpoint';

// // export default function Latestupdates({ data }) {
// //   return (
// //     <>
// //       <div className="text-center mb-8 lg:mb-12">
// //         <div className="w-fit mx-auto flex items-center justify-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6">
// //           <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
// //           <span className="text-sm font-medium text-purple-700 uppercase tracking-wide">Updates</span>
// //         </div>
// //         <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
// //           Latest <span className="text-purple-600">Happenings</span>
// //         </h2>
// //         <p className="text-lg text-gray-600 max-w-2xl mx-auto">
// //           From academic events to extracurricular buzz — see what's happening around campus.
// //         </p>
// //       </div>
      
// //       {/* Grid Layout */}
// //       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 max-w-[1920px] mx-auto px-4">
// //         {data?.map((data, idx) => (
// //           <div key={idx} className="">
// //             <Link to={`${data?.link ? data?.link : '/'}  `}>
// //               <div className='cursor-pointer'>
// //                 {/* Image container */}
// //                 <div className='relative w-full h-48 sm:h-56 lg:h-64 bg-white rounded-3xl overflow-hidden shadow-sm lg:p-3'>
// //                   <div className='w-full h-full rounded-2xl overflow-hidden'>
// //                     <img 
// //                       src={`${apiurl()}/${data.Image}`}  
// //                       alt={data?.Title || "Update image"} 
// //                       className='w-full h-full object-cover' 
// //                     />
// //                   </div>
// //                 </div>
// //                 {/* Title at bottom */}
// //                 <div className='mt-4'>
// //                   <h3 className='text-lg font-semibold text-gray-900 line-clamp-2'>
// //                     {data?.Title || "Update title"}
// //                   </h3>
// //                 </div>
// //               </div>
// //             </Link>
// //           </div>
// //         ))}
// //       </div>
      
// //       <style jsx>{`
// //         @keyframes gradient-x {
// //           0%, 100% {
// //             transform: translate3d(-50%, 0, 0);
// //           }
// //           50% {
// //             transform: translate3d(50%, 0, 0);
// //           }
// //         }
       
// //         .animate-gradient-x {
// //           animation: gradient-x 3s ease infinite;
// //           background-size: 400% 400%;
// //         }
        
// //         /* Line clamp utility for title truncation */
// //         .line-clamp-2 {
// //           display: -webkit-box;
// //           -webkit-line-clamp: 2;
// //           -webkit-box-orient: vertical;
// //           overflow: hidden;
// //         }
// //       `}</style>
// //     </>
// //   );
// // }

// import { Link } from 'react-router-dom';
// import { useRef } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import apiurl from '../../services/apiendpoint/apiendpoint';

// export default function Latestupdates({ data }) {
//   const scrollRef = useRef(null);

//   const scrollLeft = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
//     }
//   };

//   const scrollRight = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
//     }
//   };

//   return (
//     <>
//       <div className="text-center mb-8 lg:mb-12">
//         <div className="w-fit mx-auto flex items-center justify-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6">
//           <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
//           <span className="text-sm font-medium text-purple-700 uppercase tracking-wide">Updates</span>
//         </div>
//         <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
//           Latest <span className="text-purple-600">Happenings</span>
//         </h2>
//         <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//           From academic events to extracurricular buzz — see what's happening around campus.
//         </p>
//       </div>
      
//       {/* Swiper Container */}
//       <div className="relative max-w-[1920px] mx-auto px-4">


//         {/* Scrollable Content */}
//         <div
//           ref={scrollRef}
//           className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
//           style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//         >
//           {data?.map((item, idx) => (
//             <div key={idx} className="flex-shrink-0 w-72 sm:w-80">
//               <Link to={`${item?.link ? item?.link : '/'}`}>
//                 <div className="cursor-pointer group">
//                   {/* Image container */}
//                   <div className="relative w-full h-48 sm:h-56 lg:h-64 bg-white rounded-3xl overflow-hidden shadow-sm lg:p-3 group-hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02]">
//                     <div className="w-full h-full rounded-2xl overflow-hidden">
//                       <img 
//                         src={`${apiurl()}/${item.Image}`}  
//                         alt={item?.Title || "Update image"} 
//                         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
//                       />
//                     </div>
//                   </div>
//                   {/* Title at bottom */}
//                   <div className="mt-4 px-1">
//                     <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 group-hover:text-purple-600 transition-colors duration-200">
//                       {item?.Title || "Update title"}
//                     </h3>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           ))}
          
//           {/* Spacer for better scroll end */}
//           <div className="flex-shrink-0 w-4"></div>
//         </div>
        
//         {/* Bottom Center Navigation Buttons */}
//         <div className="flex justify-center items-center gap-4 mt-8">
//           <button
//             onClick={scrollLeft}
//             className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200 group"
//           >
//             <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-purple-600 transition-colors" />
//           </button>
          
//           <button
//             onClick={scrollRight}
//             className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200 group"
//           >
//             <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-purple-600 transition-colors" />
//           </button>
//         </div>
//       </div>
      
//       <style jsx>{`
//         /* Hide scrollbar for Chrome, Safari and Opera */
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
        
//         /* Hide scrollbar for IE, Edge and Firefox */
//         .scrollbar-hide {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
        
//         @keyframes gradient-x {
//           0%, 100% {
//             transform: translate3d(-50%, 0, 0);
//           }
//           50% {
//             transform: translate3d(50%, 0, 0);
//           }
//         }
       
//         .animate-gradient-x {
//           animation: gradient-x 3s ease infinite;
//           background-size: 400% 400%;
//         }
        
//         /* Line clamp utility for title truncation */
//         .line-clamp-2 {
//           display: -webkit-box;                                                                                                                                                                                                                                                                                                                                                                                                                                          
//           -webkit-line-clamp: 2;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//       `}</style>
//     </>
//   );
// }

import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import apiurl from '../../services/apiendpoint/apiendpoint';

export default function Latestupdates({ data }) {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="text-center mb-8 lg:mb-12">
        <div className="w-fit mx-auto flex items-center justify-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6">
          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
          <span className="text-sm font-medium text-purple-700 uppercase tracking-wide">Updates</span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
          Latest <span className="text-purple-600">Happenings</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          From academic events to extracurricular buzz — see what's happening around campus.
        </p>
      </div>
      
      {/* Swiper Container */}
      <div className="relative max-w-[1920px] mx-auto px-4">


        {/* Scrollable Content */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {data?.map((item, idx) => (
            <div key={idx} className="flex-shrink-0 w-80 h-96">
              <Link to={`${item?.link ? item?.link : '/'}`} className="block h-full">
                <div className="cursor-pointer group h-full flex flex-col">
                  {/* Image container */}
                  <div className="relative w-full h-64 bg-white rounded-3xl overflow-hidden shadow-sm p-3 group-hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02] flex-shrink-0">
                    <div className="w-full h-full rounded-2xl overflow-hidden">
                      <img 
                        src={`${apiurl()}/${item.Image}`}  
                        alt={item?.Title || "Update image"} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                    </div>
                  </div>
                  {/* Title at bottom */}
                  <div className="mt-4 px-1 flex-1 flex items-start">
                    <h3 className="text-lg font-semibold text-gray-900 line-clamp-3 group-hover:text-purple-600 transition-colors duration-200">
                      {item?.Title || "Update title"}
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}
          
          {/* Spacer for better scroll end */}
          <div className="flex-shrink-0 w-4"></div>
        </div>
        
        {/* Bottom Center Navigation Buttons */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={scrollLeft}
            className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200 group"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-purple-600 transition-colors" />
          </button>
          
          <button
            onClick={scrollRight}
            className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200 group"
          >
            <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-purple-600 transition-colors" />
          </button>
        </div>
      </div>
      
      <style jsx>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        /* Hide scrollbar for IE, Edge and Firefox */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        @keyframes gradient-x {
          0%, 100% {
            transform: translate3d(-50%, 0, 0);
          }
          50% {
            transform: translate3d(50%, 0, 0);
          }
        }
       
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
          background-size: 400% 400%;
        }
        
        /* Line clamp utility for title truncation */
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
}