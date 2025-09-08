// import React, { useState, useEffect } from 'react';
// import { X, Upload, Building2, Users, User, Mail, Phone, Award } from 'lucide-react';
// import apiurl from '../../../../shared/services/apiendpoint/apiendpoint';

// export default function Facultiesaddandeditform({ visible, setVisible, handlesave, handlechange, loading, formdata, handleupdate, imageDataUrl, departmentOptions, loadingDepartments, fetchDepartments }) {

//   if (!visible) return null;
//   const statusOptions = [
//     { label: 'Active', value: 'Active' },
//     { label: 'InActive', value: 'InActive' },
//   ];

//   const designationOptions = [
//     { label: 'Professor', value: 'Professor' },
//     { label: 'Associate Professor', value: 'Associate Professor' },
//     { label: 'Assistant Professor', value: 'Assistant Professor' },
//     { label: 'Lecturer', value: 'Lecturer' },
//     { label: 'Senior Lecturer', value: 'Senior Lecturer' },
//     { label: 'Lab Incharge', value: 'Lab Incharge' },
//     { label: 'Lab Assistant', value: 'Lab Assistant' },
//     { label: 'Head of Department', value: 'Head of Department' },
//     { label: 'Dean', value: 'Dean' },
//     { label: 'Principal', value: 'Principal' },

//   ];

//   const qualificationOptions = [
//     { label: 'Ph.D', value: 'Ph.D' },
//     { label: 'M.Tech', value: 'M.Tech' },
//     { label: 'M.E', value: 'M.E' },
//     { label: 'M.Sc', value: 'M.Sc' },
//     { label: 'MBA', value: 'MBA' },
//     { label: 'MCA', value: 'MCA' },
//     { label: 'B.Tech', value: 'B.Tech' },
//     { label: 'B.E', value: 'B.E' },
//   ];

//   // Get the modal title
//   const getDialogTitle = () => {
//     return formdata?._id ? 'Edit Faculty' : 'Add Faculty';
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
//       <div className="w-full max-w-6xl overflow-hidden bg-white shadow-2xl rounded-2xl border border-gray-100">
//         {/* Header */}
//         <div className="relative bg-gradient-to-r from-purple-600 via-purple-700 to-violet-800 p-8">
//           <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-violet-600/20 backdrop-blur-sm"></div>
//           <div className="relative flex items-center justify-between">
//             <div className="flex items-center space-x-4">
//               <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
//                 <Users className="w-6 h-6 text-white" />
//               </div>
//               <div>
//                 <h2 className="text-3xl font-bold text-white">{getDialogTitle()}</h2>
//                 <p className="text-purple-100 text-sm mt-1">Manage faculty information</p>
//               </div>
//             </div>
//             <button
//               onClick={() => setVisible(false)}
//               className="p-2 text-white/80 hover:text-white rounded-xl hover:bg-white/20 transition-all duration-200"
//             >
//               <X className="w-6 h-6" />
//             </button>
//           </div>
//         </div>

//         {/* Form Content */}
//         <div className="p-8 overflow-y-auto max-h-[80vh]">
//           <form onSubmit={formdata?._id ? handleupdate : handlesave} className="space-y-8">
//             {/* Personal Information */}
//             <div className="space-y-6">
//               <div className="border-l-4 border-purple-500 pl-4">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
//                   <User className="w-5 h-5 mr-2 text-purple-600" />
//                   Personal Information
//                 </h3>
//               </div>

