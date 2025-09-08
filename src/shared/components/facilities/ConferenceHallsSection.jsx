import React, { useState } from 'react';
    import ReactDOM from 'react-dom';
    import { Projector, ChevronDown, Image } from 'lucide-react';

   export  function ConferenceHallsSection() {
      const [activeAccordion, setActiveAccordion] = useState(0);

      const facilities = [
        {
          icon: Projector,
          title: 'Conference and Seminar Halls',
          description: 'Fully air-conditioned conference rooms and a mini conference hall. Each department is provided with a seminar hall. All halls are equipped with the latest multimedia projectors, slide projectors, and overhead projectors.',
          color: 'from-blue-500 to-cyan-500'
        }
      ];

      const images = [
        {
          src: '/images/facilities/conference/001.jpg',
          alt: 'Main Conference Hall',
          caption: 'Main Conference Hall',
        },
        {
          src: '/images/facilities/conference/002.jpg',
          alt: 'Seminar Room',
          caption: 'Seminar Room',
        },
        {
          src: '/images/facilities/conference/003.jpg',
          alt: 'Multimedia Setup',
          caption: 'Multimedia Setup',
        },
        {
          src: '/images/facilities/conference/004.jpg',
          alt: 'Department Seminar Hall',
          caption: 'Department Seminar Hall',
        },
         {
          src: '/images/facilities/conference/confer-img-1.jpg',
          alt: 'Department Seminar Hall',
          caption: 'Department Seminar Hall',
        },
      ];

      const toggleAccordion = (index) => {
        setActiveAccordion(activeAccordion === index ? -1 : index);
      };

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden pt-5">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
          </div>

          {/* Hero Section */}
          <div className="text-center space-y-6 mb-12 py-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-medium text-blue-700 uppercase tracking-wide">
                Conference Halls
              </span>
            </div>
            <p className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
              State-of-the-art facilities at
              <span className="block text-blue-600">Tagore Institute Conference Halls</span>
            </p>
          </div>

          {/* Main Content and Accordion Grid */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
            <div className="flex  justify-center gap-16  mb-16">
              {/* Left - Main Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight  text-center">
                    Tagore Institute
                    <span className="block text-blue-600">Conference Experience</span>
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Fully air-conditioned conference rooms and a mini conference hall. Each department is provided with a seminar hall. All halls are equipped with the latest multimedia projectors, slide projectors, and overhead projectors.
                  </p>
                </div>
              </div>

              {/* Right - Facilities Accordion */}
              {/* <div className="space-y-4">
                <div className="text-center mb-8">
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Facilities & Amenities
                  </h3>
                  <p className="text-lg text-gray-600">
                    Explore the advanced facilities designed to support academic and professional events.
                  </p>
                </div>
                {facilities.map((facility, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden">
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-white/50 transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${facility.color} rounded-xl flex items-center justify-center shadow-lg`}>
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
                      activeAccordion === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="px-6 pb-6">
                        <div className="pl-16">
                          <p className="text-gray-600 leading-relaxed text-lg">{facility.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div> */}
            </div>

            {/* Image Gallery Section */}
            <div className="bg-blue-50 py-16">
              <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-center mb-8">
                  <Image className="w-8 h-8 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Conference Hall Gallery</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  {images.map((image, index) => (
                    <div 
                      key={index}
                      className="relative group rounded-lg overflow-hidden shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                      <img 
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-48 object-cover"
                      />
                      {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                        <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {image.caption}
                        </p>
                      </div> */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }