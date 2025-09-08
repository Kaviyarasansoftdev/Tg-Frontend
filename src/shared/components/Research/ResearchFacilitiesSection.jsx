// import React, { useState } from 'react';
// import { HardHat, Cpu, Brain, Wrench, Zap, Settings, DraftingCompass, Lightbulb, Image, ChevronDown } from 'lucide-react';

// export default function ResearchFacilitiesSection() {
//   const [activeAccordion, setActiveAccordion] = useState(0);

//   const facilities = [
//     {
//       icon: HardHat,
//       title: 'Research & Development (R&D) Laboratory',
//       description: 'Equipped with modern tools and software to support cutting-edge research and product development across various disciplines.',
//       color: 'from-green-500 to-emerald-500'
//     },
//     {
//       icon: Cpu,
//       title: 'Modernization of Embedded and Industrial IoT Laboratory',
//       description: 'A state-of-the-art facility designed to advance research and innovation in embedded systems and Industrial IoT applications.',
//       color: 'from-blue-500 to-cyan-500',
//       subItems: [
//         {
//           title: 'Objectives',
//           content: [
//             'Provide a platform for designing, developing, and testing embedded systems and Industrial IoT applications.',
//             'Foster research and innovation in embedded systems and Industrial IoT, encouraging the development of new ideas, algorithms, and products.',
//             'Offer hands-on training and experimentation opportunities for students, researchers, and industry professionals.',
//             'Facilitate collaboration among experts from various disciplines, such as computer science, electrical engineering, mechanical engineering, and industrial automation.'
//           ]
//         },
//         {
//           title: 'Equipment',
//           content: [
//             'Multi MCU and Multi Wireless (Embedded and IoT) Development Kit',
//             'Debugging and Programming STM8 and STM32 Microcontrollers',
//             'Dragino LoRaWAN IoT Kit',
//             'IoT Trainer Kit',
//             'LoRaWAN I/O Controller',
//             'RS485 to LoRaWAN Converter',
//             'Vibration Sensor',
//             'Leaf Moisture Sensor',
//             'Lux Sensor',
//             'PIR Sensor',
//             'Rain Sensor',
//             'Soil Moisture Sensor',
//             'Ultrasonic Water Meter',
//             'Ultrasonic Sensor',
//             'Wedinard Magnetic Antenna',
//             'Air Quality Sensor',
//             'Gas Sensor',
//             'GPS Tracker',
//             'IoT Sensor for Distance Detection',
//             'IoT Sensor Node',
//             'IR Sensor',
//             'Printed Circuit Board (PCB) Mate'
//           ]
//         }
//       ]
//     },
//     {
//       icon: Brain,
//       title: 'Modernization of Artificial Intelligence and Machine Learning Integrated IoT Laboratory',
//       description: 'A cutting-edge lab integrating AI and ML with IoT technologies to support advanced research and development.',
//       color: 'from-purple-500 to-indigo-500'
//     },
//     {
//       icon: Wrench,
//       title: 'Mechatronics Laboratory',
//       description: 'A facility dedicated to the integration of mechanical, electronic, and control systems for innovative product development.',
//       color: 'from-orange-500 to-red-500'
//     },
//     {
//       icon: Zap,
//       title: 'Power System Laboratory',
//       description: 'Equipped with modern tools to support research and experimentation in power generation, distribution, and management.',
//       color: 'from-teal-500 to-cyan-500'
//     },
//     {
//       icon: Settings,
//       title: 'Control Systems Laboratory',
//       description: 'A specialized lab for designing and testing control systems to optimize performance in various applications.',
//       color: 'from-yellow-500 to-orange-500'
//     },
//     {
//       icon: DraftingCompass,
//       title: 'CAD/CAM Laboratory',
//       description: 'Equipped with advanced software and tools for computer-aided design and manufacturing research.',
//       color: 'from-indigo-500 to-blue-500'
//     },
//     {
//       icon: Lightbulb,
//       title: 'Research & Development (R&D) Innovation Laboratory',
//       description: 'A hub for fostering innovative ideas and developing novel solutions across multiple research domains.',
//       color: 'from-rose-500 to-pink-500'
//     }
//   ];

//   const images = [
//     {
//       src: 'https://images.unsplash.com/photo-1516321310762-479437144403?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80',
//       alt: 'R&D Laboratory',
//       caption: 'R&D Laboratory'
//     },
//     {
//       src: 'https://images.unsplash.com/photo-1532170579297-281918c678f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80',
//       alt: 'IoT Laboratory',
//       caption: 'Embedded and IoT Lab'
//     },
//     {
//       src: 'https://images.unsplash.com/photo-1620712943542-24033b3b3c7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80',
//       alt: 'AI Lab',
//       caption: 'AI and ML IoT Lab'
//     },
//     {
//       src: 'https://images.unsplash.com/photo-1581092160607-36a593e7d7bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80',
//       alt: 'Mechatronics Lab',
//       caption: 'Mechatronics Laboratory'
//     }
//   ];

