// // import React, { useState, useEffect } from 'react';
// // import { Users, BookOpen, Star, Calendar, MapPin, Award, Target, Heart, Brain, Sparkles, ChevronDown, Play, ArrowRight, Zap, Globe, Shield, Lightbulb, CircleX } from 'lucide-react';
// // import apiurl from '../../services/apiendpoint/apiendpoint';

// // export default function Cell({ cellData }) {
// //   const [showModal, setShowModal] = useState(false);

// //   return (
// //     <>
// //       <div className="min-h-screen bg-white overflow-hidden">

// //         <section className="py-20 pb-0 px-4">
// //           <div className="max-w-7xl mx-auto space-y-6">

// //             {/* Tag label */}
// //             <div className="flex items-center justify-center gap-2">
// //               <span className="text-sm font-medium text-purple-700 uppercase tracking-wide  px-4 py-2 bg-purple-50 rounded-full">{cellData?.Title}</span>
// //             </div>

// //             {/* Title */}
// //             <h2 className="text-4xl text-center lg:text-5xl font-bold text-gray-900 leading-tight">

// //               <span className="block text-center text-purple-600">Empowering Excellence in Education</span>
// //             </h2>

// //             {/* Description */}
// //             <div dangerouslySetInnerHTML={{ __html: cellData?.Description }} />

// //           </div>
// //         </section>


// //         <div className="my-8 mb-20 py-6 border-t border-gray-200 max-w-7xl mx-auto  px-10 bg-blue-50 rounded-3xl">
// //           <h3 className="text-2xl font-bold text-gray-900 mb-6">Documents</h3>
// //           <div className="flex flex-wrap gap-4">
// //             <button
// //               onClick={() => setShowModal(true)}
// //               className="flex items-center gap-3  cursor-pointer px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
// //             >
// //               <BookOpen className="w-5 h-5" />
// //               {cellData?.pdfName}
// //             </button>
// //           </div>
// //         </div>

// //         {showModal && (
// //           <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-2xl bg-opacity-60">
// //             <div className="bg-white w-full max-w-4xl h-[90vh] rounded-lg shadow-xl relative">
// //               {/* Close button */}
// //               <button
// //                 onClick={() => setShowModal(false)}
// //                 className="absolute top-0 right-0 translate-x-full rounded-r-2xl cursor-pointer text-gray-600 bg-white p-2 hover:text-black text-xl font-bold"
// //               >
// //                <CircleX />
// //               </button>

// //               {/* PDF Iframe */}
// //               <iframe
// //                 src={`${apiurl()}/${cellData?.pdf}`}
// //                 title="PDF Document"
// //                 className="w-full h-full"
// //                 frameBorder="0"
// //               ></iframe>
// //             </div>
// //           </div>
// //         )}

// //         {/* Modern CTA Section */}
// //         {/* <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-white">
// //           <div className="max-w-4xl mx-auto text-center">
// //             <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
// //               <Lightbulb className="w-4 h-4" />
// //               Get Started
// //             </div>
// //             <h2 className="text-5xl font-bold text-gray-900 mb-8">
// //               Ready to Grow with Us?
// //             </h2>
// //             <p className="text-xl text-gray-600 mb-12 leading-relaxed">
// //               Join our community of educators committed to excellence and continuous improvement.
// //             </p>

// //             <div className="flex flex-col sm:flex-row gap-6 justify-center">
// //               <button className="group bg-gradient-to-r from-blue-500 to-purple-500 text-white px-10 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
// //                 <div className="flex items-center gap-3">
// //                   <span>Register for Programs</span>
// //                   <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
// //                 </div>
// //               </button>
// //               <button className="border-2 border-gray-300 text-gray-700 px-10 py-4 rounded-full font-semibold hover:border-blue-500 hover:text-blue-500 transition-all duration-300">
// //                 Download Brochure
// //               </button>
// //             </div>
// //           </div>
// //         </section> */}
// //       </div>
// //     </>
// //   );
// // }

// import React, { useState } from 'react';
// import { BookOpen, CircleX, Lightbulb, ArrowRight } from 'lucide-react';
// import apiurl from '../../services/apiendpoint/apiendpoint';

// export default function Cell({ cellData }) {
//   const [showModal, setShowModal] = useState(false);

