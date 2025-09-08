import React, { useState } from 'react';
import { FileText, X, Eye, ChevronRight, FileCheck } from 'lucide-react';

export function AdmissionProcedureSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-sky-50 min-h-screen pt-5">
      {/* Hero Section */}
      <div className="text-center space-y-6 mb-12 py-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <span className="text-sm font-medium text-blue-700 uppercase tracking-wide">
            Admission Procedure
          </span>
        </div>

        <p className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
          Join our academic community at
          <span className="block text-blue-600">Tagore Institute of Engineering and Technology</span>
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Info */}
          <div>
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <FileCheck className="w-4 h-4 mr-2" />
              Admission Process
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Admission Procedure
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              This document outlines the step-by-step admission process for joining our engineering programs, including eligibility criteria, application through TNEA counseling or management quota, and enrollment details.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center text-gray-700">
                <ChevronRight className="w-5 h-5 text-blue-600 mr-3" />
                <span>Check Eligibility Criteria</span>
              </div>
              <div className="flex items-center text-gray-700">
                <ChevronRight className="w-5 h-5 text-blue-600 mr-3" />
                <span>Apply via TNEA or Management Quota</span>
              </div>
              <div className="flex items-center text-gray-700">
                <ChevronRight className="w-5 h-5 text-blue-600 mr-3" />
                <span>Document Verification</span>
              </div>
              <div className="flex items-center text-gray-700">
                <ChevronRight className="w-5 h-5 text-blue-600 mr-3" />
                <span>Seat Allotment and Enrollment</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-0 lg:mb-20">
              <button 
                onClick={openModal}
                className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Eye className="w-5 h-5 mr-2" />
                Preview Admission Procedure
              </button>
            </div>
          </div>

          {/* Right Side - Visual */}
          <div className="relative mb-12 lg:mb-0">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-gradient-to-br from-blue-100 to-sky-100 rounded-xl p-6 mb-6">
                <FileCheck className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <div className="text-center">
                  <h3 className="font-bold text-gray-900 mb-2">Admission Procedure</h3>
                  <p className="text-gray-600 text-sm">Steps to Join Our Institute</p>
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
            <iframe
              src="/documents/admission/2_Information_Brochure.pdf"
              title="Admission Procedure Document"
              className="w-full h-full"
              frameBorder="0"
            >
              <p className="text-gray-600 text-center">
                Your browser does not support iframes. Please{' '}
                <a href="/documents/admission/2_Information_Brochure.pdf" download className="text-blue-600 hover:underline">
                  download the PDF
                </a>{' '}
                to view the full details.
              </p>
            </iframe>
          </div>
        </div>
      )}
    </div>
  );
}