// import React, { useState, useEffect } from 'react';
// import { X, Upload, Building2, Users, User, Mail, Phone, Award, Beaker, Wrench } from 'lucide-react';
// import apiurl from '../../../../shared/services/apiendpoint/apiendpoint';

// export default function Labsaddandeditform({ visible, setVisible, handlesave, handlechange, loading, formdata, handleupdate, imageDataUrl, departmentOptions, loadingDepartments, fetchDepartments }) {

//   if (!visible) return null;
  
//   const statusOptions = [
//     { label: 'Active', value: 'Active' },
//     { label: 'InActive', value: 'InActive' },
//   ];

//   // Get the modal title
//   const getDialogTitle = () => {
//     return formdata?._id ? 'Edit Labs & Facilities' : 'Add Labs & Facilities';
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
//       <div className="w-full max-w-4xl overflow-hidden bg-white shadow-2xl rounded-2xl border border-gray-100">
//         {/* Header */}
//         <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 p-8">
//           <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-sm"></div>
//           <div className="relative flex items-center justify-between">
//             <div className="flex items-center space-x-4">
//               <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
//                 <Beaker className="w-6 h-6 text-white" />
//               </div>
//               <div>
//                 <h2 className="text-3xl font-bold text-white">{getDialogTitle()}</h2>
//                 <p className="text-blue-100 text-sm mt-1">Manage Lab /Facility information</p>
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
//           <div onSubmit={formdata?._id ? handleupdate : handlesave} className="space-y-8">
//             {/* Lab Information */}
//             <div className="space-y-6">
//               <div className="border-l-4 border-blue-500 pl-4">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
//                   <Beaker className="w-5 h-5 mr-2 text-blue-600" />
//                 Lab /Facility Information
//                 </h3>
//               </div>

//               <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
//                 <div className="space-y-2">
//                   <label htmlFor="Lab_name" className="block text-sm font-medium text-gray-700">
//                     Lab /Facility Name *
//                   </label>
//                   <input
//                     id="Lab_name"
//                     name="Lab_name"
//                     value={formdata.Lab_name || ''}
//                     onChange={handlechange}
//                     className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
//                     placeholder="e.g., Computer Science Lab"
//                     required
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <label htmlFor="Capacity" className="block text-sm font-medium text-gray-700">
//                     Capacity *
//                   </label>
//                   <input
//                     id="Capacity"
//                     name="Capacity"
//                     type="number"
//                     value={formdata.Capacity || ''}
//                     onChange={handlechange}
//                     className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
//                     placeholder="e.g., 50"
//                     required
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Department Information */}
//             <div className="space-y-6">
//               <div className="border-l-4 border-blue-500 pl-4">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
//                   <Building2 className="w-5 h-5 mr-2 text-blue-600" />
//                   Department Information
//                 </h3>
//               </div>

//               <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
//                 <div className="space-y-2">
//                   <label htmlFor="Department_id" className="block text-sm font-medium text-gray-700">
//                     Department Name *
//                   </label>
//                   <select
//                     id="Department_id"
//                     name="Department_id"
//                     value={formdata.Department_id || ''}
//                     onChange={handlechange}
//                     className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
//                     required
//                     disabled={loadingDepartments}
//                   >
//                     <option value="">
//                       {loadingDepartments ? 'Loading departments...' : 'Select department'}
//                     </option>
//                     {departmentOptions.map((dept, index) => {
//                       return (
//                         <option key={dept._id || index} value={dept._id}>
//                           {dept.Department_name}
//                         </option>
//                       );
//                     })}
//                   </select>
//                   {!loadingDepartments && departmentOptions.length === 0 && (
//                     <button
//                       type="button"
//                       onClick={fetchDepartments}
//                       className="text-sm text-blue-600 hover:text-blue-700 mt-1"
//                     >
//                       Retry loading departments
//                     </button>
//                   )}
//                 </div>

