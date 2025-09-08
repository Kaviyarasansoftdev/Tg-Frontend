 import React, { useState } from 'react';
    import ReactDOM from 'react-dom';
    import { Accessibility,BetweenVerticalEnd , Toilet, Footprints, Signpost, Handshake, Building2, ShieldCheck, BookOpenCheck, Image, ChevronDown } from 'lucide-react';

export  function DivyangjanFacilitiesSection() {
      const [activeAccordion, setActiveAccordion] = useState(0);

      const facilities = [
        {
          icon: Accessibility,
          title: 'Wheelchair-Friendly Access',
          description: 'All buildings on the TIET campus are constructed with ramps, ensuring that students with mobility challenges can access classrooms, laboratories, and administrative offices easily. Wide doorways and spacious hallways further enhance mobility within buildings.',
          color: 'from-blue-500 to-cyan-500'
        },
        {
          icon: BetweenVerticalEnd ,
          title: 'Elevators and Lifts',
          description: 'The institute has installed elevators and lifts in multi-story buildings, ensuring that Divyangjan can navigate between floors without obstacles.',
          color: 'from-green-500 to-emerald-500'
        },
        {
          icon: Toilet,
          title: 'Accessible Restrooms',
          description: 'Gender-neutral restrooms with features that cater to the needs of Divyangjan are available in all academic and administrative buildings. These restrooms are equipped with grab bars.',
          color: 'from-orange-500 to-red-500'
        },
        {
          icon: Footprints,
          title: 'Smooth Pathways',
          description: 'TIET has specifically designed smooth and obstacle-free pathways throughout the campus for easy navigation.',
          color: 'from-purple-500 to-pink-500'
        },
        {
          icon: Signpost,
          title: 'Signage and Markings',
          description: 'Clear signage with braille and large text is prominently displayed around the campus, aiding visually impaired individuals in reading essential information and locating facilities.',
          color: 'from-teal-500 to-cyan-500'
        },
        {
          icon: Handshake,
          title: 'Partnerships with NGOs',
          description: 'Collaborations with NGOs that specialize in disability advocacy provide additional resources, training, and outreach to support Divyangjan students.',
          color: 'from-yellow-500 to-orange-500'
        },
        {
          icon: Building2,
          title: 'Corporate Partnerships',
          description: 'Collaborating with companies in technology and disability services helps access advanced resources and tools.',
          color: 'from-indigo-500 to-blue-500'
        },
        {
          icon: ShieldCheck,
          title: 'Government Initiatives',
          description: 'TIET participates in government schemes aimed at supporting education for Divyangjan, ensuring its programs align with national policies and initiatives.',
          color: 'from-rose-500 to-pink-500'
        },
        {
          icon: BookOpenCheck,
          title: 'Research and Awareness Programs',
          description: 'The institution engages in research programs focused on disability studies, promoting awareness of the challenges faced by Divyangjan students.',
          color: 'from-blue-500 to-indigo-500'
        }
      ];

      const images = [
        {
          src: '/images/facilities/divyanjan/Divyangjan Photo1.jpeg',
          alt: 'Accessible Ramp',
          caption: 'Accessible Ramp',
        },
        {
          src: '/images/facilities/divyanjan/Divyangjan Photo2.jpg',
          alt: 'Elevator',
          caption: 'Elevator Access',
        },
        {
          src: '/images/facilities/divyanjan/Divyangjan Photo3.jpeg',
          alt: 'Braille Signage',
          caption: 'Braille Signage',
        },
        // {
        //   src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=300&h=200&fit=crop&crop=center',
        //   alt: 'Campus Pathway',
        //   caption: 'Smooth Pathway',
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
                Divyangjan Facilities
              </span>
            </div>
            <p className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
              Inclusive environment at
              <span className="block text-blue-600">Tagore Institute for Divyangjans</span>
            </p>
          </div>

          {/* Main Content and Accordion */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
            {/* Main Content */}
            <div className="space-y-8 mb-12">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight text-center">
                  Tagore Institute
                  <span className="block text-blue-600">Divyangjan Experience</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  In an inclusive society, the Tagore Institute of Engineering and Technology plays a pivotal role in ensuring equal access and opportunities for all students, including those with disabilities, known as Divyangjan. TIET is committed to creating a supportive environment that caters to the needs of Divyangjan.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Divyangjan, a term that translates to "divinely inspired individuals," encompasses a variety of disabilities, including physical, visual, auditory, and cognitive challenges. Their full integration into educational settings is essential for social equity and progress. Recognizing their diverse needs is crucial to facilitating their academic success and personal development.
                </p>
              </div>
            </div>

            {/* Accordion Section */}
            <div className="space-y-4 max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Facilities for Divyangjans
                </h3>
                <p className="text-lg text-gray-600">
                  Explore the comprehensive facilities designed to support an inclusive campus experience.
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
                  <h2 className="text-3xl font-bold text-gray-900">Divyangjan Facilities Gallery</h2>
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