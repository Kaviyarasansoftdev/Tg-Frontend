// import { ArrowRight } from "lucide-react";
// import React from "react";

// export default function AboutSection() {
//   return (
//     <div className="py-20 ">
//       <div className="max-w-screen-2xl mx-auto px-6">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* Left - Image Section */}
//           <div className="relative">
//             {/* Floating Stats Cards */}
//             <div className="absolute top-8 left-8 z-10 p-4 bg-white rounded-xl shadow-lg border border-gray-100 animate-float">
//               <div className="flex gap-3 items-center">
//                 <div>
//                   <div className="text-xs text-gray-500 uppercase tracking-wide">Students Enrolled</div>
//                   <div className="text-2xl font-bold text-gray-900">15,000+</div>
//                 </div>
//                 <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
//                   <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
//                   </svg>
//                 </div>
//               </div>
//             </div>

//             <div className="absolute top-1/2 -left-4 z-10 p-4 bg-white rounded-xl shadow-lg border border-gray-100 animate-float-delayed">
//               <div className="flex gap-3 items-center">
//                 <div>
//                   <div className="text-xs text-gray-500 uppercase tracking-wide">Graduation Rate</div>
//                   <div className="text-2xl font-bold text-green-600">94%</div>
//                 </div>
//                 <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
//                   <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
//                   </svg>
//                 </div>
//               </div>
//               <p className="text-xs text-gray-400 mt-2">↗ 8% from last year</p>
//             </div>

//             <div className="absolute bottom-12 right-8 z-10 p-4 bg-white rounded-xl shadow-lg border border-gray-100 animate-float">
//               <div className="flex gap-3 items-center">
//                 <div>
//                   <div className="text-xs text-gray-500 uppercase tracking-wide">Faculty Excellence</div>
//                   <div className="text-2xl font-bold text-purple-600">98%</div>
//                 </div>
//                 <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
//                   <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
//                   </svg>
//                 </div>
//               </div>
//             </div>

//             {/* Main Image */}
//             <div className="relative rounded-3xl overflow-hidden shadow-2xl">
//               <img
//                 src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
//                 alt="College Campus"
//                 className="w-full h-96 object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
//             </div>
//           </div>

//           {/* Right - Content Section */}
//           <div className="space-y-8">
//             {/* Badge */}
//             <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full">
//               <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
//               <span className="text-sm font-medium text-purple-700 uppercase tracking-wide">About Our College</span>
//             </div>

//             {/* Main Heading */}
//             <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
//               Shaping Tomorrow's
//               <span className="block text-purple-600">Leaders</span>
//               Through Excellence
//             </h2>

//             {/* Description */}
//             <p className="text-lg text-gray-600 leading-relaxed">
//               For over five decades, our institution has been at the forefront of higher education, 
//               fostering innovation, critical thinking, and academic excellence. We provide a 
//               transformative learning experience that prepares students for success in an ever-evolving world.
//             </p>

//             {/* Key Features */}
//             <div className="grid sm:grid-cols-2 gap-6">
//               <div className="flex gap-4">
//                 <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
//                   <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
//                   </svg>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-gray-900 mb-1">World-Class Education</h4>
//                   <p className="text-sm text-gray-600">Comprehensive programs designed by industry experts</p>
//                 </div>
//               </div>

//               <div className="flex gap-4">
//                 <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
//                   <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.20f8 9.326a7.674 7.674 0 00.497-2.326c0-5.014-3.583-9-8-9s-8 3.986-8 9c0 .803.169 1.571.497 2.326a7.672 7.672 0 01.162 1.299c0 .498-.13.97-.36 1.378a9.927 9.927 0 003.39 2.13c.74.187 1.527.28 2.311.28s1.57-.093 2.311-.28a9.927 9.927 0 003.39-2.13c-.23-.408-.36-.88-.36-1.378 0-.441.053-.875.162-1.299z"/>
//                   </svg>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-gray-900 mb-1">Research Excellence</h4>
//                   <p className="text-sm text-gray-600">Cutting-edge research facilities and opportunities</p>
//                 </div>
//               </div>

//               <div className="flex gap-4">
//                 <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
//                   <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
//                   </svg>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-gray-900 mb-1">Career Success</h4>
//                   <p className="text-sm text-gray-600">Industry connections and placement assistance</p>
//                 </div>
//               </div>

