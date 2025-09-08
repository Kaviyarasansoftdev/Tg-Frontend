// import React, { useState } from 'react';
//     import ReactDOM from 'react-dom';
//     import { BookOpen, Clock, Users, Database, Search, FileText, Headphones, Printer, Globe, ChevronDown, Image } from 'lucide-react';

//     export function LibrarySection() {
//       const [activeAccordion, setActiveAccordion] = useState(0);

//       const libraryFeatures = [
//         {
//           icon: BookOpen,
//           title: 'About Library',
//           description: `The Library of Tagore Institute of Engineering and Technology has set its vision to satisfy the user community. The Central Library is situated in the ground floor of the Main Block with a floor area of about 4000 sq. mts. The 3 main sections of the Library include: The stock room with reference section, The reading hall with periodicals section, and The circulation/reprography/administration section. The unique feature of our library is the compulsory library hour, which is included in the students timetable (one hour per week for each class).`,
//           color: 'from-blue-500 to-indigo-500'
//         },
//         {
//           icon: Users,
//           title: 'Reading Hall',
//           description: `The reading hall has been provided in the library to create a conducive atmosphere to read. The reading hall consists of comfortable tables and chairs with seating capacity of 100 persons. Students and faculty members are permitted to bring books, stocks & journals from periodicals section and to use the reading hall for doing reference work.`,
//           color: 'from-green-500 to-emerald-500'
//         },
//         {
//           icon: Database,
//           title: 'Stock Room',
//           description: `The stock room is equipped with multidecked open adjustable modern book stock for housing the books for reference and lending. All the books are classified according to Dewey's Decimal Classification. Bay guides are available to access the books easily and all books are arranged properly with bar coding facility. Open access system is followed to make the process of locating books very easy to the users. The library is fully automated and OPAC facility is provided.`,
//           color: 'from-purple-500 to-pink-500'
//         },
//         {
//           icon: Search,
//           title: 'Reference Section',
//           description: `The library consists of about 2250 reference books on all seven Engineering branches and also Science, Humanities, English, General, Dictionaries and Encyclopaedia. The library also has a collection of rare books from inland and overseas.`,
//           color: 'from-orange-500 to-red-500'
//         },
//         {
//           icon: FileText,
//           title: 'Competitive Guides',
//           description: `A number of guides are available in both reference and issues section for preparation of competitive exams like GATE, UPSC, TNPSC EXAMS, TOFEL, GRE, GMAT and other similar exams.`,
//           color: 'from-teal-500 to-cyan-500'
//         },
//         {
//           icon: Headphones,
//           title: 'Audio Visual Aids & Reprography',
//           description: `Audiovisual section of the Institute Central Library consists of 50 audiocassettes, 1650 CD ROM DISKETTES, 100 Floppies. These help students to improve their communications skills and to prepare for the competitive exams like TOFEL, GRE etc.`,
//           color: 'from-yellow-500 to-orange-500'
//         },
//         {
//           icon: Printer,
//           title: 'Other Facilities',
//           description: `Current awareness services, Reprographic Services, Effective reservation services, Paper clipping services, Conducting book exhibition, Job opportunities display.`,
//           color: 'from-rose-500 to-pink-500'
//         },
//         {
//           icon: Globe,
//           title: 'Internet & Digital Resources',
//           description: `Our library is having a high-speed Internet facility and it is provided to students and faculty freely. The net is connected by Radio Link dish net service. TIET is subscribed to DELNET DATABASES (35,990 full text Journals and 9,22,042 articles available on this database). The TIET Central Library provides a repository named TIET Digital Library to preserve and provide free online (open access) to the work produced at TIET.`,
//           color: 'from-indigo-500 to-blue-500'
//         }
//       ];

//       const images = [
//         {
//           src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&crop=center',
//           alt: 'Library Reading Hall',
//           caption: 'Reading Hall',
//         },
//         {
//           src: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop&crop=center',
//           alt: 'Book Collection',
//           caption: 'Book Collection',
//         },
//         {
//           src: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=300&h=200&fit=crop&crop=center',
//           alt: 'Digital Resources',
//           caption: 'Digital Resources',
//         },
//         {
//           src: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=300&h=200&fit=crop&crop=center',
//           alt: 'Study Area',
//           caption: 'Study Areas',
//         },
//       ];

//       const toggleAccordion = (index) => {
//         setActiveAccordion(activeAccordion === index ? -1 : index);
//       };

//       return (
//         <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
//           {/* Background Pattern */}
//           <div className="absolute inset-0 opacity-5">
//             <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
//             <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
//           </div>

//           {/* Hero Section */}
//           <div className="text-center space-y-6 mb-12 py-16">
//             <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
//               <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
//               <span className="text-sm font-medium text-blue-700 uppercase tracking-wide">
//                 Library & Info Services
//               </span>
//             </div>
//             <p className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
//               Access knowledge at
//               <span className="block text-blue-600">Tagore Institute Library with comprehensive resources</span>
//             </p>
//           </div>

