// // import React, { useState, useEffect } from 'react';
// // import { Link } from 'react-router-dom';

// // export default function AboutUs() {
// //     const [scrollY, setScrollY] = useState(0);
// //     const [isVisible, setIsVisible] = useState({});

// //     return (
// //         <div className="min-h-screen bg-gray-50">
// //             <div className="fixed inset-0 pointer-events-none">
// //                 {[...Array(8)].map((_, i) => (
// //                     <div
// //                         key={i}
// //                         className="absolute w-1 h-1 bg-purple-300 rounded-full opacity-40 animate-float"
// //                         style={{
// //                             left: `${Math.random() * 100}%`,
// //                             top: `${Math.random() * 100}%`,
// //                             animationDelay: `${Math.random() * 3}s`,
// //                             animationDuration: `${4 + Math.random() * 2}s`
// //                         }}
// //                     ></div>
// //                 ))}
// //             </div>

// //             {/* Hero Section */}
// //             <div
// //                 className="relative h-screen flex items-center justify-center overflow-hidden"
// //             > <div className="absolute inset-0 opacity-75 bg-black"></div>
// //                 <div className="absolute inset-0 opacity-40 " style={{
// //                     backgroundImage: 'url(https://cdn.prod.website-files.com/5db85faa1251c46219e9721a/5e91c9f9fbd366ea197a42b7_General_view%2C_Radcliffe_Quadrangle_-_IMG_1683_for_web.jpg)',
// //                     backgroundSize: 'cover',
// //                     backgroundPosition: 'center'
// //                 }}>

// //                 </div>

// //                 {/* Subtle Grid Pattern */}
// //                 <div className="absolute inset-0 opacity-5">
// //                     <div className="h-full w-full" style={{
// //                         backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
// //                         backgroundSize: '50px 50px'
// //                     }}></div>
// //                 </div>

// //                 <div className="relative z-10 text-center space-y-8 px-4">
// //                     <div className="transform hover:scale-105 transition-all duration-700">
// //                         <h1 className="text-7xl md:text-8xl font-medium text-white mb-6 tracking-tight">
// //                             About <span className="font-bold bg-gradient-to-r from-purple-500 to-purple-500 bg-clip-text text-transparent">Us</span>
// //                         </h1>
// //                         <div className="w-24 h-0.5 bg-purple-500 mx-auto"></div>
// //                     </div>

// //                     <p className="text-xl md:text-2xl text-white font-medium tracking-wide max-w-2xl mx-auto">
// //                         Pioneering Excellence in Engineering & Technology Education
// //                     </p>

// //                     <div className="flex justify-center space-x-2 ">
// //                         <Link to='/'>
// //                             <h2 className="md:text-[24px] text-[20px] font-medium text-white hover:text-purple-500 duration-300 ">Home</h2>
// //                         </Link>
// //                         <h2 className="md:text-[24px] text-[20px] font-medium  text-purple-500 "><span className="text-white">/ </span>Profile</h2>
// //                     </div>
// //                 </div>

// //                 {/* Scroll Indicator */}
// //                 <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
// //                     <div className="w-5 h-8 border border-white/30 rounded-full flex justify-center">
// //                         <div className="w-0.5 h-2 bg-white/50 rounded-full mt-1.5"></div>
// //                     </div>
// //                 </div>
// //             </div>

// //             {/* Main Content */}
// //             <div className="relative z-10 ">
// //                 {/* Story Section */}
// //                 <section
// //                     id="section-1"
// //                     className={`max-w-6xl mx-auto px-6 py-24 transition-all duration-1000 ${isVisible['section-1'] ? '' : ''}`}
// //                 >
// //                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
// //                         <div className="space-y-8">
// //                             <div className="space-y-4">
// //                                 <h2 className="text-5xl md:text-5xl font-bold text-gray-900">
// //                                     Our <span className="font-bold text-purple-600">Story</span>
// //                                 </h2>
// //                                 <div className="w-16 h-0.5 bg-purple-600"></div>
// //                             </div>

