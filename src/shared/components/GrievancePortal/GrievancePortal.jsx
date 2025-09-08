// import React from 'react';
// import { 
//   HelpCircle, 
//   Shield, 
//   AlertTriangle, 
//   Pill, 
//   Users, 
//   MessageSquare, 
//   GraduationCap, 
//   UserCheck,
//   ExternalLink,
//   ChevronRight
// } from 'lucide-react';

// export default function GrievancePortal() {
//   const grievanceOptions = [
//     {
//       id: 'help-desk',
//       title: 'Help Desk',
//       description: 'Get technical support and general assistance for your queries',
//       icon: HelpCircle,
//       color: 'from-blue-500 to-blue-600',
//       hoverColor: 'hover:from-blue-600 hover:to-blue-700',
//       route: '/help-desk'
//     },
//     {
//       id: 'anti-ragging',
//       title: 'Anti Ragging',
//       description: 'Report ragging incidents and seek immediate help',
//       icon: Shield,
//       color: 'from-red-500 to-red-600',
//       hoverColor: 'hover:from-red-600 hover:to-red-700',
//       route: '/anti-ragging'
//     },
//     {
//       id: 'internal-complaints',
//       title: 'Internal Complaints Committee',
//       description: 'File complaints related to harassment or misconduct',
//       icon: AlertTriangle,
//       color: 'from-orange-500 to-orange-600',
//       hoverColor: 'hover:from-orange-600 hover:to-orange-700',
//       route: '/internal-complaints'
//     },
//     {
//       id: 'anti-drug',
//       title: 'Anti Drug',
//       description: 'Report drug-related issues and get counseling support',
//       icon: Pill,
//       color: 'from-purple-500 to-purple-600',
//       hoverColor: 'hover:from-purple-600 hover:to-purple-700',
//       route: '/anti-drug'
//     },
//     {
//       id: 'sc-st-committee',
//       title: 'SC/ST Committee',
//       description: 'Address issues related to SC/ST community concerns',
//       icon: Users,
//       color: 'from-green-500 to-green-600',
//       hoverColor: 'hover:from-green-600 hover:to-green-700',
//       route: '/sc-st-committee'
//     },
//     {
//       id: 'grievance-redressal',
//       title: 'College Grievance Redressal',
//       description: 'Submit general college-related grievances and complaints',
//       icon: MessageSquare,
//       color: 'from-teal-500 to-teal-600',
//       hoverColor: 'hover:from-teal-600 hover:to-teal-700',
//       route: '/grievance-redressal'
//     },
//     {
//       id: 'aicte-students',
//       title: 'AICTE Feedback For Students',
//       description: 'Provide feedback to AICTE regarding academic matters',
//       icon: GraduationCap,
//       color: 'from-indigo-500 to-indigo-600',
//       hoverColor: 'hover:from-indigo-600 hover:to-indigo-700',
//       route: '/aicte-student-feedback'
//     },
//     {
//       id: 'aicte-faculty',
//       title: 'AICTE Feedback For Faculty',
//       description: 'Faculty feedback portal for AICTE related matters',
//       icon: UserCheck,
//       color: 'from-pink-500 to-pink-600',
//       hoverColor: 'hover:from-pink-600 hover:to-pink-700',
//       route: '/aicte-faculty-feedback'
//     }
//   ];

//   const handleCardClick = (route) => {
//     console.log(`Navigating to: ${route}`);
//     alert(`Would navigate to: ${route}`);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto py-12">
//         {/* Header Section */}
//         <div className="text-center mb-12">
//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
//             <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
//             <span className="text-sm font-medium text-blue-700 uppercase tracking-wide">
//               Online Portal
//             </span>
//           </div>
//           <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
//             Grievance <span className="text-blue-600">Portal</span>
//           </h1>
//           <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             Your voice matters. Submit complaints, feedback, and get assistance through our comprehensive online grievance system.
//           </p>
//         </div>

//         {/* Grievance Options Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
//           {grievanceOptions.map((option) => (
//             <div
//               key={option.id}
//               onClick={() => handleCardClick(option.route)}
//               className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
//             >
//               {/* Card Content */}
//               <div className="p-6 sm:p-8">
//                 {/* Icon */}
//                 <div className={`w-16 h-16 bg-gradient-to-r ${option.color} ${option.hoverColor} rounded-2xl flex items-center justify-center mb-6 shadow-lg transition-all duration-300`}>
//                   <option.icon className="w-8 h-8 text-white" />
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
//                   {option.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="text-gray-600 leading-relaxed mb-4 text-sm">
//                   {option.description}
//                 </p>

//                 {/* Action Indicator */}
//                 <div className="flex items-center justify-between">
//                   <span className="text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
//                     Click Here
//                   </span>
//                   <div className="flex items-center gap-1 text-blue-600 group-hover:text-blue-700 transition-all duration-300 group-hover:translate-x-1">
//                     <ChevronRight className="w-4 h-4" />
//                     <ExternalLink className="w-4 h-4" />
//                   </div>
//                 </div>
//               </div>

//               {/* Hover Overlay */}
//               {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-indigo-600/0 group-hover:from-blue-600/5 group-hover:to-indigo-600/5 transition-all duration-300"></div> */}

//               {/* Border Accent */}
//               {/* <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div> */}
//             </div>
//           ))}
//         </div>

//         {/* Information Section */}
//         {/* <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 sm:p-12 text-center">
//           <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
//             Need Immediate Assistance?
//           </h2>
//           <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
//             For urgent matters or if you need immediate help, please contact our support team directly or visit the administrative office.
//           </p>
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
//             <div className="text-center">
//               <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
//                 <HelpCircle className="w-6 h-6 text-blue-600" />
//               </div>
//               <h4 className="font-semibold text-gray-900 mb-1">24/7 Support</h4>
//               <p className="text-sm text-gray-600">Round the clock assistance</p>
//             </div>
//             <div className="text-center">
//               <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
//                 <Shield className="w-6 h-6 text-green-600" />
//               </div>
//               <h4 className="font-semibold text-gray-900 mb-1">Confidential</h4>
//               <p className="text-sm text-gray-600">Your privacy is protected</p>
//             </div>
//             <div className="text-center">
//               <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
//                 <MessageSquare className="w-6 h-6 text-purple-600" />
//               </div>
//               <h4 className="font-semibold text-gray-900 mb-1">Quick Response</h4>
//               <p className="text-sm text-gray-600">Fast resolution process</p>
//             </div>
//           </div>
//         </div> */}
//       </div>
//     </div>
//   );
// }

import React from 'react';
import { 
  HelpCircle, 
  Shield, 
  AlertTriangle, 
  Pill, 
  Users, 
  MessageSquare, 
  GraduationCap, 
  UserCheck,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export default function GrievancePortal() {
  const grievanceOptions = [
    {
      id: 'help-desk',
      title: 'Help Desk',
      description: 'Get technical support and general assistance for your queries',
      icon: HelpCircle,
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-600 hover:to-blue-700',
      route: '/help-desk'
    },
    {
      id: 'anti-ragging',
      title: 'Anti Ragging',
      description: 'Report ragging incidents and seek immediate help',
      icon: Shield,
      color: 'from-red-500 to-red-600',
      hoverColor: 'hover:from-red-600 hover:to-red-700',
      route: '/anti-ragging'
    },
    {
      id: 'internal-complaints',
      title: 'Internal Complaints Committee',
      description: 'File complaints related to harassment or misconduct',
      icon: AlertTriangle,
      color: 'from-orange-500 to-orange-600',
      hoverColor: 'hover:from-orange-600 hover:to-orange-700',
      route: '/internal-complaints'
    },
    {
      id: 'anti-drug',
      title: 'Anti Drug',
      description: 'Report drug-related issues and get counseling support',
      icon: Pill,
      color: 'from-purple-500 to-purple-600',
      hoverColor: 'hover:from-purple-600 hover:to-purple-700',
      route: '/anti-drug'
    },
    {
      id: 'sc-st-committee',
      title: 'SC/ST Committee',
      description: 'Address issues related to SC/ST community concerns',
      icon: Users,
      color: 'from-green-500 to-green-600',
      hoverColor: 'hover:from-green-600 hover:to-green-700',
      route: '/sc-st-committee'
    },
    {
      id: 'grievance-redressal',
      title: 'College Grievance Redressal',
      description: 'Submit general college-related grievances and complaints',
      icon: MessageSquare,
      color: 'from-teal-500 to-teal-600',
      hoverColor: 'hover:from-teal-600 hover:to-teal-700',
      route: '/grievance-redressal'
    },
    {
      id: 'aicte-students',
      title: 'AICTE Feedback For Students',
      description: 'Provide feedback to AICTE regarding academic matters',
      icon: GraduationCap,
      color: 'from-indigo-500 to-indigo-600',
      hoverColor: 'hover:from-indigo-600 hover:to-indigo-700',
      route: '/aicte-student-feedback'
    },
    {
      id: 'aicte-faculty',
      title: 'AICTE Feedback For Faculty',
      description: 'Faculty feedback portal for AICTE related matters',
      icon: UserCheck,
      color: 'from-pink-500 to-pink-600',
      hoverColor: 'hover:from-pink-600 hover:to-pink-700',
      route: '/aicte-faculty-feedback'
    }
  ];

  const handleCardClick = (route) => {
    // console.log(`Navigating to: ${route}`);
    // alert(`Would navigate to: ${route}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-sm font-medium text-blue-700 uppercase tracking-wide">
              Online Portal
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Grievance <span className="text-blue-600">Portal</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your voice matters. Submit complaints, feedback, and get assistance through our comprehensive online grievance system.
          </p>
        </div>

        {/* Grievance Options Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {grievanceOptions.map((option) => (
            <div
              key={option.id}
              onClick={() => handleCardClick(option.route)}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl h-72 flex flex-col"
            >
              {/* Card Content */}
              <div className="p-6 flex flex-col h-full">
                {/* Icon */}
                <div className={`w-14 h-14 bg-gradient-to-r ${option.color} ${option.hoverColor} rounded-2xl flex items-center justify-center mb-4 shadow-lg transition-all duration-300 flex-shrink-0`}>
                  <option.icon className="w-7 h-7 text-white" />
                </div>

                {/* Title - Fixed height */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 leading-tight h-12 flex items-center">
                  {option.title}
                </h3>

                {/* Description - Fixed height with flex-grow */}
                <p className="text-gray-600 leading-relaxed mb-4 text-sm flex-grow overflow-hidden">
                  {option.description}
                </p>

                {/* Action Indicator - Fixed at bottom */}
                <div className="flex items-center justify-between mt-auto pt-2">
                  <span className="text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                    Click Here
                  </span>
                  <div className="flex items-center gap-1 text-blue-600 group-hover:text-blue-700 transition-all duration-300 group-hover:translate-x-1">
                    <ChevronRight className="w-4 h-4" />
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}