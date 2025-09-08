// import { ArrowRight, MapPin, Users, Award, BookOpen, Cpu, Code, Zap, Calendar, Mail, Phone, Globe } from "lucide-react";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import apiurl from "../../services/apiendpoint/apiendpoint";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// export default function Department({ departmentData }) {
//   const [activeTab, setActiveTab] = useState('overview');

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <div className="relative  bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
//         <div className="absolute inset-0 bg-black/20"></div>
//         <div
//           className="absolute inset-0 opacity-40"
//           style={{
//             backgroundImage: `url(${apiurl()}/${departmentData.heroImage})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center'
//           }}
//         ></div>
//         <div className="relative max-w-screen-2xl mx-auto px-6 py-20">
//           <div className="max-w-4xl">
//             <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
//               <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
//               <span className="text-sm font-medium uppercase tracking-wide">Department of</span>
//             </div>

//             <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
//               {departmentData.name}
//             </h1>

//             <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-3xl">
//               {departmentData.description}
//             </p>

//             <div className="flex flex-wrap gap-6 mb-12">
//               <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
//                 <span className="text-sm text-gray-300">Established</span>
//                 <div className="text-lg font-semibold">{departmentData.established}</div>
//               </div>
//               <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
//                 <span className="text-sm text-gray-300">Students</span>
//                 <div className="text-lg font-semibold">{departmentData?.stats?.students}</div>
//               </div>
//               <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
//                 <span className="text-sm text-gray-300">Faculty</span>
//                 <div className="text-lg font-semibold">{departmentData?.stats?.faculty}</div>
//               </div>
//               <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
//                 <span className="text-sm text-gray-300">Labs</span>
//                 <div className="text-lg font-semibold">{departmentData?.stats?.labs}</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Navigation Tabs */}
//       <div className="sticky top-16 lg:top-28 bg-white shadow-sm z-40 border-b">
//         <div className="max-w-screen-2xl mx-auto px-2 md:px-4 lg:px-6">
//           <div className="flex overflow-x-auto">
//             {[
//               { id: 'overview', label: 'Overview' },
//               ...(departmentData?.labandfacility?.length > 0 ? [{ id: 'labs', label: 'Lab & Facilities' }] : []),
//               ...(departmentData?.faculty?.length > 0 ? [{ id: 'faculty', label: 'Faculty' }] : []),
//               ...(departmentData?.programs?.length > 0 ? [{ id: 'programs', label: 'Programs' }] : []),
//               ...(departmentData?.researchGroups?.length > 0 ? [{ id: 'researchgroups', label: 'Research Groups' }] : []),
//               ...(departmentData?.researchActivities?.length > 0 ? [{ id: 'researchactivities', label: 'Research Activities' }] : []),
//               ...(departmentData?.achievements?.length > 0 ? [{ id: 'achievements', label: 'Achievements' }] : []),
//               ...(departmentData?.psos?.length > 0 ? [{ id: 'psos', label: 'PSOs' }] : []),
//               ...(departmentData?.gallery?.length > 0 ? [{ id: 'gallery', label: 'Gallery' }] : []),
//               ...(departmentData?.contactInfo?.length > 0 ? [{ id: 'contact', label: 'Contact' }] : [])
//             ]?.map((tab) => (
//               <button
//                 key={tab?.id}
//                 onClick={() => setActiveTab(tab?.id)}
//                 className={`px-3 md:px-6 py-2 md:py-4 font-semibold transition-colors whitespace-nowrap ${activeTab === tab?.id
//                   ? 'text-purple-600 border-b-2 border-purple-600'
//                   : 'text-gray-600 hover:text-purple-600'
//                   }`}
//               >
//                 {tab.label}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Content Sections */}
//       <div className="max-w-screen-2xl mx-auto px-6 py-16">
//         {activeTab === 'overview' && (
//           <div className="space-y-20">
//             <div className="grid lg:grid-cols-2 gap-16">
//               {departmentData?.vision && <div className="space-y-6">
//                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
//                   <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
//                   <span className="text-sm font-medium text-blue-700 uppercase tracking-wide">Our Vision</span>
//                 </div>
//                 <h3 className="text-3xl font-bold text-gray-900">Envisioning the Future</h3>
//                 <p className="text-lg text-gray-600 leading-relaxed">{departmentData?.vision}</p>
//               </div>}
//               {departmentData?.mission && <div className="space-y-6">
//                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full">
//                   <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
//                   <span className="text-sm font-medium text-purple-700 uppercase tracking-wide">Our Mission</span>
//                 </div>
//                 <h3 className="text-3xl font-bold text-gray-900">Driving Excellence</h3>
//                 <p className="text-lg text-gray-600 leading-relaxed">{departmentData?.mission}</p>
//               </div>}
//             </div>