// //                             <div className="space-y-6 text-justify">
// //                                 <div className="bg-white rounded-2xl p-8 shadow-[0_0_10px_rgba(0,0,0,0.15)] hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] border border-gray-100  transition-all duration-500 ">
// //                                     <p className="text-gray-600 leading-relaxed ">
// //                                         Southern Educational and Rural Development Society was established in 1986 with pioneering vision and philanthropic commitment. Tagore Institute of Engineering and Technology, founded in 2008 under this society, stands as an AICTE-approved institution affiliated to Anna University, Chennai.
// //                                     </p>
// //                                 </div>

// //                                 <div className="bg-gray-900 rounded-2xl p-8 hover:bg-gray-800 transition-all duration-500 shadow-[0_0_10px_rgba(0,0,0,0.15)] hover:shadow-[0_0_20px_rgba(0,0,0,0.15)]">
// //                                     <p className="text-gray-300 leading-relaxed">
// //                                         Our institution has brought a Renaissance in Engineering and Technologies through quality education, effective pedagogy, and innovative teaching techniques. We provide students with the finest opportunities for career growth through regular campus interviews, seminars, conferences, workshops, and industrial tours.
// //                                     </p>
// //                                 </div>
// //                             </div>
// //                         </div>

// //                         <div className="relative group">
// //                             <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-gray-100 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-all duration-500"></div>
// //                             <div className="relative bg-white rounded-2xl p-4 shadow-[0_0_10px_rgba(0,0,0,0.15)] hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] border border-gray-100">
// //                                 <div className="w-full h-80 bg-gradient-to-br from-gray-100 to-purple-50 rounded-xl flex items-center justify-center text-gray-500 text-lg font-medium">
// //                                     <img
// //                                         src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
// //                                         alt="Tagore Institute Campus"
// //                                         className="w-full  object-cover "
// //                                     />
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </section>

// //                 {/* Features Section */}
// //                 <section
// //                     id="section-features"
// //                     className={`bg-white  transition-all duration-1000 ${isVisible['section-features'] ? '' : ''
// //                         }`}
// //                 >
// //                     <div className="max-w-6xl mx-auto px-6 py-10">
// //                         <div className="text-center mb-16">
// //                             <h3 className="text-5xl font-bold text-gray-900 mb-4">
// //                                 Our <span className="font-bold text-purple-600">Excellence</span>
// //                             </h3>
// //                             <div className="w-16 h-0.5 bg-purple-600 mx-auto"></div>
// //                         </div>

// //                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// //                             <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-[0_0_10px_rgba(0,0,0,0.15)] hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] hover:bg-gray-100 transition-all duration-300">
// //                                 <div className="flex items-start space-x-4">
// //                                     <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
// //                                         <div className="w-6 h-6 bg-purple-500 rounded-lg"></div>
// //                                     </div>
// //                                     <div>
// //                                         <h4 className="text-lg font-semibold text-gray-900 mb-2">World-Class Infrastructure</h4>
// //                                         <p className="text-gray-600 leading-relaxed">
// //                                             Modern facilities with top-flight faculty and excellent placement record
// //                                         </p>
// //                                     </div>
// //                                 </div>
// //                             </div>

// //                             <div className="bg-gray-900 rounded-2xl p-8 hover:bg-gray-800 shadow-[0_0_10px_rgba(0,0,0,0.15)] hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] transition-all duration-300">
// //                                 <div className="flex items-start space-x-4">
// //                                     <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
// //                                         <div className="w-6 h-6 bg-white rounded-lg"></div>
// //                                     </div>
// //                                     <div>
// //                                         <h4 className="text-lg font-semibold text-white mb-2">Innovative Teaching</h4>
// //                                         <p className="text-gray-300 leading-relaxed">
// //                                             Job-oriented educational systems suited for the corporate age
// //                                         </p>
// //                                     </div>
// //                                 </div>
// //                             </div>

