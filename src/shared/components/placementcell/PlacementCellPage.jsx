// import { ArrowRight, MapPin, Users, Award, BookOpen, Cpu, Code, Zap, Calendar, Mail, Phone, Globe, Building, TrendingUp, Target, Briefcase, GraduationCap, Star, FileCheck, ChevronRight, Brain, Factory, UserCheck, MessageSquare, Clock, MessageCircle, Building2, Heart } from "lucide-react";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import apiurl from "../../services/apiendpoint/apiendpoint";

// export default function PlacementCellPage({ placementimage }) {
//   const [activeTab, setActiveTab] = useState('overview');

//   // Placement Cell Data
//   const placementData = {
//     name: "Placement Cell",
//     shortName: "TPC",
//     established: "2008",
//     description: ['The Training and Placement Cell plays a crucial role in scouting for and locating job opportunities for the young graduates and post graduates passing out from the college by keeping cordial relationship with reputed industries. The cell functions under the supervision of full time placement officers and operates the entire year to arrange training and skill development programs to students by experts from industries. The cell interacts with reputed organizations and arranges campus interviews to final year students. The Department placement coordinators assist the cell during campus interviews and training programs. The cell also plays a very crucial role in counseling and guiding the students to become as successful entrepreneurs.',
//       'Our Institution inculcates the very idea of preparing students to face various technical and nontechnical issues. Establishment of Training and Placement Cell was a part of this mission so as to provide students with the platform to compete and succeed in the imperiousness and competitiveness of global world. Activities of Training and Placement Cell Centre on making strong relationship with Industries and to exploit the relationship for personality and skill development of the graduating students through various interactive Programs. ',
//       'Training and Placement Cell strives to provide the best possible training and placement opportunities for the students. Students of Our College are receiving summer training in reputed Industries. We look forward for stronger collaboration with Industries so that deserving students can get the best platform to nurture their talents and improve their credibility for better placement prospects. Currently T&P Cell is working on framing out newer policies to strengthen Industry – Institute relationship so as to attract more and more number of companies.'
//     ],
//     vision: "Reduce the gap between candidate skills and knowledge and industry needs by producing competent resources equipped with personality development and campus recruitment training, as well as professional etiquette, and providing them with the best opportunities to thrive in their careers.",
//     mission: "The Training and Placement Team of TIET is committed to achieving 100% placements and takes no shortcuts when creating the annual recruitment schedule by inviting HR Teams from various corporations to ensure that the campus-recruitment process runs smoothly. For the benefit of the students having trouble in interviews, numerous training programs, workshops, seminars, industry interactions, and even industry visits are conducted concurrently with routine one-on-one counseling.",
//     stats: {
//       students: "2,500+",
//       companies: "150+",
//       placements: "95%",
//       packages: "₹12 LPA"
//     },
//     heroImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
//     features: [
//       {
//         icon: <Briefcase className="w-6 h-6" />,
//         title: "Industry Partnerships",
//         description: "Strong relationships with 150+ leading companies across various sectors"
//       },
//       {
//         icon: <TrendingUp className="w-6 h-6" />,
//         title: "High Placement Rate",
//         description: "Consistent 95%+ placement record with competitive salary packages"
//       },
//       {
//         icon: <Target className="w-6 h-6" />,
//         title: "Skill Development",
//         description: "Comprehensive training programs covering technical and soft skills"
//       },
//       {
//         icon: <GraduationCap className="w-6 h-6" />,
//         title: "Career Guidance",
//         description: "Personalized career counseling and mentorship programs"
//       }
//     ],
//     officer: {
//       name: "Dr. C. B SIVAPARTHIPAN",
//       designation: "Placement Officer",
//       institution: "Tagore Institute of Engineering and Technology",
//       address: "Deviyakurichi Post - 636112, Attur Tk, Salem Dt.",
//       mobile: "9786400274",
//       contactHours: "9.30 A.M to 4.30 P.M.",
//       email: "tagoreplacement@yahoo.in",
//       website: "http://www.tagoreiet.ac.in/placement.php",
//       image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
//     },
//     coordinators: [
//       { department: "AI&DS", faculty: "Mr.M.SURESH", designation: "Assistant Professor" },
//       { department: "AI&ML", faculty: "Mr.P.SURYAPRAKASH", designation: "Assistant Professor" },
//       { department: "CIVIL", faculty: "Mrs.M.S.SIVASAKTHI", designation: "Assistant Professor" },
//       { department: "CSE", faculty: "Mrs.C.SATHYA", designation: "Assistant Professor" },
//       { department: "ECE", faculty: "Mrs.P.SRIDEVI", designation: "Assistant Professor" },
//       { department: "EEE", faculty: "Mr.R.ANANDRAJ", designation: "Assistant Professor" },
//       { department: "MECH", faculty: "Mr.R.CHINNADURAI", designation: "Assistant Professor" },
//       { department: "MBA", faculty: "Mrs.T.SUBASHINI", designation: "Assistant Professor" },
//       { department: "S & H", faculty: "Dr.S.ELAVARASAN", designation: "Assistant Professor" }
//     ],
//     activities: [
//       "Career Awareness Sessions",
//       "Aptitude Tests & Group Discussions",
//       "Mock Interviews & Interview Preparation",
//       "Industrial Visits & In-plant Training",
//       "Guest Lectures from Industry Experts",
//       "Soft Skills Development Programs",
//       "Personality Development Workshops",
//       "Resume Building & LinkedIn Profile Optimization"
//     ],
//     trainingAreas: [
//       "Interpersonal Skills",
//       "Intrapersonal Skills",
//       "Communication Skills",
//       "Technical Skills",
//       "Aptitude & Problem Solving",
//       "Reasoning & Logical Thinking",
//       "Motivation & Leadership"
//     ],
//     recruiters: [
//       { name: "Infosys", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
//       { name: "TCS", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
//       { name: "HCL Technologies", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
//       { name: "Wipro", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
//       { name: "Cognizant", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
//       { name: "Accenture", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" }
//     ],
//     gallery: [
//       {
//         image: "https://images.unsplash.com/photo-1516321310762-479437144403?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//         caption: "Career Awareness Session 2024"
//       },
//       {
//         image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//         caption: "Mock Interview Workshop"
//       },
//       {
//         image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//         caption: "Industry Visit 2023"
//       },
//       {
//         image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//         caption: "Guest Lecture by Industry Expert"
//       },
//       {
//         image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//         caption: "Soft Skills Training Program"
//       },
//       {
//         image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//         caption: "Resume Building Workshop"
//       }
//     ]
//   };

//   const trainingAreas = [
//     {
//       icon: <Users className="w-6 h-6" />,
//       title: "Career Awareness Sessions",
//       description: "Comprehensive guidance on career paths and opportunities"
//     },
//     {
//       icon: <Brain className="w-6 h-6" />,
//       title: "Aptitude Tests & Assessments",
//       description: "Group discussions and interviews to excel in recruitment"
//     },
//     {
//       icon: <Factory className="w-6 h-6" />,
//       title: "Industry Interaction",
//       description: "In-plant training, industrial visits, projects & guest lectures"
//     }
//   ];