//               <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
//                 <div className="space-y-2">
//                   <label htmlFor="faculty_name" className="block text-sm font-medium text-gray-700">
//                     Full Name *
//                   </label>
//                   <input
//                     id="Faculty_name"
//                     name="Faculty_name"
//                     value={formdata.Faculty_name || ''}
//                     onChange={handlechange}
//                     className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
//                     placeholder="e.g., Dr. John Smith"
//                     required
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <label htmlFor="faculty_designation" className="block text-sm font-medium text-gray-700">
//                     Designation *
//                   </label>
//                   <select
//                     id="Faculty_designation"
//                     name="Faculty_designation"
//                     value={formdata.Faculty_designation || ''}
//                     onChange={handlechange}
//                     className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
//                     required
//                   >
//                     <option value="">Select designation</option>
//                     {designationOptions.map((option) => (
//                       <option key={option.value} value={option.value}>
//                         {option.label}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
//                 <div className="space-y-2">
//                   <label htmlFor="faculty_email" className="block text-sm font-medium text-gray-700">
//                     Email Address *
//                   </label>
//                   <div className="relative">
//                     <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//                     <input
//                       id="Faculty_email"
//                       name="Faculty_email"
//                       type="email"
//                       value={formdata.Faculty_email || ''}
//                       onChange={handlechange}
//                       className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
//                       placeholder="e.g., john.smith@university.edu"
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   <label htmlFor="faculty_phone" className="block text-sm font-medium text-gray-700">
//                     Phone Number
//                   </label>
//                   <div className="relative">
//                     <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//                     <input
//                       id="Faculty_phone"
//                       name="Faculty_phone"
//                       value={formdata.Faculty_phone || ''}
//                       onChange={handlechange}
//                       className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
//                       placeholder="e.g., +1 (555) 123-4567"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Academic Information */}
//             <div className="space-y-6">
//               <div className="border-l-4 border-purple-500 pl-4">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
//                   <Award className="w-5 h-5 mr-2 text-purple-600" />
//                   Academic Information
//                 </h3>
//               </div>

//               <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
//                 <div className="space-y-2">
//                   <label htmlFor="faculty_qualification" className="block text-sm font-medium text-gray-700">
//                     Highest Qualification *
//                   </label>
//                   <select
//                     id="Faculty_qualification"
//                     name="Faculty_qualification"
//                     value={formdata.Faculty_qualification || ''}
//                     onChange={handlechange}
//                     className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
//                     required
//                   >
//                     <option value="">Select qualification</option>
//                     {qualificationOptions.map((option) => (
//                       <option key={option.value} value={option.value}>
//                         {option.label}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div className="space-y-2">
//                   <label htmlFor="faculty_specialization" className="block text-sm font-medium text-gray-700">
//                     Specialization
//                   </label>
//                   <input
//                     id="Faculty_specialization"
//                     name="Faculty_specialization"
//                     value={formdata.Faculty_specialization || ''}
//                     onChange={handlechange}
//                     className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
//                     placeholder="e.g., Machine Learning, Data Science"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <label htmlFor="faculty_experience" className="block text-sm font-medium text-gray-700">
//                     Years of Experience
//                   </label>
//                   <input
//                     id="Faculty_experience"
//                     name="Faculty_experience"
//                     type="number"
//                     value={formdata.Faculty_experience || ''}
//                     onChange={handlechange}
//                     className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
//                     placeholder="e.g., 10"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <label htmlFor="faculty_joining_date" className="block text-sm font-medium text-gray-700">
//                     Joining Date
//                   </label>
//                   <input
//                     id="Faculty_joining_date"
//                     name="Faculty_joining_date"
//                     type="date"
//                     value={formdata.Faculty_joining_date || ''}
//                     onChange={handlechange}
//                     className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Department Information */}
//             <div className="space-y-6">
//               <div className="border-l-4 border-purple-500 pl-4">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
//                   <Building2 className="w-5 h-5 mr-2 text-purple-600" />
//                   Department Information
//                 </h3>
//               </div>

//               <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
//                 {/* <div className="space-y-2">
//                   <label htmlFor="department_name" className="block text-sm font-medium text-gray-700">
//                     Department Name *
//                   </label>
//                   <select
//                     id="Department_name"
//                     name="Department_name"
//                     value={formdata.Department_name || ''}
//                     onChange={handlechange}
//                     className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
//                     required
//                     disabled={loadingDepartments}
//                   >
//                     <option value="">
//                       {loadingDepartments ? 'Loading departments...' : 'Select department'}
//                     </option>
//                     {departmentOptions.map((dept, index) => {
//                       const deptName = typeof dept === 'string' ? dept : dept.Department_name;
//                       return (
//                         <option key={index} value={deptName}>
//                           {deptName}
//                         </option>
//                       );
//                     })}
//                   </select>
//                   {/* Optional: Add a refresh button for departments */}
//                 {/* {!loadingDepartments && departmentOptions.length === 0 && (
//                     <button
//                       type="button"
//                       onClick={fetchDepartments}
//                       className="text-sm text-purple-600 hover:text-purple-700 mt-1"
//                     >
//                       Retry loading departments
//                     </button>
//                   )}
//                 </div> */}