// //                             <div className="bg-gray-900 rounded-2xl p-8 hover:bg-gray-800 shadow-[0_0_10px_rgba(0,0,0,0.15)] hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] transition-all duration-300">
// //                                 <div className="flex items-start space-x-4">
// //                                     <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
// //                                         <div className="w-6 h-6 bg-white rounded-lg"></div>
// //                                     </div>
// //                                     <div>
// //                                         <h4 className="text-lg font-semibold text-white mb-2">Student Development</h4>
// //                                         <p className="text-gray-300 leading-relaxed">
// //                                             Dedicated hostels with uninterrupted internet connectivity
// //                                         </p>
// //                                     </div>
// //                                 </div>
// //                             </div>

// //                             <div className="bg-gray-50 rounded-2xl p-8 border shadow-[0_0_10px_rgba(0,0,0,0.15)] hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] border-gray-100 hover:bg-gray-100 transition-all duration-300">
// //                                 <div className="flex items-start space-x-4">
// //                                     <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
// //                                         <div className="w-6 h-6 bg-orange-500 rounded-lg"></div>
// //                                     </div>
// //                                     <div>
// //                                         <h4 className="text-lg font-semibold text-gray-900 mb-2">Analytical Skills</h4>
// //                                         <p className="text-gray-600 leading-relaxed">
// //                                             Focus on developing analytical abilities for engineering excellence
// //                                         </p>
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </section>

// //                 {/* Mission Section */}
// //                 <section
// //                     id="section-2"
// //                     className={`py-24 transition-all duration-1000 ${isVisible['section-2'] ? '' : ''
// //                         }`}
// //                 >
// //                     <div className="max-w-6xl mx-auto px-6">
// //                         <div className="text-center mb-16">
// //                             <h3 className="text-5xl font-bold text-gray-900 mb-4">
// //                                 Our <span className="font-bold text-purple-600">Mission</span>
// //                             </h3>
// //                             <div className="w-16 h-0.5 bg-purple-600 mx-auto"></div>
// //                         </div>

// //                         <div className="bg-white rounded-3xl p-12 shadow-[0_0_10px_rgba(0,0,0,0.15)]  border border-gray-100 text-justify">
// //                             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// //                                 <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-[0_0_10px_rgba(0,0,0,0.15)] hover:shadow-[0_0_20px_rgba(0,0,0,0.15)]">
// //                                     <div className="flex items-start space-x-4">
// //                                         <div className="w-3 h-3 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
// //                                         <p className="text-gray-700 leading-relaxed">
// //                                             Since inception, we've served remote suburb students with international standards to meet global requirements, providing high-quality education with excellence.
// //                                         </p>
// //                                     </div>
// //                                 </div>

// //                                 <div className="bg-purple-50 rounded-2xl p-8 border border-purple-100 shadow-[0_0_10px_rgba(0,0,0,0.15)] hover:shadow-[0_0_20px_rgba(0,0,0,0.15)]">
// //                                     <div className="flex items-start space-x-4">
// //                                         <div className="w-3 h-3 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
// //                                         <p className="text-gray-700 leading-relaxed">
// //                                             Students participate in research, sports, cultural activities ensuring well-rounded graduates. TIET witnesses tremendous growth of rural students toward academic achievements.
// //                                         </p>
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </section>

