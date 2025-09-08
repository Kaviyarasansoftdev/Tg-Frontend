import React, { useState } from 'react';
import { FileText, X, Eye, ChevronRight, FileCheck } from 'lucide-react';

export function AdmissionBrochureSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-sky-50 min-h-screen py-5 pb-10">
      {/* Hero Section */}
      <div className="text-center space-y-6 mb-12 py-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <span className="text-sm font-medium text-blue-700 uppercase tracking-wide">
            Admission Brochure
          </span>
        </div>

        <p className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
          Discover our programs and
          <span className="block text-blue-600">admission details at Tagore Institute of Engineering and Technology</span>
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Info */}
          <div>
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <FileCheck className="w-4 h-4 mr-2" />
              Official Admission Brochure
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Admission Brochure
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              This brochure provides comprehensive details about the academic programs, admission process, eligibility criteria, and campus facilities at Tagore Institute of Engineering and Technology.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center text-gray-700">
                <ChevronRight className="w-5 h-5 text-blue-600 mr-3" />
                <span>Academic Programs</span>
              </div>
              <div className="flex items-center text-gray-700">
                <ChevronRight className="w-5 h-5 text-blue-600 mr-3" />
                <span>Admission Eligibility and Process</span>
              </div>
              <div className="flex items-center text-gray-700">
                <ChevronRight className="w-5 h-5 text-blue-600 mr-3" />
                <span>Campus Facilities and Resources</span>
              </div>
              <div className="flex items-center text-gray-700">
                <ChevronRight className="w-5 h-5 text-blue-600 mr-3" />
                <span>Scholarships and Financial Aid</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={openModal}
                className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Eye className="w-5 h-5 mr-2" />
                Preview Brochure
              </button>
            </div>
          </div>

          {/* Right Side - Visual */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-gradient-to-br from-blue-100 to-sky-100 rounded-xl p-6 mb-6">
                <FileCheck className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <div className="text-center">
                  <h3 className="font-bold text-gray-900 mb-2">Official Admission Brochure</h3>
                  <p className="text-gray-600 text-sm">Programs and Admission Details</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="h-3 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-3 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-3 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                <div className="h-3 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-3 bg-gray-200 rounded w-5/6 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-2xl bg-opacity-60">
          <div className="bg-white w-full max-w-4xl h-[90vh] rounded-lg shadow-xl relative">
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 translate-x-full rounded-r-2xl cursor-pointer text-gray-600 bg-white p-2 hover:text-black text-xl font-bold"
            >
              <X />
            </button>
            <img
              src="/documents/admission/ADMISSION-25.jpg"
              title="Admission Brochure"
              className="w-full h-full"
              frameBorder="0"
            />
              <p className="text-gray-600 text-center">
                Your browser does not support iframes. Please{' '}
                <a href="/documents/admission/ADMISSION-25.jpg" download className="text-blue-600 hover:underline">
                  download the PDF
                </a>{' '}
                to view the full details.
              </p>
        
          </div>
        </div>
      )}
    </div>
  );
}