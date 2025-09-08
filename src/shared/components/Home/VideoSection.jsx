
// import { useState, useEffect } from "react";
// import { Play, Volume2, Maximize } from "lucide-react";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Autoplay, Scrollbar, A11y } from 'swiper/modules';
// import { Link } from "react-router-dom";

// export default function VideoSection({ data }) {
//   const [vdopreview, setVdopreview] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     setIsLoaded(true);
//   }, []);

//   return (
//     <>
//       <div className="py-10 px-4">
//         <div className="max-w-screen-2xl mx-auto px-6">
//           <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
//                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full">
//               <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
//               <span className="text-sm font-medium text-purple-700 uppercase tracking-wide">Experience the
// Tagore IET Journey</span>
//             </div>
//             <div
//               className="relative w-[85vw] max-w-6xl h-[75vh] max-h-[780px] mx-auto rounded-3xl overflow-hidden shadow-2xl group"
//               onMouseEnter={() => setIsHovered(true)}
//               onMouseLeave={() => setIsHovered(false)}
//             >
//               {/* Glowing border effect */}
//               <div className="absolute -inset-1 rounded-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-sm"></div>

//               <div className="relative w-full h-full bg-black rounded-3xl overflow-hidden">
//                 {vdopreview ? (
//                   <div className="relative w-full h-full">
//                     <iframe
//                       width="100%"
//                       height="100%"
//                       src="https://www.youtube.com/embed/OzcYoYv-dzM?autoplay=1"
//                       title="YouTube video player"
//                       frameBorder="0"
//                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                       allowFullScreen
//                       className="rounded-3xl"
//                     ></iframe>

//                     {/* Close button */}
//                     <button
//                       onClick={() => setVdopreview(false)}
//                       className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm"
//                     >
//                       ×
//                     </button>
//                   </div>
//                 ) : (
//                   <div
//                     onClick={() => setVdopreview(true)}
//                     className="relative w-full h-full cursor-pointer group/preview"
//                   >
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>

//                     <div className="absolute inset-0 opacity-10">
//                       <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
//                       <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-500 rounded-full blur-2xl animate-pulse delay-1000"></div>
//                     </div>

//                     {/* YouTube thumbnail */}
//                     <img
//                       src={`https://img.youtube.com/vi/OzcYoYv-dzM/maxresdefault.jpg`}
//                       alt="Video thumbnail"
//                       className="w-full h-full object-cover transition-transform duration-700 group-hover/preview:scale-105"
//                     />

//                     <div className="absolute inset-0 flex items-center justify-center z-20">
//                       <div className={`relative transition-all duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}>

//                         <div className="absolute inset-0 w-24 h-24 border-2 border-white/30 rounded-full animate-ping"></div>
//                         <div className="absolute inset-0 w-24 h-24 border border-white/50 rounded-full animate-pulse"></div>

//                         <div className="relative w-24 h-24 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group-hover/preview:shadow-2xl">
//                           <Play className="w-8 h-8 text-white ml-1 drop-shadow-lg" fill="white" />
//                         </div>
//                       </div>
//                     </div>

//                       <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
//                       <div className="flex items-end justify-between">
//                         <div className="text-white">
//                           <h3 className="text-2xl font-bold mb-3 drop-shadow-lg">
//                             Tagore Institute of Engineering & Technology
//                           </h3>
//                           <p className="text-white/80 text-base leading-relaxed max-w-2xl">
//                             Take a virtual tour through our state-of-the-art campus, meet our dedicated faculty, 
//                             and witness the innovative learning environment that shapes tomorrow's engineers.
//                           </p>
//                           <div className="flex items-center gap-4 mt-4">
//                             <div className="flex items-center gap-2 text-white/70 text-sm">
//                               <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
//                               <span>LIVE Campus Tour</span>
//                             </div>
//                             <div className="text-white/50 text-sm">•</div>
//                             <div className="text-white/70 text-sm">5:24 duration</div>
//                           </div>
//                         </div>

//                         {/* Control Icons */}
//                         <div className="flex gap-3">
//                           <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group">
//                             <Volume2 className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
//                           </div>
//                           <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group">
//                             <Maximize className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Swiper
//         modules={[Navigation, Scrollbar, A11y, Autoplay]}
//         spaceBetween={20}
//         breakpoints={{
//           320: { slidesPerView: 2, },
//           640: { slidesPerView: 3, },
//           1024: { slidesPerView: 4, },
//         }}
//         // navigation
//         loop={true}
//         autoplay={{ delay: 1000, disableOnInteraction: false }}
//         speed={2000}
//         // pagination={{ clickable: true }}
//         scrollbar={{ draggable: true }}
//         className='w-full mt-5 lg:mt-10 max-w-[1920px]'
//       >
//         {[...data, ...data, ...data]?.map((data, idx) => (
//           <SwiperSlide key={idx} className='' >
//             <Link to={`${data?.link ? data?.link : '/'}  `}>    
//               <div className=' '>
//                 <img src={data.img} alt="" className=' mx-auto p-3 bg-white  rounded-3xl' />
//                 <h3 className='text-center pt-3 text-white text-sm sm:text-base'>{data?.title}</h3>
//               </div>
//             </Link>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </>
//   );
// }

