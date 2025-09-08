// import { ArrowRight, MapPin, Users, Award, BookOpen, Cpu, Code, Zap, Calendar, Mail, Phone, Globe, Building, TrendingUp, Target, Briefcase, GraduationCap, Star, Heart, Network, Handshake, UserCheck } from "lucide-react";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// export default function AlumniAssociationPage() {
//   const [activeTab, setActiveTab] = useState('overview');

//   // Alumni Association Data
//   const alumniData = {
//     name: "Alumni Association",
//     shortName: "TIET Alumni",
//     established: "2008",
//     description: "The Alumni Association plays a pivotal role in strengthening links between the institute, department and its alumni. We maintain strong connections with over 2000 alumni spread across the globe, fostering lifelong learning and professional development.",
//     vision: "To be the premier alumni network that maintains lifelong connections between graduates, empowering them to contribute meaningfully to their communities while supporting the growth and excellence of their alma mater.",
//     mission: "To facilitate lifelong learning through exchange of ideas and knowledge, provide mentorship opportunities, maintain strong industry connections, and create a supportive network that enhances personal and career development for all alumni and current students.",
//     stats: {
//       alumni: "2,000+",
//       countries: "15+",
//       networks: "100%",
//       events: "10+ Annual"
//     },
//     heroImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
//     features: [
//       {
//         icon: <Network className="w-6 h-6" />,
//         title: "Global Network",
//         description: "2000+ alumni connected across 15+ countries worldwide"
//       },
//       {
//         icon: <Handshake className="w-6 h-6" />,
//         title: "Mentorship Programs",
//         description: "Professional guidance and career support through experienced alumni"
//       },
//       {
//         icon: <Heart className="w-6 h-6" />,
//         title: "Community Impact",
//         description: "Active contribution to society through various social initiatives"
//       },
//       {
//         icon: <UserCheck className="w-6 h-6" />,
//         title: "Professional Development",
//         description: "Continuous learning opportunities and skill enhancement programs"
//       }
//     ],
//     leadership: [
//       { name: "Mr.R.CHINNADURAI", designation: "PRESIDENT", qualification: "M.E., (Ph.D.)" },
//       { name: "Ms.C.MALLIGA", designation: "VICE PRESIDENT(1)", qualification: "M.E." },
//       { name: "Ms.R.GOWTHAMI", designation: "VICE PRESIDENT(2)", qualification: "M.E." },
//       { name: "Dr.P.PRASANTH", designation: "SECRETARY", qualification: "M.E.,Ph.D." },
//       { name: "Mr.P.SIVANESAN", designation: "JOINT SECRETARY(1)", qualification: "B.E." },
//       { name: "Mr.R.PRABAKARAN", designation: "JOINT SECRETARY(2)", qualification: "B.E." },
//       { name: "Mr.P.SARAVANAKUMAR", designation: "TREASURER", qualification: "M.E., (Ph.D.)" },
//       { name: "Ms.T.AARTHI", designation: "EXECUTIVE COMMITTEE MEMBER", qualification: "M.E." },
//       { name: "Mr.R.KARTHICK", designation: "EXECUTIVE COMMITTEE MEMBER", qualification: "B.E." },
//       { name: "Mr.K.VIGNESH", designation: "MEMBER", qualification: "M.E." },
//       { name: "Mrs.T.THANGAM", designation: "MEMBER", qualification: "B.E." }
//     ],
//     activities: [
//       "Annual Alumni Meet & Reunion",
//       "Industry Mentorship Programs",
//       "Guest Lectures & Technical Seminars",
//       "Career Guidance & Counseling",
//       "Scholarship Programs for Students",
//       "Alumni Awards & Recognition",
//       "Networking Events & Workshops",
//       "Social Service & Community Outreach"
//     ],
//     services: [
//       "Alumni Database Management",
//       "Career Networking Opportunities",
//       "Professional Development Support",
//       "Industry Connections & Partnerships",
//       "Placement Assistance",
//       "Technical & Financial Project Support",
//       "Internship Opportunities",
//       "Alumni Survey & Feedback Programs"
//     ],
//     initiatives: [
//       {
//         title: "Distinguished Alumni Awards",
//         description: "Annual recognition of outstanding alumni achievements across various fields",
//         icon: <Award className="w-8 h-8" />
//       },
//       {
//         title: "Mentor-Mentee Program",
//         description: "Connecting junior alumni with experienced professionals for career guidance",
//         icon: <Users className="w-8 h-8" />
//       },
//       {
//         title: "Industry-Institution Bridge",
//         description: "Facilitating collaboration between academia and industry through alumni network",
//         icon: <Building className="w-8 h-8" />
//       },
//       {
//         title: "Student Support Programs",
//         description: "Providing financial assistance and scholarships to deserving students",
//         icon: <GraduationCap className="w-8 h-8" />
//       }
//     ],
//     gallery: [
//       {
//         image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//         caption: "Annual Alumni Meet 2024"
//       },
//       {
//         image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//         caption: "Distinguished Alumni Awards Ceremony"
//       },
//       {
//         image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//         caption: "Alumni Networking Event"
//       },
//       {
//         image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//         caption: "Mentorship Program Launch"
//       },
//       {
//         image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//         caption: "Industry Expert Guest Lecture"
//       },
//       {
//         image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//         caption: "Alumni Community Service Initiative"
//       }
//     ],
//     officer: {
//       name: "Mr.R.CHINNADURAI",
//       designation: "Alumni Coordinator",
//       institution: "Tagore Institute of Engineering and Technology",
//       address: "Deviyakurichi Post - 636112, Attur Tk, Salem Dt.",
//       mobile: "9876543210",
//       contactHours: "9.30 A.M to 4.30 P.M.",
//       email: "tagore.alumni@tagoreiet.ac.in",
//       website: "http://www.tagoreiet.ac.in/alumni.php",
//       image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
//         <div className="absolute inset-0 bg-black/20"></div>
//         <div
//           className="absolute inset-0 opacity-40"
//           style={{
//             backgroundImage: `url(${alumniData.heroImage})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center'
//           }}
//         ></div>

//         <div className="relative max-w-screen-2xl mx-auto px-6 py-20">
//           <div className="max-w-4xl">
//             <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
//               <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
//               <span className="text-sm font-medium uppercase tracking-wide">Tiet Alumni Network</span>
//             </div>

//             <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
//               {alumniData.name}
//             </h1>

//             <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-3xl">
//               {alumniData.description}
//             </p>

//             <div className="flex flex-wrap gap-6 mb-12">
//               <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
//                 <span className="text-sm text-gray-300">Established</span>
//                 <div className="text-lg font-semibold">{alumniData.established}</div>
//               </div>
//               <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
//                 <span className="text-sm text-gray-300">Global Alumni</span>
//                 <div className="text-lg font-semibold">{alumniData.stats.alumni}</div>
//               </div>
//               <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
//                 <span className="text-sm text-gray-300">Countries</span>
//                 <div className="text-lg font-semibold">{alumniData.stats.countries}</div>
//               </div>
//               <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
//                 <span className="text-sm text-gray-300">Annual Events</span>
//                 <div className="text-lg font-semibold">{alumniData.stats.events}</div>
//               </div>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4">
//               <button className="group inline-flex items-center gap-3 px-8 py-4 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-colors">
//                 Join Alumni Network
//                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
//               </button>
//               <button className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all">
//                 Download Registration
//               </button>
//             </div>
//           </div>
//         </div>
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
//               { id: 'leadership', label: 'Leadership' },
//               { id: 'activities', label: 'Activities' },
//               { id: 'services', label: 'Services' },
//               { id: 'initiatives', label: 'Initiatives' },
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
//                 <h3 className="text-3xl font-bold text-gray-900">Connecting Generations</h3>
//                 <p className="text-lg text-gray-600 leading-relaxed">{alumniData.vision}</p>
//               </div>

//               <div className="space-y-6">
//                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full">
//                   <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
//                   <span className="text-sm font-medium text-purple-700 uppercase tracking-wide">Our Mission</span>
//                 </div>
//                 <h3 className="text-3xl font-bold text-gray-900">Fostering Excellence</h3>
//                 <p className="text-lg text-gray-600 leading-relaxed">{alumniData.mission}</p>
//               </div>
//             </div>

//             {/* Features Grid */}
//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {alumniData.features.map((feature, index) => (
//                 <div key={index} className="group p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
//                   <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform duration-300">
//                     {feature.icon}
//                   </div>
//                   <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
//                   <p className="text-gray-600 leading-relaxed">{feature.description}</p>
//                 </div>
//               ))}
//             </div>

//             {/* Statistics */}
//             <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-3xl p-12">
//               <div className="text-center mb-12">
//                 <h3 className="text-3xl font-bold text-gray-900 mb-4">Alumni Network Impact</h3>
//                 <p className="text-lg text-gray-600">Building bridges across generations and geographies</p>
//               </div>

