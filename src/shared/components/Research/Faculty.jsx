
// // import React, { useState, useEffect } from 'react';
// // import { getfaculty } from '../../services/apifaculty/apifaaculty';
// // import apiurl from '../../services/apiendpoint/apiendpoint';

// // export default function Faculty() {
// //   const [facultyData, setFacultyData] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchFaculty = async () => {
// //       try {
// //         setLoading(true);
// //         const data = await getfaculty();
// //         setFacultyData(data.resdata || []);
// //       } catch (err) {
// //         setError('Failed to fetch faculty data');
// //         console.error(err);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchFaculty();
// //   }, []);

// //   if (loading) {
// //     return (
// //       <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
// //         <div className="max-w-7xl mx-auto">
// //           <div className="text-center">
// //             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
// //             <p className="mt-4 text-gray-600">Loading faculty data...</p>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }

// //   if (error) {
// //     return (
// //       <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
// //         <div className="max-w-7xl mx-auto">
// //           <div className="text-center">
// //             <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
// //               {error}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
// //       <div className="max-w-7xl mx-auto">
// //         {/* Header */}
// //         <div className="text-center mb-12">
// //           <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Faculty</h1>
// //           <p className="text-xl text-gray-600">Meet our dedicated team of educators and researchers</p>
// //           <div className="mt-4 w-24 h-1 bg-blue-600 mx-auto rounded"></div>
// //         </div>

// //         {/* Faculty Grid */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //           {facultyData.map((faculty) => (
// //             <div
// //               key={faculty._id}
// //               className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
// //             >
// //               {/* Faculty Image */}
// //               <div className="relative h-64 bg-gradient-to-br from-blue-400 to-blue-600">
// //                 {faculty.Image ? (
// //                   <img
// //                  src={`${apiurl()}/${faculty?.Image}`}
// //                     alt={faculty.Faculty_name}
// //                     className="w-full h-full object-cover"
// //                     onError={(e) => {
// //                       e.target.style.display = 'none';
// //                       e.target.nextSibling.style.display = 'flex';
// //                     }}
// //                   />
// //                 ) : null}
// //                 <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600">
// //                   <div className="text-white text-6xl font-bold">
// //                     {faculty.Faculty_name.charAt(0)}
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Faculty Info */}
// //               <div className="p-6">
// //                 <div className="text-center">
// //                   <h3 className="text-xl font-bold text-gray-900 mb-2">
// //                     {faculty.Faculty_name}
// //                   </h3>
                  
// //                   <div className="mb-4">
// //                     <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium">
// //                       {faculty.Department_id?.Department_shortName || 'N/A'}
// //                     </span>
// //                   </div>

// //                   <p className="text-gray-600 text-sm mb-2">
// //                     {faculty.Faculty_designation}
// //                   </p>
                  
// //                   <p className="text-gray-500 text-sm">
// //                     {faculty.Department_id?.Department_name || 'Department not specified'}
// //                   </p>

// //                   {/* Additional Info */}
// //                   <div className="mt-4 pt-4 border-t border-gray-200">
// //                     <div className="flex justify-between text-xs text-gray-500 mb-1">
// //                       <span>Experience:</span>
// //                       <span className="font-medium">{faculty.Faculty_experience} years</span>
// //                     </div>
// //                     <div className="flex justify-between text-xs text-gray-500 mb-1">
// //                       <span>Qualification:</span>
// //                       <span className="font-medium">{faculty.Faculty_qualification}</span>
// //                     </div>
// //                     {faculty.Faculty_research_interests && (
// //                       <div className="mt-2">
// //                         <p className="text-xs text-gray-500">Research Interests:</p>
// //                         <p className="text-xs text-gray-700 font-medium">
// //                           {faculty.Faculty_research_interests}
// //                         </p>
// //                       </div>
// //                     )}
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Empty State */}
// //         {facultyData.length === 0 && (
// //           <div className="text-center py-12">
// //             <div className="text-gray-400 text-6xl mb-4">👥</div>
// //             <h3 className="text-xl font-medium text-gray-900 mb-2">No Faculty Found</h3>
// //             <p className="text-gray-500">There are currently no active faculty members to display.</p>
// //           </div>
// //         )}

