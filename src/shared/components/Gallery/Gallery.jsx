// import React, { useState, useEffect, useCallback } from 'react'
// import Slider from 'react-slick';
// import apiurl from '../../services/apiendpoint/apiendpoint';
// import moment from 'moment-timezone';
// import { Link } from 'react-router-dom';
// import { getallGallerys } from '../../services/apigallery/apigallery';

// export default function Gallery(props) {
//     const { OpenModel } = props;
//     const [galleryData, setGalleryData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [imageErrors, setImageErrors] = useState({});
//     const [imageLoaded, setImageLoaded] = useState({});

//     // Filter gallery data based on type
//     const Images = galleryData.filter(item => item.Type === 'Images');
//     const Videos = galleryData.filter(item => item.Type === 'Videos');

//     const handleImageError = (index, type) => {
//         setImageErrors(prev => ({
//             ...prev,
//             [`${type}_${index}`]: true
//         }));
//     };

//     const handleImageLoad = (index, type) => {
//         setImageLoaded(prev => ({
//             ...prev,
//             [`${type}_${index}`]: true
//         }));
//     };

//     const SampleNextArrow = (prop) => {
//         const { className, style, onClick } = prop;
//         return (
//             <div className={`${className} hidden`} style={{ ...style, display: "none", background: "red" }} onClick={onClick} />
//         );
//     }
    
//     const SamplePrevArrow = (prop) => {
//         const { className, style, onClick } = prop;
//         return (
//             <div className={`${className} hidden`} style={{ ...style, display: "none", background: "red" }} onClick={onClick} />
//         );
//     }
    
//     const settings = {
//         dots: true,
//         focusOnSelect: true,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         speed: 500,
//         centerMode: true,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 3,
//                     centerMode: true,
//                     dots: true
//                 }
//             },
//             {
//                 breakpoint: 992,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                     initialSlide: 1
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     initialSlide: 1
//                 }
//             }
//         ],
//         nextArrow: <SampleNextArrow />,
//         prevArrow: <SamplePrevArrow />
//     };

//     const getHomeGallery = useCallback(async () => {
//         try {
//             setLoading(true);
//             setError(null);
//             const res = await getallGallerys();
//             setGalleryData(res || []);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//             setError('Failed to fetch gallery data');
//         } finally {
//             setLoading(false);
//         }
//     }, []);

//     useEffect(() => {
//         getHomeGallery();
//     }, [getHomeGallery]);

//     return (
//         <section className=''>
//             {/* Header Section */}
//             <div className='py-16 bg-white'>
//                 <div className="max-w-7xl mx-auto text-center space-y-6">
//                     {/* Tag Label */}
//                     <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full">
//                         <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
//                         <span className="text-sm font-medium text-purple-700 uppercase tracking-wide"> Our College Gallery</span>
//                     </div>
                    
//                     {/* Main Heading */}
//                     <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
//                         Capturing <span className="text-transparent bg-clip-text bg-purple-600 ">Moments</span> That Matter
//                     </h1>
                    
//                     {/* Description */}
//                     <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
//                         Explore our visual journey through memorable events, celebrations, and achievements. Each image and video tells a story of our community's vibrant experiences.
//                     </p>
//                 </div>
//             </div>

//             <div className='max-w-[110rem] w-full mx-auto px-4 md:px-6'>
                
//                 {/* Loading State */}
//                 {loading && (
//                     <div className='flex justify-center items-center py-20'>
//                         <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500'></div>
//                     </div>
//                 )}

//                 {/* Error State */}
//                 {error && (
//                     <div className='text-center py-20'>
//                         <div className='text-red-500 text-lg mb-4'>{error}</div>
//                         <button 
//                             onClick={getHomeGallery}
//                             className='bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition-colors'
//                         >
//                             Retry
//                         </button>
//                     </div>
//                 )}