//               <div className="grid md:grid-cols-4 gap-8">
//                 {Object.entries(alumniData.stats).map(([key, value], index) => (
//                   <div key={index} className="text-center">
//                     <div className="text-4xl font-bold text-purple-600 mb-2">{value}</div>
//                     <div className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Leadership Tab */}
//         {activeTab === 'leadership' && (
//           <div className="space-y-16">
//             <div className="text-center max-w-3xl mx-auto">
//               <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6">
//                 <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
//                 <span className="text-sm font-medium text-purple-700 uppercase tracking-wide">Alumni Leadership</span>
//               </div>
//               <h2 className="text-4xl font-bold text-gray-900 mb-4">Executive Committee</h2>
//               <p className="text-lg text-gray-600">Experienced professionals leading our alumni community forward</p>
//             </div>

//             {/* Alumni Officer */}
//             <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-12">
//               <div className="grid lg:grid-cols-2 gap-12 items-center">
//                 <div className="space-y-6">
//                   <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-full">
//                     <Star className="w-4 h-4" />
//                     <span className="text-sm font-medium uppercase tracking-wide">Alumni Coordinator</span>
//                   </div>

//                   <div>
//                     <h3 className="text-3xl font-bold text-gray-900 mb-2">{alumniData.officer.name}</h3>
//                     <p className="text-xl text-purple-600 font-semibold mb-4">{alumniData.officer.designation}</p>
//                     <p className="text-gray-600 mb-6">{alumniData.officer.institution}</p>
//                   </div>