// //                 <section id="section-values" className="mb-20">
// //                     <div className={`max-w-6xl mx-auto ${isVisible['section-values'] ? '' : ''}`}>
// //                         <div className="text-center mb-16">
// //                             <h3 className="text-5xl font-bold text-gray-900 mb-4">
// //                                 Our <span className="font-bold text-purple-600">Core Values</span>
// //                             </h3>
// //                             <div className="w-16 h-0.5 bg-purple-600 mx-auto"></div>
// //                         </div>
// //                         <div className="grid md:grid-cols-3 gap-6">
// //                             <div className="bg-white p-6 rounded-3xl shadow-[0_0_10px_rgba(0,0,0,0.15)] hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] text-center">
// //                                 <div className="flex justify-center space-x-4">
// //                                     <div className="w-3 h-3 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
// //                                     <h3 className="text-xl font-semibold text-gray-800 mb-2">Integrity</h3>
// //                                 </div>
// //                                 <p className="text-gray-600">We uphold the highest standards of ethics, transparency, and accountability in all our academic and administrative endeavors.</p>
// //                             </div>
// //                             <div className="bg-white p-6 rounded-3xl shadow-[0_0_10px_rgba(0,0,0,0.15)] hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] text-center">
// //                                 <div className="flex justify-center space-x-4">
// //                                     <div className="w-3 h-3 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
// //                                     <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovation</h3>
// //                                 </div>
// //                                 <p className="text-gray-600">We champion creativity, research, and forward-thinking to drive advancements in engineering and technology education.</p>
// //                             </div>
// //                             <div className="bg-white p-6 rounded-3xl shadow-[0_0_10px_rgba(0,0,0,0.15)] hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] text-center">
// //                                 <div className="flex justify-center space-x-4">
// //                                     <div className="w-3 h-3 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
// //                                     <h3 className="text-xl font-semibold text-gray-800 mb-2">Inclusivity</h3>
// //                                 </div>
// //                                 <p className="text-gray-600">We cultivate a diverse and inclusive environment, ensuring equal opportunities for all students to thrive and succeed.</p>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </section>


// //                 <section id="section-3" className="">
// //                     <div className={`max-w-6xl mx-auto ${isVisible['section-3'] ? '' : ''}`}>
// //                         <div className="text-center mb-16">
// //                             <h3 className="text-5xl font-bold text-gray-900 mb-4">
// //                                 Our <span className="font-bold text-purple-600">Achievements</span>
// //                             </h3>
// //                             <div className="w-16 h-0.5 bg-purple-600 mx-auto"></div>
// //                         </div>
// //                         <div className="bg-white p-8 rounded-3xl shadow-[0_0_10px_rgba(0,0,0,0.15)] space-y-6">
// //                             <div className="flex items-start space-x-4">
// //                                 <div className="w-3 h-3 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
// //                                 <p className="text-gray-700 leading-relaxed text-[16px]">
// //                                     Consistently ranked among the top engineering institutes by Anna University for academic excellence and research contributions.
// //                                 </p>
// //                             </div>
// //                             <div className="flex items-start space-x-4">
// //                                 <div className="w-3 h-3 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
// //                                 <p className="text-gray-700 leading-relaxed text-[16px]">
// //                                     Achieved a 95%+ placement rate, with graduates securing positions in leading multinational corporations like TCS, Infosys, and Wipro.
// //                                 </p>
// //                             </div>
// //                             <div className="flex items-start space-x-4">
// //                                 <div className="w-3 h-3 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
// //                                 <p className="text-gray-700 leading-relaxed text-[16px]">
// //                                     Received the 'Best Rural Engineering College' award in 2020 and 2023 from prestigious educational bodies.
// //                                 </p>
// //                             </div>
// //                             <div className="flex items-start space-x-4">
// //                                 <div className="w-3 h-3 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
// //                                 <p className="text-gray-700 leading-relaxed text-[16px]">
// //                                     Hosted over 50 national and international conferences, fostering knowledge exchange in emerging technologies.
// //                                 </p>
// //                             </div>
// //                             <div className="flex items-start space-x-4">
// //                                 <div className="w-3 h-3 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
// //                                 <p className="text-gray-700 leading-relaxed text-[16px]">
// //                                     Our students have secured top ranks in national-level technical symposiums, hackathons, and innovation challenges.
// //                                 </p>
// //                             </div>
// //                             <div className="flex items-start space-x-4">
// //                                 <div className="w-3 h-3 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
// //                                 <p className="text-gray-700 leading-relaxed text-[16px]">
// //                                     Developed a state-of-the-art research center, contributing to over 100 published papers in reputed journals.
// //                                 </p>
// //                             </div>
// //                         </div>

// //                     </div>
// //                 </section>