//           {/* Main Content and Accordion Grid */}
//           <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
//             <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
//               {/* Left - Main Content */}
//               <div className="space-y-8">
//                 <div className="space-y-6">
//                   <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
//                     Tagore Institute
//                     <span className="block text-blue-600">Library Experience</span>
//                   </h2>
//                   <div className="space-y-4">
//                     <p className="text-lg text-gray-600 leading-relaxed">
//                       The Library of Tagore Institute of Engineering and Technology has set its vision to satisfy the user community. The Central Library is situated in the ground floor of the Main Block with a floor area of about 4000 sq. mts.
//                     </p>
//                     <p className="text-lg text-gray-600 leading-relaxed">
//                       The library has 3 main sections: The stock room with reference section, The reading hall with periodicals section, and The circulation/reprography/administration section. The unique feature is the compulsory library hour included in students' timetable.
//                     </p>
//                   </div>
//                 </div>

//                 {/* Working Hours & Contact Info */}
//                 <div className="grid lg:grid-cols-1 gap-6">
//                   <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6">
//                     <div className="flex items-center gap-3 mb-4">
//                       <Clock className="w-6 h-6 text-blue-600" />
//                       <h4 className="text-lg font-semibold text-gray-900">Working Hours</h4>
//                     </div>
//                     <div className="space-y-2 text-gray-700">
//                       <div className="flex justify-between">
//                         <span>Working Days:</span>
//                         <span className="font-medium">8:30 AM - 6:00 PM</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span>Sundays:</span>
//                         <span className="font-medium">8:30 AM - 1:30 PM</span>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6">
//                     <div className="flex items-center gap-3 mb-4">
//                       <Users className="w-6 h-6 text-purple-600" />
//                       <h4 className="text-lg font-semibold text-gray-900">Librarian</h4>
//                     </div>
//                     <div className="text-gray-700">
//                       <div className="font-semibold">P. PERIANNAN</div>
//                       <div className="text-sm">M.A, M.ED, M.L.S</div>
//                       <div className="text-sm">Mobile: +91 9751812505</div>
//                       <div className="text-sm">Email: periannan44194@gmail.com</div>
//                     </div>
//                   </div>

//                   <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6">
//                     <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h4>
//                     <div className="grid grid-cols-2 gap-3">
//                       <div className="text-center">
//                         <div className="text-xl font-bold text-blue-600">23,202</div>
//                         <div className="text-xs text-gray-600">Books</div>
//                       </div>
//                       <div className="text-center">
//                         <div className="text-xl font-bold text-green-600">110</div>
//                         <div className="text-xs text-gray-600">Journals</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Right - Library Features Accordion */}
//               <div className="space-y-4">
//                 <div className="text-center mb-8">
//                   <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//                     Library Features & Services
//                   </h3>
//                   <p className="text-lg text-gray-600">
//                     Discover the comprehensive range of library facilities designed to support your academic and research needs.
//                   </p>
//                 </div>
//                 {libraryFeatures.map((feature, index) => (
//                   <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden">
//                     <button
//                       onClick={() => toggleAccordion(index)}
//                       className="w-full p-6 text-left flex items-center justify-between hover:bg-white/50 transition-all duration-300"
//                     >
//                       <div className="flex items-center gap-4">
//                         <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center shadow-lg`}>
//                           <feature.icon className="w-6 h-6 text-white" />
//                         </div>
//                         <div>
//                           <h4 className="text-xl font-bold text-gray-900">{feature.title}</h4>
//                         </div>
//                       </div>
//                       <div className={`transform transition-transform duration-300 ${activeAccordion === index ? 'rotate-180' : ''}`}>
//                         <ChevronDown className="w-6 h-6 text-gray-500" />
//                       </div>
//                     </button>
//                     <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
//                       activeAccordion === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
//                     }`}>
//                       <div className="px-6 pb-6">
//                         <div className="pl-16">
//                           <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Image Gallery Section */}
//             <div className="bg-blue-50 py-16">
//               <div className="max-w-7xl mx-auto px-4">
//                 <div className="flex items-center justify-center mb-8">
//                   <Image className="w-8 h-8 text-blue-600 mr-3" />
//                   <h2 className="text-3xl font-bold text-gray-900">Library Gallery</h2>
//                 </div>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//                   {images.map((image, index) => (
//                     <div 
//                       key={index}
//                       className="relative group rounded-lg overflow-hidden shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
//                     >
//                       <img 
//                         src={image.src}
//                         alt={image.alt}
//                         className="w-full h-48 object-cover"
//                       />
//                       <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
//                         <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                           {image.caption}
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       );
//     }

