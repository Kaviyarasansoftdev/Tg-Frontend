import React, { useState } from 'react';
import { FileText, X } from 'lucide-react';

export default function ResearchDevelopmentCellSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pdfUrl = '/path/to/research-development-cell.pdf'; // Placeholder for actual PDF path

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-sky-100 relative overflow-hidden pt-10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-400 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <div className="text-center space-y-6 mb-8 py-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <span className="text-sm font-medium text-blue-700 uppercase tracking-wide">
            Research and Development Cell
          </span>
        </div>
        <p className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
          Advancing Innovation at
          <span className="block text-blue-600">Tagore Institute of Engineering and Technology</span>
        </p>
      </div>

      {/* Main Content and PDF Button */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
        <div className="space-y-8 mb-8">
          {/* Research and Development Cell */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Research and Development Cell</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              The Research cell of the Institution is designed to inspire and support both faculty members and students in pursuing research in emerging fields relevant to their areas of study. This cell facilitates and promotes interdisciplinary and multidisciplinary research that leads to innovative results with a focus on societal benefits.
            </p>
          </div>

          {/* Research Group */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Research Group</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              A research group is an officially acknowledged group of scholars whose expertise is focused on a specific area, field, theme, or involved in a joint research project. The groups organize research-based seminars, workshops, symposiums, conferences in their relevant domains and various infrastructures are established to engage in advanced technologies.
            </p>
          </div>

          {/* Collaborative and Sponsored Research */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Collaborative and Sponsored Research</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Faculty members are motivated to engage in research partnerships with government research laboratories and industry research departments. They are motivated to submit proposals for both management funding and external grants from various organizations.
            </p>
          </div>

          {/* PDF Modal Button */}
          <div className="text-center">
            <button
              onClick={openModal}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              <FileText className="w-5 h-5" />
              View Full Research Cell Details (PDF)
            </button>
          </div>
        </div>

      </div>
        {/* PDF Modal */}
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
                src="/documents/research/RESEARCH R and D cell.pdf"
                title="Research and Development Cell PDF"
                className="w-full h-full"
                frameBorder="0"
              />
            </div>
          </div>
        )}
    </div>
  );
}