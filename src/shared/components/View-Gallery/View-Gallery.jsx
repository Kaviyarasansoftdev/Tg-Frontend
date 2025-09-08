import React from 'react'
import Slider from 'react-slick';
import apiurl from '../../services/apiendpoint/apiendpoint';
import moment from 'moment-timezone';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function ViewGallery(props) {

    const { OpenModel, Images, Videos, loading } = props;

    const param = useParams()
    
    const SampleNextArrow = (prop) => {
        const { className, style, onClick } = prop;
        return (
            <div className={`${className} hidden`} style={{ ...style, display: "none", background: "red" }} onClick={onClick} />
        );
    }
    
    const SamplePrevArrow= (prop)=> {
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

    return (
        <section className='mt-[67px] md:mt-[75px]'>
            <div className=' bg-primary flex items-center justify-center'>
                <div className='text-center'>
                    <div className='text-3xl text-black font-bold myFont mb-3'>Events of {param.Year}</div>    
                    <ol className="flex items-center whitespace-nowrap">
                        <li className="inline-flex items-center">
                            <Link to="/gallery" className="flex items-center text-sm text-black hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:hover:text-blue-500 dark:focus:text-blue-500">
                                Gallery
                            </Link>
                            <svg className="shrink-0 size-5 text-gray-400 dark:text-neutral-600 mx-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M6 13L10 3" stroke="currentColor" strokeLinecap="round"></path>
                            </svg>
                        </li>
                        <li className="inline-flex items-center text-sm font-semibold text-black dark:text-gary-200" aria-current="page">
                            Events of {param.Year}
                        </li>
                    </ol>                
                </div>
            </div>
            
            <div className='max-w-[110rem] w-full mx-auto px-2 md:px-4 py-16'>
                {param.Type === "Images" && (
                    <div>
                        <div className='text-primary text-center text-xl font-bold mb-4'>
                            <i className="fa-regular fa-images"></i> <span className='text-secondary'>Photos</span>
                        </div>
                        <div className='mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3'>
                            {Images.length !== 0 ? Images.map((items, index) => (
                                <div role='button' onClick={() => OpenModel(items)} className='relative z-[1]' key={index}>
                                    <ul className="cards">
                                        <li className="card card-1">
                                            {items.Images && items.Images.length > 0 && (
                                                <img 
                                                    loading='lazy' 
                                                    src={`${apiurl()}/${items.Images[0]}`} 
                                                    alt={items.Title}
                                                    onError={(e) => {
                                                        e.target.style.display = 'none';
                                                    }}
                                                />
                                            )}
                                            <div className='absolute bottom-0 end-0 z-[2] bg-primary text-white text-2xl font-bold px-3 mx-0 badge'>
                                                {items.Title}
                                            </div>
                                        </li>
                                        {items.Images && items.Images.length > 1 && (
                                            <li className="card card-2">
                                                <img 
                                                    loading='lazy' 
                                                    src={`${apiurl()}/${items.Images[1]}`} 
                                                    alt={items.Title}
                                                    onError={(e) => {
                                                        e.target.style.display = 'none';
                                                    }}
                                                />
                                            </li>
                                        )}
                                        {items.Images && items.Images.length > 2 && (
                                            <li className="card card-3">
                                                <img 
                                                    loading='lazy' 
                                                    src={`${apiurl()}/${items.Images[2]}`} 
                                                    alt={items.Title}
                                                    onError={(e) => {
                                                        e.target.style.display = 'none';
                                                    }}
                                                />
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            )) : (
                                <>
                                    {loading ? (
                                        <>
                                            <div className="bg-gray-200 rounded-lg dark:bg-neutral-700 w-full h-[300px]"></div>
                                            <div className="bg-gray-200 rounded-lg dark:bg-neutral-700 w-full h-[300px]"></div>
                                            <div className="bg-gray-200 rounded-lg dark:bg-neutral-700 w-full h-[300px]"></div>
                                            <div className="bg-gray-200 rounded-lg dark:bg-neutral-700 w-full h-[300px]"></div>
                                        </>
                                    ) : (
                                        <div className='text-center col-span-4 py-5'>
                                            Images Not Found
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                )}
                
                {param.Type === "Videos" && (
                    <div>
                        <div className='text-primary text-center text-xl font-bold mb-4'>
                            <i className="fa-solid fa-film"></i> <span className='text-secondary'>Videos</span>
                        </div>
                        <div className="slider-container">
                            <div className="mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3">
                                {Videos.length !== 0 ? Videos.map((items, index) => (
                                    <div role='button' onClick={() => OpenModel(items)} className='relative z-[1]' key={index}>
                                        <ul className="cards">
                                            <li className="card card-1">
                                                {items.Videos && items.Videos.length > 0 && (
                                                    <video className='object-fill w-full h-full' controls>
                                                        <source src={`${apiurl()}/${items.Videos[0]}`} type="video/mp4" />
                                                    </video>
                                                )}
                                                <div className='absolute bottom-0 end-0 z-[2] bg-primary text-white text-2xl font-bold px-3 mx-0 badge'>
                                                    {items.Title}
                                                </div>
                                            </li>
                                            {items.Videos && items.Videos.length > 1 && (
                                                <li className="card card-2">
                                                    <video className='object-fill w-full h-full' controls>
                                                        <source src={`${apiurl()}/${items.Videos[1]}`} type="video/mp4" />
                                                    </video>
                                                </li>
                                            )}
                                            {items.Videos && items.Videos.length > 2 && (
                                                <li className="card card-3">
                                                    <video className='object-fill w-full h-full' controls>
                                                        <source src={`${apiurl()}/${items.Videos[2]}`} type="video/mp4" />
                                                    </video>
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                )) : (
                                    <>
                                        {loading ? (
                                            <>
                                                <div className="bg-gray-200 rounded-lg dark:bg-neutral-700 w-full h-[300px]"></div>
                                                <div className="bg-gray-200 rounded-lg dark:bg-neutral-700 w-full h-[300px]"></div>
                                                <div className="bg-gray-200 rounded-lg dark:bg-neutral-700 w-full h-[300px]"></div>
                                                <div className="bg-gray-200 rounded-lg dark:bg-neutral-700 w-full h-[300px]"></div>
                                            </>
                                        ) : (
                                            <div className='text-center col-span-4 py-5'>
                                                Videos Not Found
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}