//               <div className="flex gap-4">
//                 <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
//                   <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
//                   </svg>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-gray-900 mb-1">Global Network</h4>
//                   <p className="text-sm text-gray-600">International partnerships and exchange programs</p>
//                 </div>
//               </div>
//             </div>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 pt-4">
//               <button className=" group inline-flex items-center gap-3 px-8 py-4 bg-purple-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors cursor-pointer">
//                 Explore Programs
//                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
//               </button>
//               <button className="px-8 py-4 border-2 border-gray-200 text-gray-700 rounded-full font-semibold hover:border-gray-300 hover:bg-gray-50 transition-all">
//                 Campus Tour
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-10px); }
//         }

//         @keyframes float-delayed {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-15px); }
//         }

//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }

//         .animate-float-delayed {
//           animation: float-delayed 3s ease-in-out infinite;
//           animation-delay: 1s;
//         }
//       `}</style>
//     </div>
//   );
// }


import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <div className="py-10 lg:py-20 ">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Image Section */}
          <div className="relative">
            {/* Floating Stats Cards */}
            {/* <div className="absolute top-8 left-8 z-10 p-4 bg-white rounded-xl shadow-lg border border-gray-100 animate-float">
              <div className="flex gap-3 items-center">
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">Established</div>
                  <div className="text-2xl font-bold text-gray-900">2008</div>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                  </svg>
                </div>
              </div>
            </div> */}

            <div className="absolute top-1/2 -left-4 z-10 p-4 bg-white rounded-xl shadow-lg border border-gray-100 animate-float-delayed">
              <div className="flex gap-3 items-center">
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">AICTE Approved</div>
                  <div className="text-2xl font-bold text-green-600">✓</div>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-2">Anna University Affiliated</p>
            </div>

            <div className="absolute bottom-0 lg:bottom-12 -right-4 lg:right-8 z-10 p-4 bg-white rounded-xl shadow-lg border border-gray-100 animate-float">
              <div className="flex gap-3 items-center">
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">Location</div>
                  <div className="text-lg font-bold text-purple-600">Deviyakurichi</div>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-1">Tamil Nadu</p>
            </div>

            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="http://www.tagoreiet.ac.in/images/about.jpg"
                alt="Tagore Institute Campus"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          {/* Right - Content Section */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-sm font-medium text-purple-700 uppercase tracking-wide">About Tagore Institute Of Engineering and Technology</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Pioneering Excellence in
              <span className="block text-purple-600">Engineering &</span>
              Technology Education
            </h2>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-lg text-gray-600 leading-relaxed">
                Southern Educational and Rural Development Society was established in 1986 with a pioneering 
                vision and philanthropic commitment. Tagore Institute of Engineering and Technology, founded 
                in 2008 under this society, stands as an AICTE-approved institution affiliated to Anna University, Chennai.
              </p>
              
              <p className="text-base text-gray-600 leading-relaxed">
                Our institution has brought a Renaissance in Engineering and Technologies through quality education, 
                effective pedagogy, and innovative teaching techniques. We provide students with the finest opportunities 
                for career growth through regular campus interviews, seminars, conferences, workshops, and industrial tours.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">World-Class Infrastructure</h4>
                  <p className="text-sm text-gray-600">Modern facilities with top-flight faculty and excellent placement record</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Innovative Teaching</h4>
                  <p className="text-sm text-gray-600">Job-oriented educational systems suited for the corporate age</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Student Development</h4>
                  <p className="text-sm text-gray-600">Dedicated hostels with uninterrupted internet connectivity</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Analytical Skills</h4>
                  <p className="text-sm text-gray-600">Focus on developing analytical abilities for engineering excellence</p>
                </div>
              </div>
            </div>

            {/* Mission Statement */}
            {/* <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-2xl border border-purple-100">
              <h3 className="font-semibold text-gray-900 mb-2">Our Mission</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                To impart training to students so they become competent and motivated Engineers and Scientists. 
                We celebrate freedom of thought, cultivate vision, encourage growth, and inculcate human values and ethics for society.
              </p>
            </div> */}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-colors cursor-pointer">
                Explore Programs
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <Link to={'/gallery'} className="px-8 py-4 border-2 border-gray-200 text-gray-700 rounded-full font-semibold hover:border-gray-300 hover:bg-gray-50 transition-all">
                Campus Tour
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}