// //                 {/* Final Section */}
// //                 <section
// //                     id="section-4"
// //                     className={`max-w-6xl mx-auto px-6 py-24 transition-all duration-1000 ${isVisible['section-3'] ? '' : ''
// //                         }`}
// //                 >
// //                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
// //                         <div className="relative group">
// //                             <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-purple-50 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-all duration-500"></div>
// //                             <div className="relative">
// //                                 <div className="bg-white rounded-2xl p-4 shadow-[0_0_10px_rgba(0,0,0,0.15)] hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] border border-gray-100">
// //                                     <div className="w-full h-80 bg-gradient-to-br from-purple-50 to-gray-100 rounded-xl flex items-center justify-center text-gray-500 text-lg font-medium">
// //                                         <img
// //                                             src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
// //                                             alt="Tagore Institute Campus"
// //                                             className="w-full  object-cover"
// //                                         />
// //                                     </div>
// //                                 </div>
// //                                 <div className="absolute -bottom-4 -right-4 z-10">
// //                                     <div className="bg-purple-600 text-white px-6 py-3 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
// //                                         <p className="text-xl font-semibold">Tagore-IET</p>
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         </div>

// //                         <div className="space-y-8">
// //                             <div className="space-y-4">
// //                                 <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
// //                                     Pure <span className="font-bold text-purple-600">Light</span>
// //                                 </h2>
// //                                 <div className="w-16 h-0.5 bg-purple-600"></div>
// //                             </div>

// //                             <div className="bg-gray-900 rounded-2xl p-8 hover:bg-gray-800 transition-all duration-500 text-justify">
// //                                 <p className="text-xl text-gray-300 leading-relaxed">
// //                                     Thus <span className="text-purple-400 font-semibold">"Tagore IET"</span> stands for pure light, a universal symbol signifying the search for unblemished truth. By allusion, it represents enlightenment through knowledge and dedication to excellence.
// //                                 </p>
// //                             </div>

// //                             <div className="flex space-x-2">
// //                                 <div className="w-12 h-0.5 bg-purple-600 rounded-full"></div>
// //                                 <div className="w-8 h-0.5 bg-gray-400 rounded-full"></div>
// //                                 <div className="w-16 h-0.5 bg-gray-300 rounded-full"></div>
// //                             </div>

// //                             <div className="flex space-x-4">
// //                                 <button className="bg-purple-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-purple-700 transition-colors duration-300">
// //                                     Explore Programs →
// //                                 </button>
// //                                 <button className="text-gray-700 px-8 py-3 border border-gray-300 rounded-xl font-medium hover:bg-gray-50 transition-colors duration-300">
// //                                     Campus Tour
// //                                 </button>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </section>
// //                 <div className="h-24"></div>
// //             </div>
// //         </div>
// //     );
// // }


// export default function AboutUs() {

//     return (
//         <>
//         <div className="bg-[#620385] h-[20dvh] rounded-none curved-clip ">
//             <div className="flex items-center justify-center h-full">
//                 <div className="space-y-3">
//                     <h1 className="text-center text-white text-3xl font-semibold">About Us</h1>
//                     <p className="text-white text-xl">About us {">"} Profile</p>
//                 </div>
//             </div>
//         </div>

//         <div className="max-w-[90rem] mx-auto mt-10">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//                 <div className="flex items-center justify-center">
//                     <div>
//                         <p className="text-lg text-justify leading-8">Southern Educational and Rural Development Society was incepted in the year1986, with a pioneering zeal and a philanthropic commitment. Tagore Institute of Engineering and Technology is another feather in the cap of the Society was established in the year 2008, approved by AICTE, New Delhi and affiliated to Anna University, Chennai.. The main features of the college comprise world-class infrastructure, top-flight faculty, high pass percentage, excellent placement record and unique student projects. Tagore IET is a mega complex of ample space built-up area overlooking the busy Deviyakurichi-Attur stretch of the Salem-Chennai state highway. The Institution aims to impart Training to the students so that they become competent and motivated Engineers and Scientists. The Institute celebrates freedom of thought, cultivates vision and encourages growth, but also inculcates human values and ethics for the society.</p>
//                     </div>
//                 </div>
//                 <div className="flex items-center justify-center">
//                     <img src="/images/about-1.jpg" alt="" className="h-full w-full rounded-3xl" />

