import React, { useState } from 'react';
    import ReactDOM from 'react-dom';
    import { FlaskConical, CircuitBoard, Cpu, Globe, ChevronRight, ChevronDown, Image } from 'lucide-react';

 export   function LaboratoriesSection() {
      const [activeAccordion, setActiveAccordion] = useState(0);

      const facilities = [
        {
          icon: FlaskConical,
          title: 'Core Engineering Laboratories',
          description: 'Physics, Chemistry, and Electrical & Electronics labs provide hands-on experience in mechanics, optics, chemical reactions, and circuit design.',
          color: 'from-blue-500 to-cyan-500',
        },
        {
          icon: Cpu,
          title: 'Specialized Engineering Laboratories',
          description: 'Computer Science, Mechanical, and Civil Engineering labs offer advanced tools for software development, manufacturing, and structural analysis.',
          color: 'from-green-500 to-emerald-500',
        },
        {
          icon: CircuitBoard,
          title: 'Research and Development Facilities',
          description: 'Innovation hubs for AI, Machine Learning, and Industrial IoT enable cutting-edge projects in intelligent systems and embedded technologies.',
          color: 'from-purple-500 to-pink-500',
        },
        {
          icon: Globe,
          title: 'Internet Lab Facilities',
          description: 'High-speed 300 Mbps connectivity, access to online learning platforms (e.g., Coursera, edX), collaborative tools, and cybersecurity training for research and projects.',
          subItems: [
            'High-Speed 300 Mbps Connectivity',
            'Access to Online Learning Platforms (e.g., Coursera, edX)',
            'Collaborative Tools for Group Projects',
            'Cybersecurity and Safe Internet Practices Training',
          ],
          color: 'from-orange-500 to-red-500',
        },
      ];

      const images = [
        {
          src: '/images/facilities/laboratories&internetlab/000.jpg',
          alt: 'Physics Laboratory',
          caption: 'Physics Lab',
        },
        {
          src: '/images/facilities/laboratories&internetlab/004.jpg',
          alt: 'Chemistry Laboratory',
          caption: 'Chemistry Lab',
        },
        {
          src: '/images/facilities/laboratories&internetlab/006.jpg',
          alt: 'Computer Science Laboratory',
          caption: 'Computer Lab',
        },
        {
          src: '/images/facilities/laboratories&internetlab/008.jpg',
          alt: 'Internet Lab',
          caption: 'Internet Lab',
        },
          {
          src: '/images/facilities/laboratories&internetlab/009.jpg',
          alt: 'Internet Lab',
          caption: 'Internet Lab',
        },
        {
          src: '/images/facilities/laboratories&internetlab/010.jpg',
          alt: 'Internet Lab',
          caption: 'Internet Lab',
        },
        {
          src: '/images/facilities/laboratories&internetlab/image1 (1).jpg',
          alt: 'Internet Lab',
          caption: 'Internet Lab',
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
                Laboratories
              </span>
            </div>
            <p className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
              Cutting-edge facilities at
              <span className="block text-blue-600">Tagore Institute of Engineering and Technology</span>
            </p>
          </div>

          {/* Main Content and Accordion Grid */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
            <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
              {/* Left - Main Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    Laboratories & Internet
                    <span className="block text-blue-600">Lab Facilities</span>
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Tagore Institute of Engineering and Technology is a premier institution dedicated to providing high-quality education in engineering and technology. Our modern laboratories and high-speed internet facilities foster innovation, research, and practical knowledge, bridging the gap between theory and real-world applications.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed italic">
                    "Practice is the silent architect that builds the bridge to perfection."
                  </p>
                </div>
              </div>

              {/* Right - Facilities Accordion */}
              <div className="space-y-4">
                <div className="text-center mb-8">
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Facilities & Amenities
                  </h3>
                  <p className="text-lg text-gray-600">
                    Discover the comprehensive range of laboratories and internet facilities designed to enhance your learning experience.
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
                          {facility.subItems && (
                            <ul className="mt-4 space-y-2 text-gray-600">
                              {facility.subItems.map((item, subIndex) => (
                                <li key={subIndex} className="flex items-center">
                                  <ChevronRight className="w-5 h-5 text-blue-600 mr-2" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Gallery Section */}
            <div className="bg-blue-50 py-16">
              <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-center mb-8">
                  <Image className="w-8 h-8 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Laboratory Gallery</h2>
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