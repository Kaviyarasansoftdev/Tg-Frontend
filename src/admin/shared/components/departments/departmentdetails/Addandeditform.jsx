import { X, Upload, Building2 } from 'lucide-react';
import apiurl from '../../../../../shared/services/apiendpoint/apiendpoint';


export default function Departmentdetailsaddandeditform({
  visible,
  setVisible,
  handlesave,
  handlechange,
  loading,
  formdata,
  handleupdate,
  imageDataUrl,
}) {
  if (!visible) return null;

  const statusOptions = [
    { label: 'Active', value: 'Active' },
    { label: 'InActive', value: 'InActive' },
  ];

  // Get the modal title
  const getDialogTitle = () => {
    return formdata?._id ? 'Edit Department' : 'Add Department';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
      <div className="w-full max-w-4xl overflow-hidden bg-white shadow-2xl rounded-2xl border border-gray-100">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-purple-600 via-purple-700 to-violet-800 p-8">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-violet-600/20 backdrop-blur-sm"></div>
          <div className="relative flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">{getDialogTitle()}</h2>
                <p className="text-purple-100 text-sm mt-1">Manage department information</p>
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
        <div className="p-8 overflow-y-auto max-h-[75vh]">
          <form onSubmit={formdata?._id ? handleupdate : handlesave} className="space-y-8">
            {/* Basic Information */}
            <div className="space-y-6">
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h3>
              </div>
              
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="department_name" className="block text-sm font-medium text-gray-700">
                    Department Name *
                  </label>
                  <input
                    id="Department_name"
                    name="Department_name"
                    value={formdata.Department_name || ''}
                    onChange={handlechange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="e.g., Computer Science & Engineering"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="Department_shortName" className="block text-sm font-medium text-gray-700">
                    Short Name
                  </label>
                  <input
                    id="Department_shortName"
                    name="Department_shortName"
                    value={formdata.Department_shortName || ''}
                    onChange={handlechange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="e.g., CSE"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="department_established" className="block text-sm font-medium text-gray-700">
                    Established Year
                  </label>
                  <input
                    id="Department_established"
                    name="Department_established"
                    value={formdata.Department_established || ''}
                    onChange={handlechange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="e.g., 1985"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="department_Status" className="block text-sm font-medium text-gray-700">
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

            {/* Description */}
            {/* <div className="space-y-6">
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Description</h3>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="department_description" className="block text-sm font-medium text-gray-700">
                  Department Description
                </label>
                <textarea
                  id="Department_description"
                  name="Department_description"
                  value={formdata.Department_description || ''}
                  onChange={handlechange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
                  placeholder="Brief description of the department..."
                  rows="4"
                />
              </div>
            </div> */}

            {/* Vision & Mission */}
            {/* <div className="space-y-6">
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Vision & Mission</h3>
              </div>
              
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="department_vision" className="block text-sm font-medium text-gray-700">
                    Vision Statement
                  </label>
                  <textarea
                    id="Department_vision"
                    name="Department_vision"
                    value={formdata.Department_vision || ''}
                    onChange={handlechange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
                    placeholder="Department's vision statement..."
                    rows="4"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="department_mission" className="block text-sm font-medium text-gray-700">
                    Mission Statement
                  </label>
                  <textarea
                    id="Department_mission"
                    name="Department_mission"
                    value={formdata.Department_mission || ''}
                    onChange={handlechange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
                    placeholder="Department's mission statement..."
                    rows="4"
                  />
                </div>
              </div>
            </div> */}

            {/* Image Upload */}
            {/* <div className="space-y-6">
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Department Image</h3>
              </div>
              
              <div className="space-y-4">
                {(imageDataUrl || formdata.Image) && (
                  <div className="relative w-full h-64 overflow-hidden rounded-2xl bg-gray-100 shadow-inner">
                    <img
                      src={
                        imageDataUrl ||
                        (formdata.department?.image instanceof File
                          ? URL.createObjectURL(formdata.Image)
                          : `${apiurl()}/${formdata.Image}`)
                      }
                      alt="Department Preview"
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                )}
                
                <label className="group relative flex flex-col items-center w-full p-8 transition-all duration-300 border-2 border-dashed border-gray-300 rounded-2xl cursor-pointer hover:border-purple-400 hover:bg-purple-50">
                  <div className="flex flex-col items-center justify-center space-y-4">
                    <div className="p-4 bg-purple-100 rounded-full group-hover:bg-purple-200 transition-colors duration-200">
                      <Upload className="w-8 h-8 text-purple-600" />
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-medium text-gray-700 group-hover:text-purple-700">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-sm text-gray-500 mt-1">PNG, JPG, GIF up to 10MB</p>
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
            </div> */}

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
                  formdata?._id ? 'Update Department' : 'Save Department'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}