//   const toggleAccordion = (index) => {
//     setActiveAccordion(activeAccordion === index ? -1 : index);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-teal-100 relative overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400 rounded-full blur-3xl"></div>
//       </div>

//       {/* Hero Section */}
//       <div className="text-center space-y-6 mb-8 py-8">
//         <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full">
//           <div className="w-2 h-2 bg-green-500 rounded-full"></div>
//           <span className="text-sm font-medium text-green-700 uppercase tracking-wide">
//             Research Facilities
//           </span>
//         </div>
//         <p className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
//           Cutting-edge research at
//           <span className="block text-green-600">Tagore Institute of Engineering and Technology</span>
//         </p>
//       </div>

//       {/* Main Content and Accordion */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
//         {/* Main Content */}
//         <div className="space-y-8 mb-8">
//           <div className="space-y-6">
//             <p className="text-lg text-gray-600 leading-relaxed">
//               The research group at Tagore Institute of Engineering and Technology organizes seminars, workshops, symposiums, and conferences focused on advancing research in their respective fields. Various infrastructures are established to facilitate work with cutting-edge technologies. All laboratories are equipped with modern tools and software to support product development, fostering innovation and collaboration.
//             </p>
//           </div>
//         </div>

//         {/* Accordion Section */}
//         <div className="space-y-4 max-w-4xl mx-auto">
//           <div className="text-center mb-8">
//             <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//               Central Research Facilities
//             </h3>
//             <p className="text-lg text-gray-600">
//               Explore our state-of-the-art laboratories designed for innovation and research.
//             </p>
//           </div>
//           {facilities.map((facility, index) => (
//             <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden">
//               <button
//                 onClick={() => toggleAccordion(index)}
//                 className="w-full p-6 text-left flex items-center justify-between hover:bg-white/50 transition-all duration-300"
//               >
//                 <div className="flex items-center gap-4">
//                   <div className={`w-12 h-12 bg-gradient-to-r ${facility.color} rounded-xl flex items-center justify-center shadow-lg`}>
//                     <facility.icon className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <h4 className="text-xl font-bold text-gray-900">{facility.title}</h4>
//                   </div>
//                 </div>
//                 <div className={`transform transition-transform duration-300 ${activeAccordion === index ? 'rotate-180' : ''}`}>
//                   <ChevronDown className="w-6 h-6 text-gray-500" />
//                 </div>
//               </button>
//               <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
//                 activeAccordion === index ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
//               }`}>
//                 <div className="px-6 pb-6">
//                   <div className="pl-16">
//                     <p className="text-gray-600 leading-relaxed text-lg mb-4">{facility.description}</p>
//                     {facility.subItems && facility.subItems.map((subItem, subIndex) => (
//                       <div key={subIndex} className="mb-4">
//                         <h5 className="text-lg font-semibold text-gray-900 mb-2">{subItem.title}</h5>
//                         <ul className="space-y-2">
//                           {subItem.content.map((item, itemIndex) => (
//                             <li key={itemIndex} className="flex items-start gap-2 text-gray-600">
//                               <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
//                               <span>{item}</span>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Image Gallery Section */}
//         <div className="bg-green-50 py-16 mt-16">
//           <div className="max-w-7xl mx-auto px-4">
//             <div className="flex items-center justify-center mb-8">
//               <Image className="w-8 h-8 text-green-600 mr-3" />
//               <h2 className="text-3xl font-bold text-gray-900">Research Facilities Gallery</h2>
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//               {images.map((image, index) => (
//                 <div 
//                   key={index}
//                   className="bg-white rounded-lg overflow-hidden shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
//                 >
//                   <img 
//                     src={image.src}
//                     alt={image.alt}
//                     className="w-full h-48 object-cover"
//                   />
//                   <div className="p-4">
//                     <p className="text-gray-900 text-lg font-semibold text-center">
//                       {image.caption}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import { HardHat, Cpu, Brain, Wrench, Zap, Settings, DraftingCompass, Lightbulb, Image, ChevronDown, FileText, X } from 'lucide-react';

