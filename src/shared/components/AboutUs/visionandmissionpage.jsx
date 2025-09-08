import React, { useState, useEffect } from 'react';
import { Eye, Target, Award, Users, Lightbulb, Globe, ChevronRight, Star } from 'lucide-react';

const VisionMissionPage = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const missionPoints = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Excellence in Education",
      description: "To develop eminent Engineer by providing high quality technical education through state-of-the-art teaching, learning, research environment and professional requirements for various career growth."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Industry Collaboration",
      description: "To work collaboratively with industry to render knowledge and sustainable technologies towards mutual benefits and opportunities for training and placement."
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Ethical Standards",
      description: "To inculcate high moral, ethical and professional standards among our students and to that upgrade overall personality."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Technological Services",
      description: "To foster knowledge based technological services to satisfy the needs of society and the industry."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-violet-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#184CDB]  to-violet-600 ">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 mt-20 md:mt-0">
              Vision & Mission
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Guiding Principles That Drive Our Excellence
            </p>
            <div className="flex justify-center gap-8 text-purple-200">
              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5" />
                <span>Vision</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                <span>Mission</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span>Quality Policy</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        
        {/* Vision Section */}
        <div className={`bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-violet-700 rounded-2xl mb-6">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Vision</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full mx-auto mb-8"></div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-8 md:p-12">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center ">
              To emerge as a <span className="text-purple-800 font-semibold">center of Excellence in Engineering and Management</span> by imparting intellectual, research development technology and professional skills to serve responsibility in a <span className="text-purple-800 font-semibold">globalized standard</span>.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className={`bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-violet-700 rounded-2xl mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Our mission is built on four fundamental pillars that guide our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {missionPoints.map((point, index) => (
              <div 
                key={index}
                className={`group cursor-pointer transform transition-all duration-500 hover:scale-105 ${
                  activeCard === index ? 'scale-105' : ''
                }`}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className={`h-full bg-gradient-to-br rounded-2xl p-6 shadow-lg transition-all duration-300 ${
                  activeCard === index 
                    ? 'from-purple-100 to-violet-100 shadow-xl' 
                    : 'from-gray-50 to-gray-100 hover:from-purple-50 hover:to-violet-50'
                }`}>
                  <div className={`flex items-center justify-center w-12 h-12 rounded-xl mb-4 transition-all duration-300 ${
                    activeCard === index 
                      ? 'bg-gradient-to-br from-purple-600 to-violet-700 scale-110' 
                      : 'bg-gradient-to-br from-purple-500 to-violet-600'
                  }`}>
                    <div className="text-white">
                      {point.icon}
                    </div>
                  </div>
                  <h3 className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
                    activeCard === index ? 'text-purple-800' : 'text-gray-800'
                  }`}>
                    {point.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {point.description}
                  </p>
                  <div className={`flex items-center mt-4 text-sm font-medium transition-all duration-300 ${
                    activeCard === index ? 'text-purple-700 translate-x-2' : 'text-gray-500'
                  }`}>
                    {/* <span className="mr-2">Learn more</span> */}
                    {/* <ChevronRight className="w-4 h-4" /> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Policy Section */}
        <div className={`bg-gradient-to-r from-purple-800 to-violet-800 rounded-3xl shadow-xl p-8 md:p-12 mb-12 text-white transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-2xl mb-6">
              <Award className="w-8 h-8 text-purple-600" />
            </div>
            <h2 className="text-4xl font-bold mb-4">Quality Policy</h2>
            <div className="w-24 h-1 bg-white bg-opacity-30 rounded-full mx-auto mb-8"></div>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
            <p className="text-lg md:text-xl leading-relaxed text-center text-black font-medium">
              <span className="text-blue-600">Tagore Institute of Engineering and Technology</span> to achieve <span className="font-semibold text-blue-600">global standards of excellence</span> in all endeavors by consistently providing <span className="font-semibold text-blue-600">quality education</span>, imparting skills, leadership with social learning and commitment for ensuring <span className="font-semibold text-blue-600">continual improvement</span>.
            </p>
          </div>
        </div>

        {/* Bottom Call to Action */}
        {/* <div className={`text-center mb-12 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white rounded-2xl shadow-lg p-8 inline-block">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Be Part of Our Vision?</h3>
            <p className="text-gray-600 mb-6 max-w-lg">
              Join us in our journey towards excellence and become a part of the TIET legacy.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-violet-700 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-violet-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Explore Programs
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default VisionMissionPage;