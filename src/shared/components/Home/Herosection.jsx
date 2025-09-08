// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination, Navigation, EffectFade, Scrollbar, A11y } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import 'swiper/css/effect-fade';
// import Marquee from 'react-fast-marquee';
// import { HiBell } from 'react-icons/hi';
// import apiurl from '../../services/apiendpoint/apiendpoint';
// import { Link } from 'react-router-dom';

// export default function HeroSection({ data, notifications }) {
//   console.log(notifications)
//   return (
//     <>
//       <div className="relative h-screen max-h-[1080px] overflow-hidden  ">
//         <Swiper
//           modules={[Autoplay, Pagination, Navigation, EffectFade]}
//           loop={true}
//           slidesPerView={1}
//           effect="fade"
//           fadeEffect={{
//             crossFade: true
//           }}
//           autoplay={{
//             delay: 5000,
//             disableOnInteraction: false,
//           }}
//           speed={1000}
//           pagination={{
//             clickable: true,
//             dynamicBullets: true,
//             dynamicMainBullets: 3,
//           }}
//           navigation={{
//             nextEl: '.custom-hero-next',
//             prevEl: '.custom-hero-prev',
//           }}
//           className="absolute inset-0 h-full w-full"
//         >
//           {data?.map((slide, i) => (
//             <SwiperSlide key={i}>
//               <div className="relative h-full w-full">
//                 <div className="absolute inset-0 z-10"></div>
//                 <div
//                   className="absolute inset-0 transition-transform duration-[10000ms] ease-out bg-top"
//                   style={{
//                     backgroundImage: `url(${apiurl()}/${slide.Image})`,
//                     backgroundSize: 'cover',
//                     animation: 'ken-burns 10s ease-out infinite alternate'
//                   }}
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         <button
//           className="custom-hero-prev cursor-pointer absolute left-4 z-10 top-1/2 translate-y-1/2 backdrop-blur-md bg-white/10 border border-white/20 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-white/20 hover:scale-110 transition-all duration-300">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
//           </svg>
//         </button>

//         <button className="custom-hero-next cursor-pointer absolute right-4 z-10 top-1/2 translate-y-1/2 backdrop-blur-md bg-white/10 border border-white/20 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-white/20 hover:scale-110 transition-all duration-300">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
//           </svg>
//         </button>
//       </div>

//       <section>
//         <div className="">
//           <div className="w-full bg-white overflow-x-hidden">
//             <div className="flex flex-col justify-center items-center  bg-gradient-to-r from-indigo-800 to-blue-900 mx-auto px-5 lg:px-10 pb-4 rounded-b-[40px] w-[80%] md:w-[90%] max-w-screen-2xl">

//               <div className='w-full flex items-center justify-center gap-4 relative'>
//                 <div className='absolute bg-indigo-800 top-0 left-0 h-14 w-10 lg:w-20 -translate-x-[150%]'></div>
//                 <div className='absolute bg-blue-900 top-0 right-0 h-14 w-10 lg:w-20 translate-x-[150%]'></div>
//                 <div className='absolute bg-white top-0 left-0 h-14 w-10 lg:w-20 -translate-x-[150%] rounded-tr-[40px] '></div>
//                 <div className='absolute bg-white top-0 right-0 h-14 w-10 lg:w-20 translate-x-[150%] rounded-tl-[40px] '></div>
//               </div>
              
//               <div className="w-full py-4 px-4 mt-4 rounded-xl overflow-hidden">
//                 <Marquee
//                   gradient={true}
//                   gradientColor={[30, 41, 99]}
//                   speed={50}
//                   pauseOnHover
//                   loop={0}
//                 >
//                   {notifications?.map((item, idx) => (
//                     <div key={idx} className="flex items-center text-white space-x-3 mr-10">
//                       <HiBell className="text-yellow-300 text-lg animate-ping-slow flex-shrink-0" />
                      
//                       {/* Make notification title clickable if it has an ID, otherwise use external link */}
//                       {item._id ? (
//                         <Link 
//                           to={`/notification-view/${item._id}`}
//                           className="text-sm sm:text-base font-medium hover:text-yellow-200 transition-colors cursor-pointer"
//                         >
//                           {item.Title}
//                         </Link>
//                       ) : item.Link && item.Link !== '#' ? (
//                         <Link 
//                           to={item.Link}
//                           target={item.Link.startsWith('http') ? '_blank' : '_self'}
//                           rel={item.Link.startsWith('http') ? 'noopener noreferrer' : undefined}
//                           className="text-sm sm:text-base font-medium hover:text-yellow-200 transition-colors cursor-pointer"
//                         >
//                           {item.Title}
//                         </Link>
//                       ) : (
//                         <span className="text-sm sm:text-base font-medium">
//                           {item.Title}
//                         </span>
//                       )}

//                       {item.isNew && (
//                         <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-semibold animate-bounce flex-shrink-0">
//                           NEW
//                         </span>
//                       )}
                      
//                       {item.date && (
//                         <span className="text-gray-300 text-xs ml-1 hidden sm:inline flex-shrink-0">
//                           ({item.date})
//                         </span>
//                       )}
                      
//                       {/* Add indicators for attachments */}
//                       <div className="flex items-center space-x-1 flex-shrink-0">
//                         {item.Image && (
//                           <div className="w-3 h-3 bg-blue-400 rounded-full" title="Has Image"></div>
//                         )}
//                         {item.pdf && (
//                           <div className="w-3 h-3 bg-red-400 rounded-full" title="Has PDF"></div>
//                         )}
//                         {item.Description && (
//                           <div className="w-3 h-3 bg-green-400 rounded-full" title="Has Description"></div>
//                         )}
//                       </div>
//                     </div>
//                   ))}
//                 </Marquee>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Custom Styles */}
//       <style jsx>{`
//         @keyframes ken-burns {
//           0% { transform: scale(1.1) translateX(0) translateY(0); }
//           25% { transform: scale(1.15) translateX(-2%) translateY(-1%); }
//           50% { transform: scale(1.2) translateX(1%) translateY(-2%); }
//           75% { transform: scale(1.15) translateX(-1%) translateY(1%); }
//           100% { transform: scale(1.1) translateX(0) translateY(0); }
//         }
        
//         .swiper-pagination-bullet {
//           width: 12px !important;
//           height: 12px !important;
//           background: rgba(255, 255, 255, 0.5) !important;
//           opacity: 0.7 !important;
//         }
        
//         .swiper-pagination-bullet-active {
//           background: white !important;
//           opacity: 1 !important;
//           transform: scale(1.2) !important;
//         }
        
//         .swiper-button-next,
//         .swiper-button-prev {
//           color: white !important;
//           background: rgba(255, 255, 255, 0.1) !important;
//           backdrop-filter: blur(10px) !important;
//           border: 1px solid rgba(255, 255, 255, 0.2) !important;
//           border-radius: 50% !important;
//           width: 50px !important;
//           height: 50px !important;
//           margin-top: -25px !important;
//           transition: all 0.3s ease !important;
//         }
        
//         .swiper-button-next:hover,
//         .swiper-button-prev:hover {
//           background: rgba(255, 255, 255, 0.2) !important;
//           transform: scale(1.1) !important;
//         }
        
//         .swiper-button-next:after,
//         .swiper-button-prev:after {
//           font-size: 18px !important;
//           font-weight: bold !important;
//         }
        
//         .swiper-pagination {
//           bottom: 20px !important;
//         }
//       `}</style>
//     </>
//   );
// }

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination, Navigation, EffectFade, Scrollbar, A11y } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import 'swiper/css/effect-fade';
// import Marquee from 'react-fast-marquee';
// import { HiBell } from 'react-icons/hi';
// import apiurl from '../../services/apiendpoint/apiendpoint';
// import { Link } from 'react-router-dom';

// export default function HeroSection({ data, notifications }) {
//   console.log('Banner data received:', data);
//   console.log('API URL:', apiurl());
  
//   // Debug: Log the complete image URLs
//   data?.forEach((slide, index) => {
//     const fullImageUrl = `${apiurl()}/${slide.Image}`;
//     console.log(`Slide ${index} image URL:`, fullImageUrl);
//   });

//   return (
//     <>
//       <div className="relative h-screen max-h-[1080px] overflow-hidden">
//         {/* Add a fallback check */}
//         {!data || data.length === 0 ? (
//           <div className="flex items-center justify-center h-full bg-gray-800 text-white">
//             <p>No banner images available</p>
//           </div>
//         ) : (
//           <Swiper
//             modules={[Autoplay, Pagination, Navigation, EffectFade]}
//             loop={true}
//             slidesPerView={1}
//             effect="fade"
//             fadeEffect={{
//               crossFade: true
//             }}
//             autoplay={{
//               delay: 5000,
//               disableOnInteraction: false,
//             }}
//             speed={1000}
//             pagination={{
//               clickable: true,
//               dynamicBullets: true,
//               dynamicMainBullets: 3,
//             }}
//             navigation={{
//               nextEl: '.custom-hero-next',
//               prevEl: '.custom-hero-prev',
//             }}
//             className="absolute inset-0 h-full w-full"
//           >
//             {data.map((slide, i) => {
//               // Properly encode the URL to handle spaces and special characters
//               const encodedImagePath = encodeURI(slide.Image);
//               const imageUrl = `${apiurl()}/${encodedImagePath}`;
//               console.log(`Rendering slide ${i}:`, imageUrl);
              
//               return (
//                 <SwiperSlide key={i}>
//                   <div className="relative h-full w-full">
//                     <div className="absolute inset-0 z-10"></div>
                    