export default function ResearchFacilitiesSection() {
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pdfUrl = '/path/to/research-facilities.pdf'; // Placeholder for actual PDF path

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const facilities = [
    {
      icon: HardHat,
      title: 'Research & Development (R&D) Laboratory',
      description: 'Equipped with modern tools and software to support cutting-edge research and product development across various disciplines.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Cpu,
      title: 'Modernization of Embedded and Industrial IoT Laboratory',
      description: 'A state-of-the-art facility designed to advance research and innovation in embedded systems and Industrial IoT applications.',
      color: 'from-blue-500 to-cyan-500',
      subItems: [
        {
          title: 'Objectives',
          content: [
            'Provide a platform for designing, developing, and testing embedded systems and Industrial IoT applications.',
            'Foster research and innovation in embedded systems and Industrial IoT, encouraging the development of new ideas, algorithms, and products.',
            'Offer hands-on training and experimentation opportunities for students, researchers, and industry professionals.',
            'Facilitate collaboration among experts from various disciplines, such as computer science, electrical engineering, mechanical engineering, and industrial automation.'
          ]
        },
        {
          title: 'Equipment',
          content: [
            'Multi MCU and Multi Wireless (Embedded and IoT) Development Kit',
            'Debugging and Programming STM8 and STM32 Microcontrollers',
            'Dragino LoRaWAN IoT Kit',
            'IoT Trainer Kit',
            'LoRaWAN I/O Controller',
            'RS485 to LoRaWAN Converter',
            'Vibration Sensor',
            'Leaf Moisture Sensor',
            'Lux Sensor',
            'PIR Sensor',
            'Rain Sensor',
            'Soil Moisture Sensor',
            'Ultrasonic Water Meter',
            'Ultrasonic Sensor',
            'Wedinard Magnetic Antenna',
            'Air Quality Sensor',
            'Gas Sensor',
            'GPS Tracker',
            'IoT Sensor for Distance Detection',
            'IoT Sensor Node',
            'IR Sensor',
            'Printed Circuit Board (PCB) Mate'
          ]
        }
      ]
    },
    {
      icon: Brain,
      title: 'Modernization of Artificial Intelligence and Machine Learning Integrated IoT Laboratory',
      description: 'A cutting-edge lab integrating AI and ML with IoT technologies to support advanced research and development.',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Wrench,
      title: 'Mechatronics Laboratory',
      description: 'A facility dedicated to the integration of mechanical, electronic, and control systems for innovative product development.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Zap,
      title: 'Power System Laboratory',
      description: 'Equipped with modern tools to support research and experimentation in power generation, distribution, and management.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Settings,
      title: 'Control Systems Laboratory',
      description: 'A specialized lab for designing and testing control systems to optimize performance in various applications.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: DraftingCompass,
      title: 'CAD/CAM Laboratory',
      description: 'Equipped with advanced software and tools for computer-aided design and manufacturing research.',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Lightbulb,
      title: 'Research & Development (R&D) Innovation Laboratory',
      description: 'A hub for fostering innovative ideas and developing novel solutions across multiple research domains.',
      color: 'from-rose-500 to-pink-500'
    }
  ];

  const images = [
    {
      src: '/images/research/1.jpeg',
      alt: 'DRAGINO LORAWAN IOT KIT',
      caption: 'DRAGINO LORAWAN IOT KIT'
    },
    {
      src: '/images/research/2.jpeg',
      alt: 'DEBUGGING AND PROGRAMMING STM8 AND STM32 MICRO CONTROLLERS',
      caption: 'DEBUGGING AND PROGRAMMING STM8 AND STM32 MICRO CONTROLLERS',
    },
    {
      src: '/images/research/3.jpeg',
      alt: 'IOT TRAINER KIT',
      caption: 'IOT TRAINER KIT'
    },
    {
      src: '/images/research/4.jpeg',
      alt: 'PRINTED CIRCUIT BOARD (PCB) MATE',
      caption: 'PRINTED CIRCUIT BOARD (PCB) MATE'
    },
    {
      src: '/images/research/5.jpeg',
      alt: 'AI & ML LABORATORY',
      caption: 'AI & ML LABORATORY'
    },
    {
      src: '/images/research/6.jpeg',
      alt: 'LORAWAN I/O CONTROLLER',
      caption: 'LORAWAN I/O CONTROLLER'
    },
    {
      src: '/images/research/7.jpeg',
      alt: 'RS485 TO LORA WAN CONVERTER',
      caption: 'RS485 TO LORA WAN CONVERTER'
    },
    {
      src: '/images/research/8.jpeg',
      alt: 'VIBRATION SENSOR',
      caption: 'VIBRATION SENSOR'
    },
    {
      src: '/images/research/9.jpeg',
      alt: 'LEAF MOISTURE SENSOR',
      caption: 'LEAF MOISTURE SENSOR'
    },
    {
      src: '/images/research/10.jpeg',
      alt: 'LUX SENSOR',
      caption: 'LUX SENSOR'
    },
    {
      src: '/images/research/11.jpeg',
      alt: 'PIR SENSOR',
      caption: 'PIR SENSOR'
    },
    {
      src: '/images/research/12.jpeg',
      alt: 'RAIN SENSOR',
      caption: 'RAIN SENSOR'
    },
    {
      src: '/images/research/13.jpeg',
      alt: 'SOIL MOISTURE SENSOR',
      caption: 'SOIL MOISTURE SENSOR'
    },
    {
      src: '/images/research/14.jpeg',
      alt: 'ULTRASONIC WATER METER',
      caption: 'ULTRASONIC WATER METER'
    },
    {
      src: '/images/research/15.jpeg',
      alt: 'ULTRASONIC SENSOR',
      caption: 'ULTRASONIC SENSOR'
    },
    {
      src: '/images/research/16.jpeg',
      alt: 'WEDINARD MAGNETIC ANTENNA',
      caption: 'WEDINARD MAGNETIC ANTENNA'
    },
    {
      src: '/images/research/17.jpeg',
      alt: 'AIR QUALITY SENSOR',
      caption: 'AIR QUALITY SENSOR'
    },
    {
      src: '/images/research/18.jpeg',
      alt: 'GPS TRACKER',
      caption: 'GPS TRACKER'
    },
    {
      src: '/images/research/19.jpeg',
      alt: 'IOT SENSOR FOR DISTANCE DETECTION',
      caption: 'IOT SENSOR FOR DISTANCE DETECTION'
    },
    {
      src: '/images/research/20.jpeg',
      alt: 'IR SENSOR',
      caption: 'IR SENSOR'
    },
  ];

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? -1 : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-sky-100 relative overflow-hidden pt-10 lg:pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-400 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <div className="text-center space-y-6 mb-8 py-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <span className="text-sm font-medium text-blue-700 uppercase tracking-wide">
            Research Facilities
          </span>
        </div>
        <p className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
          Cutting-edge research at
          <span className="block text-blue-600">Tagore Institute of Engineering and Technology</span>
        </p>
      </div>

      {/* Main Content and Accordion */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
        {/* Main Content */}
        <div className="space-y-8 mb-8">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              The research group at Tagore Institute of Engineering and Technology organizes seminars, workshops, symposiums, and conferences focused on advancing research in their respective fields. Various infrastructures are established to facilitate work with cutting-edge technologies. All laboratories are equipped with modern tools and software to support product development, fostering innovation and collaboration.
            </p>
          </div>
          {/* PDF Modal Button */}
          {/* <div className="text-center">
            <button
              onClick={openModal}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              <FileText className="w-5 h-5" />
              View Research Facilities Details (PDF)
            </button>
          </div> */}
        </div>

        {/* Accordion Section */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Central Research Facilities
            </h3>
            <p className="text-lg text-gray-600">
              Explore our state-of-the-art laboratories designed for innovation and research.
            </p>
          </div>
          {facilities.map((facility, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className={`hidden lg:block w-12 h-12 bg-gradient-to-r ${facility.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <facility.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{facility.title}</h4>
                  </div>
                </div>
                <div className={`transform transition-transform duration-300 ${activeAccordion === index ? 'rotate-180' : ''}`}>
                  <ChevronDown className="w-6 h-6 text-gray-500" />
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                activeAccordion === index ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6">
                  <div className="lg:pl-16">
                    <p className="text-gray-600 leading-relaxed text-lg mb-4">{facility.description}</p>
                    {facility.subItems && facility.subItems.map((subItem, subIndex) => (
                      <div key={subIndex} className="mb-4">
                        <h5 className="text-lg font-semibold text-gray-900 mb-2">{subItem.title}</h5>
                        <ul className="space-y-2">
                          {subItem.content.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-2 text-gray-600">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Gallery Section */}
        <div className="bg-blue-50 py-16 mt-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-center mb-8">
              <Image className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Research Facilities Gallery</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {images.map((image, index) => (
                <div 
                  key={index}
                  className="bg-white p-4 rounded-lg overflow-hidden border border-gray-300 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-48 object-contain"
                  />
                  <div className="pt-4">
                    <p className="text-gray-900 text-lg font-semibold text-center">
                      {image.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PDF Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-2xl bg-opacity-60">
            <div className="bg-white w-full max-w-4xl h-[90vh] rounded-lg shadow-xl relative">
              <button
                onClick={closeModal}
                className="absolute top-0 right-0 translate-x-full rounded-r-2xl cursor-pointer text-gray-600 bg-white p-2 hover:text-black text-xl font-bold"
              >
                <X />
              </button>
              <iframe
                src={pdfUrl}
                title="Research Facilities Details"
                className="w-full h-full"
                frameBorder="0"
              >
                <p className="text-gray-600 text-center">
                  Your browser does not support iframes. Please{' '}
                  <a href={pdfUrl} download className="text-blue-600 hover:underline">
                    download the PDF
                  </a>{' '}
                  to view the full details.
                </p>
              </iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}