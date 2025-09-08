import apiurl from "../../../../shared/services/apiendpoint/apiendpoint";

export default function NotificationForm({ visible, setVisible, handlesave, handlechange, loading, formdata, handleupdate,imagePreview,pdfPreview,removeImage,removePdf}) {
  if (!visible) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formdata?._id) {
      handleupdate(e);
    } else {
      handlesave(e);
    }
  };

  const renderTypeSpecificFields = () => {
    switch (formdata?.type) {
      case 'Link':
        return (
          <div className="space-y-2">
            <label className="flex items-center text-sm font-semibold text-gray-800">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              🔗 Link URL
            </label>
            <input
              type="url"
              name="Link"
              value={formdata?.Link || ''}
              onChange={handlechange}
              placeholder="https://example.com"
              className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:bg-white transition-all duration-200 outline-none placeholder-gray-400"
              required
            />
          </div>
        );

      case 'Image':
        return (
          <div className="space-y-4">
            <label className="flex items-center text-sm font-semibold text-gray-800">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              🖼️ Upload Image
            </label>

            {!imagePreview && !formdata?.Image ? (
              <div className="relative">
                <input
                  type="file"
                  name="Image"
                  onChange={handlechange}
                  accept="image/*"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  required
                />
                <div className="w-full px-6 py-8 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-dashed border-green-300 rounded-xl text-center hover:from-green-100 hover:to-emerald-100 transition-all duration-200 group">
                  <div className="text-green-600 text-3xl mb-3 group-hover:scale-110 transition-transform duration-200">📸</div>
                  <p className="text-green-700 font-semibold text-lg mb-1">Choose Image File</p>
                  <p className="text-green-600 text-sm">PNG, JPG, GIF up to 10MB</p>
                  <div className="mt-3 inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-lg text-sm font-medium">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    Upload Image
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative bg-white rounded-xl p-4 border-2 border-green-200 shadow-sm">
                <img 
                  // src={imagePreview} 
                   src={imagePreview || `${apiurl()}/${formdata?.Image}`}
                  alt="Preview" 
                  className="w-full h-64 object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={removeImage}
                  className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 transition-colors duration-200 shadow-lg"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="mt-3 flex items-center justify-between">
                  <p className="text-sm text-green-700 font-medium">✅ Image uploaded successfully</p>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Ready</span>
                </div>
              </div>
            )}
          </div>
        );

      case 'PDF':
        return (
          <div className="space-y-4">
            <label className="flex items-center text-sm font-semibold text-gray-800">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
              📄 Upload PDF Document
            </label>

            {!pdfPreview && !formdata?.pdf ? (
              <div className="relative">
                <input
                  type="file"
                  name="pdf"
                  onChange={handlechange}
                  accept=".pdf,application/pdf"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  required
                />
                <div className="w-full px-6 py-8 bg-gradient-to-br from-red-50 to-pink-50 border-2 border-dashed border-red-300 rounded-xl text-center hover:from-red-100 hover:to-pink-100 transition-all duration-200 group">
                  <div className="text-red-600 text-3xl mb-3 group-hover:scale-110 transition-transform duration-200">📋</div>
                  <p className="text-red-700 font-semibold text-lg mb-1">Choose PDF Document</p>
                  <p className="text-red-600 text-sm">PDF files minimum up to 5MB</p>
                  <div className="mt-3 inline-flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-lg text-sm font-medium">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    <div className="text-red-600 text-5xl mb-3">📄</div>
                    <p className="text-red-700 font-semibold text-lg mb-1">PDF Document Ready</p>
                    <p className="text-red-600 text-sm font-medium">{formdata?.pdf?.name || 'Document.pdf'}</p>
                    <div className="mt-3 flex items-center justify-center space-x-2">
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
        );

      default:
        return (
          <div className="text-center py-12 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl border-2 border-dashed border-gray-300">
            <div className="text-gray-400 text-4xl mb-3">📋</div>
            <p className="text-gray-600 font-medium">Select a notification type above to continue</p>
            <p className="text-gray-500 text-sm mt-1">Choose Link, Image, or PDF to see relevant fields</p>
          </div>
        );
    }
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
                  {formdata?._id ? 'Edit Notification' : 'Create New Notification'}
                </h2>
              </div>
              <p className="text-white/90 text-sm font-medium">
                {formdata?._id ? 'Update your notification details and settings' : 'Share important updates and content with your audience'}
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
                Basic Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Title Field */}
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-semibold text-gray-800">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                    Notification Title
                  </label>
                  <input
                    type="text"
                    name="Title"
                    value={formdata?.Title || ''}
                    onChange={handlechange}
                    placeholder="Enter a compelling title..."
                    className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none placeholder-gray-400"
                    required
                  />
                </div>

                {/* Notification Type Field */}
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-semibold text-gray-800">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                    Notification Type
                  </label>
                  <select
                    name="type"
                    value={formdata?.type || ''}
                    onChange={handlechange}
                    className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none"
                    required
                  >
                    <option value="">Select notification type</option>
                    <option value="Link">🔗 Link Notification</option>
                    <option value="Image">🖼️ Image Notification</option>
                    <option value="PDF">📄 PDF Document</option>
                  </select>
                </div>
              </div>

              {/* Description Field */}
              <div className="space-y-2 mt-6">
                <label className="flex items-center text-sm font-semibold text-gray-800">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  Description
                </label>
                <textarea
                  name="Description"
                  value={formdata?.Description || ''}
                  onChange={handlechange}
                  placeholder="Provide detailed information about this notification..."
                  rows="4"
                  className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none resize-none placeholder-gray-400"
                  // required
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <span className="w-6 h-6 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white text-sm">📎</span>
                </span>
                Content Attachment
              </h3>
              
              {renderTypeSpecificFields()}
            </div>

            {/* Settings Section */}
            <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-xl border border-green-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <span className="w-6 h-6 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white text-sm">⚙️</span>
                </span>
                Notification Settings
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Date Field */}
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-semibold text-gray-800">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                    📅 Publication Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formdata?.date || ''}
                    onChange={handlechange}
                    className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200 outline-none"
                    required
                  />
                </div>

                {/* Status Field */}
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-semibold text-gray-800">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                    Publication Status
                  </label>
                  <select
                    name="Status"
                    value={formdata?.Status || ''}
                    onChange={handlechange}
                    className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200 outline-none"
                    required
                  >
                    <option value="">Select status</option>
                    <option value="Active">✅ Active - Visible to all</option>
                    <option value="Inactive">⏸️ Inactive - Hidden from view</option>
                    <option value="draft">📝 Draft - Work in progress</option>
                  </select>
                </div>
              </div>

              {/* New Badge Toggle */}
              <div className="mt-6 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center">
                      <span className="text-yellow-600 text-lg">✨</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Highlight as "NEW"</h4>
                      <p className="text-sm text-gray-600">Add a special "NEW" badge to make this notification stand out</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name="isNew"
                      checked={formdata?.isNew || false}
                      onChange={(e) => handlechange({
                        target: {
                          name: 'isNew',
                          value: e.target.checked
                        }
                      })}
                      className="sr-only"
                    />
                    <div className={`w-16 h-8 rounded-full transition-colors duration-300 ${
                      formdata?.isNew ? 'bg-gradient-to-r from-yellow-400 to-orange-500' : 'bg-gray-300'
                    }`}>
                      <div className={`w-7 h-7 bg-white rounded-full shadow-lg transform transition-transform duration-300 mt-0.5 ${
                        formdata?.isNew ? 'translate-x-8' : 'translate-x-0.5'
                      }`}>
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-xs">
                            {formdata?.isNew ? '✨' : '○'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-6">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 py-4 px-8 font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-xl hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                    {formdata?._id ? 'Updating...' : 'Creating...'}
                  </div>
                ) : (
                  <span className="flex items-center justify-center">
                    {formdata?._id ? '✏️ Update Notification' : '✨ Create Notification'}
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