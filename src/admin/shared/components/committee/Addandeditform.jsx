
import React from 'react';
import { Editor } from 'primereact/editor';
import apiurl from "../../../../shared/services/apiendpoint/apiendpoint";

export default function CommitteeForm({ visible, setVisible, handlesave, handlechange, loading, formdata, handleupdate, pdfPreview, removePdf, imagePreviews, removeImage, addImage }) {
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

  const handleImageRemove = (index) => {
    removeImage(index);
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
                  {formdata?._id ? 'Edit Committee' : 'Create New Committee'}
                </h2>
              </div>
              <p className="text-white/90 text-sm font-medium">
                {formdata?._id ? 'Update your committee details' : 'Add new committee information'}
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
            {/* Basic Information Section */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <span className="w-6 h-6 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white text-sm">📝</span>
                </span>
                Committee Information
              </h3>
              
              <div className="grid grid-cols-1 gap-6">
                {/* Committee Title Field */}
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-semibold text-gray-800">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                    Committee Title
                  </label>
                  <input
                    type="text"
                    name="Title"
                    value={formdata?.Title || ''}
                    onChange={handlechange}
                    placeholder="Enter committee title (e.g., Academic Committee, Student Welfare Committee)..."
                    className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none placeholder-gray-400"
                    required
                  />
                </div>

                {/* Committee Description Field with Rich Text Editor */}
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-semibold text-gray-800">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    Committee Description
                  </label>
                  
                  {/* Editor Component */}
                  <div className="bg-white border-2 border-gray-200 rounded-xl focus-within:border-purple-500 focus-within:ring-2 focus-within:ring-purple-200 transition-all duration-200 overflow-hidden">
                    <Editor
                      value={formdata?.Description || ''}
                      onTextChange={(e) => handlechange({ target: { name: 'Description', value: e.htmlValue } })}
                      style={{ height: '200px' }}
                      placeholder="Detailed description of the committee's purpose, objectives, and responsibilities..."
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Multiple Images Upload Section */}
            <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-xl border border-green-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <span className="w-6 h-6 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white text-sm">🖼️</span>
                </span>
                Committee Images
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
                  <p className="text-green-700 font-semibold text-lg mb-2">Add Committee Images</p>
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
                          // src={preview.url || preview} 
                           src={preview.isExisting ? `${apiurl()}/${preview.url}` : (preview.url || preview)} 
                          alt={`Committee image ${index + 1}`} 
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

            {/* PDF Upload Section */}
            <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl border border-red-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <span className="w-6 h-6 bg-red-500 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white text-sm">📄</span>
                </span>
                Committee Document (PDF)
              </h3>
              
              <div className="space-y-6">
                {/* PDF Name Field */}
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-semibold text-gray-800">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    PDF Document Name
                  </label>
                  <input
                    type="text"
                    name="pdfName"
                    value={formdata?.pdfName || ''}
                    onChange={handlechange}
                    placeholder="Enter PDF name (e.g., Committee Charter, Guidelines Document)..."
                    className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-200 outline-none placeholder-gray-400"
                  />
                </div>

                {/* PDF Upload */}
                {!pdfPreview && !formdata?.pdf ? (
                  <div className="relative">
                    <input
                      type="file"
                      name="pdf"
                      onChange={handlechange}
                      accept=".pdf,application/pdf"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="w-full px-6 py-12 bg-gradient-to-br from-red-50 to-pink-50 border-2 border-dashed border-red-300 rounded-xl text-center hover:from-red-100 hover:to-pink-100 transition-all duration-200 group">
                      <div className="text-red-600 text-5xl mb-4 group-hover:scale-110 transition-transform duration-200">📋</div>
                      <p className="text-red-700 font-semibold text-xl mb-2">Choose PDF Document</p>
                      <p className="text-red-600 text-sm mb-4">PDF files up to 5MB</p>
                      <div className="inline-flex items-center px-6 py-3 bg-red-100 text-red-700 rounded-lg text-sm font-medium">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Upload PDF
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative bg-white rounded-xl p-6 border-2 border-red-200 shadow-sm">
                    <div className="flex items-center justify-center h-48 bg-gradient-to-br from-red-50 to-pink-50 rounded-lg border border-red-100">
                      <div className="text-center">
                        <div className="text-red-600 text-6xl mb-4">📄</div>
                        <p className="text-red-700 font-semibold text-xl mb-2">PDF Document Ready</p>
                        <p className="text-red-600 text-sm font-medium mb-2">
                          {formdata?.pdfName || 'Committee Document'}
                        </p>
                        <p className="text-red-500 text-xs mb-4">
                          File: {formdata?.pdf?.name || 'document.pdf'}
                        </p>
                        <div className="flex items-center justify-center space-x-2">
                          <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold">PDF</span>
                          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">✅ Uploaded</span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={removePdf}
                      className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 transition-colors duration-200 shadow-lg"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Status Section */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <span className="w-6 h-6 bg-yellow-500 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white text-sm">⚙️</span>
                </span>
                Committee Status
              </h3>

              <div className="space-y-2">
                <label className="flex items-center text-sm font-semibold text-gray-800">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                   Status
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
                    {formdata?._id ? '✏️ Update Committee' : '✨ Create Committee'}
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