import React, { useState } from 'react';
import { BookOpen, Clock, Users, Database, Search, FileText, Headphones, Printer, Globe, ChevronDown, Image, X, Download } from 'lucide-react';

export function LibrarySection() {
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const libraryFeatures = [
    {
      icon: BookOpen,
      title: 'About Library',
      description: `The Library of Tagore Institute of Engineering and Technology has set its vision to satisfy the user community. The Central Library is situated in the ground floor of the Main Block with a floor area of about 4000 sq. mts. The 3 main sections of the Library include: The stock room with reference section, The reading hall with periodicals section, and The circulation/reprography/administration section. The unique feature of our library is the compulsory library hour, which is included in the students timetable (one hour per week for each class).`,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Users,
      title: 'Reading Hall',
      description: `The reading hall has been provided in the library to create a conducive atmosphere to read. The reading hall consists of comfortable tables and chairs with seating capacity of 100 persons. Students and faculty members are permitted to bring books, stocks & journals from periodicals section and to use the reading hall for doing reference work.`,
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Database,
      title: 'Stock Room',
      description: `The stock room is equipped with multidecked open adjustable modern book stock for housing the books for reference and lending. All the books are classified according to Dewey's Decimal Classification. Bay guides are available to access the books easily and all books are arranged properly with bar coding facility. Open access system is followed to make the process of locating books very easy to the users. The library is fully automated and OPAC facility is provided.`,
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Search,
      title: 'Reference Section',
      description: `The library consists of about 2250 reference books on all seven Engineering branches and also Science, Humanities, English, General, Dictionaries and Encyclopaedia. The library also has a collection of rare books from inland and overseas.`,
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: FileText,
      title: 'Competitive Guides',
      description: `A number of guides are available in both reference and issues section for preparation of competitive exams like GATE, UPSC, TNPSC EXAMS, TOFEL, GRE, GMAT and other similar exams.`,
      color: 'from-teal-500 to-cyan-500'
    },
    {
      icon: Headphones,
      title: 'Audio Visual Aids & Reprography',
      description: `Audiovisual section of the Institute Central Library consists of 50 audiocassettes, 1650 CD ROM DISKETTES, 100 Floppies. These help students to improve their communications skills and to prepare for the competitive exams like TOFEL, GRE etc.`,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Printer,
      title: 'Other Facilities',
      description: `Current awareness services, Reprographic Services, Effective reservation services, Paper clipping services, Conducting book exhibition, Job opportunities display.`,
      color: 'from-rose-500 to-pink-500'
    },
    {
      icon: Globe,
      title: 'Internet & Digital Resources',
      description: `Our library is having a high-speed Internet facility and it is provided to students and faculty freely. The net is connected by Radio Link dish net service. TIET is subscribed to DELNET DATABASES (35,990 full text Journals and 9,22,042 articles available on this database). The TIET Central Library provides a repository named TIET Digital Library to preserve and provide free online (open access) to the work produced at TIET.`,
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  const images = [
    {
      src: '/images/facilities/library/image1 (3).jpg',
      alt: 'Library Reading Hall',
      caption: 'Reading Hall',
    },
    {
      src: '/images/facilities/library/image2.jpg',
      alt: 'Book Collection',
      caption: 'Book Collection',
    },
    {
      src: '/images/facilities/library/image3.jpg',
      alt: 'Digital Resources',
      caption: 'Digital Resources',
    },
    // {
    //   src: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=300&h=200&fit=crop&crop=center',
    //   alt: 'Study Area',
    //   caption: 'Study Areas',
    // },
  ];

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? -1 : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden pt-5">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-purple-400 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <div className="text-center space-y-4 sm:space-y-6 mb-8 sm:mb-12 py-8 sm:py-16 px-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <span className="text-xs sm:text-sm font-medium text-blue-700 uppercase tracking-wide">
            Library & Info Services
          </span>
        </div>
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
            Access knowledge at
            <span className="block text-blue-600">Tagore Institute Library with comprehensive resources</span>
          </p>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 pb-12 sm:pb-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-12 lg:mb-16">
            
            {/* Left Column - Main Content */}
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                  Tagore Institute
                  <span className="block text-blue-600">Library Experience</span>
                </h2>
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                    The Library of Tagore Institute of Engineering and Technology has set its vision to satisfy the user community. The Central Library is situated in the ground floor of the Main Block with a floor area of about 4000 sq. mts.
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                    The library has 3 main sections: The stock room with reference section, The reading hall with periodicals section, and The circulation/reprography/administration section. The unique feature is the compulsory library hour included in students' timetable.
                  </p>
                </div>
              </div>

              {/* Info Cards */}
              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                
                {/* Working Hours */}
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0" />
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900">Working Hours</h4>
                  </div>
                  <div className="space-y-2 text-sm sm:text-base text-gray-700">
                    <div className="flex justify-between items-center gap-4">
                      <span className="flex-shrink-0">Working Days:</span>
                      <span className="font-medium text-right">8:30 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center gap-4">
                      <span className="flex-shrink-0">Sundays:</span>
                      <span className="font-medium text-right">8:30 AM - 1:30 PM</span>
                    </div>
                  </div>
                </div>

                {/* Librarian Info */}
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 flex-shrink-0" />
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900">Librarian</h4>
                  </div>
                  <div className="text-sm sm:text-base text-gray-700 space-y-1">
                    <div className="font-semibold">P. PERIANNAN</div>
                    <div className="text-xs sm:text-sm">M.A, M.ED, M.L.S</div>
                    <div className="text-xs sm:text-sm break-all">Mobile: +91 9751812505</div>
                    <div className="text-xs sm:text-sm break-all">Email: periannan44194@gmail.com</div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 sm:p-6">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Quick Stats</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-lg sm:text-xl font-bold text-blue-600">23,202</div>
                      <div className="text-xs sm:text-sm text-gray-600">Books</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg sm:text-xl font-bold text-green-600">110</div>
                      <div className="text-xs sm:text-sm text-gray-600">Journals</div>
                    </div>
                  </div>
                </div>

                {/* PDF Documents Section */}
                <div className="bg-blue-600 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                    <h4 className="text-base sm:text-lg font-semibold">Library Documents</h4>
                  </div>
                  <p className="text-white/90 mb-4 text-xs sm:text-sm">
                    Access comprehensive library policies, guidelines, and regulations
                  </p>
                  <button
                    onClick={openModal}
                    className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-lg transition-all duration-300 text-xs sm:text-sm font-medium w-full sm:w-auto justify-center"
                  >
                    <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                    View Library Policy
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Accordion */}
            <div className="order-1 lg:order-2">
              {/* Header */}
              <div className="text-center lg:text-left mb-8">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Library Features & Services
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Discover the comprehensive range of library facilities designed to support your academic and research needs.
                </p>
              </div>

              {/* Accordion */}
              <div className="space-y-3 sm:space-y-4">
                {libraryFeatures.map((feature, index) => (
                  <div 
                    key={index} 
                    className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg border border-white/20 overflow-hidden transition-all duration-300 hover:shadow-xl"
                  >
                    {/* Accordion Header */}
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full p-3 sm:p-4 lg:p-6 text-left flex items-center justify-between hover:bg-white/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                      aria-expanded={activeAccordion === index}
                      aria-controls={`accordion-content-${index}`}
                    >
                      <div className="flex items-center gap-3 flex-1 min-w-0 pr-2">
                        {/* Icon */}
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r ${feature.color} rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                          <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                        </div>
                        
                        {/* Title */}
                        <div className="min-w-0 flex-1">
                          <h4 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 leading-tight">
                            {feature.title}
                          </h4>
                        </div>
                      </div>
                      
                      {/* Chevron */}
                      <div className={`transform transition-transform duration-300 flex-shrink-0 ${
                        activeAccordion === index ? 'rotate-180' : ''
                      }`}>
                        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                      </div>
                    </button>

                    {/* Accordion Content */}
                    <div 
                      id={`accordion-content-${index}`}
                      className={`transition-all duration-500 ease-in-out overflow-hidden ${
                        activeAccordion === index 
                          ? 'max-h-96 opacity-100' 
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-3 sm:px-4 lg:px-6 pb-3 sm:pb-4 lg:pb-6">
                        <div className="pl-0 sm:pl-11 lg:pl-16">
                          <div className="bg-gray-50/50 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6">
                            <p className="text-gray-700 leading-relaxed text-xs sm:text-sm lg:text-base">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image Gallery Section */}
          <div className="bg-blue-50 py-8 sm:py-12 lg:py-16 rounded-2xl sm:rounded-3xl">
            <div className="px-4 sm:px-6">
              <div className="flex items-center justify-center mb-6 sm:mb-8">
                <Image className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mr-3 flex-shrink-0" />
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Library Gallery</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {images.map((image, index) => (
                  <div 
                    key={index}
                    className="relative group rounded-lg overflow-hidden shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    <img 
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-32 sm:h-40 lg:h-48 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PDF Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeModal}></div>
          <div className="relative bg-white w-full max-w-4xl h-[90vh] rounded-lg shadow-xl overflow-hidden">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-lg p-2 text-gray-600 hover:text-black transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>
            <iframe
              src="/images/facilities/library/AVAILABLE BOOKS IN CENRAL LIBRARY AND E-RESOURCES(1).pdf"
              title="Available Books in Library"
              className="w-full h-full"
              frameBorder="0"
            />
          </div>
        </div>
      )}
    </div>
  );
}