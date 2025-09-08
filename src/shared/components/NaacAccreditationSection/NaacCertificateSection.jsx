import React, { useState } from 'react';
import { FileText, X, Eye, ChevronRight, Award } from 'lucide-react';

export function NaacCertificateSection() {
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
            NAAC Accreditation
          </span>
        </div>

        <p className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
          Excellence in Education at
          <span className="block text-blue-600">Tagore Institute of Engineering and Technology</span>
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Info */}
          <div>
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Award className="w-4 h-4 mr-2" />
              NAAC Certificate
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              NAAC Accreditation Certificate
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Tagore Institute of Engineering and Technology is accredited with a "B" Grade by the National Assessment and Accreditation Council (NAAC), reflecting our commitment to quality education and institutional excellence.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center text-gray-700">
                <ChevronRight className="w-5 h-5 text-blue-600 mr-3" />
                <span>Accredited with NAAC "B" Grade</span>
              </div>
              <div className="flex items-center text-gray-700">
                <ChevronRight className="w-5 h-5 text-blue-600 mr-3" />
                <span>Recognized for Quality Education</span>
              </div>
              <div className="flex items-center text-gray-700">
                <ChevronRight className="w-5 h-5 text-blue-600 mr-3" />
                <span>Commitment to Continuous Improvement</span>
              </div>
              <div className="flex items-center text-gray-700">
                <ChevronRight className="w-5 h-5 text-blue-600 mr-3" />
                <span>View Official Certificate</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 lg:mb-20 mb-0">
              <button 
                onClick={openModal}
                className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Eye className="w-5 h-5 mr-2" />
                Preview NAAC Certificate
              </button>
            </div>
          </div>

          {/* Right Side - Visual */}
          <div className="relative mb-12 lg:mb-0 ">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-gradient-to-br from-blue-100 to-sky-100 rounded-xl p-6 mb-6">
                <Award className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <div className="text-center">
                  <h3 className="font-bold text-gray-900 mb-2">NAAC Certificate</h3>
                  <p className="text-gray-600 text-sm">Certified Quality Education</p>
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
              src="/documents/naac/NAAC_Certificate.pdf"
              title="NAAC Accreditation Certificate"
              className="w-full h-full"
              frameBorder="0"
            >
              <p className="text-gray-600 text-center">
                Your browser does not support iframes. Please{' '}
                <a href="/documents/naac/NAAC_Certificate.pdf" download className="text-blue-600 hover:underline">
                  download the PDF
                </a>{' '}
                to view the full certificate.
              </p>
            </iframe>
          </div>
        </div>
      )}
    </div>
  );
}