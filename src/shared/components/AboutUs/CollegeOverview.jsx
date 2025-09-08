// import React from 'react';

// const CollegeOverview = () => {
//   return (
//     <div className="bg-white px-6 py-10 max-w-6xl mx-auto text-gray-800">
//       {/* Page Title */}
//       <h1 className="text-4xl font-bold text-center text-blue-800 mb-10">
//         College Overview
//       </h1>

//       {/* Overview Section */}
//       <section className="mb-10">
//         <p className="mb-4 leading-relaxed">
//           <strong>Southern Educational and Rural Development Society</strong> was established in 1986 with a vision to uplift rural education through technical excellence. In 2008, it founded the <strong>Tagore Institute of Engineering and Technology (TIET)</strong>, approved by AICTE, New Delhi and affiliated to Anna University, Chennai.
//         </p>
//         <p className="mb-4 leading-relaxed">
//           TIET is known for its state-of-the-art infrastructure, skilled faculty, consistent academic results, successful placements, and innovation-driven student projects. The college is strategically located on the Deviyakurichi-Attur stretch of the Salem–Chennai highway, providing easy access and a peaceful academic environment.
//         </p>
//         <p className="mb-4 leading-relaxed">
//           The institute encourages student involvement in academics, research, sports, and cultural activities to produce well-rounded graduates. Students from rural backgrounds have shown remarkable academic progress through the college’s inclusive approach and industry-aligned programs.
//         </p>
//         <p className="mb-4 leading-relaxed">
//           TIET continuously focuses on faculty development, research initiatives, and entrepreneurial growth. A culture of self-assessment and quality consciousness drives academic excellence—not to impress the outside world, but to uplift the self-esteem and capability of every individual on campus.
//         </p>
//         <p className="leading-relaxed">
//           With innovative pedagogy, career-focused training, and global standards, Tagore IET has emerged as a modern hub of engineering and technology education—fostering analytical minds and job-ready professionals.
//         </p>
//       </section>

//       {/* Highlights Section */}
//       <section className="mb-10">
//         <h2 className="text-2xl font-semibold text-blue-700 mb-4">Highlights</h2>
//         <ul className="list-disc list-inside space-y-2">
//           <li>The only engineering college in Salem with a DST-approved <strong>Innovation and Entrepreneurship Development Centre (IEDC)</strong>.</li>
//           <li>5-star rated Remote Centre of IIT’s e-Outreach Program.</li>
//           <li>High UG and PG intake: Five UG (B.E.) branches and Three PG (M.E. & MBA) programs.</li>
//           <li>Exclusive Institute for Civil Services preparation, mentored by top-ranked civil servants (current and former).</li>
//         </ul>
//       </section>

//       {/* Other Features Section */}
//       <section>
//         <h2 className="text-2xl font-semibold text-blue-700 mb-4">Other Features</h2>
//         <ul className="list-disc list-inside space-y-2">
//           <li>Highly experienced and dedicated faculty members.</li>
//           <li>Regular English communication classes via Globarana and Hi-Class Software Language Lab.</li>
//           <li>Exclusive aptitude training & personality development programs.</li>
//           <li>Separate physical education and recreational facilities for both genders.</li>
//           <li>Fully managed ITES department handling computing, networking, and digital communications.</li>
//           <li>Professional counselling with two full-time counsellors and faculty mentors (1:20 ratio).</li>
//           <li>5-day orientation program for all freshers.</li>
//           <li>Tagore IET Driving Academy for student skill development.</li>
//           <li>Dedicated power backup with generators.</li>
//           <li>Modern food court and international-standard guest house.</li>
//           <li>Intensive in-house GATE coaching; classes for CAT, MAT, and Bank exams by professionals.</li>
//         </ul>
//       </section>
//     </div>
//   );
// };

// export default CollegeOverview;


import React, { useState } from 'react';
import { ChevronRight, Award, Users, BookOpen, Zap, Globe, Trophy, Star } from 'lucide-react';