//                 </div>
//             </div>

           
//         </div>
//         <div className="max-w-full  mt-10 mx-10">
//             <div className="bg-gradient-to-l from-[#620385] to-[#a561ac] mt-10 p-10 rounded-3xl shadow-lg space-y-5">
//                 <div className="max-w-[95rem] mx-auto space-y-5 text-justify">
//                     <p className="text-lg text-white"><i class="fi fi-sr-hand-back-point-right mr-3"></i>Since its inception, Southern Educational and Rural Development Society have been serving the institute for the cause of providing high quality education to the remote suburb students with the international standards to meet and achieve the global requirements.</p>
//                     <p className="text-lg text-white bg-gray-100/30 p-5 rounded-3xl">From the period of establishment, Students are encouraged to participate in research activities, sports, cultural, social, co-curricular and extracurricular activates to ensure that they are well rounded graduates. TIET was witnessed for the tremendous growth of its rural based students towards the academic achievements. Hence the Institution caters the technical education, Faculty Development Programme, Development in Research, and entrepreneurship thus demonstrating their ability to shine across geographies and industries. It is believed that introspective and frank self assessment will help the institution to perceive its strength and weakness. The college should improve on its own and should undergo endogenous improvement in quality teaching and learning. Everyone in our campus has become highly quality conscious, definitely not to impress outside world but as a means to strengthen their own self-esteem.</p>
                
//                     <p className="text-lg text-white"><i class="fi fi-sr-hand-back-point-right mr-3"></i><span className="font-semibold">Tagore IET</span> has brought a Renaissance in Engineering and Technologies with its quality and effective mode of instructions, pedagogy and innovative teaching techniques that provide the students and best opportunities in their career growth. Pedagogy through regular campus interviews, Seminars, Conferences, Workshop, Industrial Tours etc.</p>
//                     <p className="text-lg text-white bg-gray-100/30 p-5 rounded-3xl">The two campus hostels are taken care of by dedicated staffs and masters. The campus has uninterrupted internet connectivity. Tagore Institute of Engineering and Technology creates opportunities for its students to develop their Analytical Skills, needed most for proper understanding of Engineering, thereby opening up new avenues for future developments. In the Modern and Enabling Infrastructure Environment at Tagore IET, Students experience a Job Oriented Educational Systems that suits the best to the mindsets of the Corporate Age. Tagore IET has developed as a reputed Engineering institution by its innovative teaching techniques that provide the students the finest opportunities in their career growth.</p>
//                 </div>
               
//             </div>
//         </div>

//         <div className="max-w-[90rem] mx-auto mt-10">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//                 <div className="flex items-center justify-center relative">
//                     <img src="/images/about-3.jpg" alt="" className="h-full w-full rounded-3xl " />
//                     <div className="absolute bottom-5 -right-10 z-10">
//                         <p className="bg-[#FF5400] text-4xl p-5 rounded-2xl text-white font-semibold">Tagore-IET</p>
//                     </div>
//                 </div>

//                 <div className="flex justify-center items-center">
//                     <p className="text-xl font-medium text-gray-700 text-justify leading-10">Thus <span className="text-[#620385]">"Tagore IET"</span>  stands for pure light, a universal symbol signifying the search for unblemished truth. By allusion, it stands for enlightenment through Mary Immaculate to whom the College is dedicated.</p>
//                 </div>
//             </div>

//         </div>
        
//         </>
//     )
// }

import React from 'react';
import { Building, BookOpen, Award, FlaskConical, Calendar, Users, Heart, Shield, Lightbulb } from 'lucide-react';