//                     {/* Method 1: Using background image */}
//                     <div
//                       className="absolute inset-0 transition-transform duration-[10000ms] ease-out bg-top"
//                       style={{
//                         backgroundImage: `url("${imageUrl}")`,
//                         backgroundSize: 'cover',
//                         backgroundPosition: 'center',
//                         backgroundRepeat: 'no-repeat',
//                         animation: 'ken-burns 10s ease-out infinite alternate'
//                       }}
//                     />
                    
//                     {/* Method 2: Fallback using img tag (uncomment if background doesn't work) */}
//                     {/* <img 
//                       src={imageUrl}
//                       alt={`Slide ${i + 1}`}
//                       className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10000ms] ease-out"
//                       style={{
//                         animation: 'ken-burns 10s ease-out infinite alternate'
//                       }}
//                       onLoad={() => console.log(`Image loaded successfully: ${imageUrl}`)}
//                       onError={(e) => {
//                         console.error(`Failed to load image: ${imageUrl}`);
//                         e.target.style.display = 'none';
//                       }}
//                     /> */}
                    
//                     {/* Hidden image for testing load/error events */}
//                     <img 
//                       src={imageUrl}
//                       alt={`Slide ${i + 1}`}
//                       style={{ display: 'none' }}
//                       onLoad={() => console.log(`✅ Image loaded successfully: ${imageUrl}`)}
//                       onError={() => console.error(`❌ Failed to load image: ${imageUrl}`)}
//                     />
                    
//                     {/* Debug overlay - remove after fixing */}
//                     <div className="absolute bottom-4 left-4 bg-black/50 text-white p-2 rounded text-xs z-20">
//                       Slide {i + 1}: {slide.Image}
//                     </div>
//                   </div>
//                 </SwiperSlide>
//               );
//             })}
//           </Swiper>
//         )}

//         {/* Navigation buttons */}
//         <button
//           className="custom-hero-prev cursor-pointer absolute left-4 z-10 top-1/2 translate-y-1/2 backdrop-blur-md bg-white/10 border border-white/20 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-white/20 hover:scale-110 transition-all duration-300">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
//           </svg>
//         </button>

//         <button className="custom-hero-next cursor-pointer absolute right-4 z-10 top-1/2 translate-y-1/2 backdrop-blur-md bg-white/10 border border-white/20 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-white/20 hover:scale-110 transition-all duration-300">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
//           </svg>
//         </button>
//       </div>

//       <section>
//         <div className="">
//           <div className="w-full bg-white overflow-x-hidden">
//             <div className="flex flex-col justify-center items-center  bg-gradient-to-r from-indigo-800 to-blue-900 mx-auto px-5 lg:px-10 pb-4 rounded-b-[40px] w-[80%] md:w-[90%] max-w-screen-2xl">

//               <div className='w-full flex items-center justify-center gap-4 relative'>
//                 <div className='absolute bg-indigo-800 top-0 left-0 h-14 w-10 lg:w-20 -translate-x-[150%]'></div>
//                 <div className='absolute bg-blue-900 top-0 right-0 h-14 w-10 lg:w-20 translate-x-[150%]'></div>
//                 <div className='absolute bg-white top-0 left-0 h-14 w-10 lg:w-20 -translate-x-[150%] rounded-tr-[40px] '></div>
//                 <div className='absolute bg-white top-0 right-0 h-14 w-10 lg:w-20 translate-x-[150%] rounded-tl-[40px] '></div>
//               </div>
              
//               <div className="w-full py-4 px-4 mt-4 rounded-xl overflow-hidden">
//                 <Marquee
//                   gradient={true}
//                   gradientColor={[30, 41, 99]}
//                   speed={50}
//                   pauseOnHover
//                   loop={0}
//                 >
//                   {notifications?.map((item, idx) => (
//                     <div key={idx} className="flex items-center text-white space-x-3 mr-10">
//                       <HiBell className="text-yellow-300 text-lg animate-ping-slow flex-shrink-0" />
                      
//                       {/* Make notification title clickable if it has an ID, otherwise use external link */}
//                       {item._id ? (
//                         <Link 
//                           to={`/notification-view/${item._id}`}
//                           className="text-sm sm:text-base font-medium hover:text-yellow-200 transition-colors cursor-pointer"
//                         >
//                           {item.Title}
//                         </Link>
//                       ) : item.Link && item.Link !== '#' ? (
//                         <Link 
//                           to={item.Link}
//                           target={item.Link.startsWith('http') ? '_blank' : '_self'}
//                           rel={item.Link.startsWith('http') ? 'noopener noreferrer' : undefined}
//                           className="text-sm sm:text-base font-medium hover:text-yellow-200 transition-colors cursor-pointer"
//                         >
//                           {item.Title}
//                         </Link>
//                       ) : (
//                         <span className="text-sm sm:text-base font-medium">
//                           {item.Title}
//                         </span>
//                       )}

//                       {item.isNew && (
//                         <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-semibold animate-bounce flex-shrink-0">
//                           NEW
//                         </span>
//                       )}
                      
//                       {item.date && (
//                         <span className="text-gray-300 text-xs ml-1 hidden sm:inline flex-shrink-0">
//                           ({item.date})
//                         </span>
//                       )}
                      
