import React, { useState } from 'react';
    import ReactDOM from 'react-dom';
    import { Gamepad2, BookOpen, Sofa, Wifi, Bean, Mail, Users, Image, ChevronDown } from 'lucide-react';

   export function CommonRoomSection() {
      const [activeAccordion, setActiveAccordion] = useState(0);

      const facilities = [
        {
          icon: Gamepad2,
          title: 'Recreational Activities',
          description: 'Facilitate leisure through games like table tennis, carom, and chess.',
          color: 'from-blue-500 to-cyan-500'
        },
        {
          icon: BookOpen,
          title: 'Study Area',
          description: 'Provides a quiet space for group studies and discussions, enhancing collaborative learning.',
          color: 'from-green-500 to-emerald-500'
        },
        {
          icon: Sofa,
          title: 'Seating Arrangements',
          description: 'Comfortable sofas and chairs encourage informal interaction and gatherings.',
          color: 'from-orange-500 to-red-500'
        },
        {
          icon: Wifi,
          title: 'Wi-Fi Access',
          description: 'Free Wi-Fi supports students in staying connected and completing assignments.',
          color: 'from-purple-500 to-pink-500'
        },
        {
          icon: Bean,
          title: 'Relaxation Area',
          description: 'Provides quiet corners with bean bags or cushions for relaxation and contemplation.',
          color: 'from-teal-500 to-cyan-500'
        },
        {
          icon: Mail,
          title: 'Feedback and Suggestion Box',
          description: 'Encourages student feedback on facilities and activities to enhance campus life.',
          color: 'from-yellow-500 to-orange-500'
        },
        {
          icon: Users,
          title: 'Networking Opportunities',
          description: 'Serves as a platform for students to connect, share ideas, and collaborate.',
          color: 'from-indigo-500 to-blue-500'
        }
      ];

      const images = [
        {
          src: '/images/facilities/commonroom/CommonRoomBoys (1).jpg',
          alt: 'Common Room Seating',
          caption: 'Seating Area',
        },
        {
          src: '/images/facilities/commonroom/CommonRoomGirls.jpg',
          alt: 'Study Area',
          caption: 'Study Area',
        },
        // {
        //   src: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=300&h=200&fit=crop&crop=center',
        //   alt: 'Recreational Games',
        //   caption: 'Recreational Games',
        // },
        // {
        //   src: 'https://images.unsplash.com/photo-1554284128-5dbac1f9eb2a?w=300&h=200&fit=crop&crop=center',
        //   alt: 'Relaxation Corner',
        //   caption: 'Relaxation Corner',
        // },
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
                Common Room
              </span>
            </div>
            <p className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
              A vibrant space at
              <span className="block text-blue-600">Tagore Institute Common Room</span>
            </p>
          </div>

          {/* Main Content and Accordion */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
            {/* Main Content */}
            <div className="space-y-8 mb-12">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight text-center">
                  Tagore Institute
                  <span className="block text-blue-600">Common Room Experience</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  The Common Room at Tagore Institute of Engineering and Technology (TIET) serves as a vital space for students to relax, socialize, and engage in recreational activities. This facility aims to foster a sense of community and provide a supportive environment for personal interaction among students.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  The Common Room should be a flexible space that adapts to the diverse needs of students, encouraging both academic engagement and personal development.
                </p>
              </div>
            </div>

            {/* Accordion Section */}
            <div className="space-y-4 max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Common Room Features
                </h3>
                <p className="text-lg text-gray-600">
                  Explore the facilities designed to foster community and support student life.
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
            </div>

            {/* Image Gallery Section */}
            <div className="bg-blue-50 py-16 mt-16">
              <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-center mb-8">
                  <Image className="w-8 h-8 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Common Room Gallery</h2>
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