//                 {/* Gallery Content */}
//                 {!loading && !error && (
//                     <>
//                         {/* Photos Section */}
//                         {Images.length > 0 && (
//                     <div className='mb-12'>
//                         <div className='text-center mb-10'>
//                             <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-4">
//                                 <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
//                                 <span className="text-sm font-medium text-blue-700 uppercase tracking-wide">Photos</span>
//                             </div>
//                             <h2 className='text-3xl font-bold text-gray-800 mb-2'>Visual Stories</h2>
//                             <p className='text-gray-600'>Capture moments that last forever</p>
//                         </div>

//                         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
//                             {Images.map((items, index) => (
//                                 <Link 
//                                     role='button' 
//                                     to={`/view-event/Image/${moment(items.Event_Date).format('YYYY')}`} 
//                                     className='group relative block overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 bg-white border border-gray-100' 
//                                     key={index}
//                                 >
//                                     <div className='relative aspect-[4/3] overflow-hidden rounded-2xl'>
//                                         {/* Loading State */}
//                                         {!imageLoaded[`image_${index}`] && !imageErrors[`image_${index}`] && (
//                                             <div className='absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center'>
//                                                 <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500'></div>
//                                             </div>
//                                         )}

//                                         {/* Main Image */}
//                                         {!imageErrors[`image_${index}`] && items.Images.length > 0 && (
//                                             <img 
//                                                 loading='lazy' 
//                                                 src={`${apiurl()}/${items.Images[0]}`} 
//                                                 className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
//                                                     imageLoaded[`image_${index}`] ? 'opacity-100' : 'opacity-0'
//                                                 }`}
//                                                 alt={`Gallery item ${index + 1}`}
//                                                 onError={() => handleImageError(index, 'image')}
//                                                 onLoad={() => handleImageLoad(index, 'image')}
//                                             />
//                                         )}
                                        
//                                         {/* Fallback for broken images */}
//                                         {(imageErrors[`image_${index}`] || items.Images.length === 0) && (
//                                             <div className='absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center border-2 border-dashed border-gray-300'>
//                                                 <div className='text-center'>
//                                                     <i className="fa-regular fa-image text-gray-400 text-4xl mb-2"></i>
//                                                     <p className='text-gray-500 text-sm'>Image not available</p>
//                                                 </div>
//                                             </div>
//                                         )}
                                        
//                                         {/* Hover Overlay */}
//                                         <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                                        
//                                         {/* Thumbnail Stack Effect */}
//                                         {items.Images.length > 1 && (
//                                             <div className='absolute -bottom-1 -right-1 flex space-x-1 z-10'>
//                                                 {items.Images.slice(1, 3).map((src, thumbIndex) => (
//                                                     <div key={thumbIndex} className={`w-10 h-10 rounded-lg shadow-lg overflow-hidden border-2 border-white transform ${thumbIndex === 0 ? 'rotate-12' : 'rotate-6'} bg-white`}>
//                                                         <img 
//                                                             loading='lazy' 
//                                                             src={`${apiurl()}/${src}`} 
//                                                             className='w-full h-full object-cover'
//                                                             alt={`Thumbnail ${thumbIndex + 1}`}
//                                                             onError={(e) => {
//                                                                 e.target.parentElement.style.display = 'none';
//                                                             }}
//                                                         />
//                                                     </div>
//                                                 ))}
//                                             </div>
//                                         )}
                                        
//                                         {/* Year Badge */}
//                                         <div className='absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-800 text-sm font-bold px-3 py-1 rounded-full shadow-md z-10'>
//                                             {moment(items.Event_Date).format('YYYY')}
//                                         </div>
                                        
//                                         {/* Image Count Badge */}
//                                         {items.Images.length > 1 && (
//                                             <div className='absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-full'>
//                                                 +{items.Images.length - 1} more
//                                             </div>
//                                         )}
                                        
