


import React, { useState, useEffect } from 'react';
import { X, Upload, Building2, Users, User, Mail, Phone, Award } from 'lucide-react';
import apiurl from '../../../../../shared/services/apiendpoint/apiendpoint';


export default function Latestupdatesheroaddandeditform({ visible, setVisible, handlesave, handlechange, loading, formdata, handleupdate, imageDataUrl, departmentOptions, loadingDepartments, fetchDepartments }) {

  if (!visible) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
      <div className="w-full max-w-3xl overflow-hidden bg-white shadow-2xl rounded-xl">
        <div className="p-6 bg-blue-600">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-white">Add Latest updates Images</h2>
            <button onClick={() => setVisible(false)} className="p-2 text-white rounded-full hover:bg-blue-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="p-6 overflow-y-auto max-h-[70vh]">
          <form onSubmit={!formdata?._id ? handlesave : handleupdate} className="space-y-4">
            {/* Title */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                name="Title"
                value={formdata?.Title || ''}
                onChange={handlechange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter title"
                required
              />
            </div>
      
            {/* Image Upload */}
            <div>
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
            </div>
     <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Status</label>
              <select
                name="Status"
                value={formdata?.Status || ''}
                onChange={handlechange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            {/* Submit Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 py-2 font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-70 cursor-pointer"
              >
                {loading ? 'Saving...' : (formdata?._id ? 'Update' : 'Save')}
              </button>
              <button
                type="button"
                onClick={() => setVisible(false)}
                className="px-6 py-2 font-medium text-gray-700 border rounded-lg hover:bg-gray-100 cursor-pointer"
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