//                 <div className="space-y-2">
//                   <label htmlFor="Status" className="block text-sm font-medium text-gray-700">
//                     Status
//                   </label>
//                   <select
//                     id="Status"
//                     name="Status"
//                     value={formdata.Status || ''}
//                     onChange={handlechange}
//                     className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
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

//             {/* Equipment and Description */}
//             <div className="space-y-6">
//               <div className="border-l-4 border-blue-500 pl-4">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
//                   <Wrench className="w-5 h-5 mr-2 text-blue-600" />
//                   Equipment & Description
//                 </h3>
//               </div>

//               <div className="space-y-6">
//                 <div className="space-y-2">
//                   <label htmlFor="Equipment" className="block text-sm font-medium text-gray-700">
//                     Equipment
//                   </label>
//                   <textarea
//                     id="Equipment"
//                     name="Equipment"
//                     value={formdata.Equipment || ''}
//                     onChange={handlechange}
//                     className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
//                     placeholder="List of equipment available in the lab..."
//                     rows="4"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <label htmlFor="Description" className="block text-sm font-medium text-gray-700">
//                     Description
//                   </label>
//                   <textarea
//                     id="Description"
//                     name="Description"
//                     value={formdata.Description || ''}
//                     onChange={handlechange}
//                     className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
//                     placeholder="Brief description of the lab and its purpose..."
//                     rows="4"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Image Upload */}
//             <div className="space-y-6">
//               <div className="border-l-4 border-blue-500 pl-4">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">Lab Image</h3>
//               </div>

//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                 {/* Image Preview */}
//                 {(imageDataUrl || formdata.Image) && (
//                   <div className="space-y-2">
//                     <label className="block text-sm font-medium text-gray-700">Current Image</label>
//                     <div className="relative w-32 h-32 overflow-hidden rounded-xl bg-gray-100 shadow-md border-2 border-gray-200">
//                       <img
//                         src={
//                           imageDataUrl ||
//                           (formdata.Image instanceof File
//                             ? URL.createObjectURL(formdata.Image)
//                             : `${apiurl()}/${formdata.Image}`)
//                         }
//                         alt="Lab Preview"
//                         className="object-cover w-full h-full"
//                       />
//                     </div>
//                   </div>
//                 )}

//                 {/* Upload Area */}
//                 <div className="space-y-2">
//                   <label className="block text-sm font-medium text-gray-700">
//                     {(imageDataUrl || formdata.Image) ? 'Change Image' : 'Upload Image'}
//                   </label>
//                   <label className="group relative flex flex-col items-center w-full p-6 transition-all duration-300 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-blue-400 hover:bg-blue-50">
//                     <div className="flex flex-col items-center justify-center space-y-3">
//                       <div className="p-3 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors duration-200">
//                         <Upload className="w-6 h-6 text-blue-600" />
//                       </div>
//                       <div className="text-center">
//                         <p className="text-sm font-medium text-gray-700 group-hover:text-blue-700">
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
//                 onClick={formdata?._id ? handleupdate : handlesave}
//                 className="px-8 py-3 font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 focus:ring-2 focus:ring-blue-500 shadow-lg hover:shadow-xl"
//               >
//                 {loading ? (
//                   <div className="flex items-center space-x-2">
//                     <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                     <span>Saving...</span>
//                   </div>
//                 ) : (
//                   formdata?._id ? 'Update Lab & Facility' : 'Save Lab & Facility'
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import { X, Upload, Building2, Users, User, Mail, Phone, Award, Beaker, Wrench } from 'lucide-react';
import apiurl from '../../../../shared/services/apiendpoint/apiendpoint';