//                       {/* Add indicators for attachments */}
//                       <div className="flex items-center space-x-1 flex-shrink-0">
//                         {item.Image && (
//                           <div className="w-3 h-3 bg-blue-400 rounded-full" title="Has Image"></div>
//                         )}
//                         {item.pdf && (
//                           <div className="w-3 h-3 bg-red-400 rounded-full" title="Has PDF"></div>
//                         )}
//                         {item.Description && (
//                           <div className="w-3 h-3 bg-green-400 rounded-full" title="Has Description"></div>
//                         )}
//                       </div>
//                     </div>
//                   ))}
//                 </Marquee>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Custom Styles */}
//       <style jsx>{`
//         @keyframes ken-burns {
//           0% { transform: scale(1.1) translateX(0) translateY(0); }
//           25% { transform: scale(1.15) translateX(-2%) translateY(-1%); }
//           50% { transform: scale(1.2) translateX(1%) translateY(-2%); }
//           75% { transform: scale(1.15) translateX(-1%) translateY(1%); }
//           100% { transform: scale(1.1) translateX(0) translateY(0); }
//         }
        
//         .swiper-pagination-bullet {
//           width: 12px !important;
//           height: 12px !important;
//           background: rgba(255, 255, 255, 0.5) !important;
//           opacity: 0.7 !important;
//         }
        
//         .swiper-pagination-bullet-active {
//           background: white !important;
//           opacity: 1 !important;
//           transform: scale(1.2) !important;
//         }
        
//         .swiper-button-next,
//         .swiper-button-prev {
//           color: white !important;
//           background: rgba(255, 255, 255, 0.1) !important;
//           backdrop-filter: blur(10px) !important;
//           border: 1px solid rgba(255, 255, 255, 0.2) !important;
//           border-radius: 50% !important;
//           width: 50px !important;
//           height: 50px !important;
//           margin-top: -25px !important;
//           transition: all 0.3s ease !important;
//         }
        
//         .swiper-button-next:hover,
//         .swiper-button-prev:hover {
//           background: rgba(255, 255, 255, 0.2) !important;
//           transform: scale(1.1) !important;
//         }
        
//         .swiper-button-next:after,
//         .swiper-button-prev:after {
//           font-size: 18px !important;
//           font-weight: bold !important;
//         }
        
//         .swiper-pagination {
//           bottom: 20px !important;
//         }
//       `}</style>
//     </>
//   );
// }


// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination, Navigation, EffectFade, Parallax } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import 'swiper/css/effect-fade';
// import 'swiper/css/parallax';
// import Marquee from 'react-fast-marquee';
// import { HiBell, HiPlay, HiPause } from 'react-icons/hi';
// import { useState, useRef } from 'react';
// import apiurl from '../../services/apiendpoint/apiendpoint';
// import { Link } from 'react-router-dom';

// export default function HeroSection({ data, notifications }) {
//   const [isPlaying, setIsPlaying] = useState(true);
//   const swiperRef = useRef(null);

//   console.log('Banner data received:', data);
//   console.log('API URL:', apiurl());

//   const toggleAutoplay = () => {
//     if (swiperRef.current && swiperRef.current.swiper) {
//       if (isPlaying) {
//         swiperRef.current.swiper.autoplay.stop();
//       } else {
//         swiperRef.current.swiper.autoplay.start();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   // Enhanced image URL construction with better error handling
//   const getImageUrl = (imagePath) => {
//     if (!imagePath) return '';
    
//     // Clean the path and handle different formats
//     const cleanPath = imagePath.replace(/\\/g, '/');
//     const encodedPath = encodeURI(cleanPath);
//     return `${apiurl()}/${encodedPath}`;
//   };

//   return (
//     <>
//       <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
//         {/* Animated background pattern */}
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
//           <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_30%,rgba(255,255,255,0.1)_50%,transparent_70%)] animate-pulse"></div>
//         </div>

//         {/* Main slider content */}
//         {!data || data.length === 0 ? (
//           <div className="flex flex-col items-center justify-center h-screen text-center px-4">
//             <div className="animate-pulse">
//               <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mb-6">
//                 <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                 </svg>
//               </div>
//             </div>
//             <h2 className="text-2xl font-bold text-white mb-2">No Banner Content</h2>
//             <p className="text-gray-300">Banner images are loading or unavailable</p>
//           </div>
//         ) : (
//           <Swiper
//             ref={swiperRef}
//             modules={[Autoplay, Pagination, Navigation, EffectFade, Parallax]}
//             loop={true}
//             slidesPerView={1}
//             effect="fade"
//             parallax={true}
//             fadeEffect={{
//               crossFade: true
//             }}
//             autoplay={{
//               delay: 6000,
//               disableOnInteraction: false,
//               pauseOnMouseEnter: true,
//             }}
//             speed={1500}
//             pagination={{
//               clickable: true,
//               dynamicBullets: true,
//               dynamicMainBullets: 5,
//               renderBullet: function (index, className) {
//                 return `<span class="${className} custom-bullet"></span>`;
//               },
//             }}
//             navigation={{
//               nextEl: '.hero-button-next',
//               prevEl: '.hero-button-prev',
//             }}
//             className="absolute inset-0 h-full w-full"
//           >
//             {data.map((slide, i) => {
//               const imageUrl = getImageUrl(slide.Image);
              