//                 <div className="space-y-2">
//                   <label htmlFor="department_id" className="block text-sm font-medium text-gray-700">
//                     Department Name *
//                   </label>
//                   <select
//                     id="Department_id"
//                     name="Department_id"  // Changed from Department_name to Department_id
//                     value={formdata.Department_id || ''}  // Changed to Department_id
//                     onChange={handlechange}
//                     className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
//                     required
//                     disabled={loadingDepartments}
//                   >
//                     <option value="">
//                       {loadingDepartments ? 'Loading departments...' : 'Select department'}
//                     </option>
//                     {departmentOptions.map((dept, index) => {
//                       // Assuming each dept object has _id and Department_name properties
//                       return (
//                         <option key={dept._id || index || Department_id} value={dept._id}>
//                           {dept.Department_name}
//                         </option>
//                       );
//                     })}
//                   </select>
//                   {!loadingDepartments && departmentOptions.length === 0 && (
//                     <button
//                       type="button"
//                       onClick={fetchDepartments}
//                       className="text-sm text-purple-600 hover:text-purple-700 mt-1"
//                     >
//                       Retry loading departments
//                     </button>
//                   )}
//                 </div>

//                 <div className="space-y-2">
//                   <label htmlFor="faculty_status" className="block text-sm font-medium text-gray-700">
//                     Status
//                   </label>
//                   <select
//                     id="Status"
//                     name="Status"
//                     value={formdata.Status || ''}
//                     onChange={handlechange}
//                     className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
//                   >
//                     <option value="">Select status</option>
//                     {statusOptions.map((option) => (
//                       <option key={option.value} value={option.value}>
//                         {option.label}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>
//             </div>

//             {/* Additional Information */}
//             <div className="space-y-6">
//               <div className="border-l-4 border-purple-500 pl-4">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Information</h3>
//               </div>

//               <div className="space-y-6">
//                 <div className="space-y-2">
//                   <label htmlFor="faculty_bio" className="block text-sm font-medium text-gray-700">
//                     Biography
//                   </label>
//                   <textarea
//                     id="Faculty_bio"
//                     name="Faculty_bio"
//                     value={formdata.Faculty_bio || ''}
//                     onChange={handlechange}
//                     className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
//                     placeholder="Brief biography of the faculty member..."
//                     rows="4"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <label htmlFor="faculty_research_interests" className="block text-sm font-medium text-gray-700">
//                     Research Interests
//                   </label>
//                   <textarea
//                     id="Faculty_research_interests"
//                     name="Faculty_research_interests"
//                     value={formdata.Faculty_research_interests || ''}
//                     onChange={handlechange}
//                     className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
//                     placeholder="Areas of research interest..."
//                     rows="3"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <label htmlFor="faculty_publications" className="block text-sm font-medium text-gray-700">
//                     Publications
//                   </label>
//                   <textarea
//                     id="Faculty_publications"
//                     name="Faculty_publications"
//                     value={formdata.Faculty_publications || ''}
//                     onChange={handlechange}
//                     className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
//                     placeholder="List of publications..."
//                     rows="3"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Image Upload - Modified for minimal preview */}
//             <div className="space-y-6">
//               <div className="border-l-4 border-purple-500 pl-4">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">Faculty Photo</h3>
//               </div>