const CollegeOverview = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const highlights = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Innovation Hub",
      description: "Only engineering college in Salem with DST-approved IEDC"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "5-Star Rating",
      description: "Remote Centre of IIT's e-Outreach Program"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Comprehensive Programs",
      description: "Five UG (B.E.) branches and Three PG (M.E. & MBA) programs"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Civil Services Institute",
      description: "Exclusive preparation mentored by top-ranked civil servants"
    }
  ];

  const features = [
    "Highly experienced and dedicated faculty members",
    "Regular English communication classes via Globarana and Hi-Class Software Language Lab",
    "Exclusive aptitude training & personality development programs",
    "Separate physical education and recreational facilities for both genders",
    "Fully managed ITES department handling computing, networking, and digital communications",
    "Professional counselling with two full-time counsellors and faculty mentors (1:20 ratio)",
    "5-day orientation program for all freshers",
    "Tagore IET Driving Academy for student skill development",
    "Dedicated power backup with generators",
    "Modern food court and international-standard guest house",
    "Intensive in-house GATE coaching; classes for CAT, MAT, and Bank exams by professionals"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-violet-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#184CDB]  to-violet-600  ">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white  mb-6 mt-20 md:mt-0">
              Tagore Institute of Engineering & Technology
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Fostering Innovation, Excellence, and Rural Development Since 2008
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-purple-200">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                AICTE Approved
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Anna University Affiliated
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Salem, Tamil Nadu
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: 'overview', label: 'Overview', icon: <BookOpen className="w-4 h-4" /> },
            { id: 'highlights', label: 'Highlights', icon: <Star className="w-4 h-4" /> },
            { id: 'features', label: 'Features', icon: <Zap className="w-4 h-4" /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveSection(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeSection === tab.id
                ? 'bg-purple-800 text-white shadow-lg scale-105'
                : 'bg-white text-gray-600 hover:bg-purple-50 hover:text-purple-800 shadow-md'
                }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview Section */}
        {activeSection === 'overview' && (
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12 transform transition-all duration-500">
            <div className="prose prose-lg max-w-none">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
                  <div className="grid md:grid-cols-1 gap-8">
                    <div className="space-y-6">
                      <p className="text-gray-600 leading-relaxed  text-justify break-words">
                        <span className="font-semibold text-purple-800">Southern Educational and Rural Development Society</span> was incepted in the year 1986, with a pioneering zeal and a philanthropic commitment. <span className="font-semibold text-purple-800">Tagore Institute of Engineering and Technology (TIET)</span> is another feather in the cap of the Society was established in the year 2008, approved by AICTE, New Delhi and affiliated to Anna University, Chennai.. The main features of the college comprise world-class infrastructure, top-flight faculty, high pass percentage, excellent placement record and unique student projects. Tagore IET is a mega complex of ample space built-up area overlooking the busy Deviyakurichi-Attur stretch of the Salem-Chennai state highway. The Institution aims to impart Training to the students so that they become competent and motivated Engineers and Scientists. The Institute celebrates freedom of thought, cultivates vision and encourages growth, but also inculcates human values and ethics for the society.
                      </p>
                      <p className="text-gray-600 leading-relaxed  text-justify break-words">
                        Since its inception, Southern Educational and Rural Development Society have been serving the institute for the cause of providing high quality education to the remote suburb students with the international standards to meet and achieve the global requirements.                      </p>
                    </div>
                    <div className="space-y-6">
                      <p className="text-gray-600 leading-relaxed  text-justify break-words">
                        From the period of establishment, Students are encouraged to participate in research activities, sports, cultural, social, co-curricular and extracurricular activates to ensure that they are well rounded graduates. TIET was witnessed for the tremendous growth of its rural based students towards the academic achievements. Hence the Institution caters the technical education, Faculty Development Programme, Development in Research, and entrepreneurship thus demonstrating their ability to shine across geographies and industries. It is believed that introspective and frank self assessment will help the institution to perceive its strength and weakness. The college should improve on its own and should undergo endogenous improvement in quality teaching and learning. Everyone in our campus has become highly quality conscious, definitely not to impress outside world but as a means to strengthen their own self-esteem.                       </p>
                      <p className="text-gray-600 leading-relaxed  text-justify break-words">
                        Tagore IET has brought a Renaissance in Engineering and Technologies with its quality and effective mode of instructions, pedagogy and innovative teaching techniques that provide the students and best opportunities in their career growth. Pedagogy through regular campus interviews, Seminars, Conferences, Workshop, Industrial Tours etc.                      </p>
                      <p className="text-gray-600 leading-relaxed  text-justify break-words">
                        The two campus hostels are taken care of by dedicated staffs and masters. The campus has uninterrupted internet connectivity. Tagore Institute of Engineering and Technology creates opportunities for its students to develop their Analytical Skills, needed most for proper understanding of Engineering, thereby opening up new avenues for future developments. In the Modern and Enabling Infrastructure Environment at Tagore IET, Students experience a Job Oriented Educational Systems that suits the best to the mindsets of the Corporate Age. Tagore IET has developed as a reputed Engineering institution by its innovative teaching techniques that provide the students the finest opportunities in their career growth.
                      </p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <p className="text-gray-600 leading-relaxed  text-justify break-words md:text-center bg-gradient-to-r from-purple-50 to-violet-50 p-6 rounded-2xl">
                      Thus "Tagore IET" stands for pure light, a universal symbol signifying the search for unblemished truth. By allusion, it stands for enlightenment through Mary Immaculate to whom the College is dedicated.                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Highlights Section */}
        {activeSection === 'highlights' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-600 to-violet-700 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {highlight.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{highlight.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Features Section */}
        {activeSection === 'features' && (
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Campus Features & Facilities</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-purple-50 transition-colors duration-300 group">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-purple-600 to-violet-700 rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                    <ChevronRight className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        {/* <div className="bg-gradient-to-r from-purple-800 to-violet-800 rounded-3xl shadow-xl p-8 md:p-12 text-center text-white mb-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Shape Your Future?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join TIET and become part of a legacy that transforms rural dreams into global opportunities.
          </p>
          <button className="bg-white text-purple-800 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            Explore Programs
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default CollegeOverview