//   return (
//     <>
//       <div className="min-h-screen bg-white overflow-hidden">
//         <section className="py-20 pb-0 px-4">
//           <div className="max-w-7xl mx-auto space-y-6">
//             {/* Tag label */}
//             <div className="flex items-center justify-center gap-2">
//               <span className="text-sm font-medium text-purple-700 uppercase tracking-wide px-4 py-2 bg-purple-50 rounded-full">
//                 {cellData?.Title}
//               </span>
//             </div>

//             {/* Title */}
//             <h2 className="text-4xl text-center lg:text-5xl font-bold text-gray-900 leading-tight">
//               <span className="block text-center text-purple-600">Empowering Excellence in Education</span>
//             </h2>

//             {/* Description */}
//             <div dangerouslySetInnerHTML={{ __html: cellData?.Description }} />

//             {/* Images Section */}
//             {cellData?.Images?.length > 0 && (
//               <div className="my-8">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-6">Images</h3>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                   {cellData.Images.map((image, index) => (
//                     <div key={index} className="relative overflow-hidden rounded-lg shadow-md">
//                       <img
//                         src={`${apiurl()}/${image}`}
//                         alt={`Image ${index + 1}`}
//                         className="w-full h-64 object-cover"
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </section>

//         <div className="my-8 mb-20 py-6 border-t border-gray-200 max-w-7xl mx-auto px-10 bg-blue-50 rounded-3xl">
//           <h3 className="text-2xl font-bold text-gray-900 mb-6">Documents</h3>
//           <div className="flex flex-wrap gap-4">
//             <button
//               onClick={() => setShowModal(true)}
//               className="flex items-center gap-3 cursor-pointer px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
//             >
//               <BookOpen className="w-5 h-5" />
//               {cellData?.pdfName}
//             </button>
//           </div>
//         </div>

//         {showModal && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-2xl bg-opacity-60">
//             <div className="bg-white w-full max-w-4xl h-[90vh] rounded-lg shadow-xl relative">
//               {/* Close button */}
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="absolute top-0 right-0 translate-x-full rounded-r-2xl cursor-pointer text-gray-600 bg-white p-2 hover:text-black text-xl font-bold"
//               >
//                 <CircleX />
//               </button>

//               {/* PDF Iframe */}
//               <iframe
//                 src={`${apiurl()}/${cellData?.pdf}`}
//                 title="PDF Document"
//                 className="w-full h-full"
//                 frameBorder="0"
//               ></iframe>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

import React, { useState } from 'react';
import { BookOpen, CircleX } from 'lucide-react';
import apiurl from '../../services/apiendpoint/apiendpoint';

export default function Cell({ cellData }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-white overflow-hidden">
        <section className="py-20 pb-10 px-4">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Tag label */}
            <div className="flex items-center justify-center gap-2">
              <span className="text-sm font-medium text-purple-700 uppercase tracking-wide px-4 py-2 bg-purple-50 rounded-full">
                {cellData?.Title}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-4xl text-center lg:text-5xl font-bold text-gray-900 leading-tight">
              <span className="block text-center text-purple-600">Empowering Excellence in Education</span>
            </h2>

            {/* Description */}
            <div className='' dangerouslySetInnerHTML={{ __html: cellData?.Description }} />

            {/* Images Section */}
            {cellData?.Images?.length > 0 && (
              <div className="my-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Images</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {cellData.Images.map((image, index) => (
                    <div key={index} className="relative overflow-hidden rounded-lg shadow-md">
                      <img
                        src={`${apiurl()}/${image}`}
                        alt={`Image ${index + 1}`}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Documents Section */}
        {cellData?.pdf && cellData?.pdfName && (
          <div className="my-8 mb-20 py-6 border-t border-gray-200 max-w-7xl mx-auto px-10 bg-blue-50 rounded-3xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Documents</h3>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setShowModal(true)}
                className="flex items-center gap-3 cursor-pointer px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
              >
                <BookOpen className="w-5 h-5" />
                {cellData.pdfName}
              </button>
            </div>
          </div>
        )}

        {showModal && cellData?.pdf && (
          <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-2xl bg-opacity-60">
            <div className="bg-white w-full max-w-4xl h-[90vh] rounded-lg shadow-xl relative">
              {/* Close button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-0 right-0 translate-x-full rounded-r-2xl cursor-pointer text-gray-600 bg-white p-2 hover:text-black text-xl font-bold"
              >
                <CircleX />
              </button>

              {/* PDF Iframe */}
              <iframe
                src={`${apiurl()}/${cellData.pdf}`}
                title="PDF Document"
                className="w-full h-full"
                frameBorder="0"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </>
  );
}