//                   <div className="space-y-3">
//                     <div className="flex items-center gap-3 text-gray-600">
//                       <MapPin className="w-5 h-5 text-purple-600" />
//                       <span>{alumniData.officer.address}</span>
//                     </div>
//                     <div className="flex items-center gap-3 text-gray-600">
//                       <Phone className="w-5 h-5 text-purple-600" />
//                       <span>{alumniData.officer.mobile} ({alumniData.officer.contactHours})</span>
//                     </div>
//                     <div className="flex items-center gap-3 text-gray-600">
//                       <Mail className="w-5 h-5 text-purple-600" />
//                       <Link to={`mailto:${alumniData.officer.email}`} className="hover:text-purple-600 transition-colors">
//                         {alumniData.officer.email}
//                       </Link>
//                     </div>
//                     <div className="flex items-center gap-3 text-gray-600">
//                       <Globe className="w-5 h-5 text-purple-600" />
//                       <Link to={alumniData.officer.website} className="hover:text-purple-600 transition-colors">
//                         {alumniData.officer.website}
//                       </Link>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex justify-center">
//                   <img
//                     src={alumniData.officer.image}
//                     alt={alumniData.officer.name}
//                     className="w-80 h-80 object-cover rounded-2xl shadow-lg"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Leadership Table */}
//             <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-12">
//               <div className="overflow-x-auto">
//                 <table className="w-full bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
//                   <thead className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
//                     <tr>
//                       <th className="px-6 py-4 text-left font-semibold">S.NO</th>
//                       <th className="px-6 py-4 text-left font-semibold">NAME</th>
//                       <th className="px-6 py-4 text-left font-semibold">DESIGNATION</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {alumniData.leadership.map((leader, index) => (
//                       <tr key={index} className="border-b border-gray-100 hover:bg-purple-50 transition-colors">
//                         <td className="px-6 py-4 font-semibold text-purple-600">{index + 1}</td>
//                         <td className="px-6 py-4">
//                           <div>
//                             <div className="font-semibold text-gray-900">{leader.name}</div>
//                             <div className="text-sm text-gray-600">{leader.qualification}</div>
//                           </div>
//                         </td>
//                         <td className="px-6 py-4">
//                           <span className={`inline-flex items-center px-3 py-1 rounded-full font-semibold text-sm ${leader.designation === 'PRESIDENT' ? 'bg-purple-100 text-purple-800' :
//                             leader.designation.includes('VICE PRESIDENT') ? 'bg-blue-100 text-blue-800' :
//                               leader.designation === 'SECRETARY' ? 'bg-green-100 text-green-800' :
//                                 leader.designation.includes('JOINT SECRETARY') ? 'bg-yellow-100 text-yellow-800' :
//                                   leader.designation === 'TREASURER' ? 'bg-red-100 text-red-800' :
//                                     'bg-gray-100 text-gray-800'
//                             }`}>
//                             {leader.designation}
//                           </span>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             {/* Documents Section */}
//             <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">Official Documents</h3>
//               <div className="flex flex-wrap gap-4">
//                 <div className="flex items-center gap-3 px-6 py-3 bg-purple-50 rounded-full hover:bg-purple-100 transition-colors cursor-pointer">
//                   <BookOpen className="w-5 h-5 text-purple-600" />
//                   <span className="font-semibold text-purple-700">Alumni Association - Certificate of Registration</span>
//                 </div>
//                 <div className="flex items-center gap-3 px-6 py-3 bg-blue-50 rounded-full hover:bg-blue-100 transition-colors cursor-pointer">
//                   <Calendar className="w-5 h-5 text-blue-600" />
//                   <span className="font-semibold text-blue-700">Alumni Meet Report</span>
//                 </div>
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
//                 <span className="text-sm font-medium text-green-700 uppercase tracking-wide">Alumni Activities</span>
//               </div>
//               <h2 className="text-4xl font-bold text-gray-900 mb-4">Connecting & Contributing</h2>
//               <p className="text-lg text-gray-600">Diverse programs fostering alumni engagement and community development</p>
//             </div>

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {alumniData.activities.map((activity, index) => (
//                 <div key={index} className="group p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
//                   <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform duration-300">
//                     <Zap className="w-8 h-8" />
//                   </div>
//                   <h4 className="text-xl font-bold text-gray-900 mb-3">{activity}</h4>
//                   <p className="text-gray-600 leading-relaxed">Regular programs designed to maintain strong alumni connections and support current students.</p>
//                 </div>
//               ))}
//             </div>

//             {/* Goals & Objectives */}
//             <div className="bg-gradient-to-br from-gray-50 to-green-50 rounded-3xl p-12">
//               <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Alumni Association Goals</h3>

//               <div className="grid md:grid-cols-2 gap-12">
//                 <div className="space-y-6">
//                   <h4 className="text-2xl font-bold text-gray-900 mb-6">Key Objectives</h4>
//                   <div className="space-y-4">
//                     {[
//                       "Facilitate lifelong learning through knowledge exchange",
//                       "Maintain comprehensive alumni database",
//                       "Organize annual reunions and networking events",
//                       "Provide mentorship and career guidance",
//                       "Support student development initiatives",
//                       "Foster industry-academia collaboration"
//                     ].map((objective, index) => (
//                       <div key={index} className="flex items-start gap-3">
//                         <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
//                         <p className="text-gray-700 leading-relaxed">{objective}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="space-y-6">
//                   <h4 className="text-2xl font-bold text-gray-900 mb-6">Impact Areas</h4>
//                   <div className="space-y-4">
//                     {[
//                       "Professional development and career advancement",
//                       "Academic feedback and curriculum enhancement",
//                       "Student support through scholarships and internships",
//                       "Industry connections and placement assistance",
//                       "Social service and community development",
//                       "Technical and financial project support"
//                     ].map((impact, index) => (
//                       <div key={index} className="flex items-start gap-3">
//                         <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
//                         <p className="text-gray-700 leading-relaxed">{impact}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Services Tab */}
//         {activeTab === 'services' && (
//           <div className="space-y-16">
//             <div className="text-center max-w-3xl mx-auto">
//               <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full mb-6">
//                 <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
//                 <span className="text-sm font-medium text-orange-700 uppercase tracking-wide">Alumni Services</span>
//               </div>
//               <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Support System</h2>
//               <p className="text-lg text-gray-600">Dedicated services to support alumni growth and student development</p>
//             </div>

//             <div className="grid md:grid-cols-2 gap-16">
//               <div className="space-y-8">
//                 <h3 className="text-3xl font-bold text-gray-900">Core Services</h3>

//                 <div className="space-y-4">
//                   {alumniData.services.map((service, index) => (
//                     <div key={index} className="group flex items-center gap-4 p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
//                       <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform duration-300">
//                         <BookOpen className="w-6 h-6" />
//                       </div>
//                       <h4 className="text-lg font-semibold text-gray-900">{service}</h4>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8">
//                 <h3 className="text-3xl font-bold text-gray-900 mb-6">Service Highlights</h3>

//                 <div className="space-y-6">
//                   <div className="flex items-start gap-4">
//                     <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
//                       2K+
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-gray-900 mb-2">Alumni Database</h4>
//                       <p className="text-gray-600">Comprehensive records of over 2000 alumni worldwide with regular updates and contact management.</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-4">
//                     <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white flex-shrink-0 mt-1">
//                       <Users className="w-4 h-4" />
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-gray-900 mb-2">Guidance Cell</h4>
//                       <p className="text-gray-600">Dedicated guidance cell assisting both current students and alumni in career development.</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-4">
//                     <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white flex-shrink-0 mt-1">
//                       <Building className="w-4 h-4" />
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-gray-900 mb-2">Industry Connect</h4>
//                       <p className="text-gray-600">Strong industry partnerships facilitating internships and project collaborations.</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-4">
//                     <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white flex-shrink-0 mt-1">
//                       <Award className="w-4 h-4" />
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-gray-900 mb-2">Alumni Survey</h4>
//                       <p className="text-gray-600">Regular feedback collection to assess curriculum effectiveness and institutional development.</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Initiatives Tab */}
//         {activeTab === 'initiatives' && (
//           <div className="space-y-16">
//             <div className="text-center max-w-3xl mx-auto">
//               <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
//                 <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
//                 <span className="text-sm font-medium text-blue-700 uppercase tracking-wide">Key Initiatives</span>
//               </div>
//               <h2 className="text-4xl font-bold text-gray-900 mb-4">Making a Difference</h2>
//               <p className="text-lg text-gray-600">Strategic initiatives driving positive change in our community</p>
//             </div>

//             <div className="grid md:grid-cols-2 gap-8">
//               {alumniData.initiatives.map((initiative, index) => (
//                 <div key={index} className="group p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
//                   <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
//                     {initiative.icon}
//                   </div>
//                   <h4 className="text-2xl font-bold text-gray-900 mb-4">{initiative.title}</h4>
//                   <p className="text-gray-600 leading-relaxed text-lg">{initiative.description}</p>
//                 </div>
//               ))}
//             </div>

//             {/* Additional Initiatives */}
//             <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12">
//               <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Ongoing Programs</h3>
//               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {[
//                   {
//                     title: "Annual Alumni Meet",
//                     description: "Reuniting alumni to share experiences and strengthen bonds.",
//                     icon: <Calendar className="w-8 h-8" />
//                   },
//                   {
//                     title: "Scholarship Programs",
//                     description: "Supporting deserving students with financial aid.",
//                     icon: <GraduationCap className="w-8 h-8" />
//                   },
//                   {
//                     title: "Guest Lectures",
//                     description: "Industry experts sharing insights with students.",
//                     icon: <Users className="w-8 h-8" />
//                   }
//                 ].map((program, index) => (
//                   <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
//                     <div className="flex items-center justify-center mb-4">
//                       <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center text-blue-600">
//                         {program.icon}
//                       </div>
//                     </div>
//                     <h4 className="text-lg font-bold text-gray-900 text-center mb-2">{program.title}</h4>
//                     <p className="text-gray-600 text-center">{program.description}</p>
//                   </div>
//                 ))}
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
//                 <span className="text-sm font-medium text-teal-700 uppercase tracking-wide">Alumni Gallery</span>
//               </div>
//               <h2 className="text-4xl font-bold text-gray-900 mb-4">Memorable Moments</h2>
//               <p className="text-lg text-gray-600">Capturing the essence of our alumni events and gatherings</p>
//             </div>

//             <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-3xl p-12">
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {alumniData.gallery.map((item, index) => (
//                   <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
//                     <img
//                       src={item.image}
//                       alt={item.caption}
//                       className="w-full h-64 object-cover"
//                     />
//                     <div className="p-6">
//                       <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.caption}</h4>
//                       <p className="text-gray-600 text-sm">Highlighting the vibrant alumni community at Tagore Institute of Engineering and Technology.</p>
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




import { ArrowRight, MapPin, Users, Award, BookOpen, Calendar, Mail, Phone, Globe, Building, Network, Handshake, UserCheck, Star } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import apiurl from "../../services/apiendpoint/apiendpoint";

export default function AlumniAssociationPage({ alumniimage }) {
  const [activeTab, setActiveTab] = useState('overview');

  // Alumni Association Data
  const alumniData = {
    name: "Alumni Association",
    shortName: "TIET Alumni",
    established: "2008",
    description: "The Alumni Association plays a pivotal role in strengthening links between the institute, department and its alumni. We maintain strong connections with over 2000 alumni spread across the globe, fostering lifelong learning and professional development.",
    vision: "To be the premier alumni network that maintains lifelong connections between graduates, empowering them to contribute meaningfully to their communities while supporting the growth and excellence of their alma mater.",
    mission: "To facilitate lifelong learning through exchange of ideas and knowledge, provide mentorship opportunities, maintain strong industry connections, and create a supportive network that enhances personal and career development for all alumni and current students.",
    stats: {
      alumni: "2,000+",
      countries: "15+",
      networks: "100%",
      events: "10+ Annual"
    },
    heroImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    features: [
      {
        icon: <Network className="w-6 h-6" />,
        title: "Global Network",
        description: "2000+ alumni connected across 15+ countries worldwide"
      },
      {
        icon: <Handshake className="w-6 h-6" />,
        title: "Mentorship Programs",
        description: "Professional guidance and career support through experienced alumni"
      },
      {
        icon: <UserCheck className="w-6 h-6" />,
        title: "Professional Development",
        description: "Continuous learning opportunities and skill enhancement programs"
      }
    ],
    leadership: [
      { name: "Mr.R.CHINNADURAI", designation: "PRESIDENT", qualification: "M.E., (Ph.D.)" },
      { name: "Ms.C.MALLIGA", designation: "VICE PRESIDENT(1)", qualification: "M.E." },
      { name: "Ms.R.GOWTHAMI", designation: "VICE PRESIDENT(2)", qualification: "M.E." },
      { name: "Dr.P.PRASANTH", designation: "SECRETARY", qualification: "M.E.,Ph.D." },
      { name: "Mr.P.SIVANESAN", designation: "JOINT SECRETARY(1)", qualification: "B.E." },
      { name: "Mr.R.PRABAKARAN", designation: "JOINT SECRETARY(2)", qualification: "B.E." },
      { name: "Mr.P.SARAVANAKUMAR", designation: "TREASURER", qualification: "M.E., (Ph.D.)" },
      { name: "Ms.T.AARTHI", designation: "EXECUTIVE COMMITTEE MEMBER", qualification: "M.E." },
      { name: "Mr.R.KARTHICK", designation: "EXECUTIVE COMMITTEE MEMBER", qualification: "B.E." },
      { name: "Mr.K.VIGNESH", designation: "MEMBER", qualification: "M.E." },
      { name: "Mrs.T.THANGAM", designation: "MEMBER", qualification: "B.E." }
    ],
    activities: [
      "Annual Alumni Meet & Reunion",
      "Industry Mentorship Programs",
      "Guest Lectures & Technical Seminars",
      "Career Guidance & Counseling",
      "Scholarship Programs for Students",
      "Alumni Awards & Recognition",
      "Networking Events & Workshops",
      "Social Service & Community Outreach"
    ],
    services: [
      "Alumni Database Management",
      "Career Networking Opportunities",
      "Professional Development Support",
      "Industry Connections & Partnerships",
      "Placement Assistance",
      "Technical & Financial Project Support",
      "Internship Opportunities",
      "Alumni Survey & Feedback Programs"
    ],
    initiatives: [
      {
        title: "Distinguished Alumni Awards",
        description: "Annual recognition of outstanding alumni achievements across various fields",
        icon: <Award className="w-8 h-8" />
      },
      {
        title: "Mentor-Mentee Program",
        description: "Connecting junior alumni with experienced professionals for career guidance",
        icon: <Users className="w-8 h-8" />
      },
      {
        title: "Industry-Institution Bridge",
        description: "Facilitating collaboration between academia and industry through alumni network",
        icon: <Building className="w-8 h-8" />
      }
    ],
    officer: {
      name: "Mr.R.CHINNADURAI",
      designation: "Alumni Coordinator",
      institution: "Tagore Institute of Engineering and Technology",
      address: "Deviyakurichi Post - 636112, Attur Tk, Salem Dt.",
      mobile: "9876543210",
      contactHours: "9.30 A.M to 4.30 P.M.",
      email: "tagore.alumni@tagoreiet.ac.in",
      website: "http://www.tagoreiet.ac.in/alumni.php",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url(${alumniData.heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>

        <div className="relative max-w-screen-2xl mx-auto px-6 py-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span className="text-sm font-medium uppercase tracking-wide">Tiet Alumni Network</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              {alumniData.name}
            </h1>

            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-3xl">
              {alumniData.description}
            </p>

            <div className="flex flex-wrap gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="text-sm text-gray-300">Established</span>
                <div className="text-lg font-semibold">{alumniData.established}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="text-sm text-gray-300">Global Alumni</span>
                <div className="text-lg font-semibold">{alumniData.stats.alumni}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="text-sm text-gray-300">Countries</span>
                <div className="text-lg font-semibold">{alumniData.stats.countries}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="text-sm text-gray-300">Annual Events</span>
                <div className="text-lg font-semibold">{alumniData.stats.events}</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group inline-flex items-center gap-3 px-8 py-4 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-colors">
                Join Alumni Network
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all">
                Download Registration
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-16 md:top-19 lg:top-34 bg-white shadow-sm z-40 border-b">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="flex overflow-x-auto"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}>
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'leadership', label: 'Leadership' },
              { id: 'activities', label: 'Activities' },
              { id: 'services', label: 'Services' },
              { id: 'initiatives', label: 'Initiatives' },
              { id: 'gallery', label: 'Gallery' }
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
                <h3 className="text-3xl font-bold text-gray-900">Connecting Generations</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{alumniData.vision}</p>
              </div>

              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm font-medium text-purple-700 uppercase tracking-wide">Our Mission</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Fostering Excellence</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{alumniData.mission}</p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {alumniData.features.map((feature, index) => (
                <div key={index} className="group p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Statistics */}
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-3xl p-12">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Alumni Network Impact</h3>
                <p className="text-lg text-gray-600">Building bridges across generations and geographies</p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                {Object.entries(alumniData.stats).map(([key, value], index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-2">{value}</div>
                    <div className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Leadership Tab */}
        {activeTab === 'leadership' && (
          <div className="space-y-16">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm font-medium text-purple-700 uppercase tracking-wide">Alumni Leadership</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Executive Committee</h2>
              <p className="text-lg text-gray-600">Experienced professionals leading our alumni community forward</p>
            </div>

            {/* Alumni Officer */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-full">
                    <Star className="w-4 h-4" />
                    <span className="text-sm font-medium uppercase tracking-wide">Alumni Coordinator</span>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{alumniData.officer.name}</h3>
                    <p className="text-xl text-purple-600 font-semibold mb-4">{alumniData.officer.designation}</p>
                    <p className="text-gray-600 mb-6">{alumniData.officer.institution}</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-600">
                      <MapPin className="w-5 h-5 text-purple-600" />
                      <span>{alumniData.officer.address}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Phone className="w-5 h-5 text-purple-600" />
                      <span>{alumniData.officer.mobile} ({alumniData.officer.contactHours})</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Mail className="w-5 h-5 text-purple-600" />
                      <Link to={`mailto:${alumniData.officer.email}`} className="hover:text-purple-600 transition-colors">
                        {alumniData.officer.email}
                      </Link>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Globe className="w-5 h-5 text-purple-600" />
                      <Link to={alumniData.officer.website} className="hover:text-purple-600 transition-colors">
                        {alumniData.officer.website}
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <img
                    src={alumniData.officer.image}
                    alt={alumniData.officer.name}
                    className="w-80 h-80 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Leadership Table */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-12">
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                  <thead className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">S.NO</th>
                      <th className="px-6 py-4 text-left font-semibold">NAME</th>
                      <th className="px-6 py-4 text-left font-semibold">DESIGNATION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {alumniData.leadership.map((leader, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-purple-50 transition-colors">
                        <td className="px-6 py-4 font-semibold text-purple-600">{index + 1}</td>
                        <td className="px-6 py-4">
                          <div>
                            <div className="font-semibold text-gray-900">{leader.name}</div>
                            <div className="text-sm text-gray-600">{leader.qualification}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full font-semibold text-sm ${leader.designation === 'PRESIDENT' ? 'bg-purple-100 text-purple-800' :
                            leader.designation.includes('VICE PRESIDENT') ? 'bg-blue-100 text-blue-800' :
                              leader.designation === 'SECRETARY' ? 'bg-green-100 text-green-800' :
                                leader.designation.includes('JOINT SECRETARY') ? 'bg-yellow-100 text-yellow-800' :
                                  leader.designation === 'TREASURER' ? 'bg-red-100 text-red-800' :
                                    'bg-gray-100 text-gray-800'
                            }`}>
                            {leader.designation}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Documents Section */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Official Documents</h3>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 px-6 py-3 bg-purple-50 rounded-full hover:bg-purple-100 transition-colors cursor-pointer">
                  <BookOpen className="w-5 h-5 text-purple-600" />
                  <span className="font-semibold text-purple-700">Alumni Association - Certificate of Registration</span>
                </div>
                <div className="flex items-center gap-3 px-6 py-3 bg-blue-50 rounded-full hover:bg-blue-100 transition-colors cursor-pointer">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-blue-700">Alumni Meet Report</span>
                </div>
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
                <span className="text-sm font-medium text-green-700 uppercase tracking-wide">Alumni Activities</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Connecting & Contributing</h2>
              <p className="text-lg text-gray-600">Diverse programs fostering alumni engagement and community development</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {alumniData.activities.map((activity, index) => (
                <div key={index} className="group p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Calendar className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{activity}</h4>
                  <p className="text-gray-600 leading-relaxed">Regular programs designed to maintain strong alumni connections and support current students.</p>
                </div>
              ))}
            </div>

            {/* Goals & Objectives */}
            <div className="bg-gradient-to-br from-gray-50 to-green-50 rounded-3xl p-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Alumni Association Goals</h3>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Key Objectives</h4>
                  <div className="space-y-4">
                    {[
                      "Facilitate lifelong learning through knowledge exchange",
                      "Maintain comprehensive alumni database",
                      "Organize annual reunions and networking events",
                      "Provide mentorship and career guidance",
                      "Support student development initiatives",
                      "Foster industry-academia collaboration"
                    ].map((objective, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">{objective}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Impact Areas</h4>
                  <div className="space-y-4">
                    {[
                      "Professional development and career advancement",
                      "Academic feedback and curriculum enhancement",
                      "Student support through scholarships and internships",
                      "Industry connections and placement assistance",
                      "Social service and community development",
                      "Technical and financial project support"
                    ].map((impact, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">{impact}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Services Tab */}
        {activeTab === 'services' && (
          <div className="space-y-16">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full mb-6">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-sm font-medium text-orange-700 uppercase tracking-wide">Alumni Services</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Support System</h2>
              <p className="text-lg text-gray-600">Dedicated services to support alumni growth and student development</p>
            </div>

            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <h3 className="text-3xl font-bold text-gray-900">Core Services</h3>

                <div className="space-y-4">
                  {alumniData.services.map((service, index) => (
                    <div key={index} className="group flex items-center gap-4 p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform duration-300">
                        <BookOpen className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900">{service}</h4>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Service Highlights</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                      2K+
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Alumni Database</h4>
                      <p className="text-gray-600">Comprehensive records of over 2000 alumni worldwide with regular updates and contact management.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white flex-shrink-0 mt-1">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Guidance Cell</h4>
                      <p className="text-gray-600">Dedicated guidance cell assisting both current students and alumni in career development.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white flex-shrink-0 mt-1">
                      <Building className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Industry Connect</h4>
                      <p className="text-gray-600">Strong industry partnerships facilitating internships and project collaborations.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white flex-shrink-0 mt-1">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Alumni Survey</h4>
                      <p className="text-gray-600">Regular feedback collection to assess curriculum effectiveness and institutional development.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Initiatives Tab */}
        {activeTab === 'initiatives' && (
          <div className="space-y-16">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-medium text-blue-700 uppercase tracking-wide">Key Initiatives</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Making a Difference</h2>
              <p className="text-lg text-gray-600">Strategic initiatives driving positive change in our community</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {alumniData.initiatives.map((initiative, index) => (
                <div key={index} className="group p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {initiative.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">{initiative.title}</h4>
                  <p className="text-gray-600 leading-relaxed text-lg">{initiative.description}</p>
                </div>
              ))}
            </div>

            {/* Additional Initiatives */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Ongoing Programs</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Annual Alumni Meet",
                    description: "Reuniting alumni to share experiences and strengthen bonds.",
                    icon: <Calendar className="w-8 h-8" />
                  },
                  {
                    title: "Scholarship Programs",
                    description: "Supporting deserving students with financial aid.",
                    icon: <Users className="w-8 h-8" />
                  },
                  {
                    title: "Guest Lectures",
                    description: "Industry experts sharing insights with students.",
                    icon: <Award className="w-8 h-8" />
                  }
                ].map((program, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center text-blue-600">
                        {program.icon}
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 text-center mb-2">{program.title}</h4>
                    <p className="text-gray-600 text-center">{program.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Gallery Tab */}
        {activeTab === 'gallery' && (
          <div className="space-y-16">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-full mb-6">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <span className="text-sm font-medium text-teal-700 uppercase tracking-wide">Alumni Gallery</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Memorable Moments</h2>
              <p className="text-lg text-gray-600">Capturing the essence of our alumni events and gatherings</p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-3xl p-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {alumniimage?.map((item, index) => (
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