// //         {/* Footer Info */}
// //         {facultyData.length > 0 && (
// //           <div className="mt-12 text-center">
// //             <p className="text-gray-600">
// //               Showing <span className="font-semibold">{facultyData.length}</span> active faculty members
// //             </p>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// import React, { useState, useEffect } from 'react';
// import { getfaculty } from '../../services/apifaculty/apifaaculty';
// import apiurl from '../../services/apiendpoint/apiendpoint';

// export default function Faculty() {
//   const [facultyData, setFacultyData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchFaculty = async () => {
//       try {
//         setLoading(true);
//         const data = await getfaculty();
//         setFacultyData(data.resdata || []);
//       } catch (err) {
//         setError('Failed to fetch faculty data');
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFaculty();
//   }, []);

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center">
//             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
//             <p className="mt-4 text-gray-600">Loading faculty data...</p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center">
//             <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
//               {error}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Faculty</h1>
//           <p className="text-xl text-gray-600">Meet our dedicated team of educators and researchers</p>
//           <div className="mt-4 w-24 h-1 bg-blue-600 mx-auto rounded"></div>
//         </div>

//         {/* Faculty Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {facultyData.map((faculty) => (
//             <div
//               key={faculty._id}
//               className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
//             >
//               {/* Faculty Image */}
//              <div className="flex justify-center pt-8 pb-4">
//                 <div className="relative w-32 h-32">
//                   {faculty.Image ? (
//                     <>
//                       <img
//                         src={`${apiurl()}/${faculty.Image}`}
//                         alt={faculty.Faculty_name}
//                         className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
//                         onError={(e) => {
//                           e.target.style.display = 'none';
//                           e.target.parentElement.querySelector('.fallback-avatar').style.display = 'flex';
//                         }}
//                       />
//                       <div className="fallback-avatar absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-4 border-white shadow-lg">
//                         <div className="text-white text-4xl font-bold">
//                           {faculty.Faculty_name.trim().charAt(0)}
//                         </div>
//                       </div>
//                     </>
//                   ) : (
//                     <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-4 border-white shadow-lg">
//                       <div className="text-white text-4xl font-bold">
//                         {faculty.Faculty_name.trim().charAt(0)}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* Faculty Info */}
//               <div className="px-6 pb-6">
//                 <div className="text-center">
//                   <h3 className="text-xl font-bold text-gray-900 mb-2">
//                     {faculty.Faculty_name}
//                   </h3>
                  
//                   <div className="mb-4">
//                     <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium">
//                       {faculty.Department_id?.Department_shortName || 'N/A'}
//                     </span>
//                   </div>

//                   <p className="text-gray-600 text-sm mb-2">
//                     {faculty.Faculty_designation}
//                   </p>
                  
//                   <p className="text-gray-500 text-sm">
//                     {faculty.Department_id?.Department_name || 'Department not specified'}
//                   </p>

//                   {/* Additional Info */}
//                   <div className="mt-4 pt-4 border-t border-gray-200">
//                     <div className="flex justify-between text-xs text-gray-500 mb-1">
//                       <span>Experience:</span>
//                       <span className="font-medium">{faculty.Faculty_experience} years</span>
//                     </div>
//                     <div className="flex justify-between text-xs text-gray-500 mb-1">
//                       <span>Qualification:</span>
//                       <span className="font-medium">{faculty.Faculty_qualification}</span>
//                     </div>
//                     {faculty.Faculty_research_interests && (
//                       <div className="mt-2">
//                         <p className="text-xs text-gray-500">Research Interests:</p>
//                         <p className="text-xs text-gray-700 font-medium">
//                           {faculty.Faculty_research_interests}
//                         </p>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Empty State */}
//         {facultyData.length === 0 && (
//           <div className="text-center py-12">
//             <div className="text-gray-400 text-6xl mb-4">👥</div>
//             <h3 className="text-xl font-medium text-gray-900 mb-2">No Faculty Found</h3>
//             <p className="text-gray-500">There are currently no active faculty members to display.</p>
//           </div>
//         )}

