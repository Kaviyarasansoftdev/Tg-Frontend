import React, { useState } from 'react';
    import ReactDOM from 'react-dom';
    import { Headphones, Mic, BookOpen, PenTool, ChevronRight, ChevronDown, Image } from 'lucide-react';

   export  function LanguageLabSection() {
      const [activeAccordion, setActiveAccordion] = useState(0);

      const features = [
        {
          icon: Headphones,
          title: 'Balanced LSRW Focus',
          description: 'The lab emphasizes Listening, Speaking, Reading, and Writing (LSRW) skills with structured content and guided practice activities.',
          color: 'from-blue-500 to-cyan-500',
        },
        {
          icon: Mic,
          title: 'Phonetics & MTI Training',
          description: 'Specialized activities address phonetics, intonation, modulation, syllable division, and overcoming Mother Tongue Influence (MTI).',
          color: 'from-green-500 to-emerald-500',
        },
        {
          icon: BookOpen,
          title: 'Contextual Learning',
          description: 'Engaging exercises, academic vocabulary, and reading activities cover grammar usage and various discourse formats (e.g., CBSE, SSC).',
          color: 'from-purple-500 to-pink-500',
        },
        {
          icon: PenTool,
          title: 'Interactive Tools',
          description: 'Options to record audio, access additional resources, and use evaluation tools to assess progress and refine grammatical accuracy.',
          color: 'from-orange-500 to-red-500',
        },
      ];

      const images = [
        {
          src: '/images/facilities/languagelab/5.jpg',
          alt: 'Language Lab Classroom',
          caption: 'Language Lab',
        },
        {
          src: '/images/facilities/languagelab/6 (1).jpg',
          alt: 'Digital Learning Station',
          caption: 'Digital Station',
        },
        {
          src: '/images/facilities/languagelab/7.jpg',
          alt: 'Audio Learning Equipment',
          caption: 'Audio Equipment',
        },
         {
          src: '/images/facilities/languagelab/image1 (3).jpg',
          alt: 'Audio Learning Equipment',
          caption: 'Audio Equipment',
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
                Language Lab
              </span>
            </div>
            <p className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
              Advanced language learning at
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
                    Digital English
                    <span className="block text-blue-600">Language Lab</span>
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    The Language Laboratory at Tagore Institute of Engineering and Technology is a dedicated environment for mastering English, equipped with audio and audiovisual resources to enhance listening, speaking, reading, and writing skills. Designed with the Common European Framework of Reference (CEFR) and Cambridge English Teaching Framework, it fosters confidence and proficiency in a competitive world.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed italic">
                    "Practice is the silent architect that builds the bridge to perfection."
                  </p>
                </div>
              </div>

              {/* Right - Features Accordion */}
              <div className="space-y-4">
                <div className="text-center mb-8">
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Features & Benefits
                  </h3>
                  <p className="text-lg text-gray-600">
                    Explore the innovative features of our Digital English Language Lab.
                  </p>
                </div>
                {features.map((feature, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden">
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-white/50 transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center shadow-lg`}>
                          <feature.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-900">{feature.title}</h4>
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
                          <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
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
                  <h2 className="text-3xl font-bold text-gray-900">Language Lab Gallery</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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