export default function AboutUs() {
  const stats = [
    { number: '1986', label: 'Established', icon: <Calendar className="w-6 h-6" /> },
    { number: '2008', label: 'College Founded', icon: <Building className="w-6 h-6" /> },
    { number: '95%', label: 'Placement Rate', icon: <Award className="w-6 h-6" /> },
    { number: '1000+', label: 'Alumni Network', icon: <Users className="w-6 h-6" /> },
  ];

  const managementTeam = [
    {
      name: 'Dr. Rajesh Kumar',
      position: 'Chairman',
      image: '/images/chairman.jpg',
      description: 'Leading educational excellence with 25+ years of experience',
    },
    {
      name: 'Prof. Meera Sharma',
      position: 'Secretary',
      image: '/images/secretary.jpg',
      description: 'Dedicated to advancing rural education and development',
    },
    {
      name: 'Mr. Arun Patel',
      position: 'Treasurer',
      image: '/images/treasurer.jpg',
      description: 'Expert in financial management and institutional growth',
    },
  ];

  const keyFeatures = [
    {
      icon: <Building className="w-8 h-8" />,
      title: 'World-Class Infrastructure',
      description: 'State-of-the-art facilities with modern laboratories and equipment',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Faculty',
      description: 'Highly qualified professors with industry and research experience',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'High Placement Rate',
      description: 'Excellent track record with top companies recruiting our graduates',
    },
    {
      icon: <FlaskConical className="w-8 h-8" />,
      title: 'Research Excellence',
      description: 'Cutting-edge research projects and innovation labs',
    },
  ];

  const historyTimeline = [
    { year: '1986', event: 'Southern Educational and Rural Development Society established', icon: <Calendar className="w-6 h-6" /> },
    { year: '2008', event: 'Tagore Institute of Engineering and Technology founded', icon: <Building className="w-6 h-6" /> },
    { year: '2010', event: 'Received AICTE approval and Anna University affiliation', icon: <Award className="w-6 h-6" /> },
    { year: '2015', event: 'Launched innovation and research labs', icon: <FlaskConical className="w-6 h-6" /> },
    { year: '2020', event: 'Achieved 95% placement rate milestone', icon: <Users className="w-6 h-6" /> },
  ];

  const coreValues = [
    { icon: <Heart className="w-6 h-6" />, title: 'Integrity', description: 'Upholding ethical standards in education and practice' },
    { icon: <Lightbulb className="w-6 h-6" />, title: 'Innovation', description: 'Fostering creativity and forward-thinking solutions' },
    { icon: <Shield className="w-6 h-6" />, title: 'Excellence', description: 'Striving for the highest quality in all endeavors' },
    { icon: <Users className="w-6 h-6" />, title: 'Community', description: 'Building a supportive and inclusive environment' },
  ];

  const campusLife = [
    {
      title: 'Vibrant Student Clubs',
      description: 'Engage in technical, cultural, and social activities through various student-led clubs.',
      image: '/images/campus-clubs.jpg',
    },
    {
      title: 'Sports & Fitness',
      description: 'State-of-the-art sports facilities and fitness programs to promote holistic development.',
      image: '/images/campus-sports.jpg',
    },
    {
      title: 'Cultural Events',
      description: 'Annual fests and cultural programs celebrating creativity and diversity.',
      image: '/images/campus-cultural.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#184CDB]  to-violet-600  overflow-hidden">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Tagore IET</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Shaping the Future of Engineering Education Since 2008
            </p>
            <div className="flex justify-center gap-3 text-gray-300 text-sm font-medium">
              <span>About</span>
              <span>→</span>
              <span>Our Journey</span>
            </div>
          </div>
          <div className="absolute top-20 right-20 w-40 h-40 bg-purple-500/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-pink-500/20 rounded-full animate-pulse delay-700"></div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-4 text-purple-600 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main About Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold">
                <BookOpen className="w-5 h-5 mr-2" /> Our Legacy
              </div>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                Building Tomorrow's <span className="text-purple-600">Innovators</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 2008 under the Southern Educational and Rural Development Society (est. 1986), Tagore Institute of Engineering and Technology is a beacon of excellence in engineering education. Our institution is dedicated to fostering innovation, leadership, and societal impact.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Approved by AICTE, New Delhi, and affiliated with Anna University, Chennai, we empower students with cutting-edge knowledge and practical skills to thrive in a dynamic world.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center text-purple-600">
                  <Award className="w-5 h-5 mr-2" />
                  AICTE Approved
                </div>
                <div className="flex items-center text-purple-600">
                  <Award className="w-5 h-5 mr-2" />
                  Anna University Affiliated
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src="/images/about-1.jpg" alt="Campus View" className="w-full h-96 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-purple-600 text-white p-6 rounded-xl shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our History Section */}
      <div className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our History</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A journey of growth, innovation, and impact since our inception
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-purple-200"></div>
            {historyTimeline.map((item, index) => (
              <div
                key={index}
                className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8 relative`}
              >
                <div className="w-1/2 text-right">
                  {index % 2 === 0 && (
                    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center justify-end gap-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">{item.year}</h3>
                          <p className="text-gray-600">{item.event}</p>
                        </div>
                        <div className="text-purple-600">{item.icon}</div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-2 border-white"></div>
                <div className="w-1/2 text-left">
                  {index % 2 !== 0 && (
                    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center gap-4">
                        <div className="text-purple-600">{item.icon}</div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">{item.year}</h3>
                          <p className="text-gray-600">{item.event}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Principal's Message Section */}
      <div className="py-20 bg-gradient-to-br from-gray-900 to-indigo-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Principal's Message</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-1">
                <div className="relative">
                  <div className="w-56 h-56 mx-auto rounded-full overflow-hidden border-4 border-purple-400 shadow-2xl">
                    <img src="/images/principal.jpg" alt="Principal" className="w-full h-full object-cover" />
                  </div>
                  <div className="text-center mt-6">
                    <h3 className="text-2xl font-bold text-white">Dr. Priya Krishnan</h3>
                    <p className="text-purple-300 font-medium">Principal</p>
                    <p className="text-gray-300 text-sm mt-2">Ph.D. in Computer Science, 20+ Years Experience</p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2 space-y-6">
                <div className="text-6xl text-purple-400 font-serif">"</div>
                <p className="text-lg text-gray-200 leading-relaxed -mt-8">
                  At Tagore IET, our mission is to cultivate not only skilled engineers but also visionary leaders who will shape the future of technology. Our commitment to academic excellence, innovation, and ethical values prepares our students to tackle global challenges with confidence and creativity.
                </p>
                <p className="text-lg text-gray-200 leading-relaxed">
                  We provide a nurturing environment that encourages critical thinking, collaboration, and innovation, ensuring our graduates are ready to make a lasting impact.
                </p>
                <div className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-full font-semibold">
                  Inspiring the Future
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Management Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership & Management</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the visionaries driving our institution toward excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {managementTeam.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
                  <div className="relative h-64 bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                      {member.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <div className="absolute top-4 right-4 bg-purple-600 text-white p-2 rounded-full">
                      <Award className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-purple-600 font-semibold mb-3">{member.position}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Campus Life Section */}
      <div className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Campus Life</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience a vibrant and enriching student life at Tagore IET
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {campusLife.map((item, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="relative h-64">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our mission and vision
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center">
                  <div className="flex justify-center mb-4 text-purple-600 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Tagore IET?</h2>
            <p className="text-xl text-gray-600">Discover what sets us apart in engineering education</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-center">
                  <div className="flex justify-center mb-4 text-purple-600 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-3xl p-8 text-white shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    <Award className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold">Our Mission</h3>
                </div>
                <p className="text-lg leading-relaxed text-gray-100">
                  To deliver world-class engineering education that integrates theoretical knowledge with practical application, fostering innovation, ethical values, and leadership to create professionals who drive societal progress.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-3xl p-8 text-white shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    <Lightbulb className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold">Our Vision</h3>
                </div>
                <p className="text-lg leading-relaxed text-gray-100">
                  To be a globally recognized leader in engineering education and research, producing innovative thinkers and leaders who advance technology and contribute to sustainable global development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="py-20 bg-gradient-to-r from-purple-800 via-indigo-800 to-blue-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Shape Your Future?</h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Join a legacy of excellence at Tagore IET. Experience unparalleled education, innovation, and opportunities to grow as a global leader.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-900 px-8 py-4 rounded-full font-semibold hover:bg-purple-100 hover:shadow-lg transition-all duration-300">
              Apply Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-900 hover:shadow-lg transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}