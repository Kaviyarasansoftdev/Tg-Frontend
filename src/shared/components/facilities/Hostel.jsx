    import React, { useState } from 'react';
    import ReactDOM from 'react-dom';
    import { Home, Utensils, Gamepad2, Phone, ChevronDown, Clock, Users, Image } from 'lucide-react';

 export   function HostelSection() {
      const [activeAccordion, setActiveAccordion] = useState(0);

      const facilities = [
        {
          icon: Utensils,
          title: 'Furnished Dining Hall',
          description: 'The hostels feature a highly furnished dining hall that serves nutritious and energizing meals, catering to the dietary needs of all students.',
          color: 'from-orange-500 to-red-500'
        },
        {
          icon: Gamepad2,
          title: 'Recreational Areas',
          description: 'Students can enjoy good refreshment in both indoor and outdoor games facilities, as well as access to TV halls for leisure and entertainment.',
          color: 'from-green-500 to-emerald-500'
        },
        {
          icon: Phone,
          title: 'Telephone Facilities',
          description: 'Each hostel is equipped with telephone facilities for easy communication.',
          color: 'from-blue-500 to-cyan-500'
        },
        {
          icon: Utensils,
          title: 'Quality Food',
          description: 'The hostels prioritize nutrition and well-being by serving exceptional quality food.',
          color: 'from-purple-500 to-pink-500'
        }
      ];

      const images = [
        {
          src: '/images/facilities/hostel/1.jpg',
          alt: 'Boys Hostel',
          caption: 'Boys Hostel',
        },
        {
          src: '/images/facilities/hostel/01.jpg',
          alt: 'Girls Hostel',
          caption: 'Girls Hostel',
        },
        {
          src: '/images/facilities/hostel/001.jpg',
          alt: 'Recreation Area',
          caption: 'Recreation',
        },
        {
          src: '/images/facilities/hostel/02.jpg',
          alt: 'Study Area',
          caption: 'Study Areas',
        }, {
          src: '/images/facilities/hostel/002.jpg',
          alt: 'Study Area',
          caption: 'Study Areas',
        }, {
          src: '/images/facilities/hostel/03.jpg',
          alt: 'Study Area',
          caption: 'Study Areas',
        },
         {
          src: '/images/facilities/hostel/003.jpg',
          alt: 'Study Area',
          caption: 'Study Areas',
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
                Hostels
              </span>
            </div>
            <p className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
              Comfortable living at
              <span className="block text-blue-600">Tagore Institute Hostel with modern amenities</span>
            </p>
          </div>

          {/* Main Content and Accordion Grid */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
            <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
              {/* Left - Main Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    Tagore Institute
                    <span className="block text-blue-600">Hostel Experience</span>
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Tagore Institute of Engineering and Technology provides separate hostel facilities for both boys and girls, ensuring a comfortable and supportive living environment. The on-campus hostels are designed to attract students with their high-class amenities and a healthy atmosphere conducive to academics and personal growth.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    The day-to-day operations of the hostels are managed by dedicated wardens, and a Hostel Committee oversees policy decisions to enhance the living experience.
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
                    Discover the comprehensive range of facilities designed to make your hostel experience comfortable and enriching.
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
            </div>

            {/* Card Section */}
            {/* <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Hostel Information
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Key details about our hostel’s operations and resources.
                </p>
              </div>
              <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-6 h-6 text-blue-600" />
                    <h4 className="text-lg font-semibold text-gray-900">Visiting Hours</h4>
                  </div>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex justify-between">
                      <span>Weekdays:</span>
                      <span className="font-medium">4:00 PM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sundays:</span>
                      <span className="font-medium">10:00 AM - 2:00 PM</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-6 h-6 text-purple-600" />
                    <h4 className="text-lg font-semibold text-gray-900">Warden Contact</h4>
                  </div>
                  <div className="text-gray-700">
                    <div className="font-semibold">S. RAMESH</div>
                    <div className="text-sm">M.Sc, M.Phil</div>
                    <div className="text-sm">Mobile: +91 9876543210</div>
                    <div className="text-sm">Email: ramesh.warden@tagoreInstitute.edu</div>
                  </div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Hostel Stats</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center">
                      <div className="text-xl font-bold text-blue-600">200</div>
                      <div className="text-xs text-gray-600">Rooms</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-green-600">400</div>
                      <div className="text-xs text-gray-600">Students</div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Image Gallery Section */}
            <div className="bg-blue-50 py-16">
              <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-center mb-8">
                  <Image className="w-8 h-8 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Hostel Gallery</h2>
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
                      {/* <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
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