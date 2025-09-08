// import React, { useState, useEffect } from 'react';
// import { Building2, Users, Award, BookOpen, Heart, Lightbulb, Globe, Star, Calendar, GraduationCap, ChevronRight, Target, Crown, Shield, Briefcase, Calculator, User, UserCheck } from 'lucide-react';

// const ManagementPage = () => {
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const managementTeam = [
//     // First Row - Top Leadership
//     {
//       id: 1,
//       title: "Bishop",
//       name: "Diocese Leader",
//       icon: <Crown className="w-8 h-8" />,
//       description: "Spiritual and administrative head of the diocese",
//       gradient: "from-blue-600 to-purple-600"
//     },
//     {
//       id: 2,
//       title: "Chairman",
//       name: "Board Chairman",
//       icon: <Shield className="w-8 h-8" />,
//       description: "Strategic oversight and governance",
//       gradient: "from-purple-600 to-violet-600"
//     },
//     {
//       id: 3,
//       title: "Director",
//       name: "Executive Director",
//       icon: <UserCheck className="w-8 h-8" />,
//       description: "Educational programs and initiatives",
//       gradient: "from-indigo-600 to-blue-600"
//     },
//     // Second Row - Administrative Team
//     {
//       id: 4,
//       title: "President",
//       name: "Society President",
//       icon: <User className="w-8 h-8" />,
//       description: "Leading institutional operations",
//       gradient: "from-blue-500 to-purple-500"
//     },
//     {
//       id: 5,
//       title: "Secretary",
//       name: "Administrative Secretary",
//       icon: <Briefcase className="w-8 h-8" />,
//       description: "Administrative excellence and coordination",
//       gradient: "from-purple-500 to-pink-500"
//     },
//     {
//       id: 6,
//       title: "Treasurer",
//       name: "Financial Officer",
//       icon: <Calculator className="w-8 h-8" />,
//       description: "Financial stewardship and resource management",
//       gradient: "from-violet-500 to-blue-500"
//     }
//   ];

//   const achievements = [
//     { year: "1986", milestone: "Society Founded", count: "38+ Years" },
//     { year: "2008", milestone: "Engineering College", count: "16+ Years" },
//     { year: "2024", milestone: "Students Enrolled", count: "5000+" },
//     { year: "Present", milestone: "Staff Members", count: "300+" }
//   ];

//   const coreValues = [
//     {
//       icon: <Star className="w-6 h-6" />,
//       title: "Excellence",
//       description: "Striving for excellence in teaching, research, and administration",
//       color: "blue"
//     },
//     {
//       icon: <Lightbulb className="w-6 h-6" />,
//       title: "Innovation",
//       description: "Creating solutions for real-world problems",
//       color: "purple"
//     },
//     {
//       icon: <Users className="w-6 h-6" />,
//       title: "Inclusivity",
//       description: "Welcoming diverse backgrounds with equal opportunities",
//       color: "indigo"
//     },
//     {
//       icon: <Heart className="w-6 h-6" />,
//       title: "Social Responsibility",
//       description: "Making positive impact on society",
//       color: "violet"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
//       {/* Modern Hero Section */}
//       <div className="relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-violet-700"></div>
//         <div className="absolute inset-0 bg-black opacity-10"></div>
//         <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
//           <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//             <div className="text-center mb-16">
//               <div className="inline-block p-4 bg-white bg-opacity-20 rounded-3xl mb-8 backdrop-blur-sm">
//                 <Building2 className="w-12 h-12 text-white" />
//               </div>
//               <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
//                 Management
//               </h1>
//               <div className="w-32 h-1 bg-white bg-opacity-60 rounded-full mx-auto mb-8"></div>
//               <h2 className="text-3xl md:text-4xl text-blue-100 mb-6 font-light">
//                 Diocese of Deviyakurichi
//               </h2>
//               <p className="text-xl text-white max-w-4xl mx-auto leading-relaxed font-light">
//                 Pioneering Educational Excellence Since 1986 • Transforming Rural Education Through Innovation
//               </p>
//             </div>
//           </div>
//         </div>
        
//         {/* Floating Stats */}
//         <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2">
//           <div className="max-w-6xl mx-auto px-4">
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//               {achievements.map((achievement, index) => (
//                 <div key={index} className="bg-white rounded-2xl shadow-xl p-6 text-center backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
//                   <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
//                     {achievement.count}
//                   </div>
//                   <div className="text-sm font-semibold text-gray-600 mb-1">{achievement.milestone}</div>
//                   <div className="text-xs text-gray-500">{achievement.year}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        
//         {/* Management Team - Two Rows */}
//         <div className={`mb-20 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-800 mb-4">Leadership Team</h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6"></div>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               Meet the visionary leaders who guide our institution toward excellence and innovation
//             </p>
//           </div>

//           {/* First Row - Senior Leadership */}
//           <div className="mb-16">
//             <h3 className="text-2xl font-semibold text-center text-gray-700 mb-8">Senior Leadership</h3>
//             <div className="grid md:grid-cols-3 gap-8">
//               {managementTeam.slice(0, 3).map((member, index) => (
//                 <div 
//                   key={member.id}
//                   className="group cursor-pointer"
//                   onMouseEnter={() => setHoveredCard(member.id)}
//                   onMouseLeave={() => setHoveredCard(null)}
//                 >
//                   <div className={`transform transition-all duration-500 ${hoveredCard === member.id ? 'scale-105 -translate-y-2' : 'hover:scale-102'}`}>
//                     {/* Photo Container */}
//                     <div className="relative mb-6">
//                       <div className="w-72 h-80 mx-auto rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200">
//                         <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
//                           <div className="text-center">
//                             <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${member.gradient} rounded-2xl mb-4`}>
//                               <div className="text-white">
//                                 {member.icon}
//                               </div>
//                             </div>
//                             <p className="text-gray-600 font-medium">{member.title} Photo</p>
//                           </div>
//                         </div>
//                       </div>
                      
//                       {/* Floating Badge */}
//                       <div className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${hoveredCard === member.id ? 'scale-110' : ''}`}>
//                         <div className={`bg-gradient-to-r ${member.gradient} text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg`}>
//                           {member.title.toUpperCase()}
//                         </div>
//                       </div>
//                     </div>
                    
//                     {/* Info Card */}
//                     <div className={`bg-white rounded-2xl shadow-lg p-6 transition-all duration-300 ${hoveredCard === member.id ? 'shadow-xl bg-gradient-to-br from-blue-50 to-purple-50' : ''}`}>
//                       <h4 className={`text-xl font-bold mb-2 transition-colors duration-300 ${hoveredCard === member.id ? 'text-purple-800' : 'text-gray-800'}`}>
//                         {member.name}
//                       </h4>
//                       <p className="text-gray-600 text-center leading-relaxed">
//                         {member.description}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Second Row - Administrative Team */}
//           <div>
//             <h3 className="text-2xl font-semibold text-center text-gray-700 mb-8">Administrative Team</h3>
//             <div className="grid md:grid-cols-3 gap-8">
//               {managementTeam.slice(3, 6).map((member, index) => (
//                 <div 
//                   key={member.id}
//                   className="group cursor-pointer"
//                   onMouseEnter={() => setHoveredCard(member.id)}
//                   onMouseLeave={() => setHoveredCard(null)}
//                 >
//                   <div className={`transform transition-all duration-500 ${hoveredCard === member.id ? 'scale-105 -translate-y-2' : 'hover:scale-102'}`}>
//                     {/* Photo Container */}
//                     <div className="relative mb-6">
//                       <div className="w-72 h-80 mx-auto rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200">
//                         <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50">
//                           <div className="text-center">
//                             <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${member.gradient} rounded-2xl mb-4`}>
//                               <div className="text-white">
//                                 {member.icon}
//                               </div>
//                             </div>
//                             <p className="text-gray-600 font-medium">{member.title} Photo</p>
//                           </div>
//                         </div>
//                       </div>
                      
//                       {/* Floating Badge */}
//                       <div className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${hoveredCard === member.id ? 'scale-110' : ''}`}>
//                         <div className={`bg-gradient-to-r ${member.gradient} text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg`}>
//                           {member.title.toUpperCase()}
//                         </div>
//                       </div>
//                     </div>
                    
//                     {/* Info Card */}
//                     <div className={`bg-white rounded-2xl shadow-lg p-6 transition-all duration-300 ${hoveredCard === member.id ? 'shadow-xl bg-gradient-to-br from-purple-50 to-blue-50' : ''}`}>
//                       <h4 className={`text-xl font-bold mb-2 transition-colors duration-300 ${hoveredCard === member.id ? 'text-blue-800' : 'text-gray-800'}`}>
//                         {member.name}
//                       </h4>
//                       <p className="text-gray-600 text-center leading-relaxed">
//                         {member.description}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Journey Timeline - Horizontal */}
//         <div className={`bg-white rounded-3xl shadow-2xl p-8 md:p-16 mb-20 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Journey</h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6"></div>
//             <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
//               From humble beginnings in 1986 to becoming a leading educational institution, our journey reflects unwavering commitment to educational excellence and social transformation.
//             </p>
//           </div>

//           {/* Horizontal Timeline */}
//           <div className="relative">
//             <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-300 to-violet-400 rounded-full transform -translate-y-1/2"></div>
            
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//               {[
//                 { year: "1986", title: "Foundation", desc: "Society Established", icon: <BookOpen className="w-6 h-6" /> },
//                 { year: "2000", title: "Expansion", desc: "Higher Secondary School", icon: <GraduationCap className="w-6 h-6" /> },
//                 { year: "2006", title: "Growth", desc: "College of Education", icon: <Users className="w-6 h-6" /> },
//                 { year: "2008", title: "Excellence", desc: "Engineering College", icon: <Award className="w-6 h-6" /> }
//               ].map((item, index) => (
//                 <div key={index} className="relative">
//                   <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10 shadow-lg"></div>
                  
//                   <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 pt-12 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
//                     <div className="text-center">
//                       <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-4">
//                         <div className="text-white">
//                           {item.icon}
//                         </div>
//                       </div>
//                       <div className="text-2xl font-bold text-purple-800 mb-2">{item.year}</div>
//                       <h4 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h4>
//                       <p className="text-sm text-gray-600">{item.desc}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Core Values Grid */}
//         <div className={`mb-20 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-800 mb-4">Core Values</h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6"></div>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               The fundamental principles that shape our educational approach and institutional culture
//             </p>
//           </div>

//           <div className="grid md:grid-cols-4 gap-6">
//             {coreValues.map((value, index) => (
//               <div key={index} className="group">
//                 <div className="bg-white rounded-2xl shadow-lg p-8 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50">
//                   <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-${value.color}-500 to-${value.color}-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
//                     <div className="text-white">
//                       {value.icon}
//                     </div>
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-purple-800 transition-colors duration-300">
//                     {value.title}
//                   </h3>
//                   <p className="text-gray-600 leading-relaxed text-sm">
//                     {value.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Philosophy Section */}
//         <div className={`bg-gradient-to-br from-blue-800 via-purple-800 to-violet-900 rounded-3xl shadow-2xl p-8 md:p-16 mb-20 text-white transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-2xl mb-8">
//                 <Target className="w-8 h-8 text-white" />
//               </div>
//               <h2 className="text-4xl font-bold mb-8">Educational Philosophy</h2>
//               <p className="text-xl leading-relaxed mb-6 text-blue-100">
//                 Education transcends knowledge transfer—it cultivates <span className="font-semibold text-white">freedom of thought</span>, encourages growth, and instills social responsibility.
//               </p>
//               <p className="text-lg leading-relaxed text-blue-200">
//                 Our dedicated faculty creates supportive, inclusive environments that foster academic excellence, personal growth, and community engagement.
//               </p>
//             </div>
            
//             <div className="space-y-6">
//               <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6">
//                 <h3 className="text-xl font-semibold mb-4 text-blue-100">Commitment Goals</h3>
//                 <div className="space-y-3">
//                   {[
//                     "Holistic education with practical skills integration",
//                     "Innovation, creativity, and critical thinking culture",
//                     "Inclusive learning environments for all",
//                     "Industry partnerships for real-world experience",
//                     "Social responsibility and community engagement"
//                   ].map((goal, index) => (
//                     <div key={index} className="flex items-start gap-3">
//                       <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
//                       <span className="text-blue-100 text-sm">{goal}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
              
//               <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6">
//                 <h3 className="text-xl font-semibold mb-4 text-purple-100">Future Vision</h3>
//                 <p className="text-blue-100 text-sm leading-relaxed">
//                   Creating a world-class institution that empowers students with knowledge, skills, and values to drive positive global change.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Call to Action */}
//         <div className={`text-center mb-16 transform transition-all duration-1000 delay-1100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//           <div className="bg-white rounded-3xl shadow-xl p-12 max-w-4xl mx-auto">
//             <h3 className="text-3xl font-bold text-gray-800 mb-6">Join Our Legacy</h3>
//             <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
//               Be part of an institution that has been transforming lives and communities for over three decades through quality education and innovative approaches.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
//                 Explore Programs
//               </button>
//               <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300">
//                 Contact Leadership
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ManagementPage;

import React, { useState, useEffect } from 'react';
import { Building2, Users, Award, BookOpen, Heart, Lightbulb, Globe, Star, Calendar, GraduationCap, ChevronDown, Target, ArrowRight } from 'lucide-react';

const ManagementPage = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const managementTeam = [
    // First Row
    [
      { image:"/images/PRESIDENT.png",title: "PRESIDENT", name: "Diocese Leadership", description: "Visionary guidance and strategic direction", icon: <Users className="w-6 h-6" /> },
      { image:"/images/SECRETARY.jpg",title: "SECRETARY", name: "Administrative Head", description: "Operations and policy implementation", icon: <Award className="w-6 h-6" /> },
      { image:"/images/TREASURER.jpg",title: "TREASURER", name: "Financial Head", description: "Resource management and planning", icon: <Building2 className="w-6 h-6" /> }
    ],
    // Second Row
    [
      {image:"/images/VICE-PRESIDENT-1.jpg", title: "VICE PRESIDENT", name: "Academic Head", description: "Educational leadership and excellence", icon: <BookOpen className="w-6 h-6" /> },
      {image:"/images/VICE-PRESIDENT-2.jpg", title: "VICE PRESIDENT", name: "Assistant Academic Head", description: "Supporting academic operations", icon: <GraduationCap className="w-6 h-6" /> },
      { image:"/images/JOIN-SECRETARY-1.jpg",title: "JOIN SECRETARY", name: "Faculty Head", description: "Faculty development and coordination", icon: <Star className="w-6 h-6" /> },
      { image:"/images/JOINT SECRETARY-2.jpg",title: "JOIN SECRETARY", name: "Faculty Head", description: "Faculty development and coordination", icon: <Star className="w-6 h-6" /> }
    ]
  ];

  const achievements = [
    { year: "1986", milestone: "Foundation Establishment", count: "1st Institution" },
    { year: "2000", milestone: "Educational Expansion", count: "2nd Institution" },
    { year: "2006", milestone: "Teacher Development", count: "3rd Institution" },
    { year: "2008", milestone: "Engineering Excellence", count: "4th Institution" }
  ];

  const coreValues = [
    { icon: <Star className="w-6 h-6" />, title: "Excellence", description: "Striving for excellence in teaching, research, and administration" },
    { icon: <Lightbulb className="w-6 h-6" />, title: "Innovation", description: "Creating innovative solutions for real-world problems" },
    { icon: <Users className="w-6 h-6" />, title: "Inclusivity", description: "Welcoming diverse backgrounds with equal opportunities" },
    { icon: <Heart className="w-6 h-6" />, title: "Social Impact", description: "Education for positive societal transformation" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
      {/* Modern Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#184CDB]  to-violet-600 "></div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        
        {/* Geometric Background Pattern */}
        {/* <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-white rounded-full"></div>
          <div className="absolute top-40 right-40 w-24 h-24 border border-white rounded-lg rotate-45"></div>
          <div className="absolute bottom-40 left-40 w-20 h-20 border border-white rounded-full"></div>
        </div> */}
        
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-center mb-12">
              {/* <div className="inline-block p-4 bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl mb-8">
                <Building2 className="w-12 h-12 text-white" />
              </div> */}
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 mt-20 md:mt-0">
                Management
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto mb-8"></div>
              <h2 className="text-3xl md:text-4xl text-blue-100 mb-6 font-light">
                Diocese of Deviyakurichi
              </h2>
              <p className="text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
                Leading Educational Excellence with Three Decades of Commitment to Rural Development
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Achievements Banner */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                {achievement.year}
              </div>
              <div className="text-lg font-semibold text-gray-800 mb-2">{achievement.count}</div>
              <div className="text-sm text-gray-600 group-hover:text-purple-600 transition-colors duration-300">
                {achievement.milestone}
              </div>
            </div>
          ))}
        </div>

        {/* Management Team - Two Rows */}
        <div className={`mb-16 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Leadership Team</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Distinguished leaders committed to educational excellence and social transformation
            </p>
          </div>

          {/* First Row - Top Leadership */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-center text-gray-700 mb-8">Executive Leadership</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {managementTeam[0].map((member, index) => (
                <div 
                  key={index}
                  className="group cursor-pointer"
                  onMouseEnter={() => setActiveCard(`top-${index}`)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <div className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 flex flex-col h-full ${
                    activeCard === `top-${index}` ? 'shadow-2xl scale-105' : 'hover:shadow-xl'
                  }`}>
                    {/* Photo Container */}
                    <div className="">
                      <div className="  bg-white flex items-center justify-center">
                        <div className="max-w-[500px] w-full">
                          {/* {member.icon}
                          <p className="text-sm text-gray-600 mt-2">Photo</p> */}
                          <img src={member.image} alt={member.name} className='object-contain  '/>
                        </div>
                      </div>
                      {/* Role Badge */}
                      <div className="">
                        <div className={`bg-gradient-to-r text-white text-center py-5 font-bold text-sm tracking-wider ${
                          index === 0 ? 'from-blue-600 to-blue-700' :
                          index === 1 ? 'from-purple-600 to-purple-700' :
                          'from-indigo-600 to-indigo-700'
                        }`}>
                          {member.title}
                        </div>
                      </div>
                    </div>
                    
                    {/* Member Info */}
                    {/* <div className="p-6 relative bg-white">
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                    </div> */}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Academic Leadership */}
          <div>
            <h3 className="text-2xl font-semibold text-center text-gray-700 mb-8">Academic Leadership</h3>
            <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-8">
              {managementTeam[1].map((member, index) => (
                <div 
                  key={index}
                  className="group cursor-pointer"
                  onMouseEnter={() => setActiveCard(`bottom-${index}`)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <div className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 flex flex-col h-full ${
                    activeCard === `bottom-${index}` ? 'shadow-2xl scale-105' : 'hover:shadow-xl'
                  }`}>
                    {/* Photo Container */}
                    <div className="">
                      {/* <div className="w-full h-64 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                        <div className="text-center">
                          {member.icon}
                          <p className="text-sm text-gray-600 mt-2">Photo</p>
                        </div>
                      </div> */}
                      <div className="  bg-white flex items-center justify-center">
                        <div className="max-w-[500px] w-full">
                          {/* {member.icon}
                          <p className="text-sm text-gray-600 mt-2">Photo</p> */}
                          <img src={member.image} alt={member.name} className='object-contain  '/>
                        </div>
                      </div>
                      {/* Role Badge */}
                      <div className="">
                        <div className={`bg-gradient-to-r text-white text-center py-5 font-bold text-sm tracking-wider ${
                          index === 0 ? 'from-purple-600 to-purple-700' :
                          index === 1 ? 'from-blue-600 to-blue-700' :
                          'from-indigo-600 to-indigo-700'
                        }`}>
                          {member.title}
                        </div>
                      </div>
                    </div>
                    
                    {/* Member Info */}
                    {/* <div className="p-6 relative bg-white">
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                    </div> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Journey Story */}
        <div className={`bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-16 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Journey</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-8"></div>
              <p className="text-lg text-gray-600 leading-relaxed  text-justify break-words mb-6">
                As we reflect on our journey over the past three decades, we are filled with a sense of pride and accomplishment at the Southern Educational and Rural Development Society.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed  text-justify break-words mb-6">
                Founded in <span className="font-semibold text-purple-800">1986 with pioneering zeal and philanthropic commitment</span>, our institution has grown from strength to strength, driven by an unrelenting passion for education and a desire to make a positive impact on society.
              </p>
              <button 
                onClick={() => setShowMore(!showMore)}
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-purple-600 transition-colors duration-300"
              >
                {showMore ? 'Show Less' : 'Read More'}
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showMore ? 'rotate-180' : ''}`} />
              </button>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800">5000+</div>
                    <div className="text-sm text-gray-600">Students</div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">Across all our educational institutions</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800">300+</div>
                    <div className="text-sm text-gray-600">Faculty & Staff</div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">Dedicated professionals committed to excellence</p>
              </div>
            </div>
          </div>

          {/* Expandable Content */}
          <div className={`transition-all duration-500 overflow-hidden ${showMore ? 'max-h-96 opacity-100 mt-8' : 'max-h-0 opacity-0'}`}>
            <div className="pt-8 border-t border-gray-200">
              <p className="text-lg text-gray-600 leading-relaxed  text-justify break-words mb-6">
                Our first milestone was the establishment of <span className="font-semibold text-blue-800">Tagore Matriculation Higher Secondary School in 1986</span>, which marked the beginning of our journey towards providing quality education to students.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed  text-justify break-words">
                Today, we are proud to have become <span className="font-semibold text-purple-800">one of the largest educational societies in the region</span>, with our latest achievement being the establishment of Tagore Institute of Engineering and Technology.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values with Modern Cards */}
        <div className={`mb-16 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Core Values</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">The principles that guide our educational mission</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl shadow-lg p-6 h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                    index % 2 === 0 
                      ? 'bg-gradient-to-br from-blue-500 to-blue-600' 
                      : 'bg-gradient-to-br from-purple-500 to-purple-600'
                  }`}>
                    <div className="text-white">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 group-hover:text-purple-800 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy Section */}
        {/* <div className={`bg-gradient-to-br from-blue-800 via-purple-800 to-indigo-900 rounded-3xl shadow-2xl p-8 md:p-12 mb-16 text-white transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold">Educational Philosophy</h2>
              </div>
              
              <p className="text-lg leading-relaxed mb-6 text-blue-100">
                At Tagore Institute of Engineering and Technology, we believe that education is not just about imparting knowledge, but also about <span className="font-semibold text-white">cultivating freedom of thought</span>, encouraging growth, and instilling a sense of social responsibility.
              </p>
              
              <div className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors duration-300 cursor-pointer">
                <span className="font-medium">Explore Our Programs</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-semibold text-white mb-2">Holistic Development</h4>
                <p className="text-blue-100 text-sm">Integrating academic excellence with personal growth and community engagement</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-semibold text-white mb-2">Innovation Focus</h4>
                <p className="text-blue-100 text-sm">Fostering creativity, critical thinking, and real-world problem solving</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-semibold text-white mb-2">Social Impact</h4>
                <p className="text-blue-100 text-sm">Building partnerships for meaningful contributions to society</p>
              </div>
            </div>
          </div>
        </div> */}

        {/* Vision Statement */}
        <div className={`text-center transform transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-8">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Vision for Tomorrow</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 leading-relaxed text-justify md:text-center break-words mb-8">
                Our vision is to create a <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">world-class educational institution</span> that provides holistic education to students from diverse backgrounds, empowering them with knowledge, skills, and values to make a positive impact on the world.
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Join Our Mission
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagementPage;