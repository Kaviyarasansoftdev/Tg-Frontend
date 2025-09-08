// import React, { useState } from 'react';
//     import ReactDOM from 'react-dom';
//     import { FileText, X } from 'lucide-react';

//    export  function HrPolicy() {
//       const [isModalOpen, setIsModalOpen] = useState(false);

//       const openModal = () => setIsModalOpen(true);
//       const closeModal = () => setIsModalOpen(false);

//       return (
//         <div className="min-h-screen bg-gray-50 p-8 py-16">
//           <div className="max-w-2xl mx-auto text-center">
            
//             {/* Badge */}
//             <div className="mb-6">
//               <span className="text-sm font-medium text-indigo-700 uppercase tracking-wide px-4 py-2 bg-indigo-50 rounded-full">
//                 HR Policy
//               </span>
//             </div>

//             {/* Title */}
//             <h2 className="text-4xl font-bold text-gray-900 mb-12">
//               <span className="text-indigo-600">Human Resources Policy</span>
//             </h2>

//             {/* Simple PDF Card */}
//             <div className="bg-white rounded-xl shadow-lg p-8">
//               <div className="mb-6">
//                 <FileText className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">HR Policy Document</h3>
//                 <p className="text-gray-600">View the official HR policy document</p>
//               </div>
              
//               <button 
//                 onClick={openModal}
//                 className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium cursor-pointer"
//               >
//                 View Document
//               </button>
//             </div>
//           </div>

//           {/* Simple Modal */}
//           {isModalOpen && (
//             <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-2xl bg-opacity-60">
//               <div className="bg-white w-full max-w-4xl h-[90vh] rounded-lg shadow-xl relative">
//                 <button
//                   onClick={closeModal}
//                   className="absolute top-0 right-0 translate-x-full rounded-r-2xl cursor-pointer text-gray-600 bg-white p-2 hover:text-black text-xl font-bold"
//                 >
//                   <X />
//                 </button>
//                 <iframe
//                   src="/documents/hrpolicy/HR POLICY OF COLLEGE.pdf"
//                   title="HR Policy Document"
//                   className="w-full h-full"
//                   frameBorder="0"
//                 />
//               </div>
//             </div>
//           )}
//         </div>
//       );
//     }


 import React, { useState } from 'react';
    import ReactDOM from 'react-dom';
    import { FileText, X, Download, Eye, ChevronRight, FileCheck } from 'lucide-react';

 export  function HrPolicy() {
      const [isModalOpen, setIsModalOpen] = useState(false);

      const openModal = () => setIsModalOpen(true);
      const closeModal = () => setIsModalOpen(false);

      return (
        <div className="bg-gradient-to-br from-indigo-50 via-white to-blue-50 min-h-screen py-5 pb-10">
          {/* Hero Section */}
          <div className="text-center space-y-6 mb-12 py-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full">
              <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
              <span className="text-sm font-medium text-indigo-700 uppercase tracking-wide">
                HR Policy
              </span>
            </div>

            <p className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
              Access official HR policy documents and
              <span className="block text-indigo-600">employee guidelines</span>
            </p>
          </div>

          {/* Main Content */}
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Side - Info */}
              <div>
                <div className="inline-flex items-center bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <FileCheck className="w-4 h-4 mr-2" />
                  Official Document
                </div>
                
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Human Resources Policy
                </h2>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  This document outlines the official Human Resources (HR) policies, 
                  detailing guidelines for employee conduct, recruitment, benefits, and workplace regulations.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-gray-700">
                    <ChevronRight className="w-5 h-5 text-indigo-600 mr-3" />
                    <span>Employee Conduct & Ethics</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <ChevronRight className="w-5 h-5 text-indigo-600 mr-3" />
                    <span>Recruitment & Onboarding Policies</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <ChevronRight className="w-5 h-5 text-indigo-600 mr-3" />
                    <span>Employee Benefits & Welfare</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <ChevronRight className="w-5 h-5 text-indigo-600 mr-3" />
                    <span>Workplace Regulations & Compliance</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={openModal}
                    className="flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <Eye className="w-5 h-5 mr-2" />
                    Preview Document
                  </button>
                  
                  {/* <a 
                    href="/documents/hrpolicy/HR POLICY OF COLLEGE.pdf" 
                    download
                    className="flex items-center justify-center bg-white hover:bg-gray-50 text-indigo-600 px-6 py-3 rounded-lg border-2 border-indigo-600 transition-all duration-300 font-semibold hover:shadow-lg"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download PDF
                  </a> */}
                </div>
              </div>

              {/* Right Side - Visual */}
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-gradient-to-br from-indigo-100 to-blue-100 rounded-xl p-6 mb-6">
                    <FileCheck className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
                    <div className="text-center">
                      <h3 className="font-bold text-gray-900 mb-2">Official HR Policy</h3>
                      <p className="text-gray-600 text-sm">Employee Guidelines Document</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="h-3 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-3 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-3 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                    <div className="h-3 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-3 bg-gray-200 rounded w-5/6 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-2xl bg-opacity-60">
              <div className="bg-white w-full max-w-4xl h-[90vh] rounded-lg shadow-xl relative">
                <button
                  onClick={closeModal}
                  className="absolute top-0 right-0 translate-x-full rounded-r-2xl cursor-pointer text-gray-600 bg-white p-2 hover:text-black text-xl font-bold"
                >
                  <X />
                </button>
                <iframe
                  src="/documents/hrpolicy/HR POLICY OF COLLEGE.pdf"
                  title="HR Policy Document"
                  className="w-full h-full"
                  frameBorder="0"
                />
              </div>
            </div>
          )}
        </div>
      );
    }