import { useState, useEffect } from "react";
import { Play, Volume2, Maximize, X } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Scrollbar, A11y } from 'swiper/modules';
import { Link } from "react-router-dom";
import apiurl from "../../services/apiendpoint/apiendpoint";

export default function VideoSection({ data}) {
  const [vdopreview, setVdopreview] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <div id="virtual-tour" className="pb-10 px-5 ">
        <div className="max-w-screen-2xl mx-auto">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

            {/* Centered Header Section */}
            <div className={`text-center mb-10 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm font-medium text-purple-700 uppercase tracking-wide">  Experience the Tagore IET Journey</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Discover Our  <span className=" text-purple-600">Campus</span>

              </h2>

              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Step into the future of engineering education with our immersive campus experience
              </p>
            </div>

            {/* Video Container */}
            <div
              className="relative w-full max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Modern glowing border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 rounded-3xl opacity-20 group-hover:opacity-40 transition-all duration-500 blur-sm animate-gradient-x"></div>

              <div className="relative w-full min-h-[50vh] md:min-h-auto aspect-video bg-black rounded-3xl overflow-hidden">
                {vdopreview ? (
                  <div className="relative w-full h-full">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/OzcYoYv-dzM?autoplay=1"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-3xl"
                    ></iframe>

                    {/* Modern close button */}
                    <button
                      onClick={() => setVdopreview(false)}
                      className="absolute top-6 right-6 w-12 h-12 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-all duration-300 backdrop-blur-md border border-white/20 hover:scale-110"
                    >
                      <X size={20} />
                    </button>
                  </div>
                ) : (
                  <div
                    onClick={() => setVdopreview(true)}
                    className="relative w-full h-full cursor-pointer group/preview"
                  >
                    {/* Modern gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>

                    {/* Animated background elements */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-3xl animate-pulse"></div>
                      <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl animate-pulse delay-1000"></div>
                      <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-xl animate-pulse delay-500"></div>
                    </div>

                    {/* YouTube thumbnail */}
                    <img
                      src={`https://img.youtube.com/vi/OzcYoYv-dzM/maxresdefault.jpg`}
                      alt="Video thumbnail"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/preview:scale-105"
                    />

                    {/* Modern play button */}
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <div className={`relative transition-all duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}>
                        {/* Animated rings */}
                        <div className="absolute inset-0 w-28 h-28 border-2 border-white/20 rounded-full animate-ping"></div>
                        <div className="absolute inset-0 w-28 h-28 border border-white/40 rounded-full animate-pulse"></div>

                        {/* Play button */}
                        <div className="relative w-28 h-28 bg-white/10 backdrop-blur-lg border border-white/30 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group-hover/preview:shadow-2xl hover:shadow-purple-500/25">
                          <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300">
                            <Play className="w-10 h-10 text-white ml-1 drop-shadow-lg" fill="white" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Modern content overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                      <div className="flex items-end justify-end md:justify-between">
                        <div className="hidden md:block text-white max-w-3xl">
                          <h3 className="text-xl md:text-4xl font-bold mb-4 drop-shadow-lg">
                            Tagore Institute of Engineering & Technology
                          </h3>
                          <p className="text-white/90 text-sm md:text-lg leading-relaxed mb-6">
                            Take a virtual tour through our state-of-the-art campus, meet our dedicated faculty,
                            and witness the innovative learning environment that shapes tomorrow's engineers.
                          </p>

                          {/* Modern info badges */}
                          <div className="flex items-end gap-1 md:gap-6">
                            <div className="flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                              <span className="text-white font-medium text-xs md:text-base">LIVE Campus Tour</span>
                            </div>

                            <div className="flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                              <span className="text-white/80 text-xs md:text-base">Duration: 5:24</span>
                            </div>
                          </div>
                        </div>

                        {/* Modern control icons */}
                        <div className="flex gap-1 md:gap-4 ml-1">
                          <div className="w-8 h-8 md:w-14 md:h-14 bg-white/10 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group hover:scale-110">
                            <Volume2 className="w-4 md:w-8 h-4 md:h-8 text-white group-hover:text-purple-300 transition-colors text-xs md:text-base" />
                          </div>
                          <div className="w-8 h-8 md:w-14 md:h-14 bg-white/10 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group hover:scale-110">
                            <Maximize className="w-4 md:w-8 h-4 md:h-8 text-white group-hover:text-blue-300 transition-colors" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
   

      <style jsx>{`
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
      `}</style>
    </>
  );
}