//   const majorFunctions = [
//     {
//       icon: <Target className="w-6 h-6" />,
//       title: "Campus & Off-Campus Selection",
//       description: "Planning and organizing comprehensive recruitment activities"
//     },
//     {
//       icon: <UserCheck className="w-6 h-6" />,
//       title: "Specialist Sessions",
//       description: "Expert speakers for self-enhancement and confidence building"
//     },
//     {
//       icon: <TrendingUp className="w-6 h-6" />,
//       title: "Individual Development Program",
//       description: "Regular soft skill and personality development for II year to final year students"
//     },
//     {
//       icon: <FileCheck className="w-6 h-6" />,
//       title: "Aptitude Testing",
//       description: "Department-wise aptitude tests for comprehensive evaluation"
//     },
//     {
//       icon: <MessageSquare className="w-6 h-6" />,
//       title: "Interview Preparation",
//       description: "Mock interviews and group discussions for interview readiness"
//     }
//   ];

//   const trainingPrograms = [
//     {
//       icon: <Users className="w-6 h-6" />,
//       title: "Corporate Leader Interactions",
//       description: "Regular sessions with industry leaders and professionals"
//     },
//     {
//       icon: <Brain className="w-6 h-6" />,
//       title: "Aptitude & Reasoning Training",
//       description: "Comprehensive training in quantitative, logical, and verbal reasoning"
//     },
//     {
//       icon: <Code className="w-6 h-6" />,
//       title: "Technical Training Programs",
//       description: "Expert-led technical skill development sessions"
//     },
//     {
//       icon: <MessageCircle className="w-6 h-6" />,
//       title: "Communication Skills Development",
//       description: "Language lab sessions for enhanced communication abilities"
//     },
//     {
//       icon: <Briefcase className="w-6 h-6" />,
//       title: "Mock Interviews",
//       description: "Professional interview practice aligned with corporate expectations"
//     }
//   ];

//   const yearWisePrograms = [
//     {
//       year: "I Year",
//       color: "from-green-500 to-emerald-600",
//       bgColor: "bg-green-50",
//       textColor: "text-green-700",
//       objectives: [
//         "Transition from school to college",
//         "Identify strengths and build confidence",
//         "Develop basic communication skills"
//       ]
//     },
//     {
//       year: "II Year",
//       color: "from-blue-500 to-cyan-600",
//       bgColor: "bg-blue-50",
//       textColor: "text-blue-700",
//       objectives: [
//         "Prepare for corporate environment",
//         "Motivational training sessions",
//         "Industrial visits and guest lectures"
//       ]
//     },
//     {
//       year: "III Year",
//       color: "from-purple-500 to-indigo-600",
//       bgColor: "bg-purple-50",
//       textColor: "text-purple-700",
//       objectives: [
//         "Intensive placement preparation",
//         "Regular aptitude training",
//         "Group discussions and mock interviews"
//       ]
//     },
//     {
//       year: "Final Year",
//       color: "from-orange-500 to-red-600",
//       bgColor: "bg-orange-50",
//       textColor: "text-orange-700",
//       objectives: [
//         "Map organizational expectations",
//         "Align competencies with industry needs",
//         "Direct student-corporate interactions"
//       ]
//     }
//   ];

//   const companies = [
//     {
//       name: "Nitroware Technologies Pvt. Ltd.",
//       category: "Software Technology",
//       icon: <Code className="w-6 h-6" />
//     },
//     {
//       name: "Nextskill Technologies Pvt. Ltd.",
//       category: "Technology Solutions",
//       icon: <Cpu className="w-6 h-6" />
//     },
//     {
//       name: "Zeekers Employment Private Limited (i-Lesa)",
//       category: "Employment Services",
//       icon: <Users className="w-6 h-6" />
//     },
//     {
//       name: "Ascent24 Technologies",
//       category: "Digital Solutions",
//       icon: <Code className="w-6 h-6" />
//     },
//     {
//       name: "Techvolt Software Appin Technology",
//       category: "Software Development",
//       icon: <Cpu className="w-6 h-6" />
//     },
//     {
//       name: "Litz Tech India Private Limited",
//       category: "Technology Services",
//       icon: <Building2 className="w-6 h-6" />
//     },
//     {
//       name: "Vibrace Technologies",
//       category: "Tech Innovation",
//       icon: <Code className="w-6 h-6" />
//     },
//     {
//       name: "Coimbatore Manufacturing Innovations (CMI)",
//       category: "Manufacturing",
//       icon: <Factory className="w-6 h-6" />
//     },
//     {
//       name: "Texmo Industries",
//       category: "Industrial Solutions",
//       icon: <Factory className="w-6 h-6" />
//     },
//     {
//       name: "Steel Authority of India Limited, Salem",
//       category: "Steel & Manufacturing",
//       icon: <Factory className="w-6 h-6" />
//     },
//     {
//       name: "Salzer Electronics Ltd.",
//       category: "Electronics",
//       icon: <Zap className="w-6 h-6" />
//     },
//     {
//       name: "Lakshmi Electrical and Control",
//       category: "Electrical Systems",
//       icon: <Zap className="w-6 h-6" />
//     },
//     {
//       name: "Pricol Ltd.",
//       category: "Automotive Electronics",
//       icon: <Zap className="w-6 h-6" />
//     },
//     {
//       name: "Power Best Electricals",
//       category: "Electrical Solutions",
//       icon: <Zap className="w-6 h-6" />
//     },
//     {
//       name: "Super Labs",
//       category: "Laboratory Services",
//       icon: <Award className="w-6 h-6" />
//     },
//     {
//       name: "ABT Consumer Products",
//       category: "Consumer Goods",
//       icon: <Building2 className="w-6 h-6" />
//     },
//     {
//       name: "B-Arm Medical Technologies Private Limited",
//       category: "Medical Technology",
//       icon: <Heart className="w-6 h-6" />
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-white">

//       <div className="text-center space-y-6 py-16 ">
//         <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full">
//           <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
//           <span className="text-sm font-medium text-orange-700 uppercase tracking-wide">
//             Career Excellence Center
//           </span>
//         </div>

//         <p className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
//           Placement Cell
//           <span className="block text-orange-600">And Training Center</span>
//         </p>
//       </div>

//       <div className='max-w-screen-2xl mx-auto px-6'>
//         {/* <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
//           <FileCheck className="w-4 h-4 mr-2" />
//           About
//         </div>

//         <h2 className="text-4xl font-bold text-gray-900 mb-6">
//           About Placement
//         </h2> */}

//         {placementData.description.map((para, i) => (
//           <p key={i} className="text- text-gray-700 mb-8 leading-relaxed w-full">
//             {para}
//           </p>))}
//       </div>