//             {/* Features Grid */}
//             {departmentData?.features && <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {departmentData?.features?.map((feature, index) => (
//                 <div key={index} className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-gray-100 rounded-xl p-6 hover:from-blue-50 hover:to-indigo-100 transition-all duration-500 group cursor-pointer border border-transparent hover:border-blue-200">
//                   <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-700"></div>
//                   <div className="relative z-10">
//                     <h4 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-blue-700 transition-colors duration-300">
//                       {feature?.title}
//                     </h4>
//                     <p className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
//                       {feature?.description}
//                     </p>
//                     <div className="mt-4 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                   </div>
//                 </div>
//               ))}
//             </div>}
//           </div>
//         )}

//         {/* Labs Tab */}
//         {activeTab === 'labs' && (
//           <div className="space-y-12">
//             <div className="text-center max-w-3xl mx-auto">
//               <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full mb-6">
//                 <div className="w-2 h-2 bg-green-500 rounded-full"></div>
//                 <span className="text-sm font-medium text-green-700 uppercase tracking-wide">Our Laboratories</span>
//               </div>
//               <h2 className="text-4xl font-bold text-gray-900 mb-4">State-of-the-Art Facilities</h2>
//               <p className="text-lg text-gray-600">Modern laboratories equipped with cutting-edge technology to provide hands-on learning experiences</p>
//             </div>

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {departmentData?.labandfacility?.map((lab, index) => (
//                 <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
//                   <div className="relative overflow-hidden">
//                     <img
//                       src={`${apiurl()}/${lab?.image}`}
//                       alt={lab?.name}
//                       className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                   </div>
//                   <div className="p-6">
//                     <h4 className="text-xl font-bold text-gray-900 mb-3">{lab?.name}</h4>
//                     <div className="space-y-2 text-sm text-gray-600">
//                       <div className="flex items-center gap-2">
//                         <Cpu className="w-4 h-4 text-purple-600" />
//                         <span>{lab?.equipment}</span>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <Users className="w-4 h-4 text-purple-600" />
//                         <span>Capacity: {lab?.capacity}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Faculty Tab */}
//         {activeTab === 'faculty' && (
//           <div className="space-y-12">
//             <div className="text-center max-w-3xl mx-auto">
//               <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full mb-6">
//                 <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
//                 <span className="text-sm font-medium text-orange-700 uppercase tracking-wide">Our Faculty</span>
//               </div>
//               <h2 className="text-4xl font-bold text-gray-900 mb-4">Expert Educators & Researchers</h2>
//               <p className="text-lg text-gray-600">Distinguished faculty members committed to academic excellence and innovative research</p>
//             </div>

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {departmentData?.faculty?.map((member, index) => (
//                 <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
//                   <div className="relative">
//                     <img
//                       src={`${apiurl()}/${member?.image}`}
//                       alt={member?.name}
//                       className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                   </div>
//                   <div className="p-6 space-y-4">
//                     <div>
//                       <h4 className="text-xl font-bold text-gray-900">{member?.name}</h4>
//                       <p className="text-purple-600 font-semibold">{member?.designation}</p>
//                     </div>
//                     <div className="space-y-2 text-sm text-gray-600">
//                       <div className="flex items-center gap-2">
//                         <BookOpen className="w-4 h-4 text-purple-600" />
//                         <span>{member?.specialization}</span>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <Calendar className="w-4 h-4 text-purple-600" />
//                         <span>Experience: {member?.experience}</span>
//                       </div>
//                     </div>
//                     <div className="flex gap-3 pt-4 border-t border-gray-100">
//                       <Link to={`mailto:${member?.email}`} className="p-2 bg-gray-100 rounded-lg text-gray-600 hover:bg-purple-100 hover:text-purple-600 transition-colors">
//                         <Mail className="w-4 h-4" />
//                       </Link>
//                       <Link to={`tel:${member?.phone}`} className="p-2 bg-gray-100 rounded-lg text-gray-600 hover:bg-purple-100 hover:text-purple-600 transition-colors">
//                         <Phone className="w-4 h-4" />
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Programs Tab */}
//         {activeTab === 'programs' && (
//           <div className="space-y-12">
//             <div className="text-center max-w-3xl mx-auto">
//               <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
//                 <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
//                 <span className="text-sm font-medium text-blue-700 uppercase tracking-wide">Academic Programs</span>
//               </div>
//               <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Curriculum</h2>
//               <p className="text-lg text-gray-600">Diverse programs designed to meet industry demands and foster innovation</p>
//             </div>

//             <div className="grid lg:grid-cols-2 gap-8">
//               {departmentData?.programs?.map((program, index) => (
//                 <div key={index} className="p-8 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl border border-purple-100">
//                   <div className="flex items-center gap-3 mb-4">
//                     <div className="px-3 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full uppercase tracking-wide">
//                       {program?.level}
//                     </div>
//                     <span className="text-sm text-gray-500">{program?.duration}</span>
//                   </div>

//                   <h3 className="text-2xl font-bold text-gray-900 mb-4">{program?.degree}</h3>
//                   <p className="text-gray-600 mb-6 leading-relaxed">{program?.description}</p>

//                   <div className="space-y-3">
//                     <h4 className="font-semibold text-gray-900">Key Highlights:</h4>
//                     <div className="grid grid-cols-2 gap-2">
//                       {program?.highlights?.map((highlight, idx) => (
//                         <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
//                           <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
//                           {highlight}
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                   <button className="mt-6 group inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-colors">
//                     Learn More
//                     <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Gallery Tab */}
//         {activeTab === 'gallery' && (
//           <div className="space-y-16">
//             <div className="text-center max-w-3xl mx-auto">
//               <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-full mb-6">
//                 <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
//                 <span className="text-sm font-medium text-teal-700 uppercase tracking-wide">Department Gallery</span>
//               </div>
//               <h2 className="text-4xl font-bold text-gray-900 mb-4">Memorable Moments</h2>
//               <p className="text-lg text-gray-600">Capturing the essence of our Department events and gatherings</p>
//             </div>

//             <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-3xl p-12">
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {departmentData?.gallery?.map((item, index) => (
//                   <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
//                     <Swiper
//                       modules={[Navigation, Pagination, Autoplay]}
//                       // navigation
//                       // pagination={{ clickable: true }}
//                       spaceBetween={20}
//                       speed={1000}
//                       autoplay={{ delay: 900, disableOnInteraction: false, }}
//                       slidesPerView={1}
//                       className="rounded-2xl"
//                     >
//                       {item?.images?.map((dt, index) => (
//                         <SwiperSlide key={index} className='select-none' >
//                           <img
//                             src={`${apiurl()}/${dt}`}
//                             alt={item.title}
//                             className="w-full h-64 object-cover rounded-2xl shadow-md"
//                           />
//                         </SwiperSlide>
//                       ))}
//                     </Swiper>
//                     <div className="p-6">
//                       <h4 className="text-lg font-semibold text-gray-900 mb-2">{item?.title}</h4>
//                       <p className="text-gray-600 text-sm">{item?.description}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Contact Section */}
//       <div className="bg-gradient-to-r from-purple-900 to-blue-900 text-white py-16">
//         <div className="max-w-screen-2xl mx-auto px-6 text-center">
//           <h2 className="text-3xl font-bold mb-4">Ready to Join Us?</h2>
//           <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
//             Take the first step towards an exciting career in technology. Explore our programs and connect with our admission team.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-purple-900 rounded-full font-semibold hover:bg-gray-100 transition-colors">
//               Apply Now
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
//             </button>
//             <button className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all">
//               Contact Admissions
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import { ArrowRight, MapPin, Users, Award, BookOpen, Cpu, Code, Zap, Calendar, Mail, Phone, Globe } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import apiurl from "../../services/apiendpoint/apiendpoint";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Department({ departmentData }) {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url(${apiurl()}/${departmentData.heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="relative max-w-screen-2xl mx-auto px-6 py-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span className="text-sm font-medium uppercase tracking-wide">Department of</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              {departmentData.name}
            </h1>

            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-3xl">
              {departmentData.description}
            </p>

            <div className="flex flex-wrap gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="text-sm text-gray-300">Established</span>
                <div className="text-lg font-semibold">{departmentData.established}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="text-sm text-gray-300">Students</span>
                <div className="text-lg font-semibold">{departmentData?.stats?.students}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="text-sm text-gray-300">Faculty</span>
                <div className="text-lg font-semibold">{departmentData?.stats?.faculty}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="text-sm text-gray-300">Labs</span>
                <div className="text-lg font-semibold">{departmentData?.stats?.labs}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-16 md:top-19 lg:top-34 bg-white shadow-sm z-40 border-b">
        <div className="max-w-screen-2xl mx-auto px-2 md:px-4 lg:px-6">
          <div className="flex overflow-x-auto">
            {[
              { id: 'overview', label: 'Overview' },
              ...(departmentData?.labandfacility?.length > 0 ? [{ id: 'labs', label: 'Lab & Facilities' }] : []),
              ...(departmentData?.faculty?.length > 0 ? [{ id: 'faculty', label: 'Faculty' }] : []),
              ...(departmentData?.programs?.length > 0 ? [{ id: 'programs', label: 'Programs' }] : []),
              ...(departmentData?.researchGroups?.length > 0 ? [{ id: 'researchgroups', label: 'Research Groups' }] : []),
              ...(departmentData?.researchActivities?.length > 0 ? [{ id: 'researchactivities', label: 'Research Activities' }] : []),
              ...(departmentData?.achievements?.length > 0 ? [{ id: 'achievements', label: 'Achievements' }] : []),
              ...(departmentData?.psos?.length > 0 ? [{ id: 'psos', label: 'PSOs' }] : []),
              ...(departmentData?.gallery?.length > 0 ? [{ id: 'gallery', label: 'Gallery' }] : []),
              ...(departmentData?.contactInfo?.length > 0 ? [{ id: 'contact', label: 'Contact' }] : [])
            ]?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`px-3 md:px-6 py-2 md:py-4 font-semibold transition-colors whitespace-nowrap ${activeTab === tab?.id
                  ? 'text-purple-600 border-b-2 border-purple-600'
                  : 'text-gray-600 hover:text-purple-600'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-screen-2xl mx-auto px-6 py-16">
        {activeTab === 'overview' && (
          <div className="space-y-20">
            <div className="grid lg:grid-cols-2 gap-16">
              {departmentData?.vision && <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium text-blue-700 uppercase tracking-wide">Our Vision</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Envisioning the Future</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{departmentData?.vision}</p>
              </div>}
              {departmentData?.mission && <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm font-medium text-purple-700 uppercase tracking-wide">Our Mission</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Driving Excellence</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{departmentData?.mission}</p>
              </div>}
            </div>

            {/* Features Grid */}
            {departmentData?.features && <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {departmentData?.features?.map((feature, index) => (
                <div key={index} className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-gray-100 rounded-xl p-6 hover:from-blue-50 hover:to-indigo-100 transition-all duration-500 group cursor-pointer border border-transparent hover:border-blue-200">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="relative z-10">
                    <h4 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                      {feature?.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                      {feature?.description}
                    </p>
                    <div className="mt-4 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              ))}
            </div>}
          </div>
        )}

        {/* Labs Tab */}
        {activeTab === 'labs' && (
          <div className="space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-green-700 uppercase tracking-wide">Our Laboratories</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">State-of-the-Art Facilities</h2>
              <p className="text-lg text-gray-600">Modern laboratories equipped with cutting-edge technology to provide hands-on learning experiences</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {departmentData?.labandfacility?.map((lab, index) => (
                <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={`${apiurl()}/${lab?.image}`}
                      alt={lab?.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{lab?.name}</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-purple-600" />
                        <span>{lab?.equipment}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-purple-600" />
                        <span>Capacity: {lab?.capacity}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Faculty Tab */}
      {activeTab === 'faculty' && (
  <div className="space-y-12">
    <div className="text-center max-w-3xl mx-auto">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-50 to-blue-50 rounded-full mb-6 border border-purple-100">
        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
        <span className="text-sm font-medium bg-purple-700 bg-clip-text text-transparent uppercase tracking-wide">Our Faculty</span>
      </div>
        
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Expert Educators & Researchers</h2>
      <p className="text-lg text-gray-600">Distinguished faculty members committed to academic excellence and innovative research</p>
    </div>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {departmentData?.faculty?.map((member, index) => (
        <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl hover:border-purple-200">
          
          {/* Circular Image Container */}
          <div className="relative flex justify-center pt-8 pb-4">
            <div className="relative">
              {/* Decorative rings */}
            
              {/* Main circular image */}
              <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  src={`${apiurl()}/${member?.image}`}
                  alt={member?.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Status indicator */}
              {/* <div className="absolute bottom-1 right-1 w-6 h-6 bg-blue-500 rounded-full border-2 border-white shadow-sm"></div> */}
            </div>
          </div>
          
          {/* Content */}
          <div className="px-6 pb-6 space-y-4 text-center">
            <div className="space-y-2">
              <h4 className="text-xl font-bold text-gray-900">{member?.name}</h4>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 font-semibold text-sm uppercase tracking-wide">{member?.designation}</p>
            </div>
            
            {/* <div className="space-y-3 text-sm">
              <div className="flex items-center justify-center gap-2 p-3 bg-purple-50 rounded-xl">
                <BookOpen className="w-4 h-4 text-purple-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{member?.specialization}</span>
              </div>
              
              <div className="flex items-center justify-center gap-2 p-3 bg-blue-50 rounded-xl">
                <Calendar className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Experience: {member?.experience}</span>
              </div>
            </div> */}
            
            {/* Contact Section */}
            <div className="pt-4 border-t border-gray-100">
              <div className="flex justify-center">
                <div className="relative group/email">
                  <Link 
                    to={`mailto:${member?.email}`} 
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:from-purple-700 hover:to-blue-700 shadow-lg"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="text-sm font-medium">Contact</span>
                  </Link>
                  
                  {/* Email Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover/email:opacity-100 pointer-events-none whitespace-nowrap z-20 shadow-xl">
                    {member?.email}
                    {/* Centered arrow */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)}

        {/* Programs Tab */}
        {activeTab === 'programs' && (
          <div className="space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-medium text-blue-700 uppercase tracking-wide">Academic Programs</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Curriculum</h2>
              <p className="text-lg text-gray-600">Diverse programs designed to meet industry demands and foster innovation</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {departmentData?.programs?.map((program, index) => (
                <div key={index} className="p-8 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl border border-purple-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="px-3 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full uppercase tracking-wide">
                      {program?.level}
                    </div>
                    <span className="text-sm text-gray-500">{program?.duration}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{program?.degree}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{program?.description}</p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Key Highlights:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {program?.highlights?.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                  <button className="mt-6 group inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PSOs Tab */}
       {activeTab === 'psos' && (
  <div className="space-y-12 py-12">
    <div className="text-center max-w-3xl mx-auto">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-medium text-blue-700 uppercase tracking-wide">Programmic Specific Outcomes</span>
              </div>
      <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-indigo-700 mb-6">
        Program Specific Outcomes
      </h2>
      <p className="text-xl text-gray-700 leading-relaxed">
        Our program outcomes are designed to <span className="font-semibold text-indigo-600">empower students</span> with the skills and knowledge to excel in  
        addressing real-world challenges.
      </p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {departmentData?.psos?.map((pso, index) => (
        <div 
          key={index} 
          className="group relative bg-white rounded-3xl overflow-hidden shadow-lg border border-indigo-100 hover:shadow-2xl hover:scale-105 transition-all duration-500"
          style={{
            animationDelay: `${index * 100}ms`
          }}
        >
          {/* Gradient border effect */}
          <div className="absolute inset-0  rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute inset-[2px] bg-white rounded-3xl"></div>
          
          <div className="relative p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <span className="text-white font-bold text-sm">PSO {index + 1}</span>
                </div>
                {/* Animated ring */}
                <div className="absolute inset-0 rounded-2xl border-2 border-indigo-300 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></div>
              </div>
              {/* Progress line */}
              <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
              {pso?.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
)}

        {/* Gallery Tab */}
        {activeTab === 'gallery' && (
          <div className="space-y-16">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-full mb-6">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <span className="text-sm font-medium text-teal-700 uppercase tracking-wide">Department Gallery</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Memorable Moments</h2>
              <p className="text-lg text-gray-600">Capturing the essence of our Department events and gatherings</p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-3xl p-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {departmentData?.gallery?.map((item, index) => (
                  <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <Swiper
                      modules={[Navigation, Pagination, Autoplay]}
                      spaceBetween={20}
                      speed={1000}
                      autoplay={{ delay: 900, disableOnInteraction: false }}
                      slidesPerView={1}
                      className="rounded-2xl"
                    >
                      {item?.images?.map((dt, index) => (
                        <SwiperSlide key={index} className='select-none'>
                          <img
                            src={`${apiurl()}/${dt}`}
                            alt={item.title}
                            className="w-full h-64 object-cover rounded-2xl shadow-md"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <div className="p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{item?.title}</h4>
                      <p className="text-gray-600 text-sm">{item?.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Contact Tab */}
        {activeTab === 'contact' && (
          <div className="space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm font-medium text-purple-700 uppercase tracking-wide">Contact Information</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-lg text-gray-600">Reach out to our department for inquiries, collaborations, or additional information.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {departmentData?.contactInfo?.map((contact, index) => (
                <div key={index} className="p-8 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl border border-purple-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Details</h3>
                  <div className="space-y-4 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Mail className="w-5 h-5 text-purple-600" />
                      <a href={`mailto:${contact.email}`} className="hover:text-purple-600">{contact.email}</a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-purple-600" />
                      <a href={`tel:${contact.phone}`} className="hover:text-purple-600">{contact.phone}</a>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="w-5 h-5 text-purple-600 mt-1" />
                      <p className="whitespace-pre-line">{contact.address}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Contact Section */}
      {/* <div className="bg-gradient-to-r from-purple-900 to-blue-900 text-white py-16">
        <div className="max-w-screen-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Us?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Take the first step towards an exciting career in technology. Explore our programs and connect with our admission team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-purple-900 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Apply Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all">
              Contact Admissions
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
}