//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                 {/* Image Preview - Minimal Size */}
//                 {(imageDataUrl || formdata.Image) && (
//                   <div className="space-y-2">
//                     <label className="block text-sm font-medium text-gray-700">Current Photo</label>
//                     <div className="relative w-32 h-32 overflow-hidden rounded-xl bg-gray-100 shadow-md border-2 border-gray-200">
//                       <img
//                         src={
//                           imageDataUrl ||
//                           (formdata.Image instanceof File
//                             ? URL.createObjectURL(formdata.Image)
//                             : `${apiurl()}/${formdata.Image}`)
//                         }
//                         alt="Faculty Preview"
//                         className="object-cover w-full h-full"
//                       />
//                     </div>
//                   </div>
//                 )}

//                 {/* Upload Area */}
//                 <div className="space-y-2">
//                   <label className="block text-sm font-medium text-gray-700">
//                     {(imageDataUrl || formdata.Image) ? 'Change Photo' : 'Upload Photo'}
//                   </label>
//                   <label className="group relative flex flex-col items-center w-full p-6 transition-all duration-300 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-purple-400 hover:bg-purple-50">
//                     <div className="flex flex-col items-center justify-center space-y-3">
//                       <div className="p-3 bg-purple-100 rounded-full group-hover:bg-purple-200 transition-colors duration-200">
//                         <Upload className="w-6 h-6 text-purple-600" />
//                       </div>
//                       <div className="text-center">
//                         <p className="text-sm font-medium text-gray-700 group-hover:text-purple-700">
//                           Click to upload or drag and drop
//                         </p>
//                         <p className="text-xs text-gray-500 mt-1">PNG, JPG, GIF up to 10MB</p>
//                       </div>
//                     </div>
//                     <input
//                       type="file"
//                       id="Image"
//                       name="Image"
//                       onChange={handlechange}
//                       className="hidden"
//                       accept="image/*"
//                     />
//                   </label>
//                 </div>
//               </div>
//             </div>

//             {/* Submit Buttons */}
//             <div className="flex gap-4 pt-8 justify-end border-t border-gray-200">
//               <button
//                 type="button"
//                 onClick={() => setVisible(false)}
//                 className="px-8 py-3 font-medium text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 focus:ring-2 focus:ring-gray-300"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="px-8 py-3 font-medium text-white bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl hover:from-purple-700 hover:to-violet-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 focus:ring-2 focus:ring-purple-500 shadow-lg hover:shadow-xl"
//               >
//                 {loading ? (
//                   <div className="flex items-center space-x-2">
//                     <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                     <span>Saving...</span>
//                   </div>
//                 ) : (
//                   formdata?._id ? 'Update Faculty' : 'Save Faculty'
//                 )}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import { X, Upload, Building2, Users, User, Mail, Phone, Award } from 'lucide-react';
import apiurl from '../../../../shared/services/apiendpoint/apiendpoint';