//               return (
//                 <SwiperSlide key={i}>
//                   <div className="relative h-screen w-full overflow-hidden">
//                     {/* Gradient overlay for better text readability */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
//                     <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 z-10"></div>
                    
//                     {/* Main image with parallax effect */}
//                     <div 
//                       className="swiper-parallax-bg absolute inset-0 w-full h-full"
//                       data-swiper-parallax="-23%"
//                     >
//                       <img 
//                         src={imageUrl}
//                         alt={slide.title || `Hero Slide ${i + 1}`}
//                         className="w-full h-full object-cover transition-all duration-[2000ms] ease-out hover:scale-105"
//                         style={{
//                           filter: 'brightness(0.9) contrast(1.1) saturate(1.1)',
//                         }}
//                         onLoad={() => console.log(`✅ Image loaded: ${imageUrl}`)}
//                         onError={(e) => {
//                           console.error(`❌ Failed to load: ${imageUrl}`);
//                           // Fallback to gradient background
//                           e.target.style.display = 'none';
//                           e.target.parentElement.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
//                         }}
//                       />
//                     </div>
                    
//                     {/* Content overlay with animations */}
//                     <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4 sm:px-8">
//                       <div className="max-w-4xl mx-auto">
//                         {slide.title && (
//                           <h1 
//                             className="text-4xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight"
//                             data-swiper-parallax="-300"
//                             style={{
//                               textShadow: '2px 2px 20px rgba(0,0,0,0.8)',
//                               background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)',
//                               WebkitBackgroundClip: 'text',
//                               WebkitTextFillColor: 'transparent',
//                               backgroundClip: 'text',
//                             }}
//                           >
//                             {slide.title}
//                           </h1>
//                         )}
                        
//                         {slide.description && (
//                           <p 
//                             className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 font-light leading-relaxed"
//                             data-swiper-parallax="-200"
//                             style={{ textShadow: '1px 1px 10px rgba(0,0,0,0.7)' }}
//                           >
//                             {slide.description}
//                           </p>
//                         )}
                        
//                         {slide.buttonText && (
//                           <div data-swiper-parallax="-100">
//                             <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg">
//                               <span className="relative z-10">{slide.buttonText}</span>
//                               <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                             </button>
//                           </div>
//                         )}
//                       </div>
//                     </div>
                    
//                     {/* Slide indicator */}
//                     <div className="absolute bottom-4 right-4 bg-black/30 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm z-20">
//                       {i + 1} / {data.length}
//                     </div>
//                   </div>
//                 </SwiperSlide>
//               );
//             })}
//           </Swiper>
//         )}

//         {/* Enhanced Navigation Controls */}
//         <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-30">
//           <button className="hero-button-prev group bg-white/10 backdrop-blur-md border border-white/20 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-xl hover:bg-white/20 hover:scale-110 transition-all duration-300 hover:shadow-2xl">
//             <svg className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
//             </svg>
//           </button>
//         </div>

//         <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-30">
//           <button className="hero-button-next group bg-white/10 backdrop-blur-md border border-white/20 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-xl hover:bg-white/20 hover:scale-110 transition-all duration-300 hover:shadow-2xl">
//             <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
//             </svg>
//           </button>
//         </div>

//         {/* Play/Pause Control */}
//         <div className="absolute top-6 right-6 z-30">
//           <button 
//             onClick={toggleAutoplay}
//             className="bg-white/10 backdrop-blur-md border border-white/20 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-xl hover:bg-white/20 transition-all duration-300"
//           >
//             {isPlaying ? (
//               <HiPause className="w-5 h-5" />
//             ) : (
//               <HiPlay className="w-5 h-5 ml-1" />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Original Notification Section */}
//       <section>
//         <div className="">
//           <div className="w-full bg-white overflow-x-hidden">
//             <div className="flex flex-col justify-center items-center  bg-gradient-to-r from-indigo-800 to-blue-900 mx-auto px-5 lg:px-10 pb-4 rounded-b-[40px] w-[80%] md:w-[90%] max-w-screen-2xl">

//               <div className='w-full flex items-center justify-center gap-4 relative'>
//                 <div className='absolute bg-indigo-800 top-0 left-0 h-14 w-10 lg:w-20 -translate-x-[150%]'></div>
//                 <div className='absolute bg-blue-900 top-0 right-0 h-14 w-10 lg:w-20 translate-x-[150%]'></div>
//                 <div className='absolute bg-white top-0 left-0 h-14 w-10 lg:w-20 -translate-x-[150%] rounded-tr-[40px] '></div>
//                 <div className='absolute bg-white top-0 right-0 h-14 w-10 lg:w-20 translate-x-[150%] rounded-tl-[40px] '></div>
//               </div>
              