//                                         {/* Bottom Content */}
//                                         <div className='absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10'>
//                                             <div className='text-white text-sm font-medium'>
//                                                 {items.Title}
//                                             </div>
//                                             <div className='text-white/80 text-xs'>
//                                                 {moment(items.Event_Date).format('MMMM YYYY')}
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </Link>
//                             ))}
//                         </div>
//                     </div>
//                 )}

//                 {/* Videos Section */}
//                 {Videos.length > 0 && (
//                     <div className='mb-12'>
//                         <div className='text-center mb-10'>
//                             <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full mb-4">
//                                 <div className="w-2 h-2 bg-red-500 rounded-full"></div>
//                                 <span className="text-sm font-medium text-red-700 uppercase tracking-wide">Videos</span>
//                             </div>
//                             <h2 className='text-3xl font-bold text-gray-800 mb-2'>Motion Memories</h2>
//                             <p className='text-gray-600'>Relive the moments in motion</p>
//                         </div>

//                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                             {Videos.map((items, index) => (
//                                 <Link 
//                                     to={`/view-event/Videos/${moment(items.Event_Date).format('YYYY')}`} 
//                                     role='button' 
//                                     className='group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 bg-white border border-gray-100' 
//                                     key={index}
//                                 >
//                                     <div className='relative aspect-video bg-gradient-to-br from-gray-900 to-gray-700 overflow-hidden rounded-2xl'>
//                                         {/* Main Video */}
//                                         <div className='absolute inset-0'>
//                                             {items.Videos.length > 0 && (
//                                                 <video 
//                                                     className='w-full h-full object-cover' 
//                                                     muted 
//                                                     preload="metadata"
//                                                     onMouseEnter={(e) => {
//                                                         e.target.currentTime = 1;
//                                                         e.target.play().catch(() => {});
//                                                     }}
//                                                     onMouseLeave={(e) => {
//                                                         e.target.pause();
//                                                         e.target.currentTime = 1;
//                                                     }}
//                                                     onError={(e) => {
//                                                         e.target.style.display = 'none';
//                                                         e.target.nextElementSibling.style.display = 'flex';
//                                                     }}
//                                                 >
//                                                     <source src={`${apiurl()}/${items.Videos[0]}#t=1`} type="video/mp4" />
//                                                 </video>
//                                             )}
                                            
//                                             {/* Video Fallback */}
//                                             <div className={`absolute inset-0 bg-gradient-to-br from-red-50 to-pink-50 items-center justify-center border-2 border-dashed border-gray-300 ${items.Videos.length > 0 ? 'hidden' : 'flex'}`}>
//                                                 <div className='text-center'>
//                                                     <i className="fa-solid fa-film text-gray-400 text-4xl mb-2"></i>
//                                                     <p className='text-gray-500 text-sm'>Video not available</p>
//                                                 </div>
//                                             </div>
                                            
//                                             <div className='absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300'></div>
//                                         </div>
                                        
//                                         {/* Play Button */}
//                                         <div className='absolute inset-0 flex items-center justify-center z-20'>
//                                             <div className='w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:bg-white transition-all duration-300'>
//                                                 <i className="fa-solid fa-play text-red-500 text-xl ml-1"></i>
//                                             </div>
//                                         </div>
                                        
//                                         {/* Video Count Badge */}
//                                         {items.Videos.length > 1 && (
//                                             <div className='absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-full'>
//                                                 +{items.Videos.length - 1} more
//                                             </div>
//                                         )}
                                        
//                                         {/* Year Badge */}
//                                         <div className='absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-800 text-sm font-bold px-3 py-1 rounded-full shadow-md'>
//                                             {moment(items.Event_Date).format('YYYY')}
//                                         </div>
                                        
//                                         {/* Bottom Content */}
//                                         <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300'>
//                                             <div className='text-white text-sm font-medium flex items-center'>
//                                                 <i className="fa-solid fa-video mr-2"></i>
//                                                 {items.Title}
//                                             </div>
//                                             <div className='text-white/80 text-xs'>
//                                                 {moment(items.Event_Date).format('MMMM YYYY')}
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </Link>
//                             ))}
//                         </div>
//                     </div>
//                                         )}