//         {/* Footer Info */}
//         {facultyData.length > 0 && (
//           <div className="mt-12 text-center">
//             <p className="text-gray-600">
//               Showing <span className="font-semibold">{facultyData.length}</span> active faculty members
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import { getfaculty } from '../../services/apifaculty/apifaaculty';
import apiurl from '../../services/apiendpoint/apiendpoint';

export default function Faculty() {
  const [departmentData, setDepartmentData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        setLoading(true);
        const data = await getfaculty();
        setDepartmentData(data.resdata || []);
      } catch (err) {
        setError('Failed to fetch faculty data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFaculty();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading faculty data...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Faculty</h1>
          <p className="text-xl text-gray-600">Meet our dedicated team of educators and researchers</p>
          <div className="mt-4 w-24 h-1 bg-blue-600 mx-auto rounded"></div>
        </div>

        {/* Faculty by Department */}
        {departmentData.map((department) => (
          <div key={department.department._id} className="mb-16">
            {/* Department Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                {department.department.Department_name}
              </h2>
              <div className="flex justify-center items-center gap-4">
                <span className="inline-block bg-blue-500 text-white text-sm px-4 py-2 rounded-full font-medium">
                  {department.department.Department_shortName}
                </span>
                <span className="text-gray-600 text-sm">
                  {department.faculty.length} Faculty Member{department.faculty.length !== 1 ? 's' : ''}
                </span>
              </div>
              <div className="mt-4 w-16 h-1 bg-blue-500 mx-auto rounded"></div>
            </div>

            {/* Faculty Grid for this Department */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {department.faculty.map((faculty) => (
                <div
                  key={faculty._id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  {/* Faculty Image */}
                  <div className="flex justify-center pt-8 pb-4">
                    <div className="relative w-32 h-32">
                      {faculty.Image ? (
                        <>
                          <img
                            src={`${apiurl()}/${faculty.Image}`}
                            alt={faculty.Faculty_name}
                            className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.parentElement.querySelector('.fallback-avatar').style.display = 'flex';
                            }}
                          />
                          <div className="fallback-avatar absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-4 border-white shadow-lg">
                            <div className="text-white text-4xl font-bold">
                              {faculty.Faculty_name.trim().charAt(0)}
                            </div>
                          </div>
                        </>
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-4 border-white shadow-lg">
                          <div className="text-white text-4xl font-bold">
                            {faculty.Faculty_name.trim().charAt(0)}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Faculty Info */}
                  <div className="px-6 pb-6">
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {faculty.Faculty_name}
                      </h3>

                      <p className="text-gray-600 text-sm mb-2">
                        {faculty.Faculty_designation}
                      </p>

                      {/* Additional Info */}
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="flex justify-between text-xs text-gray-500 mb-1">
                          <span>Experience:</span>
                          <span className="font-medium">{faculty.Faculty_experience} years</span>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 mb-1">
                          <span>Qualification:</span>
                          <span className="font-medium">{faculty.Faculty_qualification}</span>
                        </div>
                        {faculty.Faculty_research_interests && (
                          <div className="mt-2">
                            <p className="text-xs text-gray-500">Research Interests:</p>
                            <p className="text-xs text-gray-700 font-medium">
                              {faculty.Faculty_research_interests}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Empty State */}
        {departmentData.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">👥</div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">No Faculty Found</h3>
            <p className="text-gray-500">There are currently no active faculty members to display.</p>
          </div>
        )}

        {/* Footer Info */}
        {departmentData.length > 0 && (
          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Showing <span className="font-semibold">{departmentData.reduce((total, dept) => total + dept.faculty.length, 0)}</span> active faculty members 
              across <span className="font-semibold">{departmentData.length}</span> department{departmentData.length !== 1 ? 's' : ''}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}