import React from 'react';
import { Editor } from 'primereact/editor';
import apiurl from "../../../../shared/services/apiendpoint/apiendpoint";

export default function AdditionalgalleryForm({ 
  visible, 
  setVisible, 
  handlesave, 
  handlechange, 
  loading, 
  formdata, 
  handleupdate, 
  imagePreviews, 
  removeImage, 
  addImage,
  videoPreviews,
  removeVideo,
  addVideo,
    departmentOptions,
  loadingDepartments,
  fetchDepartments
}) {
  if (!visible) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formdata?._id) {
      handleupdate(e);
    } else {
      handlesave(e);
    }
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      addImage(files);
    }
  };

  const handleVideoChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      addVideo(files);
    }
  };

  const handleImageRemove = (index) => {
    removeImage(index);
  };

  const handleVideoRemove = (index) => {
    removeVideo(index);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-4xl max-h-[95vh] overflow-hidden bg-white shadow-2xl rounded-2xl border border-gray-100">
        {/* Enhanced Header */}
        <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-8">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent"></div>
          <div className="relative flex items-center justify-between">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">
                    {formdata?._id ? '✏️' : '✨'}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-white">
                  {formdata?._id ? 'Edit Gallery Item' : 'Create New Gallery Item'}
                </h2>
              </div>
              <p className="text-white/90 text-sm font-medium">
                {formdata?._id ? 'Update your gallery item details' : 'Add new gallery item'}
              </p>
            </div>
            <button 
              onClick={() => setVisible(false)} 
              className="p-3 hover:bg-white/10 rounded-xl transition-all duration-200 group cursor-pointer"
            >
              <svg className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-8 overflow-y-auto max-h-[calc(95vh-140px)]">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Title Field */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <span className="w-6 h-6 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white text-sm">📝</span>
                </span>
                Gallery Details
              </h3>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-semibold text-gray-800">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                    Title *
                  </label>
                  <input
                    type="text"
                    name="Title"
                    value={formdata?.Title || ''}
                    onChange={handlechange}
                    placeholder="Enter gallery title..."
                    className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200 outline-none placeholder-gray-400"
                    required
                  />
                </div>

                {/* Description Text Area */}
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-semibold text-gray-800">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Description
                  </label>
                  <textarea
                    name="Description"
                    value={formdata?.Description || ''}
                    onChange={handlechange}
                    placeholder="Enter gallery description..."
                    rows="4"
                    className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200 outline-none placeholder-gray-400"
                  />
                </div>

                {/* <div className="space-y-2">
                  <label className="flex items-center text-sm font-semibold text-gray-800">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Event Date
                  </label>
                  <input
                    type="date"
                    name="Event_Date"
                    value={formdata?.Event_Date ? new Date(formdata.Event_Date).toISOString().split('T')[0] : ''}
                    onChange={handlechange}
                    className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200 outline-none"
                  />
                </div> */}
              </div>
            </div>

            {/* Select Area Field */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <span className="w-6 h-6 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white text-sm">🎯</span>
                </span>
                Select Area
              </h3>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-semibold text-gray-800">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                    Area *
                  </label>
                  <select
                    name="Area"
                    value={formdata?.Area || ''}
                    onChange={handlechange}
                    className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none"
                    required
                  >
                    <option value="">Select area</option>
                    <option value="Department">🏢 Department</option>
                    <option value="Alumni">🎓 Alumni</option>
                    <option value="Placement cell">💼 Placement Cell</option>
                  </select>
                </div>

                {/* Department Name Field - Only show when Area is "Department" */}
                {formdata?.Area === 'Department' && (
                  <div className="space-y-2">
                    <label htmlFor="Department_id" className="flex items-center text-sm font-semibold text-gray-800">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                      Department Name *
                    </label>
                    <select
                      id="Department_id"
                      name="Department_id"
                      value={formdata.Department_id || ''}
                      onChange={handlechange}
                      className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none"
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
                )}
              </div>
            </div>

            {/* Images Upload Section */}
            <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-xl border border-green-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <span className="w-6 h-6 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white text-sm">🖼️</span>
                </span>
                Gallery Images
                <span className="ml-2 text-sm text-gray-500">
                  ({imagePreviews?.length || 0} image{imagePreviews?.length !== 1 ? 's' : ''})
                </span>
              </h3>
              
              {/* Image Upload Area */}
              <div className="relative mb-6">
                <input
                  type="file"
                  name="Images"
                  onChange={handleImageChange}
                  accept="image/*"
                  multiple
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="w-full px-6 py-8 bg-gradient-to-br from-green-50 to-teal-50 border-2 border-dashed border-green-300 rounded-xl text-center hover:from-green-100 hover:to-teal-100 transition-all duration-200 group">
                  <div className="text-green-600 text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">🖼️</div>
                  <p className="text-green-700 font-semibold text-lg mb-2">Add Gallery Images</p>
                  <p className="text-green-600 text-sm mb-4">JPG, PNG, or GIF files up to 2MB each</p>
                  <div className="inline-flex items-center px-6 py-3 bg-green-100 text-green-700 rounded-lg text-sm font-medium">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Select Multiple Images
                  </div>
                </div>
              </div>

              {/* Image Previews Grid */}
              {imagePreviews && imagePreviews.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {imagePreviews.map((preview, index) => (
                    <div key={index} className="relative group">
                      <div className="aspect-square bg-white rounded-lg border-2 border-green-200 overflow-hidden shadow-sm">
                        <img 
                          src={preview.isExisting ? `${apiurl()}/${preview.url}` : (preview.url || preview)} 
                          alt={`Gallery image ${index + 1}`} 
                          className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => handleImageRemove(index)}
                        className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1.5 transition-colors duration-200 shadow-lg opacity-0 group-hover:opacity-100"
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                      <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs px-2 py-1 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        Image {index + 1}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* No Images Message */}
              {(!imagePreviews || imagePreviews.length === 0) && (
                <div className="text-center py-8 text-gray-500">
                  <div className="text-4xl mb-2">📷</div>
                  <p className="text-sm">No images uploaded yet</p>
                </div>
              )}
            </div>

            {/* Status Section */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <span className="w-6 h-6 bg-yellow-500 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white text-sm">⚙️</span>
                </span>
                Gallery Status
              </h3>

              <div className="space-y-2">
                <label className="flex items-center text-sm font-semibold text-gray-800">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  Status *
                </label>
                <select
                  name="Status"
                  value={formdata?.Status || ''}
                  onChange={handlechange}
                  className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all duration-200 outline-none"
                  required
                >
                  <option value="">Select status</option>
                  <option value="Active">✅ Active - Visible to all</option>
                  <option value="Inactive">⏸️ Inactive - Hidden from view</option>
                </select>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-6">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 py-4 px-8 font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-xl hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                    {formdata?._id ? 'Updating...' : 'Creating...'}
                  </div>
                ) : (
                  <span className="flex items-center justify-center">
                    {formdata?._id ? '✏️ Update Gallery' : '✨ Create Gallery'}
                  </span>
                )}
              </button>
              
              <button
                type="button"
                onClick={() => setVisible(false)}
                className="px-8 py-4 font-semibold text-gray-700 bg-white border-2 border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}