//                         {/* No Data Message */}
//                         {Images.length === 0 && Videos.length === 0 && (
//                             <div className='text-center py-20'>
//                                 <div className='text-gray-500 text-lg'>No gallery items found</div>
//                             </div>
//                         )}
//                     </>
//                 )}
//             </div>
//         </section>
//     )
// }

import React, { useState, useEffect, useCallback } from 'react'
import Slider from 'react-slick';
import apiurl from '../../services/apiendpoint/apiendpoint';
import moment from 'moment-timezone';
import { Link } from 'react-router-dom';
import { getallGallerys } from '../../services/apigallery/apigallery';

export default function Gallery(props) {
    const { OpenModel } = props;
    const [galleryData, setGalleryData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [imageErrors, setImageErrors] = useState({});
    const [imageLoaded, setImageLoaded] = useState({});

    // Filter gallery data based on type
    const Images = galleryData.filter(item => item.Type === 'Images');
    const Videos = galleryData.filter(item => item.Type === 'Videos');

    const handleImageError = (index, type) => {
        setImageErrors(prev => ({
            ...prev,
            [`${type}_${index}`]: true
        }));
    };

    const handleImageLoad = (index, type) => {
        setImageLoaded(prev => ({
            ...prev,
            [`${type}_${index}`]: true
        }));
    };

    // Handle image click to open lightbox
    const handleImageClick = (e, item) => {
        e.preventDefault(); // Prevent navigation
        e.stopPropagation();
        
        // Format data for the lightbox
        const lightboxData = {
            Type: "Image",
            Images: item.Images,
            Title: item.Title,
            Event_Date: item.Event_Date
        };
        
        OpenModel(lightboxData);
    };

    // Handle video click to open lightbox
    const handleVideoClick = (e, item) => {
        e.preventDefault(); // Prevent navigation
        e.stopPropagation();
        
        // Format data for the lightbox
        const lightboxData = {
            Type: "Video",
            Videos: item.Videos,
            Title: item.Title,
            Event_Date: item.Event_Date
        };
        
        OpenModel(lightboxData);
    };

    const SampleNextArrow = (prop) => {
        const { className, style, onClick } = prop;
        return (
            <div className={`${className} hidden`} style={{ ...style, display: "none", background: "red" }} onClick={onClick} />
        );
    }
    
    const SamplePrevArrow = (prop) => {
        const { className, style, onClick } = prop;
        return (
            <div className={`${className} hidden`} style={{ ...style, display: "none", background: "red" }} onClick={onClick} />
        );
    }
    
    const settings = {
        dots: true,
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    centerMode: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ],
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    const getHomeGallery = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);
            const res = await getallGallerys();
            setGalleryData(res || []);
        } catch (error) {
            console.error('Error fetching data:', error);
            setError('Failed to fetch gallery data');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        getHomeGallery();
    }, [getHomeGallery]);

    return (
        <section className='py-5'>
            {/* Header Section */}
            <div className='py-16 bg-white'>
                <div className="max-w-7xl mx-auto text-center space-y-6">
                    {/* Tag Label */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-sm font-medium text-purple-700 uppercase tracking-wide"> Our College Gallery</span>
                    </div>
                    
                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                        Capturing <span className="text-transparent bg-clip-text bg-purple-600 ">Moments</span> That Matter
                    </h1>
                    
                    {/* Description */}
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Explore our visual journey through memorable events, celebrations, and achievements. Each image and video tells a story of our community's vibrant experiences.
                    </p>
                </div>
            </div>

            <div className='max-w-[110rem] w-full mx-auto px-4 md:px-6'>
                
                {/* Loading State */}
                {loading && (
                    <div className='flex justify-center items-center py-20'>
                        <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500'></div>
                    </div>
                )}

                {/* Error State */}
                {error && (
                    <div className='text-center py-20'>
                        <div className='text-red-500 text-lg mb-4'>{error}</div>
                        <button 
                            onClick={getHomeGallery}
                            className='bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition-colors'
                        >
                            Retry
                        </button>
                    </div>
                )}

                {/* Gallery Content */}
                {!loading && !error && (
                    <>
                        {/* Photos Section */}
                        {Images.length > 0 && (
                    <div className='mb-12'>
                        <div className='text-center mb-10'>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-4">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <span className="text-sm font-medium text-blue-700 uppercase tracking-wide">Photos</span>
                            </div>
                            <h2 className='text-3xl font-bold text-gray-800 mb-2'>Visual Stories</h2>
                            <p className='text-gray-600'>Capture moments that last forever</p>
                        </div>

                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                            {Images.map((items, index) => (
                                <div 
                                    role='button' 
                                    onClick={(e) => handleImageClick(e, items)}
                                    className='group relative block overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 bg-white border border-gray-100 cursor-pointer' 
                                    key={index}
                                >
                                    <div className='relative aspect-[4/3] overflow-hidden rounded-2xl'>
                                        {/* Loading State */}
                                        {!imageLoaded[`image_${index}`] && !imageErrors[`image_${index}`] && (
                                            <div className='absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center'>
                                                <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500'></div>
                                            </div>
                                        )}

                                        {/* Main Image */}
                                        {!imageErrors[`image_${index}`] && items.Images.length > 0 && (
                                            <img 
                                                loading='lazy' 
                                                src={`${apiurl()}/${items.Images[0]}`} 
                                                className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
                                                    imageLoaded[`image_${index}`] ? 'opacity-100' : 'opacity-0'
                                                }`}
                                                alt={`Gallery item ${index + 1}`}
                                                onError={() => handleImageError(index, 'image')}
                                                onLoad={() => handleImageLoad(index, 'image')}
                                            />
                                        )}
                                        
                                        {/* Fallback for broken images */}
                                        {(imageErrors[`image_${index}`] || items.Images.length === 0) && (
                                            <div className='absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center border-2 border-dashed border-gray-300'>
                                                <div className='text-center'>
                                                    <i className="fa-regular fa-image text-gray-400 text-4xl mb-2"></i>
                                                    <p className='text-gray-500 text-sm'>Image not available</p>
                                                </div>
                                            </div>
                                        )}
                                        
                                        {/* Hover Overlay */}
                                        <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                                        
                                        {/* Lightbox Icon */}
                                        {/* <div className='absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                            <div className='w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg'>
                                                <i className="fa-solid fa-expand text-blue-500 text-lg"></i>
                                            </div>
                                        </div> */}
                                        
                                        {/* Thumbnail Stack Effect */}
                                        {items.Images.length > 1 && (
                                            <div className='absolute -bottom-1 -right-1 flex space-x-1 z-10'>
                                                {items.Images.slice(1, 3).map((src, thumbIndex) => (
                                                    <div key={thumbIndex} className={`w-10 h-10 rounded-lg shadow-lg overflow-hidden border-2 border-white transform ${thumbIndex === 0 ? 'rotate-12' : 'rotate-6'} bg-white`}>
                                                        <img 
                                                            loading='lazy' 
                                                            src={`${apiurl()}/${src}`} 
                                                            className='w-full h-full object-cover'
                                                            alt={`Thumbnail ${thumbIndex + 1}`}
                                                            onError={(e) => {
                                                                e.target.parentElement.style.display = 'none';
                                                            }}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                        
                                        {/* Year Badge */}
                                        {/* <div className='absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-800 text-sm font-bold px-3 py-1 rounded-full shadow-md z-10'>
                                            {moment(items.Event_Date).format('YYYY')}
                                        </div> */}
                                        
                                        {/* Image Count Badge */}
                                        {items.Images.length > 1 && (
                                            <div className='absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-full'>
                                                +{items.Images.length - 1} more
                                            </div>
                                        )}
                                        
                                        {/* Bottom Content */}
                                        <div className='absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10'>
                                            <div className='text-white text-sm font-medium'>
                                                {items.Title}
                                            </div>
                                            <div className='text-white/80 text-xs'>
                                                {moment(items.Event_Date).format('MMMM YYYY')}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Videos Section */}
                {Videos.length > 0 && (
                    <div className='mb-12'>
                        <div className='text-center mb-10'>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full mb-4">
                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                <span className="text-sm font-medium text-red-700 uppercase tracking-wide">Videos</span>
                            </div>
                            <h2 className='text-3xl font-bold text-gray-800 mb-2'>Motion Memories</h2>
                            <p className='text-gray-600'>Relive the moments in motion</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {Videos.map((items, index) => (
                                <div 
                                    onClick={(e) => handleVideoClick(e, items)}
                                    role='button' 
                                    className='group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 bg-white border border-gray-100 cursor-pointer' 
                                    key={index}
                                >
                                    <div className='relative aspect-video bg-gradient-to-br from-gray-900 to-gray-700 overflow-hidden rounded-2xl'>
                                        {/* Main Video */}
                                        <div className='absolute inset-0'>
                                            {items.Videos.length > 0 && (
                                                <video 
                                                    className='w-full h-full object-cover' 
                                                    muted 
                                                    preload="metadata"
                                                    onMouseEnter={(e) => {
                                                        e.target.currentTime = 1;
                                                        e.target.play().catch(() => {});
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.target.pause();
                                                        e.target.currentTime = 1;
                                                    }}
                                                    onError={(e) => {
                                                        e.target.style.display = 'none';
                                                        e.target.nextElementSibling.style.display = 'flex';
                                                    }}
                                                >
                                                    <source src={`${apiurl()}/${items.Videos[0]}#t=1`} type="video/mp4" />
                                                </video>
                                            )}
                                            
                                            {/* Video Fallback */}
                                            <div className={`absolute inset-0 bg-gradient-to-br from-red-50 to-pink-50 items-center justify-center border-2 border-dashed border-gray-300 ${items.Videos.length > 0 ? 'hidden' : 'flex'}`}>
                                                <div className='text-center'>
                                                    <i className="fa-solid fa-film text-gray-400 text-4xl mb-2"></i>
                                                    <p className='text-gray-500 text-sm'>Video not available</p>
                                                </div>
                                            </div>
                                            
                                            <div className='absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300'></div>
                                        </div>
                                        
                                        {/* Play Button */}
                                        <div className='absolute inset-0 flex items-center justify-center z-20'>
                                            <div className='w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:bg-white transition-all duration-300'>
                                                <i className="fa-solid fa-play text-red-500 text-xl ml-1"></i>
                                            </div>
                                        </div>
                                        
                                        {/* Video Count Badge */}
                                        {items.Videos.length > 1 && (
                                            <div className='absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-full'>
                                                +{items.Videos.length - 1} more
                                            </div>
                                        )}
                                        
                                        {/* Year Badge */}
                                        <div className='absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-800 text-sm font-bold px-3 py-1 rounded-full shadow-md'>
                                            {moment(items.Event_Date).format('YYYY')}
                                        </div>
                                        
                                        {/* Bottom Content */}
                                        <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300'>
                                            <div className='text-white text-sm font-medium flex items-center'>
                                                <i className="fa-solid fa-video mr-2"></i>
                                                {items.Title}
                                            </div>
                                            <div className='text-white/80 text-xs'>
                                                {moment(items.Event_Date).format('MMMM YYYY')}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                                        )}

                        {/* No Data Message */}
                        {Images.length === 0 && Videos.length === 0 && (
                            <div className='text-center py-20'>
                                <div className='text-gray-500 text-lg'>No gallery items found</div>
                            </div>
                        )}
                    </>
                )}
            </div>
        </section>
    )
}