//               <div className="w-full py-4 px-4 mt-4 rounded-xl overflow-hidden">
//                 <Marquee
//                   gradient={true}
//                   gradientColor={[30, 41, 99]}
//                   speed={50}
//                   pauseOnHover
//                   loop={0}
//                 >
//                   {notifications?.map((item, idx) => (
//                     <div key={idx} className="flex items-center text-white space-x-3 mr-10">
//                       <HiBell className="text-yellow-300 text-lg animate-ping-slow flex-shrink-0" />
                      
//                       {/* Make notification title clickable if it has an ID, otherwise use external link */}
//                       {item._id ? (
//                         <Link 
//                           to={`/notification-view/${item._id}`}
//                           className="text-sm sm:text-base font-medium hover:text-yellow-200 transition-colors cursor-pointer"
//                         >
//                           {item.Title}
//                         </Link>
//                       ) : item.Link && item.Link !== '#' ? (
//                         <Link 
//                           to={item.Link}
//                           target={item.Link.startsWith('http') ? '_blank' : '_self'}
//                           rel={item.Link.startsWith('http') ? 'noopener noreferrer' : undefined}
//                           className="text-sm sm:text-base font-medium hover:text-yellow-200 transition-colors cursor-pointer"
//                         >
//                           {item.Title}
//                         </Link>
//                       ) : (
//                         <span className="text-sm sm:text-base font-medium">
//                           {item.Title}
//                         </span>
//                       )}

//                       {item.isNew && (
//                         <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-semibold animate-bounce flex-shrink-0">
//                           NEW
//                         </span>
//                       )}
                      
//                       {item.date && (
//                         <span className="text-gray-300 text-xs ml-1 hidden sm:inline flex-shrink-0">
//                           ({item.date})
//                         </span>
//                       )}
                      
//                       {/* Add indicators for attachments */}
//                       <div className="flex items-center space-x-1 flex-shrink-0">
//                         {item.Image && (
//                           <div className="w-3 h-3 bg-blue-400 rounded-full" title="Has Image"></div>
//                         )}
//                         {item.pdf && (
//                           <div className="w-3 h-3 bg-red-400 rounded-full" title="Has PDF"></div>
//                         )}
//                         {item.Description && (
//                           <div className="w-3 h-3 bg-green-400 rounded-full" title="Has Description"></div>
//                         )}
//                       </div>
//                     </div>
//                   ))}
//                 </Marquee>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Enhanced Custom Styles */}
//       <style jsx>{`
//         .custom-bullet {
//           width: 12px !important;
//           height: 12px !important;
//           background: rgba(255, 255, 255, 0.4) !important;
//           opacity: 0.8 !important;
//           border-radius: 50% !important;
//           transition: all 0.3s ease !important;
//           cursor: pointer !important;
//           margin: 0 6px !important;
//         }
        
//         .custom-bullet:hover {
//           background: rgba(255, 255, 255, 0.7) !important;
//           transform: scale(1.2) !important;
//         }
        
//         .swiper-pagination-bullet-active.custom-bullet {
//           background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
//           opacity: 1 !important;
//           transform: scale(1.4) !important;
//           box-shadow: 0 0 20px rgba(102, 126, 234, 0.6) !important;
//         }
        
//         .swiper-pagination {
//           bottom: 30px !important;
//           z-index: 20 !important;
//         }

//         /* Smooth scrolling for mobile */
//         @media (max-width: 768px) {
//           .swiper-slide {
//             overflow-x: hidden;
//           }
//         }

//         /* Animation for gradient background fallback */
//         @keyframes gradientShift {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
//       `}</style>
//     </>
//   );
// }

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade, Parallax } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/parallax';
import Marquee from 'react-fast-marquee';
import { HiBell, HiPlay, HiPause } from 'react-icons/hi';
import { useState, useRef, useEffect } from 'react';
import apiurl from '../../services/apiendpoint/apiendpoint';
import { Link } from 'react-router-dom';