export default function Labsaddandeditform({ visible, setVisible, handlesave, handlechange, loading, formdata, handleupdate, imageDataUrl, departmentOptions, loadingDepartments, fetchDepartments }) {

  if (!visible) return null;
  
  const statusOptions = [
    { label: 'Active', value: 'Active' },
    { label: 'InActive', value: 'InActive' },
  ];

  // Get the modal title
  const getDialogTitle = () => {
    return formdata?._id ? 'Edit Labs & Facilities' : 'Add Labs & Facilities';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
      <div className="w-full max-w-4xl overflow-hidden bg-white shadow-2xl rounded-2xl border border-gray-100">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 p-8">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-sm"></div>
          <div className="relative flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <Beaker className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">{getDialogTitle()}</h2>
                <p className="text-blue-100 text-sm mt-1">Manage laboratory and facility information</p>
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
          <div onSubmit={formdata?._id ? handleupdate : handlesave} className="space-y-8">
            {/* Lab/Facility Information */}
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Beaker className="w-5 h-5 mr-2 text-blue-600" />
                  Lab/Facility Information
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="Lab_name" className="block text-sm font-medium text-gray-700">
                    Lab/Facility Name *
                  </label>
                  <input
                    id="Lab_name"
                    name="Lab_name"
                    value={formdata.Lab_name || ''}
                    onChange={handlechange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="e.g., Computer Science Lab, Library, Auditorium"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="Capacity" className="block text-sm font-medium text-gray-700">
                    Capacity *
                  </label>
                  <input
                    id="Capacity"
                    name="Capacity"
                    type="number"
                    value={formdata.Capacity || ''}
                    onChange={handlechange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="e.g., 50"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Department Information */}
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Building2 className="w-5 h-5 mr-2 text-blue-600" />
                  Department Information
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="Department_id" className="block text-sm font-medium text-gray-700">
                    Department Name *
                  </label>
                  <select
                    id="Department_id"
                    name="Department_id"
                    value={formdata.Department_id || ''}
                    onChange={handlechange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
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
                      className="text-sm text-blue-600 hover:text-blue-700 mt-1"
                    >
                      Retry loading departments
                    </button>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="Status" className="block text-sm font-medium text-gray-700">
                    Status
                  </label>
                  <select
                    id="Status"
                    name="Status"
                    value={formdata.Status || ''}
                    onChange={handlechange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
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

            {/* Equipment/Resources and Description */}
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Wrench className="w-5 h-5 mr-2 text-blue-600" />
                  Equipment/Resources & Description
                </h3>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="Equipment" className="block text-sm font-medium text-gray-700">
                    Equipment/Resources
                  </label>
                  <textarea
                    id="Equipment"
                    name="Equipment"
                    value={formdata.Equipment || ''}
                    onChange={handlechange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
                    placeholder="List of equipment/resources available (e.g., computers, books, projectors, etc.)"
                    rows="4"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="Description" className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    id="Description"
                    name="Description"
                    value={formdata.Description || ''}
                    onChange={handlechange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
                    placeholder="Brief description of the lab/facility and its purpose..."
                    rows="4"
                  />
                </div>
              </div>
            </div>

            {/* Image Upload */}
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Lab/Facility Image</h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Image Preview */}
                {(imageDataUrl || formdata.Image) && (
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Current Image</label>
                    <div className="relative w-32 h-32 overflow-hidden rounded-xl bg-gray-100 shadow-md border-2 border-gray-200">
                      <img
                        src={
                          imageDataUrl ||
                          (formdata.Image instanceof File
                            ? URL.createObjectURL(formdata.Image)
                            : `${apiurl()}/${formdata.Image}`)
                        }
                        alt="Lab/Facility Preview"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                )}

                {/* Upload Area */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    {(imageDataUrl || formdata.Image) ? 'Change Image' : 'Upload Image'}
                  </label>
                  <label className="group relative flex flex-col items-center w-full p-6 transition-all duration-300 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-blue-400 hover:bg-blue-50">
                    <div className="flex flex-col items-center justify-center space-y-3">
                      <div className="p-3 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors duration-200">
                        <Upload className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-medium text-gray-700 group-hover:text-blue-700">
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
                onClick={formdata?._id ? handleupdate : handlesave}
                className="px-8 py-3 font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 focus:ring-2 focus:ring-blue-500 shadow-lg hover:shadow-xl"
              >
                {loading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Saving...</span>
                  </div>
                ) : (
                  formdata?._id ? 'Update Lab/Facility' : 'Save Lab/Facility'
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}