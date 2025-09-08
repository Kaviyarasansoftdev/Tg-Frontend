
import React from 'react';
import apiurl from '../../../../shared/services/apiendpoint/apiendpoint';
import { Plus } from 'lucide-react';

export default function HookupsForm({ visible, setVisible, handlesave, handlechange, loading, formdata, handleupdate, imageDataUrl, activeTab }) {
  if (!visible) return null;

  const statusOptions = [
    { label: 'Active', value: 'Active' },
    { label: 'InActive', value: 'InActive' }
  ];

  // Get the title based on the operation and active tab
  const getDialogTitle = () => {
    const action = formdata?._id ? 'Edit' : 'Add';
    
    switch (activeTab) {
      case 'Departments':
        return `${action} Department`;
      case 'Brand_Name':
        return `${action} Brand`;
      case 'Search_Keywords':
        return `${action} Search Keyword`;
           case 'Product_Specialwords':
        return `${action} Product Specialword`;
      default:
        return `${action} Hookup`;
    }
  };

  // Get form fields based on active tab
  const getFormFields = () => {
    // Common fields for all forms
    const commonFields = (
      <div className="mb-4">
        <label htmlFor="Status" className="block mb-2 text-sm font-medium text-gray-700">Status</label>
        <select
          id="Status"
          name="Status"
          value={formdata?.Status || ''}
          onChange={handlechange}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select status</option>
          {statusOptions.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
    );

    // Tab-specific fields
    let specificFields;
    switch (activeTab) {
     case 'Departments':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="department_name" className="block mb-2 text-sm font-medium text-gray-700">
                  Department Name
                </label>
                <input
                  id="department_name"
                  name="department.name"
                  value={formdata.department?.name || ''}
                  onChange={handlechange}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Computer Science & Engineering"
                  required
                />
              </div>
              <div>
                <label htmlFor="department_shortName" className="block mb-2 text-sm font-medium text-gray-700">
                  Short Name
                </label>
                <input
                  id="department_shortName"
                  name="department.shortName"
                  value={formdata.department?.shortName || ''}
                  onChange={handlechange}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., CSE"
                />
              </div>
              <div>
                <label htmlFor="department_established" className="block mb-2 text-sm font-medium text-gray-700">
                  Established Year
                </label>
                <input
                  id="department_established"
                  name="department.established"
                  value={formdata.department?.established || ''}
                  onChange={handlechange}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., 1985"
                />
              </div>
              <div>
                <label htmlFor="department_Status" className="block mb-2 text-sm font-medium text-gray-700">
                  Status
                </label>
                <select
                  id="department_Status"
                  name="department.Status"
                  value={formdata.department?.Status || ''}
                  onChange={handlechange}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
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
            <div>
              <label htmlFor="department_description" className="block mb-2 text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="department_description"
                name="department.description"
                value={formdata.department?.description || ''}
                onChange={handlechange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Brief description of the department..."
                rows="4"
              />
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="department_vision" className="block mb-2 text-sm font-medium text-gray-700">
                  Vision
                </label>
                <textarea
                  id="department_vision"
                  name="department.vision"
                  value={formdata.department?.vision || ''}
                  onChange={handlechange}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Department's vision statement..."
                  rows="4"
                />
              </div>
              <div>
                <label htmlFor="department_mission" className="block mb-2 text-sm font-medium text-gray-700">
                  Mission
                </label>
                <textarea
                  id="department_mission"
                  name="department.mission"
                  value={formdata.department?.mission || ''}
                  onChange={handlechange}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Department's mission statement..."
                  rows="4"
                />
              </div>
            </div>
          </div>
        );
        break;
    case 'Labs':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800">Laboratories</h3>
              <button
                type="button"
                onClick={() => addItem('labs')}
                className="inline-flex items-center gap-2 px-4 py-2 font-medium text-blue-600 rounded-lg bg-blue-50 hover:bg-blue-100"
              >
                <Plus className="w-4 h-4" />
                Add Lab
              </button>
            </div>
            {(formdata.labs || []).map((lab, index) => (
              <div key={index} className="relative p-4 bg-gray-50 rounded-xl group">
                <button
                  type="button"
                  onClick={() => removeItem('labs', index)}
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 p-1.5 bg-red-50 text-red-500 rounded-lg hover:bg-red-100"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                  <div className="md:col-span-1">
                    <label className="block mb-2 text-sm font-medium text-gray-700">Lab Image</label>
                    <label className="block w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:border-blue-500">
                      {imageDataUrl[`labs_${index}_image`] || lab.image ? (
                        <img
                          src={imageDataUrl[`labs_${index}_image`] || `${apiurl()}/${lab.image}`}
                          className="object-cover w-full h-full rounded-lg"
                          alt={`Lab ${index + 1}`}
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          <Upload className="w-8 h-8 text-gray-400" />
                        </div>
                      )}
                      <input
                        type="file"
                        name={`labs[${index}].image`}
                        onChange={handlechange}
                        className="hidden"
                        accept="image/*"
                      />
                    </label>
                  </div>
                  <div className="md:col-span-3 space-y-4">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div>
                        <label htmlFor={`lab_name_${index}`} className="block mb-2 text-sm font-medium text-gray-700">
                          Lab Name
                        </label>
                        <input
                          id={`lab_name_${index}`}
                          name={`labs[${index}].name`}
                          value={lab.name || ''}
                          onChange={handlechange}
                          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                          placeholder="Lab name"
                        />
                      </div>
                      <div>
                        <label htmlFor={`lab_capacity_${index}`} className="block mb-2 text-sm font-medium text-gray-700">
                          Capacity
                        </label>
                        <input
                          id={`lab_capacity_${index}`}
                          name={`labs[${index}].capacity`}
                          value={lab.capacity || ''}
                          onChange={handlechange}
                          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                          placeholder="e.g., 60 students"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor={`lab_equipment_${index}`} className="block mb-2 text-sm font-medium text-gray-700">
                        Equipment
                      </label>
                      <textarea
                        id={`lab_equipment_${index}`}
                        name={`labs[${index}].equipment`}
                        value={lab.equipment || ''}
                        onChange={handlechange}
                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        placeholder="Equipment details"
                        rows="3"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
        break;
      case 'Search_Keywords':
        specificFields = (
          <div className="mb-4">
            <label htmlFor="Search_Keywords" className="block mb-2 text-sm font-medium text-gray-700">Search Keyword</label>
            <textarea
              id="Search_Keywords"
              name="Search_Keywords"
              value={formdata?.Search_Keywords || ''}
              onChange={handlechange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter search keyword"
            />
          </div>
        );
        break;
        case 'Product_Specialwords':
        specificFields = (
          <div className="mb-4">
            <label htmlFor="Product_Specialwords" className="block mb-2 text-sm font-medium text-gray-700">Product Specialwords</label>
            <textarea
              id="Product_Specialwords"
              name="Product_Specialwords"
              value={formdata?.Product_Specialwords || ''}
              onChange={handlechange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Product Specialwords"
            />
          </div>
        );
        break;
      default:
        // All fields for the "All" tab
        specificFields = (
          <>
            <div className="mb-4">
              <label htmlFor="Tags" className="block mb-2 text-sm font-medium text-gray-700">Department Name</label>
              <textarea
                id="Tags"
                name="Tags"
                value={formdata?.Tags || ''}
                onChange={handlechange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter tag name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="Brand_Name" className="block mb-2 text-sm font-medium text-gray-700">Brand Name</label>
              <textarea
                id="Brand_Name"
                name="Brand_Name"
                value={formdata?.Brand_Name || ''}
                onChange={handlechange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter brand name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="Search_Keywords" className="block mb-2 text-sm font-medium text-gray-700">Search Keyword</label>
              <textarea
                id="Search_Keywords"
                name="Search_Keywords"
                value={formdata?.Search_Keywords || ''}
                onChange={handlechange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter search keyword"
              />
            </div>
          </>
        );
    }

    return (
      <>
        {specificFields}
        {commonFields}
      </>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-30 backdrop-blur-sm">
      <div className="w-full max-w-3xl overflow-hidden bg-white shadow-2xl rounded-xl">
        <div className="p-6 bg-blue-600">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-white">{getDialogTitle()}</h2>
            <button onClick={() => setVisible(false)} className="p-2 text-white rounded-full hover:bg-blue-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="p-6 overflow-y-auto max-h-[70vh]">
          <form onSubmit={!formdata?._id ? handlesave : handleupdate} className="space-y-4">
            {getFormFields()}
            {/* Image Upload (Commented out as in original) */}
            {/* <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Upload Image</label>
              <div className="relative">
                <div className="w-full mb-4">
                  {(imageDataUrl || formdata?.Image) && (
                    <div className="relative w-full h-48 overflow-hidden rounded-lg">
                      <img
                        src={imageDataUrl || `${apiurl()}/${formdata?.Image}`}
                        alt="Preview"
                        className="object-contain w-full h-full"
                      />
                    </div>
                  )}
                </div>
                
                <label className="flex flex-col items-center w-full p-4 transition-colors border-2 border-dashed rounded-lg cursor-pointer hover:border-blue-500">
                  <div className="flex flex-col items-center justify-center">
                    <svg className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  </div>
                  <input
                    type="file"
                    name="Image"
                    onChange={handlechange}
                    className="hidden"
                    accept="image/*"
                  />
                </label>
              </div>
            </div> */}
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 py-2 font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-70"
              >
                {loading ? 'Saving...' : (formdata?._id ? 'Update' : 'Save')}
              </button>
              <button
                type="button"
                onClick={() => setVisible(false)}
                className="px-6 py-2 font-medium text-gray-700 border rounded-lg hover:bg-gray-100"
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