//       {/* Navigation Tabs */}
//       <div className="sticky top-14 md:top-16 lg:top-28 bg-white shadow-sm z-40 border-b">
//         <div className="max-w-screen-2xl mx-auto px-6">
//           <div className="flex overflow-x-auto"
//             style={{
//               scrollbarWidth: 'none',
//               msOverflowStyle: 'none',
//             }}>
//             {[
//               { id: 'overview', label: 'Overview' },
//               { id: 'team', label: 'Team' },
//               { id: 'activities', label: 'Activities' },
//               { id: 'internship', label: 'Internship' },
//               // { id: 'training', label: 'Training' },
//               { id: 'recruiters', label: 'Recruiters' },
//               { id: 'gallery', label: 'Gallery' }
//             ].map((tab) => (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`px-6 py-4 font-semibold transition-colors whitespace-nowrap ${activeTab === tab.id
//                   ? 'text-purple-600 border-b-3 border-purple-600 bg-purple-50'
//                   : 'text-gray-600 hover:text-purple-600 hover:bg-gray-50'
//                   }`}
//               >
//                 {tab.label}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Content Sections */}
//       <div className="max-w-screen-2xl mx-auto px-6 py-16">
//         {/* Overview Tab */}
//         {activeTab === 'overview' && (
//           <div className="space-y-20">
//             {/* Vision & Mission */}
//             <div className="grid lg:grid-cols-2 gap-16">
//               <div className="space-y-6">
//                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full">
//                   <div className="w-2 h-2 bg-green-500 rounded-full"></div>
//                   <span className="text-sm font-medium text-green-700 uppercase tracking-wide">Our Vision</span>
//                 </div>
//                 <h3 className="text-3xl font-bold text-gray-900">Shaping Futures</h3>
//                 <p className="text-lg text-gray-600 leading-relaxed">{placementData.vision}</p>
//               </div>

//               <div className="space-y-6">
//                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
//                   <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
//                   <span className="text-sm font-medium text-blue-700 uppercase tracking-wide">Our Mission</span>
//                 </div>
//                 <h3 className="text-3xl font-bold text-gray-900">Empowering Success</h3>
//                 <p className="text-lg text-gray-600 leading-relaxed">{placementData.mission}</p>
//               </div>
//             </div>

//             <div className="bg-gray-50 py-16">
//               <div className="max-w-7xl mx-auto px-6">
//                 {/* Header */}
//                 <div className="text-center mb-16">
//                   <h2 className="text-4xl font-bold text-gray-900 mb-4">
//                     Placement Activities
//                   </h2>
//                   <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                     Comprehensive training and development programs designed to prepare students for successful careers
//                   </p>
//                 </div>

//                 {/* Student Training Areas */}
//                 <div className="mb-16">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
//                     Student Training Areas
//                   </h3>
//                   <div className="grid md:grid-cols-3 gap-8">
//                     {trainingAreas.map((area, index) => (
//                       <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
//                         <div className="flex items-center mb-4">
//                           <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4">
//                             {area.icon}
//                           </div>
//                           <h4 className="text-lg font-semibold text-gray-900">
//                             {area.title}
//                           </h4>
//                         </div>
//                         <p className="text-gray-600 leading-relaxed">
//                           {area.description}
//                         </p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Major Functions */}
//                 <div>
//                   <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
//                     Major Functions of Training & Placement Cell
//                   </h3>
//                   <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {majorFunctions.map((func, index) => (
//                       <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
//                         <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white mb-4">
//                           {func.icon}
//                         </div>
//                         <h4 className="text-lg font-semibold text-gray-900 mb-3">
//                           {func.title}
//                         </h4>
//                         <p className="text-gray-600 leading-relaxed">
//                           {func.description}
//                         </p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//               </div>
//             </div>

//           </div>
//         )}

//         {/* Team Tab */}
//         {activeTab === 'team' && (
//           <div className="space-y-16">
//             <div className="text-center max-w-3xl mx-auto">
//               <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6">
//                 <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
//                 <span className="text-sm font-medium text-purple-700 uppercase tracking-wide">Our Team</span>
//               </div>
//               <h2 className="text-4xl font-bold text-gray-900 mb-4">Placement Leadership</h2>
//               <p className="text-lg text-gray-600">Dedicated professionals committed to your career success</p>
//             </div>

//             {/* Placement Officer */}
//             <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-12">
//               <div className="grid lg:grid-cols-2 gap-12 items-center">
//                 <div className="space-y-6">
//                   <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-full">
//                     <Star className="w-4 h-4" />
//                     <span className="text-sm font-medium uppercase tracking-wide">Placement Officer</span>
//                   </div>

//                   <div>
//                     <h3 className="text-3xl font-bold text-gray-900 mb-2">{placementData.officer.name}</h3>
//                     <p className="text-xl text-purple-600 font-semibold mb-4">{placementData.officer.designation}</p>
//                     <p className="text-gray-600 mb-6">{placementData.officer.institution}</p>
//                   </div>

//                   <div className="space-y-3">
//                     <div className="flex items-center gap-3 text-gray-600">
//                       <MapPin className="w-5 h-5 text-purple-600" />
//                       <span>{placementData.officer.address}</span>
//                     </div>
//                     <div className="flex items-center gap-3 text-gray-600">
//                       <Phone className="w-5 h-5 text-purple-600" />
//                       <span>{placementData.officer.mobile} ({placementData.officer.contactHours})</span>
//                     </div>
//                     <div className="flex items-center gap-3 text-gray-600">
//                       <Mail className="w-5 h-5 text-purple-600" />
//                       <Link to={`mailto:${placementData.officer.email}`} className="hover:text-purple-600 transition-colors">
//                         {placementData.officer.email}
//                       </Link>
//                     </div>
//                     <div className="flex items-center gap-3 text-gray-600">
//                       <Globe className="w-5 h-5 text-purple-600" />
//                       <Link to={placementData.officer.website} className="hover:text-purple-600 transition-colors">
//                         {placementData.officer.website}
//                       </Link>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex justify-center">
//                   <img
//                     src={placementData.officer.image}
//                     alt={placementData.officer.name}
//                     className="w-80 h-80 object-cover rounded-2xl shadow-lg"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Placement Coordinators */}
//             <div className="space-y-8">
//               <h3 className="text-3xl font-bold text-gray-900 text-center">Department Coordinators</h3>

