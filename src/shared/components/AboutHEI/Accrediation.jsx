// import React from 'react'

// export default function Accrediation() {
//     return (
//         <div>
//             <div className="bg-gray-50 p-8 pt-20 min-h-screen">
//                 <div className="max-w-md mx-auto">
//                     <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">

//                         <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b border-gray-100">
//                             <h2 className="text-xl font-semibold text-gray-800 text-center">Accreditation Status</h2>
//                         </div>

//                         <div className="px-6 py-8 text-center space-y-6">
//                             <div className="mx-auto w-20 h-20 bg-red-500 rounded-full flex items-center justify-center shadow-md">
//                                 <div className="text-white font-bold text-lg">NAAC</div>
//                             </div>

//                             <div className="space-y-2">
//                                 <h3 className="text-lg font-semibold text-gray-800">
//                                     Accredited by NAAC with "A" Grade
//                                 </h3>
//                                 <div className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
//                                     <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
//                                     3.23 / 4.00
//                                 </div>
//                             </div>

//                             <div className="bg-gray-50 rounded-lg p-4">
//                                 <p className="text-sm text-gray-600 mb-1">Valid Period</p>
//                                 <p className="font-medium text-gray-800">Oct 30, 2024 to Oct 29, 2029</p>
//                             </div>

//                             <div className="pt-2">
//                                 <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200">
//                                     <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
//                                     </svg>
//                                     Certificate of Accreditation
//                                 </a>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="mt-6 bg-white rounded-xl shadow-md border border-gray-100 p-6">
//                         <div className="flex items-start space-x-4">
//                             <div className="flex-shrink-0">
//                                 <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
//                                     <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                                     </svg>
//                                 </div>
//                             </div>
//                             <div>
//                                 <h4 className="font-medium text-gray-800 mb-1">Quality Assurance</h4>
//                                 <p className="text-sm text-gray-600">Our institution maintains the highest standards of academic excellence as recognized by NAAC accreditation.</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }


import React, { useState } from 'react';

export default function Accrediation() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openCertificate = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="bg-gray-50 p-8 pt-20 min-h-screen">
            <div className="max-w-md mx-auto">
                {/* Accreditation Status Card */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b border-gray-100">
                        <h2 className="text-xl font-semibold text-gray-800 text-center">Accreditation Status</h2>
                    </div>

                    {/* Content */}
                    <div className="px-6 py-8 text-center space-y-6">
                        {/* Logo Placeholder */}
                        <div className="mx-auto w-20 h-20 bg-red-500 rounded-full flex items-center justify-center shadow-md">
                            <div className="text-white font-bold text-lg">NAAC</div>
                        </div>

                        {/* Main Status */}
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold text-gray-800">
                                Accredited by NAAC with "A" Grade
                            </h3>
                            <div className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                3.23 / 4.00
                            </div>
                        </div>

                        {/* Validity Period */}
                        <div className="bg-gray-50 rounded-lg p-4">
                            <p className="text-sm text-gray-600 mb-1">Valid Period</p>
                            <p className="font-medium text-gray-800">Oct 30, 2024 to Oct 29, 2029</p>
                        </div>

                        {/* Certificate Link */}
                        <div className="pt-2">
                            <a
                                href="#"
                                onClick={openCertificate}
                                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200"
                            >
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                </svg>
                                Certificate of Accreditation
                            </a>
                        </div>
                    </div>
                </div>

                {/* Additional Info Card */}
                <div className="mt-6 bg-white rounded-xl shadow-md border border-gray-100 p-6">
                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-medium text-gray-800 mb-1">Quality Assurance</h4>
                            <p className="text-sm text-gray-600">Our institution maintains the highest standards of academic excellence as recognized by NAAC accreditation.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Certificate Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-6xl h-[95vh] flex flex-col">

                        <div className="flex items-center justify-between p-6 border-b border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-800">Certificate of Accreditation</h3>
                            <button
                                onClick={closeModal}
                                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>

                        <div className="flex-1 p-6">
                            <iframe
                                src="/documents/about-hei/NAAC_Certificate.pdf"
                                className="w-full h-full border border-gray-200 rounded-lg"
                                title="NAAC Accreditation Certificate"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