export default function HeroSection({ data, notifications }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const swiperRef = useRef(null);

  console.log('Banner data received:', data);
  console.log('API URL:', apiurl());

  // Initialize autoplay when component mounts
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.start();
    }
  }, [data]);

  const toggleAutoplay = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      if (isPlaying) {
        swiperRef.current.swiper.autoplay.stop();
      } else {
        swiperRef.current.swiper.autoplay.start();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Enhanced image URL construction with better error handling
  const getImageUrl = (imagePath) => {
    if (!imagePath) return '';
    
    // Clean the path and handle different formats
    const cleanPath = imagePath.replace(/\\/g, '/');
    const encodedPath = encodeURI(cleanPath);
    return `${apiurl()}/${encodedPath}`;
  };

  return (
    <>
      <div className="relative  overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_30%,rgba(255,255,255,0.1)_50%,transparent_70%)] animate-pulse"></div>
        </div>

        {/* Main slider content */}
        {!data || data.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-screen text-center px-4">
            {/* <div className="animate-pulse">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mb-6">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div> */}
            {/* <h2 className="text-2xl font-bold text-white mb-2">No Banner Content</h2>
            <p className="text-gray-300">Banner images are loading or unavailable</p> */}
          </div>
        ) : (
          <Swiper
            ref={swiperRef}
            modules={[Autoplay, Pagination, Navigation, EffectFade, Parallax]}
            loop={true}
            slidesPerView={1}
            effect="fade"
            parallax={true}
            fadeEffect={{
              crossFade: true
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              reverseDirection: false,
              stopOnLastSlide: false,
              waitForTransition: true,
            }}
            speed={1500}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              dynamicMainBullets: 5,
              renderBullet: function (index, className) {
                return `<span class="${className} custom-bullet"></span>`;
              },
            }}
            navigation={{
              nextEl: '.hero-button-next',
              prevEl: '.hero-button-prev',
            }}
            className="absolute inset-0 h-full w-full"
            onSwiper={(swiper) => {
              // Ensure autoplay starts when swiper is initialized
              setTimeout(() => {
                swiper.autoplay.start();
              }, 100);
            }}
          >
            {data.map((slide, i) => {
              const imageUrl = getImageUrl(slide.Image);
              
              return (
                <SwiperSlide key={i}>
                  <div className="relative h-screen w-full overflow-hidden">
                    {/* Gradient overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 z-10"></div>
                    
                    {/* Main image with parallax effect - FULL IMAGE DISPLAY */}
                    <div 
                      className="swiper-parallax-bg absolute inset-0 w-full h-full flex items-center justify-center"
                      data-swiper-parallax="-15%"
                    >
                      <div className="relative w-full h-full flex items-center justify-center bg-black/20">
                        <img 
                          src={imageUrl}
                          alt={slide.title || `Hero Slide ${i + 1}`}
                          className="max-w-full max-h-full w-auto h-auto object-contain transition-all duration-[2000ms] ease-out hover:scale-105"
                          style={{
                            filter: 'brightness(0.85) contrast(1.1) saturate(1.1)',
                            minWidth: '100%',
                            minHeight: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center center',
                          }}
                          onLoad={() => console.log(`✅ Image loaded: ${imageUrl}`)}
                          onError={(e) => {
                            console.error(`❌ Failed to load: ${imageUrl}`);
                            // Fallback to gradient background
                            e.target.style.display = 'none';
                            const fallbackDiv = document.createElement('div');
                            fallbackDiv.className = 'absolute inset-0 w-full h-full';
                            fallbackDiv.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                            e.target.parentElement.appendChild(fallbackDiv);
                          }}
                        />
                        {/* Background fill for letterboxing */}
                        <div 
                          className="absolute inset-0 -z-10"
                          style={{
                            backgroundImage: `url(${imageUrl})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            filter: 'blur(20px) brightness(0.3)',
                          }}
                        ></div>
                      </div>
                    </div>
                    
                    {/* Content overlay with animations */}
                    <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4 sm:px-8">
                      <div className="max-w-4xl mx-auto">
                        {slide.title && (
                          <h1 
                            className="text-4xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight"
                            data-swiper-parallax="-300"
                            style={{
                              textShadow: '2px 2px 20px rgba(0,0,0,0.8)',
                              background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              backgroundClip: 'text',
                            }}
                          >
                            {slide.title}
                          </h1>
                        )}
                        
                        {slide.description && (
                          <p 
                            className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 font-light leading-relaxed"
                            data-swiper-parallax="-200"
                            style={{ textShadow: '1px 1px 10px rgba(0,0,0,0.7)' }}
                          >
                            {slide.description}
                          </p>
                        )}
                        
                        {slide.buttonText && (
                          <div data-swiper-parallax="-100">
                            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg">
                              <span className="relative z-10">{slide.buttonText}</span>
                              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Slide indicator */}
                    <div className="absolute bottom-4 right-4 bg-black/30 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm z-20">
                      {i + 1} / {data.length}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}

        {/* Enhanced Navigation Controls */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-30">
          <button className="hero-button-prev group bg-white/10 backdrop-blur-md border border-white/20 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-xl hover:bg-white/20 hover:scale-110 transition-all duration-300 hover:shadow-2xl">
            <svg className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>

        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-30">
          <button className="hero-button-next group bg-white/10 backdrop-blur-md border border-white/20 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-xl hover:bg-white/20 hover:scale-110 transition-all duration-300 hover:shadow-2xl">
            <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Play/Pause Control */}
        <div className="absolute top-6 right-6 z-30">
          <button 
            onClick={toggleAutoplay}
            className="bg-white/10 backdrop-blur-md border border-white/20 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-xl hover:bg-white/20 transition-all duration-300"
          >
            {isPlaying ? (
              <HiPause className="w-5 h-5" />
            ) : (
              <HiPlay className="w-5 h-5 ml-1" />
            )}
          </button>
        </div>
      </div>

      {/* Original Notification Section */}
      <section>
        <div className="">
          <div className="w-full bg-white overflow-x-hidden">
            <div className="flex flex-col justify-center items-center  bg-gradient-to-r from-indigo-800 to-blue-900 mx-auto px-5 lg:px-10 pb-4 rounded-b-[40px] w-[80%] md:w-[90%] max-w-screen-2xl">

              <div className='w-full flex items-center justify-center gap-4 relative'>
                <div className='absolute bg-indigo-800 top-0 left-0 h-14 w-10 lg:w-20 -translate-x-[150%]'></div>
                <div className='absolute bg-blue-900 top-0 right-0 h-14 w-10 lg:w-20 translate-x-[150%]'></div>
                <div className='absolute bg-white top-0 left-0 h-14 w-10 lg:w-20 -translate-x-[150%] rounded-tr-[40px] '></div>
                <div className='absolute bg-white top-0 right-0 h-14 w-10 lg:w-20 translate-x-[150%] rounded-tl-[40px] '></div>
              </div>
              
              <div className="w-full py-4 px-4 mt-4 rounded-xl overflow-hidden">
                <Marquee
                  gradient={true}
                  gradientColor={[30, 41, 99]}
                  speed={50}
                  pauseOnHover
                  loop={0}
                >
                  {notifications?.map((item, idx) => (
                    <div key={idx} className="flex items-center text-white space-x-3 mr-10">
                      <HiBell className="text-yellow-300 text-lg animate-ping-slow flex-shrink-0" />
                      
                      {/* Make notification title clickable if it has an ID, otherwise use external link */}
                      {item._id ? (
                        <Link 
                          to={`/notification-view/${item._id}`}
                          className="text-sm sm:text-base font-medium hover:text-yellow-200 transition-colors cursor-pointer"
                        >
                          {item.Title}
                        </Link>
                      ) : item.Link && item.Link !== '#' ? (
                        <Link 
                          to={item.Link}
                          target={item.Link.startsWith('http') ? '_blank' : '_self'}
                          rel={item.Link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-sm sm:text-base font-medium hover:text-yellow-200 transition-colors cursor-pointer"
                        >
                          {item.Title}
                        </Link>
                      ) : (
                        <span className="text-sm sm:text-base font-medium">
                          {item.Title}
                        </span>
                      )}

                      {item.isNew && (
                        <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-semibold animate-bounce flex-shrink-0">
                          NEW
                        </span>
                      )}
                      
                      {item.date && (
                        <span className="text-gray-300 text-xs ml-1 hidden sm:inline flex-shrink-0">
                          ({item.date})
                        </span>
                      )}
                      
                      {/* Add indicators for attachments */}
                      <div className="flex items-center space-x-1 flex-shrink-0">
                        {item.Image && (
                          <div className="w-3 h-3 bg-blue-400 rounded-full" title="Has Image"></div>
                        )}
                        {item.pdf && (
                          <div className="w-3 h-3 bg-red-400 rounded-full" title="Has PDF"></div>
                        )}
                        {item.Description && (
                          <div className="w-3 h-3 bg-green-400 rounded-full" title="Has Description"></div>
                        )}
                      </div>
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Custom Styles */}
      <style jsx>{`
        /* Ensure Swiper container takes full space */
        .swiper {
          width: 100% !important;
          height: 100% !important;
        }
        
        .swiper-slide {
          width: 100% !important;
          height: 100% !important;
        }

        .custom-bullet {
          width: 12px !important;
          height: 12px !important;
          background: rgba(255, 255, 255, 0.4) !important;
          opacity: 0.8 !important;
          border-radius: 50% !important;
          transition: all 0.3s ease !important;
          cursor: pointer !important;
          margin: 0 6px !important;
        }
        
        .custom-bullet:hover {
          background: rgba(255, 255, 255, 0.7) !important;
          transform: scale(1.2) !important;
        }
        
        .swiper-pagination-bullet-active.custom-bullet {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
          opacity: 1 !important;
          transform: scale(1.4) !important;
          box-shadow: 0 0 20px rgba(102, 126, 234, 0.6) !important;
        }
        
        .swiper-pagination {
          bottom: 30px !important;
          z-index: 20 !important;
        }

        /* Ensure images display properly without cropping */
        .swiper-slide img {
          display: block !important;
          max-width: 100% !important;
          max-height: 100% !important;
        }
        
        /* Alternative: If you want images to fill completely (may crop) */
        .swiper-slide.fill-mode img {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
        }
        
        /* Background blur effect for letterboxing */
        .image-container {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Smooth scrolling for mobile */
        @media (max-width: 768px) {
          .swiper-slide {
            overflow-x: hidden;
          }
        }

        /* Animation for gradient background fallback */
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Ensure autoplay animation is visible */
        @keyframes autoplayProgress {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
      `}</style>
    </>
  );
}