export default function Facultiesaddandeditform({ visible, setVisible, handlesave, handlechange, loading, formdata, handleupdate, imageDataUrl, departmentOptions, loadingDepartments, fetchDepartments }) {

  if (!visible) return null;
  const statusOptions = [
    { label: 'Active', value: 'Active' },
    { label: 'InActive', value: 'InActive' },
  ];

  const designationOptions = [
    { label: 'Professor', value: 'Professor' },
    { label: 'Associate Professor', value: 'Associate Professor' },
    { label: 'Assistant Professor', value: 'Assistant Professor' },
    { label: 'Lecturer', value: 'Lecturer' },
    { label: 'Senior Lecturer', value: 'Senior Lecturer' },
    { label: 'Lab Incharge', value: 'Lab Incharge' },
    { label: 'Lab Assistant', value: 'Lab Assistant' },
    { label: 'Head of Department', value: 'Head of Department' },
    { label: 'Dean', value: 'Dean' },
    { label: 'Principal', value: 'Principal' },
  ];

  // const qualificationOptions = [
  //   { label: 'Ph.D', value: 'Ph.D' },
  //   { label: 'M.Tech', value: 'M.Tech' },
  //   { label: 'M.E', value: 'M.E' },
  //   { label: 'M.E', value: 'M.E' },
  //   { label: 'M.E,(Ph.D)', value: 'M.E,(Ph.D)' },
  //   { label: 'M.Tech,(Ph.D)', value: 'M.Tech,(ph.D)' },
  //   { label: 'M.Sc', value: 'M.Sc' },
  //   { label: 'MBA', value: 'MBA' },
  //   { label: 'MCA', value: 'MCA' },
  //   { label: 'B.Tech', value: 'B.Tech' },
  //   { label: 'B.E', value: 'B.E' },
  //   { label: 'M.A', value: 'M.A' },
  //   { label: 'B.E', value: 'B.E' },
  //   { label: 'B.E', value: 'B.E' },
  //   { label: 'B.E', value: 'B.E' },
  //   { label: 'B.E', value: 'B.E' },
  //   { label: 'B.E', value: 'B.E' },

  // ];

  const qualificationOptions = [
  { label: 'Ph.D', value: 'Ph.D' },
  { label: 'M.Tech', value: 'M.Tech' },
  { label: 'M.E', value: 'M.E' },
  { label: 'M.E,(Ph.D)', value: 'M.E,(Ph.D)' },
  { label: 'M.Tech,(Ph.D)', value: 'M.Tech,(Ph.D)' },
  { label: 'M.Sc', value: 'M.Sc' },
  { label: 'MBA', value: 'MBA' },
  { label: 'MCA', value: 'MCA' },
  { label: 'B.Tech', value: 'B.Tech' },
  { label: 'B.E', value: 'B.E' },
  { label: 'M.A', value: 'M.A' },
  { label: 'M.A, M.Phil', value: 'M.A, M.Phil' },
  { label: 'M.Sc, M.Phil', value: 'M.Sc, M.Phil' },
  { label: 'M.A, SLET', value: 'M.A, SLET' },
  { label: 'M.Sc, SLET', value: 'M.Sc, SLET' },
  { label: 'M.A, M.Phil, SLET', value: 'M.A, M.Phil, SLET' },
  { label: 'M.Sc, M.Phil, SLET', value: 'M.Sc, M.Phil, SLET' },
];

  // New state for Specified Type and Role
  const [specifiedType, setSpecifiedType] = useState(formdata.Specified_type || '');
  const [showSpecifiedRole, setShowSpecifiedRole] = useState(!!formdata.Specified_type);

  // Role options based on Specified Type
  const roleOptions = {
    'Alumni Cell': [
      'Alumni Coordinator', 'PRESIDENT', 'VICE PRESIDENT', 'SECRETARY', 'JOINT SECRETARY', 'TREASURER', 'EXECUTIVE COMMITTEE MEMBER'
    ],
    'Placement Cell': ['Placement Officer', 'Member']
  };

  // Get the modal title
  const getDialogTitle = () => {
    return formdata?._id ? 'Edit Faculty' : 'Add Faculty';
  };

  // Handle change for Specified Type
  const handleSpecifiedTypeChange = (e) => {
    const value = e.target.value;
    setSpecifiedType(value);
    setShowSpecifiedRole(!!value); // Show Specified Role field if a type is selected
    handlechange({ target: { name: 'Specified_type', value } }); // Update formdata
  };

  // Handle change for Specified Role
  const handleSpecifiedRoleChange = (e) => {
    handlechange({ target: { name: 'Specified_role', value: e.target.value } });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
      <div className="w-full max-w-6xl overflow-hidden bg-white shadow-2xl rounded-2xl border border-gray-100">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-purple-600 via-purple-700 to-violet-800 p-8">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-violet-600/20 backdrop-blur-sm"></div>
          <div className="relative flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">{getDialogTitle()}</h2>
                <p className="text-purple-100 text-sm mt-1">Manage faculty information</p>
              </div>
            </div>
            <button
              onClick={() => setVisible(false)}
              className="p-2 text-white/80 hover:text-white rounded-xl hover:bg-white/20 transition-all duration-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-8 overflow-y-auto max-h-[80vh]">
          <form onSubmit={formdata?._id ? handleupdate : handlesave} className="space-y-8">
            {/* Personal Information */}
            <div className="space-y-6">
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <User className="w-5 h-5 mr-2 text-purple-600" />
                  Personal Information
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="faculty_name" className="block text-sm font-medium text-gray-700">
                    Full Name *
                  </label>
                  <input
                    id="Faculty_name"
                    name="Faculty_name"
                    value={formdata.Faculty_name || ''}
                    onChange={handlechange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="e.g., Dr. John Smith"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="faculty_designation" className="block text-sm font-medium text-gray-700">
                    Designation *
                  </label>
                  <select
                    id="Faculty_designation"
                    name="Faculty_designation"
                    value={formdata.Faculty_designation || ''}
                    onChange={handlechange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    required
                  >
                    <option value="">Select designation</option>
                    {designationOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="faculty_email" className="block text-sm font-medium text-gray-700">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      id="Faculty_email"
                      name="Faculty_email"
                      type="email"
                      value={formdata.Faculty_email || ''}
                      onChange={handlechange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                      placeholder="e.g., john.smith@university.edu"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="faculty_phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      id="Faculty_phone"
                      name="Faculty_phone"
                      value={formdata.Faculty_phone || ''}
                      onChange={handlechange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                      placeholder="e.g., +1 (555) 123-4567"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Academic Information */}
            <div className="space-y-6">
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-purple-600" />
                  Academic Information
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="faculty_qualification" className="block text-sm font-medium text-gray-700">
                    Highest Qualification *
                  </label>
                  <select
                    id="Faculty_qualification"
                    name="Faculty_qualification"
                    value={formdata.Faculty_qualification || ''}
                    onChange={handlechange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    required
                  >
                    <option value="">Select qualification</option>
                    {qualificationOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="faculty_specialization" className="block text-sm font-medium text-gray-700">
                    Specialization
                  </label>
                  <input
                    id="Faculty_specialization"
                    name="Faculty_specialization"
                    value={formdata.Faculty_specialization || ''}
                    onChange={handlechange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="e.g., Machine Learning, Data Science"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="faculty_experience" className="block text-sm font-medium text-gray-700">
                    Years of Experience
                  </label>
                  <input
                    id="Faculty_experience"
                    name="Faculty_experience"
                    type="number"
                    value={formdata.Faculty_experience || ''}
                    onChange={handlechange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="e.g., 10"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="faculty_joining_date" className="block text-sm font-medium text-gray-700">
                    Joining Date
                  </label>
                  <input
                    id="Faculty_joining_date"
                    name="Faculty_joining_date"
                    type="date"
                    value={formdata.Faculty_joining_date || ''}
                    onChange={handlechange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Department Information */}
            <div className="space-y-6">
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Building2 className="w-5 h-5 mr-2 text-purple-600" />
                  Department Information
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="department_id" className="block text-sm font-medium text-gray-700">
                    Department Name *
                  </label>
                  <select
                    id="Department_id"
                    name="Department_id"
                    value={formdata.Department_id || ''}
                    onChange={handlechange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    required
                    disabled={loadingDepartments}
                  >
                    <option value="">
                      {loadingDepartments ? 'Loading departments...' : 'Select department'}
                    </option>
                    {departmentOptions.map((dept, index) => {
                      return (
                        <option key={dept._id || index} value={dept._id}>
                          {dept.Department_name}
                        </option>
                      );
                    })}
                  </select>
                  {!loadingDepartments && departmentOptions.length === 0 && (
                    <button
                      type="button"
                      onClick={fetchDepartments}
                      className="text-sm text-purple-600 hover:text-purple-700 mt-1"
                    >
                      Retry loading departments
                    </button>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="faculty_status" className="block text-sm font-medium text-gray-700">
                    Status
                  </label>
                  <select
                    id="Status"
                    name="Status"
                    value={formdata.Status || ''}
                    onChange={handlechange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  >
                    <option value="">Select status</option>
                    {statusOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-6">
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Information</h3>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="faculty_bio" className="block text-sm font-medium text-gray-700">
                    Biography
                  </label>
                  <textarea
                    id="Faculty_bio"
                    name="Faculty_bio"
                    value={formdata.Faculty_bio || ''}
                    onChange={handlechange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
                    placeholder="Brief biography of the faculty member..."
                    rows="4"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="faculty_research_interests" className="block text-sm font-medium text-gray-700">
                    Research Interests
                  </label>
                  <textarea
                    id="Faculty_research_interests"
                    name="Faculty_research_interests"
                    value={formdata.Faculty_research_interests || ''}
                    onChange={handlechange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
                    placeholder="Areas of research interest..."
                    rows="3"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="faculty_publications" className="block text-sm font-medium text-gray-700">
                    Publications
                  </label>
                  <textarea
                    id="Faculty_publications"
                    name="Faculty_publications"
                    value={formdata.Faculty_publications || ''}
                    onChange={handlechange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
                    placeholder="List of publications..."
                    rows="3"
                  />
                </div>

                {/* Specified Type */}
                <div className="space-y-2">
                  <label htmlFor="specified_type" className="block text-sm font-medium text-gray-700">
                    Specified Type
                  </label>
                  <select
                    id="Specified_type"
                    name="Specified_type"
                    value={specifiedType}
                    onChange={handleSpecifiedTypeChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  >
                    <option value="">Select type</option>
                    <option value="Alumni Cell">Alumni Cell</option>
                    <option value="Placement Cell">Placement Cell</option>
                  </select>
                </div>

                {/* Specified Role (conditionally rendered) */}
                {showSpecifiedRole && (
                  <div className="space-y-2">
                    <label htmlFor="specified_role" className="block text-sm font-medium text-gray-700">
                      Specified Role
                    </label>
                    <select
                      id="Specified_role"
                      name="Specified_role"
                      value={formdata.Specified_role || ''}
                      onChange={handleSpecifiedRoleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    >
                      <option value="">Select role</option>
                      {roleOptions[specifiedType].map((role) => (
                        <option key={role} value={role}>
                          {role}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
            </div>

            {/* Image Upload - Modified for minimal preview */}
            <div className="space-y-6">
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Faculty Photo</h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Image Preview - Minimal Size */}
                {(imageDataUrl || formdata.Image) && (
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Current Photo</label>
                    <div className="relative w-32 h-32 overflow-hidden rounded-xl bg-gray-100 shadow-md border-2 border-gray-200">
                      <img
                        src={
                          imageDataUrl ||
                          (formdata.Image instanceof File
                            ? URL.createObjectURL(formdata.Image)
                            : `${apiurl()}/${formdata.Image}`)
                        }
                        alt="Faculty Preview"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                )}

                {/* Upload Area */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    {(imageDataUrl || formdata.Image) ? 'Change Photo' : 'Upload Photo'}
                  </label>
                  <label className="group relative flex flex-col items-center w-full p-6 transition-all duration-300 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-purple-400 hover:bg-purple-50">
                    <div className="flex flex-col items-center justify-center space-y-3">
                      <div className="p-3 bg-purple-100 rounded-full group-hover:bg-purple-200 transition-colors duration-200">
                        <Upload className="w-6 h-6 text-purple-600" />
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-medium text-gray-700 group-hover:text-purple-700">
                          Click to upload or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 mt-1">PNG, JPG, GIF up to 10MB</p>
                      </div>
                    </div>
                    <input
                      type="file"
                      id="Image"
                      name="Image"
                      onChange={handlechange}
                      className="hidden"
                      accept="image/*"
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* Submit Buttons */}
            <div className="flex gap-4 pt-8 justify-end border-t border-gray-200">
              <button
                type="button"
                onClick={() => setVisible(false)}
                className="px-8 py-3 font-medium text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 focus:ring-2 focus:ring-gray-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-3 font-medium text-white bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl hover:from-purple-700 hover:to-violet-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 focus:ring-2 focus:ring-purple-500 shadow-lg hover:shadow-xl"
              >
                {loading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Saving...</span>
                  </div>
                ) : (
                  formdata?._id ? 'Update Faculty' : 'Save Faculty'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}