//               <div className="overflow-x-auto">
//                 <table className="w-full bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
//                   <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
//                     <tr>
//                       <th className="px-6 py-4 text-left font-semibold">Department</th>
//                       <th className="px-6 py-4 text-left font-semibold">Faculty Name</th>
//                       <th className="px-6 py-4 text-left font-semibold">Designation</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {placementData.coordinators.map((coordinator, index) => (
//                       <tr key={index} className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
//                         <td className="px-6 py-4">
//                           <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-semibold text-sm">
//                             {coordinator.department}
//                           </span>
//                         </td>
//                         <td className="px-6 py-4 font-semibold text-gray-900">{coordinator.faculty}</td>
//                         <td className="px-6 py-4 text-gray-600">{coordinator.designation}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Activities Tab */}
//         {activeTab === 'activities' && (
//           <div className="space-y-16">
//             <div className="text-center max-w-3xl mx-auto">
//               <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full mb-6">
//                 <div className="w-2 h-2 bg-green-500 rounded-full"></div>
//                 <span className="text-sm font-medium text-green-700 uppercase tracking-wide">Our Activities</span>
//               </div>
//               <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Training Programs</h2>
//               <p className="text-lg text-gray-600">Preparing students for successful careers through diverse activities and programs</p>
//             </div>

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {placementData.activities.map((activity, index) => (
//                 <div key={index} className="group p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
//                   <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform duration-300">
//                     <Zap className="w-8 h-8" />
//                   </div>
//                   <h4 className="text-xl font-bold text-gray-900 mb-3">{activity}</h4>
//                   <p className="text-gray-600 leading-relaxed">Comprehensive programs designed to enhance student capabilities and industry readiness.</p>
//                 </div>
//               ))}
//             </div>

//             {/* Action Plans by Year */}
//             <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12">
//               <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Year-wise Action Plans</h3>

//               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//                 {[
//                   {
//                     year: "I Year",
//                     focus: "Foundation Building",
//                     activities: ["Transition from school to college", "Strength identification", "Communication confidence building"]
//                   },
//                   {
//                     year: "II Year",
//                     focus: "Corporate Readiness",
//                     activities: ["Corporate environment preparation", "Motivational training", "Industrial visits and guest lectures"]
//                   },
//                   {
//                     year: "III Year",
//                     focus: "Placement Preparation",
//                     activities: ["Regular aptitude training", "Group discussions", "Mock interviews and practice sessions"]
//                   },
//                   {
//                     year: "Final Year",
//                     focus: "Career Launch",
//                     activities: ["Organizational expectation mapping", "Student-corporate interactions", "Final placement activities"]
//                   }
//                 ].map((plan, index) => (
//                   <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
//                     <div className="text-center mb-4">
//                       <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg mb-3 mx-auto">
//                         {plan.year.split(' ')[0]}
//                       </div>
//                       <h4 className="text-lg font-bold text-gray-900">{plan.year}</h4>
//                       <p className="text-blue-600 font-semibold text-sm">{plan.focus}</p>
//                     </div>

//                     <ul className="space-y-2">
//                       {plan.activities.map((activity, idx) => (
//                         <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
//                           <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
//                           {activity}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Training Tab */}
//         {/* {activeTab === 'training' && (
//           <div className="bg-white py-16">
//             <div className="max-w-7xl mx-auto px-6">
            
//               <div className="text-center mb-16">
//                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 rounded-full mb-6">
//                   <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
//                   <span className="text-sm font-medium text-indigo-700 uppercase tracking-wide">
//                     Professional Development
//                   </span>
//                 </div>
//                 <h2 className="text-4xl font-bold text-gray-900 mb-6">
//                   Comprehensive Training Programs
//                 </h2>
//                 <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
//                   Quality training to make students readily deployable by industries and meet the growing demand
//                   for trained manpower in the competitive knowledge industry. We bridge the gap between industry
//                   expectations and individual caliber through specialized programs.
//                 </p>

               
//                 <div className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full">
//                   <Clock className="w-5 h-5 mr-2" />
//                   <span className="font-semibold">170+ Hours of Campus Placement Training</span>
//                 </div>
//               </div>

            
//               <div className="mb-20">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center">
//                   Our Training Approach
//                 </h3>
//                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                   {trainingPrograms.map((program, index) => (
//                     <div key={index} className="group bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-indigo-100">
//                       <div className="w-12 h-12 bg-indigo-100 group-hover:bg-indigo-600 rounded-lg flex items-center justify-center text-indigo-600 group-hover:text-white mb-4 transition-colors duration-300">
//                         {program.icon}
//                       </div>
//                       <h4 className="text-lg font-semibold text-gray-900 mb-3">
//                         {program.title}
//                       </h4>
//                       <p className="text-gray-600 leading-relaxed">
//                         {program.description}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </div>

            
//               <div className="mb-16">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center">
//                   Year-wise Training Roadmap
//                 </h3>
//                 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//                   {yearWisePrograms.map((program, index) => (
//                     <div key={index} className={`${program.bgColor} rounded-xl p-6 relative overflow-hidden`}>
//                       <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${program.color} opacity-10 rounded-full -mr-10 -mt-10`}></div>

//                       <div className="relative">
//                         <div className={`inline-flex items-center bg-gradient-to-r ${program.color} text-white px-4 py-2 rounded-lg mb-4`}>
//                           <GraduationCap className="w-4 h-4 mr-2" />
//                           <span className="font-semibold">{program.year}</span>
//                         </div>

//                         <div className="space-y-3">
//                           {program.objectives.map((objective, objIndex) => (
//                             <div key={objIndex} className="flex items-start">
//                               <ChevronRight className={`w-4 h-4 mt-0.5 mr-2 flex-shrink-0 ${program.textColor}`} />
//                               <span className="text-gray-700 text-sm leading-relaxed">
//                                 {objective}
//                               </span>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//             </div>
//           </div>
//         )} */}

//         {activeTab === 'internship' && (<div className="bg-white">
//           <div className="max-w-7xl mx-auto px-6">
//             {/* Header */}
//             <div className="text-center mb-16">
//               <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-6">
//                 <div className="w-2 h-2 bg-green-600 rounded-full"></div>
//                 <span className="text-sm font-medium text-green-700 uppercase tracking-wide">
//                   Industry Partners
//                 </span>
//               </div>
//               <h2 className="text-4xl font-bold text-gray-900 mb-4">
//                 Internship Training Partners
//               </h2>
//               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                 Gain hands-on experience with leading companies across diverse industries through our comprehensive internship program
//               </p>
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-green-600 mb-2">17+</div>
//                 <div className="text-gray-600">Partner Companies</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
//                 <div className="text-gray-600">Industry Sectors</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
//                 <div className="text-gray-600">Placement Support</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-purple-600 mb-2">Real</div>
//                 <div className="text-gray-600">Industry Experience</div>
//               </div>
//             </div>

//             {/* Company Grid */}
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {companies.map((company, index) => (
//                 <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100">
//                   <div className="flex items-start gap-4">
//                     <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-gray-600 shadow-sm flex-shrink-0">
//                       {company.icon}
//                     </div>
//                     <div className="flex-1 min-w-0">
//                       <h3 className="font-semibold text-gray-900 mb-2 leading-tight">
//                         {company.name}
//                       </h3>
//                       <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium  `}>
//                         {company.category}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//           </div>
//         </div>)}

//         {/* Recruiters Tab */}
//         {activeTab === 'recruiters' && (
//           <div className="space-y-16">
//             <div className="text-center max-w-3xl mx-auto">
//               <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
//                 <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
//                 <span className="text-sm font-medium text-blue-700 uppercase tracking-wide">Our Partners</span>
//               </div>
//               <h2 className="text-4xl font-bold text-gray-900 mb-4">Leading Industry Recruiters</h2>
//               <p className="text-lg text-gray-600">Trusted partnerships with top companies across various sectors</p>
//             </div>

//             <div className="space-y-8">
//               {/* Top Row - Scrolling Right */}
//               <div className="overflow-hidden">
//                 <div className="flex animate-scroll-right gap-6">
//                   {placementData.recruiters.map((recruiter, index) => (
//                     <div
//                       key={`top-${recruiter.id}-${index}`}
//                       className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 flex flex-col items-center justify-center min-h-[140px] lg:min-h-[160px] min-w-[200px] lg:min-w-[240px] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group flex-shrink-0"
//                     >
//                       <div className="flex items-center justify-center h-16 w-full mb-4">
//                         <img
//                           src={recruiter.logo}
//                           alt={recruiter.title}
//                           className="h-12 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
//                         />
//                       </div>
//                       <h3 className="font-bold text-gray-900 text-lg text-center">
//                         {recruiter.title}
//                       </h3>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Bottom Row - Scrolling Left */}
//               <div className="overflow-hidden">
//                 <div className="flex animate-scroll-left gap-6">
//                   {placementData.recruiters.map((recruiter, index) => (
//                     <div
//                       key={`bottom-${recruiter.id}-${index}`}
//                       className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 flex flex-col items-center justify-center min-h-[140px] lg:min-h-[160px] min-w-[200px] lg:min-w-[240px] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group flex-shrink-0"
//                     >
//                       <div className="flex items-center justify-center h-16 w-full mb-4">
//                         <img
//                           src={recruiter.logo}
//                           alt={recruiter.title}
//                           className="h-12 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
//                         />
//                       </div>
//                       <h3 className="font-bold text-gray-900 text-lg text-center">
//                         {recruiter.title}
//                       </h3>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//         {activeTab === 'contact' && (
//           <div className="space-y-16">
//             <div className="text-center max-w-3xl mx-auto">
//               <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6">
//                 <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
//                 <span className="text-sm font-medium text-purple-700 uppercase tracking-wide">Contact Us</span>
//               </div>
//               <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
//               <p className="text-lg text-gray-600">Reach out to our Placement Cell for inquiries and support</p>
//             </div>
//             <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-12">
//               <div className="max-w-2xl mx-auto space-y-6">
//                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-full">
//                   <User className="w-4 h-4" />
//                   <span className="text-sm font-medium uppercase tracking-wide">Placement Officer</span>
//                 </div>
//                 <div>
//                   <h3 className="text-3xl font-bold text-gray-900 mb-2">Dr. G. Paramaguru</h3>
//                   <p className="text-xl text-purple-600 font-semibold mb-4">Placement Officer</p>
//                   <p className="text-gray-600 mb-6">Tagore Institute of Engineering and Technology</p>
//                 </div>
//                 <div className="space-y-3">
//                   <div className="flex items-center gap-3 text-gray-600">
//                     <MapPin className="w-5 h-5 text-purple-600" />
//                     <span>Training and Placement Cell, Tagore Institute of Engineering and Technology, Deviyakurichi Post - 636112, Attur (Tk), Salem Dt.</span>
//                   </div>
//                   <div className="flex items-center gap-3 text-gray-600">
//                     <Phone className="w-5 h-5 text-purple-600" />
//                     <span>9786171968</span>
//                   </div>
//                   <div className="flex items-center gap-3 text-gray-600">
//                     <Mail className="w-5 h-5 text-purple-600" />
//                     <Link to="mailto:tagoreplacement@yahoo.in" className="hover:text-purple-600 transition-colors">
//                       tagoreplacement@yahoo.in
//                     </Link>
//                   </div>
//                   <div className="flex items-center gap-3 text-gray-600">
//                     <Mail className="w-5 h-5 text-purple-600" />
//                     <Link to="mailto:paramaguru.mech@tagoreiet.ac.in" className="hover:text-purple-600 transition-colors">
//                       paramaguru.mech@tagoreiet.ac.in
//                     </Link>
//                   </div>
//                   <div className="flex items-center gap-3 text-gray-600">
//                     <Globe className="w-5 h-5 text-purple-600" />
//                     <Link to="http://www.tagoreiet.ac.in/placement.php" className="hover:text-purple-600 transition-colors">
//                       http://www.tagoreiet.ac.in/placement.php
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Gallery Tab */}
//         {activeTab === 'gallery' && (
//           <div className="space-y-16">
//             <div className="text-center max-w-3xl mx-auto">
//               <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-full mb-6">
//                 <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
//                 <span className="text-sm font-medium text-teal-700 uppercase tracking-wide">Placement Gallery</span>
//               </div>
//               <h2 className="text-4xl font-bold text-gray-900 mb-4">Moments of Success</h2>
//               <p className="text-lg text-gray-600">Capturing the journey of our students through training and placement activities</p>
//             </div>

//             <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-3xl p-12">
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {placementimage?.map((item, index) => (
//                   <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
//                     <Swiper
//                       modules={[Navigation, Pagination, Autoplay]}
//                       spaceBetween={20}
//                       speed={1000}
//                       autoplay={{ delay: 900, disableOnInteraction: false }}
//                       slidesPerView={1}
//                       pagination={{ clickable: true }}
//                       className="rounded-2xl"
//                     >
//                       {item?.Images?.map((dt, imgIndex) => (
//                         <SwiperSlide key={imgIndex} className="select-none">
//                           <img
//                             src={`${apiurl()}/${dt}`}
//                             alt={item.Title}
//                             className="w-full h-64 object-cover rounded-2xl shadow-md"
//                           />
//                         </SwiperSlide>
//                       ))}
//                     </Swiper>
//                     <div className="p-6">
//                       <h4 className="text-lg font-semibold text-gray-900 mb-2">{item?.Title}</h4>
//                       <p className="text-gray-600 text-sm">{item?.Description}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

import { ArrowRight, MapPin, Users, Award, BookOpen, Cpu, Code, Zap, Calendar, Mail, Phone, Globe, Building, TrendingUp, Target, Briefcase, GraduationCap, Star, FileCheck, ChevronRight, Brain, Factory, UserCheck, MessageSquare, Clock, MessageCircle, Building2, Heart, User } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import apiurl from "../../services/apiendpoint/apiendpoint";

export default function PlacementCellPage({ placementimage }) {
  const [activeTab, setActiveTab] = useState('overview');

  // Placement Cell Data
  const placementData = {
    name: "Placement Cell",
    shortName: "TPC",
    established: "2008",
    description: ['The Training and Placement Cell plays a crucial role in scouting for and locating job opportunities for the young graduates and post graduates passing out from the college by keeping cordial relationship with reputed industries. The cell functions under the supervision of full time placement officers and operates the entire year to arrange training and skill development programs to students by experts from industries. The cell interacts with reputed organizations and arranges campus interviews to final year students. The Department placement coordinators assist the cell during campus interviews and training programs. The cell also plays a very crucial role in counseling and guiding the students to become as successful entrepreneurs.',
      'Our Institution inculcates the very idea of preparing students to face various technical and nontechnical issues. Establishment of Training and Placement Cell was a part of this mission so as to provide students with the platform to compete and succeed in the imperiousness and competitiveness of global world. Activities of Training and Placement Cell Centre on making strong relationship with Industries and to exploit the relationship for personality and skill development of the graduating students through various interactive Programs. ',
      'Training and Placement Cell strives to provide the best possible training and placement opportunities for the students. Students of Our College are receiving summer training in reputed Industries. We look forward for stronger collaboration with Industries so that deserving students can get the best platform to nurture their talents and improve their credibility for better placement prospects. Currently T&P Cell is working on framing out newer policies to strengthen Industry – Institute relationship so as to attract more and more number of companies.'
    ],
    vision: "Reduce the gap between candidate skills and knowledge and industry needs by producing competent resources equipped with personality development and campus recruitment training, as well as professional etiquette, and providing them with the best opportunities to thrive in their careers.",
    mission: "The Training and Placement Team of TIET is committed to achieving 100% placements and takes no shortcuts when creating the annual recruitment schedule by inviting HR Teams from various corporations to ensure that the campus-recruitment process runs smoothly. For the benefit of the students having trouble in interviews, numerous training programs, workshops, seminars, industry interactions, and even industry visits are conducted concurrently with routine one-on-one counseling.",
    stats: {
      students: "2,500+",
      companies: "150+",
      placements: "95%",
      packages: "₹12 LPA"
    },
    heroImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    features: [
      {
        icon: <Briefcase className="w-6 h-6" />,
        title: "Industry Partnerships",
        description: "Strong relationships with 150+ leading companies across various sectors"
      },
      {
        icon: <TrendingUp className="w-6 h-6" />,
        title: "High Placement Rate",
        description: "Consistent 95%+ placement record with competitive salary packages"
      },
      {
        icon: <Target className="w-6 h-6" />,
        title: "Skill Development",
        description: "Comprehensive training programs covering technical and soft skills"
      },
      {
        icon: <GraduationCap className="w-6 h-6" />,
        title: "Career Guidance",
        description: "Personalized career counseling and mentorship programs"
      }
    ],
    officer: {
      name: "Dr. C. B SIVAPARTHIPAN",
      designation: "Placement Officer",
      institution: "Tagore Institute of Engineering and Technology",
      address: "Deviyakurichi Post - 636112, Attur Tk, Salem Dt.",
      mobile: "9786400274",
      contactHours: "9.30 A.M to 4.30 P.M.",
      email: "tagoreplacement@yahoo.in",
      website: "http://www.tagoreiet.ac.in/placement.php",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    coordinators: [
      { department: "AI&DS", faculty: "Mr.M.SURESH", designation: "Assistant Professor" },
      { department: "AI&ML", faculty: "Mr.P.SURYAPRAKASH", designation: "Assistant Professor" },
      { department: "CIVIL", faculty: "Mrs.M.S.SIVASAKTHI", designation: "Assistant Professor" },
      { department: "CSE", faculty: "Mrs.C.SATHYA", designation: "Assistant Professor" },
      { department: "ECE", faculty: "Mrs.P.SRIDEVI", designation: "Assistant Professor" },
      { department: "EEE", faculty: "Mr.R.ANANDRAJ", designation: "Assistant Professor" },
      { department: "MECH", faculty: "Mr.R.CHINNADURAI", designation: "Assistant Professor" },
      { department: "MBA", faculty: "Mrs.T.SUBASHINI", designation: "Assistant Professor" },
      { department: "S & H", faculty: "Dr.S.ELAVARASAN", designation: "Assistant Professor" }
    ],
    activities: [
      "Career Awareness Sessions",
      "Aptitude Tests & Group Discussions",
      "Mock Interviews & Interview Preparation",
      "Industrial Visits & In-plant Training",
      "Guest Lectures from Industry Experts",
      "Soft Skills Development Programs",
      "Personality Development Workshops",
      "Resume Building & LinkedIn Profile Optimization"
    ],
    trainingAreas: [
      "Interpersonal Skills",
      "Intrapersonal Skills",
      "Communication Skills",
      "Technical Skills",
      "Aptitude & Problem Solving",
      "Reasoning & Logical Thinking",
      "Motivation & Leadership"
    ],
    
  recruiters: [
      { name: "Recruiter 1", logo: "/images/recruiters/1.jpg" },
      { name: "Recruiter 2", logo: "/images/recruiters/2.jpg" },
      { name: "Recruiter 3", logo: "/images/recruiters/3.jpg" },
      { name: "Recruiter 4", logo: "/images/recruiters/4.jpg" },
      { name: "Recruiter 5", logo: "/images/recruiters/5.jpg" },
      { name: "Recruiter 6", logo: "/images/recruiters/6.jpg" },
      { name: "Recruiter 7", logo: "/images/recruiters/7.jpg" },
      { name: "Recruiter 8", logo: "/images/recruiters/8.jpg" },
      { name: "Recruiter 9", logo: "/images/recruiters/9.jpg" },
      { name: "Recruiter 10", logo: "/images/recruiters/10.jpg" },
      { name: "Recruiter 11", logo: "/images/recruiters/11.jpg" },
      { name: "Recruiter 12", logo: "/images/recruiters/12.jpg" },
      { name: "Recruiter 13", logo: "/images/recruiters/13.jpg" },
      { name: "Recruiter 14", logo: "/images/recruiters/14.jpg" },
    ],
    gallery: [
      {
        image: "https://images.unsplash.com/photo-1516321310762-479437144403?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        caption: "Career Awareness Session 2024"
      },
      {
        image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        caption: "Mock Interview Workshop"
      },
      {
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        caption: "Industry Visit 2023"
      },
      {
        image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        caption: "Guest Lecture by Industry Expert"
      },
      {
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        caption: "Soft Skills Training Program"
      },
      {
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        caption: "Resume Building Workshop"
      }
    ]
  };

  const trainingAreas = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Career Awareness Sessions",
      description: "Comprehensive guidance on career paths and opportunities"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Aptitude Tests & Assessments",
      description: "Group discussions and interviews to excel in recruitment"
    },
    {
      icon: <Factory className="w-6 h-6" />,
      title: "Industry Interaction",
      description: "In-plant training, industrial visits, projects & guest lectures"
    }
  ];

  const majorFunctions = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Campus & Off-Campus Selection",
      description: "Planning and organizing comprehensive recruitment activities"
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Specialist Sessions",
      description: "Expert speakers for self-enhancement and confidence building"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Individual Development Program",
      description: "Regular soft skill and personality development for II year to final year students"
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Aptitude Testing",
      description: "Department-wise aptitude tests for comprehensive evaluation"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Interview Preparation",
      description: "Mock interviews and group discussions for interview readiness"
    }
  ];

  const trainingPrograms = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Corporate Leader Interactions",
      description: "Regular sessions with industry leaders and professionals"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Aptitude & Reasoning Training",
      description: "Comprehensive training in quantitative, logical, and verbal reasoning"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Technical Training Programs",
      description: "Expert-led technical skill development sessions"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Communication Skills Development",
      description: "Language lab sessions for enhanced communication abilities"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Mock Interviews",
      description: "Professional interview practice aligned with corporate expectations"
    }
  ];

  const yearWisePrograms = [
    {
      year: "I Year",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      textColor: "text-green-700",
      objectives: [
        "Transition from school to college",
        "Identify strengths and build confidence",
        "Develop basic communication skills"
      ]
    },
    {
      year: "II Year",
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
      objectives: [
        "Prepare for corporate environment",
        "Motivational training sessions",
        "Industrial visits and guest lectures"
      ]
    },
    {
      year: "III Year",
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700",
      objectives: [
        "Intensive placement preparation",
        "Regular aptitude training",
        "Group discussions and mock interviews"
      ]
    },
    {
      year: "Final Year",
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-700",
      objectives: [
        "Map organizational expectations",
        "Align competencies with industry needs",
        "Direct student-corporate interactions"
      ]
    }
  ];

  const companies = [
    {
      name: "Nitroware Technologies Pvt. Ltd.",
      category: "Software Technology",
      icon: <Code className="w-6 h-6" />
    },
    {
      name: "Nextskill Technologies Pvt. Ltd.",
      category: "Technology Solutions",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      name: "Zeekers Employment Private Limited (i-Lesa)",
      category: "Employment Services",
      icon: <Users className="w-6 h-6" />
    },
    {
      name: "Ascent24 Technologies",
      category: "Digital Solutions",
      icon: <Code className="w-6 h-6" />
    },
    {
      name: "Techvolt Software Appin Technology",
      category: "Software Development",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      name: "Litz Tech India Private Limited",
      category: "Technology Services",
      icon: <Building2 className="w-6 h-6" />
    },
    {
      name: "Vibrace Technologies",
      category: "Tech Innovation",
      icon: <Code className="w-6 h-6" />
    },
    {
      name: "Coimbatore Manufacturing Innovations (CMI)",
      category: "Manufacturing",
      icon: <Factory className="w-6 h-6" />
    },
    {
      name: "Texmo Industries",
      category: "Industrial Solutions",
      icon: <Factory className="w-6 h-6" />
    },
    {
      name: "Steel Authority of India Limited, Salem",
      category: "Steel & Manufacturing",
      icon: <Factory className="w-6 h-6" />
    },
    {
      name: "Salzer Electronics Ltd.",
      category: "Electronics",
      icon: <Zap className="w-6 h-6" />
    },
    {
      name: "Lakshmi Electrical and Control",
      category: "Electrical Systems",
      icon: <Zap className="w-6 h-6" />
    },
    {
      name: "Pricol Ltd.",
      category: "Automotive Electronics",
      icon: <Zap className="w-6 h-6" />
    },
    {
      name: "Power Best Electricals",
      category: "Electrical Solutions",
      icon: <Zap className="w-6 h-6" />
    },
    {
      name: "Super Labs",
      category: "Laboratory Services",
      icon: <Award className="w-6 h-6" />
    },
    {
      name: "ABT Consumer Products",
      category: "Consumer Goods",
      icon: <Building2 className="w-6 h-6" />
    },
    {
      name: "B-Arm Medical Technologies Private Limited",
      category: "Medical Technology",
      icon: <Heart className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-white lg:pt-10">
      <div className="text-center space-y-6 py-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full">
          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
          <span className="text-sm font-medium text-orange-700 uppercase tracking-wide">
            Career Excellence Center
          </span>
        </div>
        <p className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
          Placement Cell
          <span className="block text-orange-600">And Training Center</span>
        </p>
      </div>

      <div className='max-w-screen-2xl mx-auto px-6'>
        {placementData.description.map((para, i) => (
          <p key={i} className="text-lg text-gray-700 mb-8 leading-relaxed w-full">
            {para}
          </p>
        ))}
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-14 md:top-20 lg:top-34 bg-white shadow-sm z-40 border-b">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="flex overflow-x-auto"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}>
            {[
              { id: 'overview', label: 'Overview' },
              // { id: 'team', label: 'Team' },
              { id: 'activities', label: 'Activities' },
              { id: 'internship', label: 'Internship' },
              { id: 'recruiters', label: 'Recruiters' },
              { id: 'gallery', label: 'Gallery' },
              { id: 'contact', label: 'Contact' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-semibold transition-colors whitespace-nowrap ${activeTab === tab.id
                  ? 'text-purple-600 border-b-3 border-purple-600 bg-purple-50'
                  : 'text-gray-600 hover:text-purple-600 hover:bg-gray-50'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-screen-2xl mx-auto px-6 py-16">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-20">
            {/* Vision & Mission */}
            <div className="grid lg:grid-cols-2 gap-16">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-green-700 uppercase tracking-wide">Our Vision</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Shaping Futures</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{placementData.vision}</p>
              </div>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium text-blue-700 uppercase tracking-wide">Our Mission</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Empowering Success</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{placementData.mission}</p>
              </div>
            </div>
            <div className="bg-gray-50 py-16">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Placement Activities
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Comprehensive training and development programs designed to prepare students for successful careers
                  </p>
                </div>
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                    Student Training Areas
                  </h3>
                  <div className="grid md:grid-cols-3 gap-8">
                    {trainingAreas.map((area, index) => (
                      <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4">
                            {area.icon}
                          </div>
                          <h4 className="text-lg font-semibold text-gray-900">
                            {area.title}
                          </h4>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          {area.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                    Major Functions of Training & Placement Cell
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {majorFunctions.map((func, index) => (
                      <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white mb-4">
                          {func.icon}
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">
                          {func.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {func.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Team Tab */}
        {activeTab === 'team' && (
          <div className="space-y-16">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm font-medium text-purple-700 uppercase tracking-wide">Our Team</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Placement Leadership</h2>
              <p className="text-lg text-gray-600">Dedicated professionals committed to your career success</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-full">
                    <Star className="w-4 h-4" />
                    <span className="text-sm font-medium uppercase tracking-wide">Placement Officer</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{placementData.officer.name}</h3>
                    <p className="text-xl text-purple-600 font-semibold mb-4">{placementData.officer.designation}</p>
                    <p className="text-gray-600 mb-6">{placementData.officer.institution}</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-600">
                      <MapPin className="w-5 h-5 text-purple-600" />
                      <span>{placementData.officer.address}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Phone className="w-5 h-5 text-purple-600" />
                      <span>{placementData.officer.mobile} ({placementData.officer.contactHours})</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Mail className="w-5 h-5 text-purple-600" />
                      <Link to={`mailto:${placementData.officer.email}`} className="hover:text-purple-600 transition-colors">
                        {placementData.officer.email}
                      </Link>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Globe className="w-5 h-5 text-purple-600" />
                      <Link to={placementData.officer.website} className="hover:text-purple-600 transition-colors">
                        {placementData.officer.website}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <img
                    src={placementData.officer.image}
                    alt={placementData.officer.name}
                    className="w-80 h-80 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-gray-900 text-center">Department Coordinators</h3>
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                  <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Department</th>
                      <th className="px-6 py-4 text-left font-semibold">Faculty Name</th>
                      <th className="px-6 py-4 text-left font-semibold">Designation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {placementData.coordinators.map((coordinator, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-semibold text-sm">
                            {coordinator.department}
                          </span>
                        </td>
                        <td className="px-6 py-4 font-semibold text-gray-900">{coordinator.faculty}</td>
                        <td className="px-6 py-4 text-gray-600">{coordinator.designation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Activities Tab */}
        {activeTab === 'activities' && (
          <div className="space-y-16">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-green-700 uppercase tracking-wide">Our Activities</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Training Programs</h2>
              <p className="text-lg text-gray-600">Preparing students for successful careers through diverse activities and programs</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {placementData.activities.map((activity, index) => (
                <div key={index} className="group p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{activity}</h4>
                  <p className="text-gray-600 leading-relaxed">Comprehensive programs designed to enhance student capabilities and industry readiness.</p>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Year-wise Action Plans</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    year: "I Year",
                    focus: "Foundation Building",
                    activities: ["Transition from school to college", "Strength identification", "Communication confidence building"]
                  },
                  {
                    year: "II Year",
                    focus: "Corporate Readiness",
                    activities: ["Corporate environment preparation", "Motivational training", "Industrial visits and guest lectures"]
                  },
                  {
                    year: "III Year",
                    focus: "Placement Preparation",
                    activities: ["Regular aptitude training", "Group discussions", "Mock interviews and practice sessions"]
                  },
                  {
                    year: "Final Year",
                    focus: "Career Launch",
                    activities: ["Organizational expectation mapping", "Student-corporate interactions", "Final placement activities"]
                  }
                ].map((plan, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg mb-3 mx-auto">
                        {plan.year.split(' ')[0]}
                      </div>
                      <h4 className="text-lg font-bold text-gray-900">{plan.year}</h4>
                      <p className="text-blue-600 font-semibold text-sm">{plan.focus}</p>
                    </div>
                    <ul className="space-y-2">
                      {plan.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'internship' && (
          <div className="bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-6">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-sm font-medium text-green-700 uppercase tracking-wide">
                    Industry Partners
                  </span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Internship Training Partners
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Gain hands-on experience with leading companies across diverse industries through our comprehensive internship program
                </p>
              </div>
              {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">17+</div>
                  <div className="text-gray-600">Partner Companies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                  <div className="text-gray-600">Industry Sectors</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                  <div className="text-gray-600">Placement Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">Real</div>
                  <div className="text-gray-600">Industry Experience</div>
                </div>
              </div> */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {companies.map((company, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-gray-600 shadow-sm flex-shrink-0">
                        {company.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 mb-2 leading-tight">
                          {company.name}
                        </h3>
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium">
                          {company.category}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Contact Tab */}
        {activeTab === 'contact' && (
          <div className="space-y-16">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm font-medium text-purple-700 uppercase tracking-wide">Contact Us</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-lg text-gray-600">Reach out to our Placement Cell for inquiries and support</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-12">
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-full">
                  <User className="w-4 h-4" />
                  <span className="text-sm font-medium uppercase tracking-wide">Placement Officer</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Dr. G. Paramaguru</h3>
                  <p className="text-xl text-purple-600 font-semibold mb-4">Placement Officer</p>
                  <p className="text-gray-600 mb-6">Tagore Institute of Engineering and Technology</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-purple-600" />
                    <span>Training and Placement Cell, Tagore Institute of Engineering and Technology, Deviyakurichi Post - 636112, Attur (Tk), Salem Dt.</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Phone className="w-5 h-5 text-purple-600" />
                    <span>9786171968</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Mail className="w-5 h-5 text-purple-600" />
                    <Link to="mailto:tagoreplacement@yahoo.in" className="hover:text-purple-600 transition-colors">
                      placement@tagoreiet.ac.in
                    </Link>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Mail className="w-5 h-5 text-purple-600" />
                    <Link to="mailto:paramaguru.mech@tagoreiet.ac.in" className="hover:text-purple-600 transition-colors">
                      paramaguru.mech@tagoreiet.ac.in
                    </Link>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Globe className="w-5 h-5 text-purple-600" />
                    <Link to="http://www.tagoreiet.ac.in/placement.php" className="hover:text-purple-600 transition-colors">
                      http://www.tagoreiet.ac.in/placement-cell
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Recruiters Tab */}
    {/* Recruiters Tab */}
{activeTab === 'recruiters' && (
  <div className="space-y-16">
    <div className="text-center max-w-3xl mx-auto">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
        <span className="text-sm font-medium text-blue-700 uppercase tracking-wide">Our Partners</span>
      </div>
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Leading Industry Recruiters</h2>
      <p className="text-lg text-gray-600">Trusted partnerships with top companies across various sectors</p>
    </div>

    <div className="space-y-8">
      {/* Top Row - Scrolling Right */}
      <div className="overflow-hidden">
        <div className="flex animate-scroll-right gap-6">
          {placementData.recruiters.map((recruiter, index) => (
            <div
              key={`top-${recruiter.name}-${index}`}
              className="rounded-2xl p-3 flex flex-col items-center justify-center min-h-[140px] lg:min-h-[160px] min-w-[200px] lg:min-w-[240px] hover:scale-105 transition-all duration-300 group flex-shrink-0"
            >
              <div className="flex items-center justify-center h-20 w-full mb-4">
                <img
                  src={recruiter.logo}
                  alt={`recruiter ${index}`}
                  className="h-16 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              {/* <h3 className="font-bold text-gray-900 text-lg text-center">
                {recruiter.name}
              </h3> */}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Row - Scrolling Left */}
      <div className="overflow-hidden">
        <div className="flex animate-scroll-left gap-6">
          {placementData.recruiters.map((recruiter, index) => (
            <div
              key={`bottom-${recruiter.name}-${index}`}
              className="rounded-2xl p-3 flex flex-col items-center justify-center min-h-[140px] lg:min-h-[160px] min-w-[200px] lg:min-w-[240px] hover:scale-105 transition-all duration-300 group flex-shrink-0"
            >
              <div className="flex items-center justify-center h-20 w-full mb-4">
                <img
                  src={recruiter.logo}
                  alt={`recruiter ${index}`}
                  className="h-16 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              {/* <h3 className="font-bold text-gray-900 text-lg text-center">
                {recruiter.name}
              </h3> */}
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* View All Button */}
    {/* <div className="flex justify-center mt-16">
      <button className="cursor-pointer bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl group">
        View All Placement Partners
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
      </button>
    </div> */}

    {/* CSS Animations */}
    <style jsx>{`
      @keyframes scroll-right {
        0% {
          transform: translateX(-100%);
        }
        100% {
          transform: translateX(0%);
        }
      }
      
      @keyframes scroll-left {
        0% {
          transform: translateX(0%);
        }
        100% {
          transform: translateX(-100%);
        }
      }
      
      .animate-scroll-right {
        animation: scroll-right 30s linear infinite;
      }
      
      .animate-scroll-left {
        animation: scroll-left 30s linear infinite;
      }
      
      .animate-scroll-right:hover,
      .animate-scroll-left:hover {
        animation-play-state: paused;
      }
    `}</style>
  </div>
)}
        {/* Gallery Tab */}
        {activeTab === 'gallery' && (
          <div className="space-y-16">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-full mb-6">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <span className="text-sm font-medium text-teal-700 uppercase tracking-wide">Placement Gallery</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Moments of Success</h2>
              <p className="text-lg text-gray-600">Capturing the journey of our students through training and placement activities</p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-3xl p-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {placementimage?.map((item, index) => (
                  <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <Swiper
                      modules={[Navigation, Pagination, Autoplay]}
                      spaceBetween={20}
                      speed={1000}
                      autoplay={{ delay: 900, disableOnInteraction: false }}
                      slidesPerView={1}
                      pagination={{ clickable: true }}
                      className="rounded-2xl"
                    >
                      {item?.Images?.map((dt, imgIndex) => (
                        <SwiperSlide key={imgIndex} className="select-none">
                          <img
                            src={`${apiurl()}/${dt}`}
                            alt={item.Title}
                            className="w-full h-64 object-cover rounded-2xl shadow-md"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <div className="p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{item?.Title}</h4>
                      <p className="text-gray-600 text-sm">{item?.Description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}